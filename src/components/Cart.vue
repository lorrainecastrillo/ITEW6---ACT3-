<template>
  <div class="cart">
    <h1 class="cart-title">Your Cart</h1>
    <div v-if="isAuthenticated" class="cart-container">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <div class="item-info">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="price">Price: ₱{{ item.price }}</p>
          </div>
          <div class="quantity-section">
            <div class="quantity-input-container">
              <input type="number" v-model="item.quantity" @change="updateQuantity(item)" class="quantity-input">
              <button @click="removeFromCart(item)" class="remove-btn">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <p v-if="cartItems.length === 0" class="empty-cart-message">Your cart is empty.</p>
      <div class="cart-actions">
        <p class="total-price">Total Price: ₱{{ getTotalPrice() }}</p>
        <button @click="removeAllItems" class="remove-all-btn">Remove All</button>
      </div>
    </div>
    <div v-else>
      <p class="login-required-message">Please log in to access your cart.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [],
      isAuthenticated: false // Initialize isAuthenticated to false
    };
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    this.isAuthenticated = localStorage.getItem('token') !== null; // Update isAuthenticated based on token presence
  },
  methods: {
    removeFromCart(item) {
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    },
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },
    removeAllItems() {
      this.cartItems = [];
      localStorage.removeItem('cart');
    }
  }
};
</script>

<style scoped>
.cart {
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
}

.cart-title {
  font-size: 50px;
  margin-top: 0px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
}

.cart-container {
  background-color: #95da8b;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.cart-item {
  border-bottom: 1px solid #000000;
  padding: 20px 0;
}

.item-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 20px;
  color: #000000;
  margin: 0;
  margin-bottom: 5px;
  text-align: left
}
.price {
  font-size: 15px;
  color: #000000;
  margin: 0;
  text-align: left;
}

.quantity-section {
  display: flex;
  align-items: center;
}

.quantity-input-container {
  display: flex;
  align-items: center;
}

.quantity-input {
  width: 50px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.remove-btn {
  padding: 8px 16px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

.empty-cart-message {
  font-size: 16px;
  color: #666;
  margin-top: 20px;
}

.cart-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
}

.total-price {
  font-size: 18px;
  color: #000000;
  margin: 10px;
  font-weight: bold;

}

.remove-all-btn {
  margin-left: 10px;
  font-size: 10px;
  color: #fff;
  margin: 0;
  padding: 8px 16px;
  background-color: #f44336;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-all-btn:hover {
  background-color: #d32f2f;
}

.login-required-message {
  font-size: 18px;
  color: #666;
  margin-top: 20px;
}
</style>
