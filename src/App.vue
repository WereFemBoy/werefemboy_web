<script lang="ts">
import Button from "primevue/button";

export default {
  data() {
    return {

    };
  },
  components: {
    Button
  },
};
</script>

<template>
  <div class="container">
    <div class="content-division">
      <div class="slide-division">
        
      </div>
      <div class="page-division">
        <img src="./assets/logo/logo.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: cadetblue;
}

.content-division {
  height: 100vh;
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
}

.slide-division {
  width: 20vw;
  background-color: rgba(222, 184, 135, 0.45);
}

.page-division {
  width: 80vw;
  background-color: rgba(216, 111, 146, 0.45);
}

.page-division img {
  width: 50%;
  display: block;
  margin: 0 auto;
}
</style>
