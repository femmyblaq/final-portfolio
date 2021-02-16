<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

 <script>
import BodyVue from "./assets/Body.vue";
// import CvVue from "./components/Cv.vue";
// import MainContentVue from "./components/MainContent.vue";
// import SideBarVue from "./components/SideBar.vue";
import HeaderVue from "./Header.vue";

export default {
  components: {
    appHeader: HeaderVue,
    appBody: BodyVue,
  },
};
</script>

<style>
@media (max-width: 350px) {
  .home-content {
    /* width: 70%; */
    /* margin: 0 0 10px 0px; */
  }
  .home-content h1 {
    font-weight: 600;
    font-size: 2em;
  }
  .home-content h2 {
    font-weight: 500;
    font-size: 1em;
  }
  .vetical-side {
    display: none;
  }
}
</style>
