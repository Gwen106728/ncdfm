<template>
  <div class="home">
    <HelloWorld title="购物车" />
    <div class="ads bg">
      <span>
        <i class="el-icon-circle-check"></i>名师教学
      </span>
      <span>
        <i class="el-icon-circle-check"></i>所有课程精挑细选
      </span>
      <span>
        <i class="el-icon-circle-check"></i>上课无忧
      </span>
    </div>
    <div class="countBar bg">
      <div>购物车数量</div>
      <el-button @click="handleClick">管理</el-button>
    </div>
    <div class="goods">
      <div class="goodItem bg" :key="item.id" v-for="item in goods"></div>
    </div>
    <div class="shopping edit bg"></div>
    <div class="shopping sub bg"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getOrder } from "@/services/shopping";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private goods = [{ id: 1 }, { id: 2 }];
  private handleClick = () => {
    getOrder();
  };
}
</script>
<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
}
.ads {
  width: 720px;
  height: 60px;
  font-size: 0.4rem;
  color: #626565;
}
.countBar {
  width: 720px;
  height: 100px;
  background-color: white;
  font-size: 0.6rem;
}
.goodItem {
  height: 240px;
  width: 720px;
  background-color: white;
  margin: 0.2rem 0;
}
</style>
