<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
  </form>
  <div v-if="error">{{ error }}</div>
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
        await this.$store.dispatch('login', { email: this.email, password: this.password })
        this.email = ''
        this.password = ''
        this.$router.push('/')
        setTimeout(() => {
          alert('login successful')
        }, 1500)
      }catch(err){
        this.error = 'wrong email or password'
        alert('Incorrect please login again')
      }
    }
  }
}
</script>