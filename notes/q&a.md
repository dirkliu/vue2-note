# VUE问题与答案
* vue是怎么样解析单文件组件（SFC）的？  
如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器；  
当只使用运行时版本时，使用 [vue-loader](https://github.com/vuejs/vue-loader) 或 vueify ，*.vue 文件内部的模板会在构建时预编译成 JavaScript。  

* nextTick是怎么实现的？   
将一个函数放到下一个循环去执行，如果可以支持微任务，就在下一个微任务去执行，如果不行，就放入宏任务。  
优先级：Promise.then --> MutationObserver --> setImmediate --> setInterval

* 虚拟dom是怎么转换成实际dom的？ 

* vue怎么定义一个响应式属性？
defineReactive函数定义一个对象的响应式属性。
使用Object.defineProperty设置一个对象的setter和getter。
每一个响应式属性需要设置一个观察者Dep，Watcher中会订阅这些观察者（Watcher可以解析表达式，收集依赖，表达式值发生变化时调用回调函数。）
Watcher分为renderWatcher 和 userWatcher
