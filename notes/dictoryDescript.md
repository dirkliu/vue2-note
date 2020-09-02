# VUE目录说明  
``` 
|-- benchmarks
|-- dist 构建后生成的代码  
|-- examles 一些示例  
|-- flow flow接口规范  
|-- packages 相关的包  
|-- scripts 构建相关的脚本  
|-- src vue源码 
  |-- compiler 模板编译器 
  |-- core vue核心代码(所有plaforms公用) 
    |-- components 核心组件  
    |-- global-api Vue的全局方法和属性  
    |-- instance vue示例  
    |-- observer 观察者模式  
      |-- watcher.js 解析表达式，收集依赖，监听表达式值的变化
      |-- scheduler.js 调度器
    |-- util vue相关的工具 
      |-- env.js  环境常量，属性支持的一些判断
      |-- next-tick.js 下一个循环执行  
      |-- error.js 对错误的处理
    |-- vdom 虚拟dom
  |-- platforms 各平台上的vue
    |-- web web平台上的vue 
    |-- weex weex app上的vue
  |-- server 服务端渲染  
  |-- sfc 单文件组件解析  
  |-- shared 公用的常量和工具
    |-- contants.js 公用的常量  
    |-- utils.js 公用的工具
|-- test 测试用例  
|-- types TS接口规范
```