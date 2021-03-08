<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import BodyVue from "./assets/Body.vue";
import HeaderVue from "./header/Header.vue";

export default {
  components: {
    appHeader: HeaderVue,
    appBody: BodyVue,
  },
};
</script>

<style></style>
