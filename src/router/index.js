import { createRouter, createWebHistory } from 'vue-router'; // Importing necessary functions from vue-router
import LoginPage from '../views/LoginPage.vue'; // Importing the LoginPage component
import ProductList from '../components/ProductList.vue'; // Importing the ProductList component
import Cart from '../components/Cart.vue'; // Importing the Cart component

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/productlist', 
    name: 'productlist',
    component: ProductList 
  },
  {
    path: '/cart', 
    name: 'cart', 
    component: Cart, 
    meta: { requiresAuth: true } 
  }
];

// Creating the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Navigation guard to check authentication before navigating to certain routes
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token'); // Getting token from local storage
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ name: 'login' }); // Redirect to login page
  } else {
    next(); // Proceed with navigation
  }
});

export default router;
