<script lang="ts">
import axios from "axios";

type ServerStatus = {};

type Room = {
  
};
type RoomList = Room[];

export default {
  data() {
    return {
      RoomList: [] as RoomList
    };
  },
  methods: {
    async GetRoomList() {
      const response = await axios.get<RoomList>("/api/");
      this.RoomList = response.data;
    },
  },
};
</script>

<template>
  <div class="home-page-container">
    <p class="home-page-top-text title-text">
      A web game like werewolf, but nsfw.
    </p>
  </div>
</template>

<style scoped>
.home-page-top-text {
  color: var(--var-font-color);
  line-height: 60px;
  padding: 15px;
  font-size: 35px;
  text-align: center;
}

.home-page-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: FadeIn 450ms;
}
</style>
