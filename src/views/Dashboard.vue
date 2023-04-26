<template>
  <div class="dashboard">
    <div class="input">
        <small>Last month overview</small>
        <div>
            <input type="text" placeholder="search username">
            <button class="filter">Filter</button>
        </div>
    </div>
    <MadalAddUser/>
    <br>
    <table>
            <tr class="thead" v-if="users"> 
                <th>username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>date</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
    
            <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.date }}</td>
                <td><button><span class="material-icons">edit</span></button></td>
                <td><button class="delete" @click="deleteData(index)"><span class="material-icons">delete</span></button></td>
            </tr>
    </table>
  </div>
</template>

<script>
import MadalAddUser from '@/components/madal/MadalAddUser.vue';

export default {
    data() {
        return {
            users: []
        }
    },
    components: {
        MadalAddUser
    },
    methods: {
        async loadData() {
            await fetch('https://alexis-form-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json')
                .then(res => res.json())
                .then(data => this.users = data)
                .catch(err => err.message)
        },
        deleteData(index) {
            fetch('https://alexis-form-default-rtdb.asia-southeast1.firebasedatabase.app/userData/' + index + '.json', {method: "DELETE"}).then(()=> this.loadData())
            
        }
    },
    mounted() {
        this.loadData()
    }

}
</script>

<style scoped>
.delete{
    background-color: rgb(168, 39, 39);
}
button{
    border-radius: 0;
}
button .material-icons{
    width: 100%;
}
.filter{
    height: 24px;
}

</style>