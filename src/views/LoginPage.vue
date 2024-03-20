<template>
  <div class="login-container">
    <div class="login-page">
      <h1>Login Page</h1>
      <button @click="handleClick">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      localStorage.setItem('token', '12345'); // Simulating login by setting a token
      this.$router.push({ name: 'productlist' }); // Redirecting to the product list page after login
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-page {
  background-color: #95da8b;
  margin: 20px;
  margin-bottom: 500px; /* This margin seems excessive, consider removing */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #3ec85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #5cbf70;
}
</style>
