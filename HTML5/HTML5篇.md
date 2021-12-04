### HTML5篇

* 记录是为了更好的学习

#### 目标

学习理解、掌握、使用HTML5

#### 正文

#### 1.HTML5是什么

超文本标记语言，是html的新标准；它本质是一种标记语言，并非是编程语言；它是由一对对标签组合成，其中也包含了文本，也就是我们常说的web页面

#### 2.常见的标签元素

``div``  ``ul``  `` li ``  ``h1-h6``  ``a``  ``b`` ``br`` ``img``  `` span``  ``hr``  ``link``  ``p``  ``input``  ``strong`` 

其中，这些元素又可以分为行内元素、块级元素和空元素

* 行内元素：``a``  ``b`` ``span``  ``img`` ``input`` ``select``  ``strong`` 
* 块级元素：``div`` ``ul`` ``ol``  ``li``  ``h1-h6``  ``p`` 
* 空元素： ``br``  ``hr``  ``img`` ``link``  

行内元素和其他元素在一行上，默认只占自己内容的宽度和高度，无法改变他们的宽高，只有转化为块级元素以后才能改变宽度和高度，可以在CSS中设置 ``display:block`` 将行内元素转换为块级元素。

空元素是指没有内容的html元素，一般来说他们是没有闭合标签的。

#### 3.html5中新增的元素

#####  语义化的结构元素

* header：定义文档的头部
* nav： 定义导航链接部分
* aside： 定义页面侧边内容
* article： 定义页面独立区域的内容
* section： 定义文档中的节
* mark: 定义带有记号的文本

##### 媒体资源

* audio：音频
* video： 视频

##### 表单元素

* datalist： 定义选项列表，与input配合使用，定义可能输入的值
* output： 定义不同类型的输出，比如脚本的输出

##### web存储

* localstorage： 本地存储，没有时间限制，除非手动删除
* sessionstorage：临时存储窗口或标签，在关闭窗口或者标签以后删除

##### 其它

* canvas：画布，它是一个矩形区域，可以通过JavaScript绘制图表和其他图形。
* svg：一种可伸缩的矢量图形，其在放大或者缩小下图形质量不会损失。
* Geolocation： 用于定位用户的位置。
* Drag 和Drop：拖放
* webworker：运行在后台的JavaScript，不影响页面性能
* websocket：允许服务器主动向客户端推送数据，完成一次握手，两者就可以建立持久连接，数据可以互相传送。

#### 4.废除的元素

* ``center``  水平居中

* ``u`` 下划线

* ``big``  字体

* ``tt``  文本等宽

* ``font`` 字体标签

* ``baserfont``  默认字体

* ``strike``  中横字

  仅仅作记录了解下就可，不必纠结过去。

#### 5.DOCTYPE 文档类型

DOCTYPE是HTML5中的标准通用的文档类型声明，可以告诉浏览器以html或者xhtml的文档类型来解析文档。不用的解析方式会对我们的CSS和JavaScript产生影响。它必须放在我们文档的第一行。

如下：html5中文档首行声明的文档类型：

​	``<!DOCTYPE html>`` 

浏览器的解析分为严格模式，即上面所说的，浏览器会按照w3c标准来解析文档。另外还有一种称为怪异模式，是指浏览器按照自己的方式来解析文档；通常模式老式浏览器的行为，以防止老站点无法运行。

``document.compatMode`` 

我们可以在控制台输入获取当前网站的文档类型

* **CSS1Compa**：标准模式
* **BackCompat**：怪异模式

需要注意的是：html5中是没有严格模式和怪异模式的，即我们在在文档首行声明了将会进入标准模式；如果不写才会进入怪异模式。

#### 6.语义化的理解

**语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）**。

优点：利用优化，适合爬虫爬取有效信息；增强了可读性，有利于开发者阅读。

#### 7.网页的优化

* 使用cdn托管资源
* 文件和图片资源分域名访问
* 文件合并，减少http请求
* 文件压缩，减少文件体积
* 使用缓存

#### 8. SRC和HREF

* src用于替换当前元素，它指向的是外部资源，指向的内容会嵌入到当前的标签位置。如``img`` 标签通过``src`` 来嵌入想要的图片路径。

  例如：我们在``img``这里插入一个图片：

  ``<img src="ts.jpg" alt="photo">`` 

* href，通常指向外部资源，建立当前元素和网络 资源之间的锚点。如``link`` 标签通过``href`` 链接一个外部资源。

  例如：我们可以通过``link`` 链接一个外部样式表：

  ``<link href="index.css" rel="stylesheet">`` 

#### 9.Canvas和SVG

* Canvas是一个画布，通过JavaScript来绘制2D或者3D图像，它是一个API
* **SVG：** SVG可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

#### 10.DOM的操作

##### 增

* createElement 创建一个元素
* createTextNode 添加文本节点
* cloneNode 克隆节点
* appendChild 追加新的元素
* createDocumentFragment 创建一个新的文本空白片段

##### 删改

* removeChild 删除子节点
* replace 替换子元素

#####查

* 通过id查找html元素 ``document.getElementById('id')``

  如下，我们可以通过这种语法查找到id为bar的元素：

  ``var el = document.getElementById('bar')`` 

  以对象返回该元素，否则返回一个null

* 通过标签名查找html元素

  如下我们可以通过这个方法查找个所有的p元素

  ``var foo = document.getElementByTagName('p')`` 

* 通过类名查找html元素

  如下我们可以通过这个方法查找包含这个类名的全部html元素

  ``var cl = document.getElementByClassName('style')`` 

* 通过name属性值查找

  如下我们可以通过这个方法查找元素中name属性为demo的全部元素

  ``var document.getElementByName('demo')`` 

* **documen.querySelector** 查找文档或者选择器中第一个html元素对象，没有的话返回一个null。

* **document.querySelectorAll()**返回与指定的选择器组匹配的文档中的元素列表。

#### 11.WEB存储

* localStorage

  数据保存在浏览器会话中，长期有效，除非手动删除。大小可以存储5MB，需要注意存储的是字符串，当我们输入一个value=1的值时，它实际保存的是字符串。

  ```js
  window.localStorage.setItem(key, value); // 设置存储内容
  window.localStorage.getItem(key);   // 获取存储内容
  window.localStorage.removeItem(key);    // 删除存储内容
  window.localStorage.clear();        // 清空内容
  ```

* sessionStorage

  关闭窗口时数据将会被清除。**在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文**

  ```js
  window.sessionStorage.setItem(key, value); // 设置存储内容
  window.sessionStorage.getItem(key);  // 获取存储内容
  window.sessionStorage.removeItem(key);// 删除存储内容
  window.sessionStorage.clear(); // 清空内容
  ```

html篇就记录到这，学习记录的过程就是查漏补缺的过程，有新的遗漏的知识点再回来做补充。















