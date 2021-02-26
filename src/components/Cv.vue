<template>
  <div>
    <app-side-bar></app-side-bar>
    <app-main-content></app-main-content>
  </div>
</template>

<script>
import MainContentVue from "./MainContent.vue";
import SideBarVue from "./SideBar.vue";
export default {
  components: {
    appMainContent: MainContentVue,
    appSideBar: SideBarVue,
  },
};
</script>

<style></style>
