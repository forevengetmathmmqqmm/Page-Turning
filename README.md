# Book翻页组件
## 属性/Props

### `<book>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|src|图片地址|`string`|`-`|
|inside-click|书本内部点击事件回调|`func`|`-`|
|inside-bg-color|内页颜色|`string`|`'#fff'`|




## Demos

```json type=description
[
  {
    "kind": "file",
    "name": "组件名",
    "memberOf": "数据展示、信息展示",
    "description": "新颖翻页书本组件。流畅交互，书籍封面、内容可自定义。。"
  },
  {
    "kind": "member",
    "name": "基本用法",
    "description": "移动端点击展开书本、网页端鼠标移入展开。内页可以自定义内容，且提供点击事件，例如用于点击跳转详情页等。"
  }
]
```

```vue
<template>
  <Book class="test" :src="demoUrl" :inside-click="demoClick">
    <sonslot>
      <span>{{ text }}</span>
    </sonslot>
  </Book>
</template>

<script lang="ts">
import Book from 'arco-vue-book';

export default {
  name: 'BasicDemo',
  components: {
    Book,
  },
  data() {
    return {
      num: 0,
      text: '内页自定义内容',
      demoUrl:
        'https://img-blog.csdnimg.cn/50dc93e785354bc4b4ddf82915e78875.png',
    };
  },
  methods: {
    demoClick() {
      this.num++;
      this.text = `内页点击事件${this.num}`;
    },
  },
};
</script>
<style lang="less">
.test {
  width: 100px;
  height: 140px;
  margin: 20px auto;
}
</style>

```



