---
nav:
  title: 服务器
  order: 2
group:
  title: Nginx
  order: 1
title: 基本概要
order: 1
---

# 基本概要

Nginx 是一个开源且高性能、可靠的 HTTP 中间件，代理服务。Nginx（发音同 engine x）是一个 Web 服务器，也可以用作反向代理，负载平衡器和 HTTP 缓存。该软件由 Igor Sysoev 创建，并于 2004 年首次公开发布。同名公司成立于 2011 年，以提供支持。

## 工作原理

首先要明白，Nginx 采用的是多进程（单线程） + 多路 IO 复用模型。使用了 I/O 多路复用技术的 Nginx，就成了 **并发事件驱动** 的服务器。

### 多进程的工作模式

- Nginx 在启动后，会以 daemon 的方式在后台运行，后台进程包含一个 `master` 进程和多个相互独立的 `worker` 进程。工作进程以非特权用户运行。
- `master` 进程主要用来管理 `worker` 进程，包含：接收来自外界的信号，向各 `worker` 进程发送信号，监控 `worker` 进程的运行状态，当 `worker` 进程退出后（异常情况下），会自动重新启动新的 `worker` 进程。
- `worker` 进程则是处理基本的网络事件。多个 `worker` 进程之间是对等的，他们同等竞争来自客户端的请求，各进程互相之间是独立的。一个请求，只可能在一个 `worker` 进程中处理，一个 `worker` 进程，不可能处理其它进程的请求。

工作线程处理实际的请求。Nginx 使用**基于事件**的模型和**依赖操作系统**的机制来有效地在工作进程之间分发请求。

> worker 进程数，一般会设置成机器 CPU 核数。因为更多的 worker 数，只会导致进程相互竞争 CPU，从而带来不必要的上下文切换。
> 使用多进程模式，不仅能提高并法率，而且进程之间相互独立，一个 worker 进程挂了不会影响其他 worker 进程。

### 惊群现象

- 主进程（master 进程）首先通过 `socket()` 来创建一个 sock 文件描述符用来监听，然后 `fork` 生成子进程（workers 进程），子进程将继承父进程的 `sockfd`（socket 文件描述符），之后子进程 `accept()` 后将创建已连接描述符（connected descriptor）），然后通过已连接描述符来与客户端通信。
- 那么，由于所有子进程都继承了父进程的 `sockfd`，那么当连接进来时，所有子进程都将收到通知并 **争着** 与它建立连接，这就叫 **惊群现象**。大量的进程被激活又挂起，只有一个进程可以 `accept()` 到这个连接，这当然会消耗系统资源。

## 中间件架构

多个描述符的 I/O 操作都能在一个线程内并发交替地顺序完成，这就教 I/O 多路复用，这里的 **复用** 指的是复用同一个线程。I/O 多路复用的实现方式为：`select`、`poll`、`epoll`。

Nginx 采用的 I/O 多路复用模型 `epoll`。

### CPU 亲和

CPU 亲和是一种 CPU 核心和 Nginx 工作进程绑定方式，把每个 worker 进程固定在一个 CPU 上执行，减少切换 CPU 的 `cache miss`，获得更好的性能。

说白了就是减少 CPU 切换所损耗的性能。

## 安装目录

列出 Nginx 服务的安装目录：

```bash
rpm -ql nginx
```

