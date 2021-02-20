# hexo css自定义DIY文件
# hexo bar随即图
. 使用npm安装hexo-cli时报错：node-gyp

# npm install -g hexo-cli
/usr/local/bin/hexo -> /usr/local/lib/node_modules/hexo-cli/bin/hexo
 
> fsevents@1.1.3 install /usr/local/lib/node_modules/hexo-cli/node_modules/fsevents
> node install
 
node-pre-gyp ERR! Tried to download(undefined): https://fsevents-binaries.s3-us-west-2.amazonaws.com/v1.1.3/fse-v1.1.3-node-v59-darwin-x64.tar.gz 
node-pre-gyp ERR! Pre-built binaries not found for fsevents@1.1.3 and node@9.8.0 (node-v59 ABI, unknown) (falling back to source compile with node-gyp) 
gyp ERR! clean error 
gyp ERR! stack Error: EACCES: permission denied, rmdir 'build'
gyp ERR! System Darwin 17.4.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "clean"
gyp ERR! cwd /usr/local/lib/node_modules/hexo-cli/node_modules/fsevents
gyp ERR! node -v v9.8.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok 
node-pre-gyp ERR! build error 
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js clean' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/hexo-cli/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:180:13)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:936:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:220:5)
node-pre-gyp ERR! System Darwin 17.4.0
node-pre-gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/hexo-cli/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /usr/local/lib/node_modules/hexo-cli/node_modules/fsevents
node-pre-gyp ERR! node -v v9.8.0
node-pre-gyp ERR! node-pre-gyp -v v0.6.39
node-pre-gyp ERR! not ok 
Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js clean' (1)
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/hexo-cli/node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1
 
+ hexo-cli@1.1.0
updated 1 package in 15.117s
坑爹的网络给出的答案是删除node-gyp，于是我就rm -rf node-gyp，把整个node-gyp目录干掉了

再次执行时，又出一个错：

npm ERR! Cannot find module '../node_modules/node-gyp/bin/node-gyp'
错误一，无法安装hexo-cli原因为无法下载，解决方案：使用cnpm再次执行命令即可：cnpm install -g hexo-cli

错误二，找不到模块，之前删掉了，再次安装即可：sudo npm install node-gyp -g

2. Error: ENOENT: no such file or directory, uv_cwd错误

将blog文件夹中的文件全部删除后，再次在Terminal中执行命令，报出以下错误:

path.js:1142
          cwd = process.cwd();
                        ^
Error: ENOENT: no such file or directory, uv_cwd
    at Error (native)
    at Object.resolve (path.js:1142:25)
    at Function.Module._resolveLookupPaths (module.js:390:17)
    at Function.Module._resolveFilename (module.js:460:31)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at /usr/local/lib/node_modules/npm/bin/npm-cli.js:25:13
    at Object.<anonymous> (/usr/local/lib/node_modules/npm/bin/npm-cli.js:75:3)
    at Module._compile (module.js:570:32)
解决方案:

重启一个终端(Terminal)
