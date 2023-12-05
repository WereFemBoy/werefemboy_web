<script lang="ts">
import { RouterLink } from "vue-router";
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div class="sidebar-container">
    <h2 class="sidebar-title title-text">WereFemBoy</h2>
    <RouterLink class="common-text router-link" to="/">Home</RouterLink>
    <RouterLink class="common-text router-link" to="/login">Login</RouterLink>
    <RouterLink class="common-text router-link" to="/games">Games</RouterLink>
    <RouterLink class="common-text router-link" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
@keyframes MidSlide {
  from {
    width: 0%;
    background-color: #ffffff;
  }
  to {
    width: 90%;
  }
}
.sidebar-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar-title {
  color: var(--var-accent-color);
  line-height: 200px;
  text-align: center;
  font-size: 45px;
}

.router-link-active {
  font-weight: bolder;
}

.router-link {
  width: 90%;
  background-color: var(--var-accent-color);
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  text-decoration: none;
  margin-bottom: 20px;
  border-radius: 5px;
  /* border: solid 1px #FFFFFF; */
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  transition: ease-out 250ms;
  animation: MidSlide 500ms;
  color: #ffffff;
  cursor: pointer;
}

.router-link:hover {
  filter: brightness(1.15);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: ease-out 250ms;
}

.router-link:active {
  filter: brightness(0.87);
  transform: scale(0.975);
  transition: ease-out 250ms;
}
</style>
