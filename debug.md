# 使用正常的 npm 包
安装：
`npm install vue-pswipe`
使用：
```javascript
// main.js
import Photoswipe from 'vue-pswipe'
 
Vue.use(Photoswipe, options)
```
组件中使用:
```javascript
this.$Pswp.open({
    items: [
    {
        html: "<div style='color: #fff;'>hello vue-pswipe</div>"
    }
    ]
});
```
**当 workspace 的根目录为项目根目录时**，能正常得到类型推断。

# 改造
期望能不需要打包，即可以使用源码中的类型推断。
步骤：
1. `package.json`修改:
```json
{
    "main": "src/main.ts"
}

```
出现问题：
These dependencies were not found:

* @/components/pswpUI.vue in ../vue-pswipe/src/utils.ts

- Vue.use 出现类型推断错误
```
No overload matches this call.
  Overload 1 of 2, '(plugin: PluginObject<PswpOptions> | PluginFunction<PswpOptions>, options?: PswpOptions | undefined): VueConstructor<...>', gave the following error.
    Argument of type 'PluginFunction<PswpOptions>' is not assignable to parameter of type 'PluginObject<PswpOptions> | PluginFunction<PswpOptions>'.
```
- 组件无法推断出原型上的自定义属性
```
Property '$Pswp' does not exist on type 'App'.
```
尝试解决：将项目中的 @ 全部替换为相对路径。
结果：
```
 ERROR  Failed to compile with 1 errors                                                                                                                    11:06:45 AM

Failed to resolve loader: sass-loader
You may need to install it.
ERROR in /home/xxq/projects/vue-ts-master/src/App.vue(19,10):
```
结论：不能使用 src ，应该和 node_modules 的环境上下文有关(因为项目不会处理 node_modules 的东西)。但上面的环境可能是和未重新 link 和 unlink 有关。因为重新 unlink 再 link 之后，运行项目后出现了其他错误。

```
./src/main.ts
Module not found: Error: Can't resolve 'vue-pswipe' in '/home/xxq/projects/vue-ts-master/src'
```

# 测试
- 声明其他 decalre module 的 npm package, 测试是 vue的锅还是 ts 的锅
- 直接复制文件，测试是否 npm link 的锅(复制过来后一切正常，而且 npm 包里没有 node_modules 也能正常推断出引用模块，源码则不能)


# node_modules 机制
http://nodejs.cn/api/modules.html#modules_loading_from_node_modules_folders