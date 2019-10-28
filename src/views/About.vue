<template>
  <div class="about">啊啊啊啊</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAppId } from "@/services/shopping";
@Component
export default class About extends Vue {
  private goods = [{ id: 1 }, { id: 2 }];
  public created(): void {
    getAppId({ url: window.location.href }, (data: any) => {

      //window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.appid}&redirect_uri=http://api.higeek.io/swagger-ui.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    });
  }
}
</script>