| 路径                                                                                                                                                  | 类型           | 作用                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :--------------------------------------------- |
| `/etc/logrotate.d/nginx`                                                                                                                              | 配置文件       | nginx 日志轮转，用于 logrotate 服务的日志切割  |
| `/etc/nginx/`<br/>`/etc/nginx/conf.d`<br/>`/etc/nginx/conf.d/default.conf`<br/>`/etc/nginx/nginx.conf`                                                | 目录、配置文件 | nginx 主配置文件                               |
| `/etc/nginx/fastcgi_params`<br/>`/etc/nginx/scgi_params`<br/>`/etc/nginx/uwsgi_params`                                                                | 配置文件       | cgi 配置相关，fastcgi 配置                     |
| `/etc/nginx/koi-utf`<br/>`/etc/nginx/koi-win`<br/>`/etc/nginx/win-utf`                                                                                | 配置文件       | 编码映射转化文件                               |
| `/etc/nginx/mime.types`                                                                                                                               | 配置文件       | 设置 HTTP 协议的 Content-Type 与扩展名对应关系 |
| `/etc/sysconfig/nginx`<br/>`/etc/sysconfig/nginx-debug`<br/>`/usr/lib/systemd/system/nginx-debug.service`<br/>`/usr/lib/systemd/system/nginx.service` | 配置文件       | 用于配置出系统守护进程管理器管理方式           |
| `/etc/nginx/modules`<br/>`/usr/lib64/nginx/modules`                                                                                                   | 目录           | nginx 模块目录                                 |
| `/usr/sbin/nginx`<br/>`/usr/sbin/nginx-debug`                                                                                                         | 命令           | nginx 服务的可执行程序文件（终端命令）         |
| `/usr/share/doc/nginx-1.12.2`<br/>`/usr/share/doc/nginx-1.12.2/COPYRIGHT`<br/>`/usr/share/man/man8/nginx.8.gz`                                        | 文件目录       | nginx 的手册和帮助文件                         |
| `/var/cache/nginx`                                                                                                                                    | 目录           | nginx 的缓存目录                               |
| `/var/log/nginx`                                                                                                                                      | 目录           | nginx 的日志目录                               |
| `/usr/share/nginx/html/404.html`<br/>`/usr/share/nginx/html/50x.html`<br/>`/usr/share/nginx/html/index.html`                                          | 文件           | nginx 默认的静态资源目录                       |

Nginx 及其模块的工作方式由配置文件确定。 默认情况下，配置文件名为 `nginx.conf`，放在 `/etc/nginx/conf.d`、`/usr/local/nginx/conf` 或者 `/usr/local/etc/nginx` 文件夹中。

## 编译参数

列出编译参数的命令：

```bash
nginx -V
```

| 路径                                                                                                                                                                                                                                                                                                                         | 类型                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `--prefix=/etc/nginx`<br/>`--sbin-path=/usr/sbin/nginx`<br/>`--modules-path=/usr/lib64/nginx/modules`<br/>`--conf-path=/etc/nginx/nginx.conf`<br/>`--error-log-path=/var/log/nginx/error.log`<br/>`--http-log-path=/var/log/nginx/access.log`<br/>`--pid-path=/var/run/nginx.pid`<br/>`--lock-path=/var/run/nginx.lock`<br/> | 安装目录                                 |
| `--http-client-body-temp-path=/var/cache/nginx/client_temp`<br/>`--http-proxy-temp-path=/var/cache/nginx/proxy_temp`<br/>`--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp`<br/>`--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp`<br/>`--http-scgi-temp-path=/var/cache/nginx/scgi_temp`                            | 执行对应模块时，Nginx 所保留的临时性文件 |
| `--user=nginx --group=nginx`                                                                                                                                                                                                                                                                                                 | 设定 Nginx 进程启动的用户和组用户        | cgi 配置相关，fastcgi 配置 |
| `--with-cc-opt=parameters`                                                                                                                                                                                                                                                                                                   | 设置额外的参数将添加到 CFLAGS 变量       | 编码映射转化文件 |
| `--with-ld-opt=parameters`                                                                                                                                                                                                                                                                                                   | 设置附加的参数，连接系统库               | 设置 HTTP 协议的 Content-Type 与扩展名对应关系 |

---

**参考资料：**

- [📝 Nginx 工作原理（Master+Worker）](https://www.cnblogs.com/yblackd/p/12194143.html)
- [📝 Nginx 最全操作总结](https://mp.weixin.qq.com/s/ZaKUtj7NgRSI72m5S4quDg)
