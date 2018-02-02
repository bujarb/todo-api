<template>
  <div>
    <div class="row" id="showrow">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <p class="card-text">{{this.content.content}}</p>
            <button class="btn btn-danger btn-sm" v-on:click="destroy()">Delete</button>
            <router-link class="btn btn-success btn-sm" to="/show">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        content:[],
        id:this.$route.params.id
      }
    },

    methods: {
      destroy(){
        axios.delete('http://127.0.0.1:8000/api/todo/'+this.id).then(this.$router.push('/'));
      }
    },

    created(){
      axios.get('http://127.0.0.1:8000/api/todo/'+this.id).then(response => {
        this.content = response.data;
      })
    }
  }
</script>


<style media="screen">
  #showrow{
    margin-top: 30px;
  }
</style>
