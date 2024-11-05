<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="submitLogin">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Masuk</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login } = useAuth();

    const submitLogin = () => {
      login(email.value, password.value);
    };

    return {
      email,
      password,
      error,
      submitLogin,
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
}
.error {
  color: red;
}
</style>
