<template>
  <div class="home">
    <HelloWorld title="购物车" />
    <div class="ads">
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
    <div class="countBar">
      <div>购物车数量</div>
      <el-button>管理</el-button>
    </div>
    <div class="goods">
      
    </div>
    <div class="shopping edit"></div>
    <div class="shopping sub"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.ads {
  width: 720px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 0.4rem;
  color: #626565;
}
.countBar {
  width: 720px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
}
</style>
