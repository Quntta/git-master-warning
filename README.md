# git-master-warning

⚠️ **在 master 分支上执行 git 命令时显示警告信息**

When you operate on the master branch, a warning is prompted in **red color**.

## Features / 特性

- 🎯 自动检测当前分支 / Automatically detect current branch
- 🚨 在 master 分支上显示红色警告 / Display red warning on master branch
- 🌐 全局 npm 包，安装后实时生效 / Global npm package that works in real-time
- 💡 支持所有 git 命令 / Supports all git commands

## Installation / 安装

### Method 1: Global Installation (Recommended) / 全局安装（推荐）

```bash
npm install -g git-master-warning
```

After installation, the package will intercept all git commands and display warnings when on the master branch.

安装后，该包会拦截所有 git 命令，并在 master 分支上显示警告。

### Method 2: Local Development / 本地开发

```bash
# Clone the repository / 克隆仓库
git clone https://github.com/Quntta/git-master-warning.git
cd git-master-warning

# Link globally / 全局链接
npm link
```

## Usage / 使用

Once installed, simply use git commands as usual. The warning will automatically appear when you're on the master branch.

安装后，像平常一样使用 git 命令即可。当你在 master 分支时，警告会自动显示。

### Example / 示例

```bash
# When on master branch / 在 master 分支上
git status
# ⚠️  警告: 您正在 master 分支上操作！
# ⚠️  WARNING: You are operating on the master branch!
# On branch master
# nothing to commit, working tree clean

git add .
# ⚠️  警告: 您正在 master 分支上操作！
# ⚠️  WARNING: You are operating on the master branch!
# ...

# When on other branches / 在其他分支上
git checkout develop
git status
# On branch develop
# nothing to commit, working tree clean
# (No warning displayed / 不显示警告)
```

## How It Works / 工作原理

This package installs a wrapper script for the `git` command. When you run any git command:

1. The wrapper checks your current branch
2. If you're on `master`, it displays a red warning message
3. Then it executes the actual git command normally

该包为 `git` 命令安装了一个包装脚本。当你运行任何 git 命令时：

1. 包装脚本检查当前分支
2. 如果在 `master` 分支，显示红色警告信息
3. 然后正常执行实际的 git 命令

## Uninstallation / 卸载

```bash
npm uninstall -g git-master-warning
```

## Configuration / 配置

You can set the real git path using an environment variable (default is `/usr/bin/git`):

你可以使用环境变量设置真实的 git 路径（默认是 `/usr/bin/git`）：

```bash
export GIT_MASTER_WARNING_REAL_GIT=/path/to/git
```

## License

MIT
