<template>
    <button @click="open = true">Others</button>

    <Teleport to="body">
      <Transition name="bounce">
  <div v-if="open" class="modal">
    <p>Would you like to access our pro courses?</p>
    <button @click="open = false">Accept</button>
    <button @click="open = false">No, thanks</button>
  </div>
  </Transition>
</Teleport>
</template>

<script>
export default {
    data() {
        return {
           open: false
        }
    }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 3%;
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