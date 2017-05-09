本工具是用来在远程调试时，自动监听本地变动的文件并同步到远程服务器
使用方法：
0. ssh 到服务器开启远程服务器的 scp 功能，依次运行
```
vtysh
configure terminal
scp-copy on
```
当提示输入密码时，输入 `F8$ga6@a` 后，如果命令行输出 `SCP copy file enabled. ` 则表示已成功开启远程服务器的 scp 功能
1. git clone 本项目
2. 命令行进入项目目录，执行 `npm install` 安装依赖包
3. 执行 `cp config.sample.js config.js`,然后编辑 config.js 文件,配置 arbor 项目的本地路径，远程服务器 ip 以及远程服务器 admin 的密码
4. 执行 `sudo apt-get install sshpass`
5. 执行 `gulp` 命令，等待 10s 左右，当命令行输出 `Finished 'default' after 11 s` 后，在本地编辑 arbor 项目，改动可自动同步到指定的服务器
6. 新增 `gulp init` 命令，可以用来初始化，将整个项目复制到服务器上