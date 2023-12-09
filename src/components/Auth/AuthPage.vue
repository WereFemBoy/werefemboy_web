<script lang="ts">
export default {};
</script>

<template>
  <div class="login-page-container">
    <div class="login-register-box">
      <h1 class="login-register-page-title title-text">Sign In</h1>
      <div class="box-form">
        <input />
        <input />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: FadeIn 450ms;
}

.login-register-box {
  width: 800px;
  height: 600px;
  background-color: #f1f1f1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.login-register-page-title {
  font-size: 50px;
  text-align: center;
}
</style>
