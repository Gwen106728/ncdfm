<template>
  <div class="about">啊啊啊啊</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { login } from "@/services/shopping";
@Component
export default class About extends Vue {
  private goods = [{ id: 1 }, { id: 2 }];
  public created(): void {
    login({ redirect_url: "http://10025.higeek.io/" }, (data: any) => {
      window.location.href = data.data;
    });
  }
}
</script>
