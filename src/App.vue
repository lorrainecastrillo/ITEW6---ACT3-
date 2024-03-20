<template>
  <div id="app">
    <nav>
      <div class="nav-links">
        <router-link to="/login">Login</router-link> |
        <router-link to="/productlist">Products</router-link> |
        <router-link to="/cart">Cart</router-link>
      </div>
      <button @click="logout" class="logout-btn">Logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('token'); // Removing token from local storage
      this.$router.push({ name: 'login' }); // Redirecting to login page
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #090909;
}

nav a.router-link-exact-active {
  color: #4e8e4e;
  padding: 10px;
  background-color: rgb(209, 230, 205);
  border-radius: 5px;
}

nav a.router-link-exact-active:hover {
  color: #000000;
}

button.logout-btn {
  font-weight: bold;
  color: #fff;
  background-color: #98d35d;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.logout-btn:hover {
  background-color: #afd48b;
}

.home {
  margin-top: 20px;
}
</style>
