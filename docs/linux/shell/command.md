---
nav:
  title: Linux
  order: 1
group:
  title: Shell 编程
  order: 5
title: 命令
order: 4
---

# 命令

基本格式

```bash
$ command [options] [arguments]
```

```bash
#!/bin/bash
echo "Hello World !"
```

## 内建命令

所谓 Shell 内建命令，就是由 Bash 自身提供的命令，而不是文件系统中的某个可执行文件。

例如，用于进入或者切换目录的 cd 命令，虽然我们一直在使用它，但如果不加以注意很难意识到它与普通命令的性质是不一样的：该命令并不是某个外部文件，只要在 Shell 中你就一定可以运行这个命令。

可以使用 `type` 来确定一个命令是否是内建命令：

```bash
$ type cd
cd is a Shell builtin

$ type ifconfig
ifconfig is /sbin/ifconfig
```

由此可见，`cd` 是一个 Shell 内建命令，而 `ifconfig` 是一个外部文件，它的位置是 `/sbin/ifconfig`。

还记得系统变量 `$PATH` 吗？`$PATH` 变量包含的目录中几乎聚集了系统中绝大多数的可执行命令，它们都是外部命令。

通常来说，内建命令会比外部命令执行得更快，执行外部命令时不但会触发磁盘 `I/O`，还需要 `fork` 出一个单独的进程来执行，执行完成后再退出。而执行内建命令相当于调用当前 Shell 进程的一个函数。

## alias

使用 `alias` 命令自定义别名的语法格式：

```bash
alias new_name='command'
```

比如，一般的关机命令 ``shutdown -h now` 写起来比较长，这时可以重新定义一个关机命令：

```bash
alias sd='shutdown -h now'
```

再如，通过 `date` 命令可以获得当前的 UNIX 时间戳，具体写法为 `date +%s`：

```bash
alias timestamp='date +%s'
```

在代码中使用 `alias` 命令定义的别名只能在当前 Shell 进程中使用，在子进程和其它进程中都不能使用。当前 Shell 进程结束后，别名也随之消失。

## echo

用于在终端输出字符串，并在最后默认加上换行符。

```bash
#!/bin/bash

name="yyt520"
url="https://github.com/yyt520"

# 直接输出字符串
echo "Hello world!"
# 输出变量
echo $url
# 双引号包围的字符串中可以解析变量
echo "${name}的网址是：${url}"
# 单引号包围的字符串不能解析变量
echo '${name}的网址是：${url}'
```

## read

用于标准输入中读取数据并赋值给变量。如果没有进行重定向，默认就是从键盘读取用户输入的数据；如果进行了重定向，那么可以从中读取数据。

```bash
read [-options] [variables]
```

- `options` 表示选项
- `variables` 表示用来存储数据的变量，可以有一个，也可以有多个

两个参数都是可选的，如果没有提供变量名，那么读取的数据将存放到环境变量 `REPLY` 中。

🌰 **示例：**

```bash
#!/bin/bash

read -p "Enter some information > " name url age
echo "Website：$name"
echo "Url: $url"
echo "Age: $age"
```

注意，必须在一行内输入所有的值，不能换行，否则只能给第一个变量赋值，后续变量都会赋值失败。

**示例：指定时间内输入密码**

```bash
#!/bin/bash

if
  read -t 20 -sp "Enter password in 20 seconds >" pass1 && printf "\n" &&  #第一次输入密码
  read -t 20 -sp "Enter password in 20 seconds> " pass2 && printf "\n" &&  #第二次输入密码
then
  echo "Valid password"
else
  echo "Invalid password"
