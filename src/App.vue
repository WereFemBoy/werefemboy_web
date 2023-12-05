<script lang="ts">
import Button from "primevue/button";
import SideBar from "./components/Home/SideBar.vue";
import { RouterView } from "vue-router";

export default {
  data() {
    return {};
  },
  components: {
    Button,
    SideBar,
  },
};
</script>

<template>
  <div class="container">
    <div class="content-division">
      <div class="slide-division">
        <SideBar />
      </div>
      <div class="page-division">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background-color: cadetblue; */
}

.content-division {
  height: 100vh;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: row;
}

.slide-division {
  width: 20vw;
  background-color: #f1f1f1;
}

.page-division {
  width: 80vw;
  /* background-color: rgba(216, 111, 146, 0.45); */
}

.page-division img {
  width: 50%;
  display: block;
  margin: 0 auto;
}
</style>
