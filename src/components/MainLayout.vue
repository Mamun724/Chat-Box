<template>
  <div class="fill-height">
    <AppBar/>

    <v-main class="fill-height main-content">
      <div class="left-sidebar pt-16">
        <friend-list-component/>
      </div>
      <router-view class="content-area">
        <chat-area-component/>
      </router-view>
    </v-main>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FriendListComponent from "@/components/FriendListComponent.vue";
import ChatAreaComponent from "@/components/ChatAreaComponent.vue";

export default {
  name: "ChatComponent",
  components: {
    ChatAreaComponent,
    FriendListComponent,
    AppBar
  },
}
</script>

<style scoped lang="scss">
.main-content {
  $leftSideBarWidth: 33%;
  position: relative;

  .left-sidebar {
    width: $leftSideBarWidth;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: 1px solid #ddd;
  }

  .content-area {
    width: 67%;
    margin-left: $leftSideBarWidth;
  }
}
</style>
