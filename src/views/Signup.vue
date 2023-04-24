<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async handleSubmit() {
      try{
        await this.$store.dispatch('signup', { email: this.email, password: this.password })
        this.email = '',
        this.password = ''
        this.$router.push('/')
      }catch(err) {
        this.error = err.message
      }
    } 
  }
}
</script>