<script lang="ts">
import axios from "axios";

type ServerStatus = {
  "Server Time UTC": Date;
  "Server Local Time": Date;
  OS: String;
  "Python Version": String;
};

type Room = {};
type RoomList = Room[];

export default {
  data() {
    return {
      ServerStatus: {} as ServerStatus,
      RoomList: [] as RoomList,
      socket: null as WebSocket | null,
      message: '' as string,
      message_send: '' as string,
      room_list: [] as RoomList
    }
  },
  methods: {
    setUpWebSocket(){
      this.socket = new WebSocket('ws://127.0.0.1:8000/api/games/connect')
      this.socket.onmessage = (event: MessageEvent) => {
        // this.message = event.data
        this.room_list =  JSON.parse(event.data) as RoomList
      }
      this.socket.onopen = (event: Event) => {
        console.log("Connection established.")
        console.log(event)
      }
      this.socket.onerror = (error: Event) => {
        console.log(error)
      }
      this.socket.onclose = (event: CloseEvent) => {
        console.log("Disconnected.")
        console.log(event)
      }
    },
    sendConnect(){
      this.socket?.send(JSON.stringify('Room'))
    }
  },
  mounted() {
    this.setUpWebSocket()
  },
};
</script>

<template>
  <div class="home-page-container">
    <p class="home-page-top-text title-text">
      A web game like werewolf, but nsfw.
    </p>
    <p class="home-page-top-text title-text">
      {{ message }}
    </p>
    <p v-for="room in room_list">
      {{ room }}
    </p>
    <button @click="sendConnect">Add Rooms</button>
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
