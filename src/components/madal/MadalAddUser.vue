
<template>
    <button @click="open = true" class="material-icons">add</button>

    <Teleport to="body">
      <Transition name="bounce">
  <div v-if="open" class="modal">
    <form @submit.prevent="onSubmit"> 
        <label for="name">Username: </label>
        <input type="text" v-model="username">
        <label for="email">E-mail: </label>
        <input type="email" v-model="email">
        <label for="phone">Phone: </label>
        <input type="phone" v-model="phone">
        <label for="date">Date: </label>
        <input type="date" v-model="date">
        <br><br>
        <button @click="open = false">Add</button>
    </form>
    <br>
        <button @click="open = false">Cancel</button>
  </div>
  </Transition>
</Teleport>
</template>
<script>
export default {
    data() {
        return {
           open: false,
           username: '',
           email: '',
           phone: null,
           date: '',
           id: Math.floor(Math.random() * 10000000)
        }
    },
    methods: {
        async onSubmit() {
            await fetch('https://alexis-form-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json',{
            method: 'POST',
            headers: {
                'Content-Type': 'application.json',
            },
            body: JSON.stringify({
            username: this.username,
            email: this.email,
            phone: this.phone,
            date: this.date,
            id: this.id
            })
        })
        this.username = '',
        this.email = '',
        this.phone = null
        this.date = ''
         window.location.reload()
    },
}
}

</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 6%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border: 1px solid #116530;
 
  padding: 10px;
  background-color: rgb(255, 255, 255);
}
button{
  margin-right: 10px;
}


</style>