fi
```

这段代码中，我们使用 `&&` 组合了多个命令，这些命令会依次执行，并且从整体上作为 `if` 语句的判断条件，只要其中一个命令执行失败（退出状态为非 0 值），整个判断条件就失败了，后续的命令也就没有必要执行了。

## exit

退出当前 Shell 进程，并返回一个退出状态；使用$?可以接收这个退出状态。

`exit` 命令可以接受一个整数值作为参数，代表退出状态。如果不指定，默认状态值是 0。

`exit` 退出状态只能是一个介于 0~255 之间的整数，其中只有 0 表示成功，其它值都表示失败。

Shell 进程执行出错时，可以根据退出状态来判断具体出现了什么错误，比如打开一个文件时，我们可以指定 1 表示文件不存在，2 表示文件没有读取权限，3 表示文件类型不对。

```bash
#!/bin/bash
echo "befor exit"

exit 8

echo "after exit"
```

只会打印出 `berfore exit`，这说明遇到 `exit` 命令后，`test.sh` 执行就结束了。

> ⚠️ 注意，exit 表示退出当前 Shell 进程，我们必须在新进程中运行 test.sh，否则当前 Shell 会话（终端窗口）会被关闭，我们就无法看到输出结果了。


## let

## expr

## bc

## test

`test` 命令用于检测某个条件是否成立。

```bash
test expression
```

当 `test` 判断 `expression` 成立时，退出状态为 0，非欧泽为非 0 值。

`test` 命令也可以简写为 `[]`，它的用法为：

```bash
[expression]
```

### 文件检测

文件类型判断

| 选项        | 作用                                       |
| ----------- | ------------------------------------------ |
| -b filename | 判断文件是否存在，并且是否为块设备文件。   |
| -c filename | 判断文件是否存在，并且是否为字符设备文件。 |
| -d filename | 判断文件是否存在，并且是否为目录文件。     |
| -e filename | 判断文件是否存在。                         |
| -f filename | 判断文件是否存在，井且是否为普通文件。     |
| -L filename | 判断文件是否存在，并且是否为符号链接文件。 |
| -p filename | 判断文件是否存在，并且是否为管道文件。     |
| -s filename | 判断文件是否存在，并且是否为非空。         |
| -S filename | 判断该文件是否存在，并且是否为套接字文件。 |

文件权限判断

| 选项        | 作用                                         |
| ----------- | -------------------------------------------- |
| -r filename | 判断文件是否存在，并且是否拥有读权限。       |
| -w filename | 判断文件是否存在，并且是否拥有写权限。       |
| -x filename | 判断文件是否存在，并且是否拥有执行权限。     |
| -u filename | 判断文件是否存在，并且是否拥有 SUID 权限。   |
| -g filename | 判断文件是否存在，并且是否拥有 SGID 权限。   |
| -k filename | 判断该文件是否存在，并且是否拥有 SBIT 权限。 |

文件比较

| 选项                    | 作用                                                         |
| ----------------------- | ------------------------------------------------------------ |
| filename1 -nt filename2 | 判断 filename1 的修改时间是否比 filename2 的新。             |
| filename -ot filename2  | 判断 filename1 的修改时间是否比 filename2 的旧。             |
| filename1 -ef filename2 | 判断 filename1 是否和 filename2 的 inode 号一致，可以理解为两个文件是否为同一个文件。这个判断用于判断硬链接是很好的方法 |

🌰 **示例：**

```bash
#!/bin/bash

read filename
read url

if test -w $filename && test -n $url
then
    echo $url > $filename
    echo "写入成功"
else
    echo "写入失败"
fi
```

### 逻辑运算

| 选项                       | 作用                                                         |
| -------------------------- | ------------------------------------------------------------ |
| expression1 -a expression2 | 逻辑与，表达式 expression1 和 expression2 都成立，最终的结果才是成立的 |
| expression1 -o expression2 | 逻辑或，表达式 expression1 和 expression2 有一个成立，最终的结果就成立。 |
| !expression                | 逻辑非，对 expression 进行取反。                             |

🌰 **示例：**

```bash
#!/bin/bash
read str1
read str2
#检测字符串是否为空
if [ -z "$str1" -o -z "$str2" ]  #使用 -o 选项取代之前的 ||
then
    echo "字符串不能为空"
    exit 0
fi
#比较字符串
if [ $str1 = $str2 ]
then
    echo "两个字符串相等"
else
    echo "两个字符串不相等"
fi
```

