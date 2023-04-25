<template >
  <nav>
    <h1>Lacasto Alexis</h1>
    <!-- for all users -->
    <tamplate v-if="$store.state.authIsReady">
      <span>
        <router-link to="/">Home</router-link>
      </span>
      <!-- for logged in users -->
      <span v-if="$store.state.user">
        <span>Logged in as {{ $store.state.user.email }}</span>
        <button @click="handleClick">Logout</button>
      </span>
      <!-- for logged out users -->
      <span v-if="!$store.state.user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </span>
    </tamplate>
  </nav>
</template>

<script>
export default {
  methods: {
    async handleClick() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
      alert("You've logout")
    }
  }
}
</script>