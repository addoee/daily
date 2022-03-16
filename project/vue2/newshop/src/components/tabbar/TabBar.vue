<template>
  <div id="tabbar">
    <div class="tabbar-cl">
      <li v-for="(item,index) in BarName" :key="item.name" class="tabbar-item" @click="linkPush(index)">
        {{ item.name }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BarName: [
        {
          name:'首页',
          path: '/home'
        },
        {
          name:'分类',
          path: '/Sort'
        },
        {
          name:'购物车',
          path: '/cart'
        },
        {
          name:'我的',
          path: '/about'
        }
      ]
    };
  },
  methods: {
    linkPush(index){
      this.$router.push(this.BarName[index].path)
      // console.log(this.$router) 
    }
  },
};
</script>

<style scoped>
  #tabbar{
    height: 60px;
    width:100%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items:flex-end;
  }
  .tabbar-cl {
    display:flex;
    flex:1;

  }
  .tabbar-item {
    flex:1;
    list-style: none;
    text-align:center;
  }

</style>