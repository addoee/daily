## Git

我觉得我这个脑子还是有必要把这个学习记录下的。

###  1.安装

* Linux系统安装

```
sudo apt-get install git
```

运行如上命令行就可以在Debian或Ubuntu中直接安装了。

安装完成可以输入git安装成功没有。

* windows系统安装

这是个最简单不过的事情了[Git官网](http://git-scm.com/downloads)
从官网直接下载安装包一路回车就可以安装完成。

当在开始菜单中有"git bash"这个应用就代表安装成功了。



接下来我们输入下面命令行进行最后一步设置。我们远程仓库的用户名和邮件地址。

```
git config --global user.name "your name"
git config --global user.email "your email"
```

#

### 2.使用

#### 2.1创建本地仓库

因为我使用的是win系统，所以我记录下我自己操作的流程。

随便哪个盘，新建文件夹（避免使用中文），然后右键会看到

``Git Bash Here``  命令行窗口执行``git init`` ，目前我们已经初始化了一个仓库。

我们进入文件夹下会看到一个``.git`` 目录，接下来我们就可以添加文件试下了，创建个readme.md先测试下，千万别用win自带的记事本来创建，这是个坑。

我们将创建的文件放到我们的目录下，命令行窗口下运行：

``git add filename`` filename就是你文件的名字，或者：

``git add .``  "."点这个意思就是全部由变动的文件。

执行上面的命令就是告诉git将我们的文件添加到仓库，接下来执行命令将文件提交到仓库:

``git commit -m "说明" `` 

引号中的内容可以添加我们此次提交文件的说明，然后 窗口会有此次文件的变动信息。

#### 2.2 版本回退

我们在创建本地仓库的时候已经创建了一个readme.md的文件，我们通过 ``git add readme.md `` 添加这个文件到暂存区，通过``git commit -m "explain"`` 将暂存区的文件提交到git分支。

现在我们将readme.md中文件内容再次修改提交一次。

如果这时发现新提交的文件有误，我们通过版本管理回到之前的那一版本。

我们先通过``git log`` 查看下我们提交过几次文件。然后再执行如下命令

```
git reset --hard HEAD^
```

我们可以通过这个命令行回退到上一个版本，当再次打开文件可以看到已经还原到第一次提交文件的状态了。



这是再通过``git log`` 查看，已经发下第二次提交的版本已经没有了。

如果这里我们还是想再此回到第二次提交的版本怎么办呢？

我们在git命令行窗口，找到我们第二次提交时信息里面的版本号，或者我们在第一次git log查看时也可以看到版本号，我们通过下面的命令行来回退到第二次提交的版本。

```
git reser --hard "c461ebe"
```



#### 2.3撤销修改

通过运行`` git checkout --filename`` 来回退到添加（git add） 或者提交文件（git commit）时的状态

### 3.远程仓库

#### 3.1添加仓库

登录自己的github添加，很简单的操作。

完成以后我们需要配置下ssh密钥

打开git bash

输入命令行``ssh-keygen -t rsa -C "email@email.com"``   email@email.com这个为自己的GitHub账号。

根据创建成功的信息找到“***\*id_rsa.pub\****”这个公钥文件，复制到github-点击头像--settings--ssh and GPG keys--new SSH key ,添加我们复制的内容，起个名称即可。

####  3.2推送远程仓库时忽略不必要文件

在本地仓库运行``git bash here`` ,执行命令``touch .gitignore`` ,然后仓库中编辑创建的这个文件。命令格式如下：

/target/ ：过滤文件设置，表示过滤这个文件夹

*.mdb  ，*.ldb  ，*.sln 表示过滤某种类型的文件
/mtk/do.c ，/mtk/if.h  表示指定过滤某个文件下具体文件
 !*.c , !/dir/subdir/     !开头表示不过滤
 *.[oa]    支持通配符：过滤repo中所有以.o或者.a为扩展名的文件.

我遇到的是openssl超时错误，先检查下自己电脑有没有开代理可以先将代理关闭。如果不行，我们可以试下在本地仓库中``.git`` 文件夹下有个config文件，打开将url那个https改为http，再试一次。

#### 3.3从远程仓库克隆

利用``git clone`` 从远程仓库克隆到本地。

如我自己的仓库，我们使用如下命令克隆

```
git clone git@github.com:addoee/daily.git
```



目前使用到的只有这些，其他的功能使用到再做记录补充。