<template>
  <div class="product-list">
    <h1>Product List</h1>
    <!-- Display a message if there are no products available -->
    <div v-if="products.length === 0">No products available.</div>
    <!-- Display product grid if products are available -->
    <div v-else class="product-grid">
      <!-- Iterate over each product and display its details -->
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="price">Price: ₱{{ product.price }}</p>
        <!-- Button to add product to cart, triggers addToCart method -->
        <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: 'ECG Necklace', description: 'Ruby Necklace', price: 1200 },
        { id: 2, name: 'ECG Necklace', description: 'Emerald Necklace', price: 2000 },
        { id: 3, name: 'ECG Necklace', description: 'Diamond Necklace', price: 3000 }
      ]
    };
  },
  methods: {
    // Method to add product to cart
    addToCart(product) {
      const token = localStorage.getItem('token');
      if (!token || token === 'undefined') {
        alert('You need to log in first before adding items to the cart.');
        return;
      }
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      product.quantity = 1;
      // Add product to cart
      cartItems.push(product);
      // Update cart items in local storage
      localStorage.setItem('cart', JSON.stringify(cartItems));
      // Log added product to cart
      console.log('Added to cart:', product);
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (!token || token === 'undefined') {
        this.$router.push({ name: 'login' });
      }
    }
  },
  created() {
    // Check user authentication when the component is created
    this.checkAuthentication();
  }
};
</script>

<style scoped>
.product-list {
  max-width: 800px;
  margin: 0 auto;
  color: #000000;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  margin-top: 0px;
  margin-bottom: 20px;
  color: black;
}

.product {
  border: 1px solid #000000;
  padding: 20px;
  background-color: #95da8b;
  border-radius: 8px;
}

.product h2 {
  margin-top: 0;
}

.product p {
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: width 2s;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}
</style>
