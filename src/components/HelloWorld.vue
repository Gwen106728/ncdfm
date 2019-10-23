<template>
  <div class="headContent">
    <div>
      <i class="el-icon-arrow-left"></i>
    </div>
    <div>{{title}}</div>
    <div>{{extal}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import shopping from "@/services/shopping";

@Component
export default class HelloWorld extends Vue {
  @Prop() private title!: string;
  @Prop() private extal!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headContent {
  width: 720px;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
}
</style>
