<template>
  <div>
    <h4 class="text-center">Create a new todo</h4>
    <hr>
    <div class="row" id="createrow">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <input type="text" id="content" class="form-control" v-model="bod">
            <button type="button" class="btn btn-info btn-block btn-sm m-t-5" @click="postContent()">Add Todo</button>
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
        id:this.$route.params.id,
        bod:''
      }
    },

    methods:{
      postContent(){
        axios.put('http://127.0.0.1:8000/api/todo/'+this.id,{
          content:this.bod
        }).then(this.$router.push('/'))
      }
    },

    created(){
      axios.get('http://127.0.0.1:8000/api/todo/'+this.id).then(response => {
        this.bod = response.data.content;
      })
    }
  }
</script>

<style media="screen">
  .m-t-5{
    margin-top:5px;
  }

  .btn{
    border-radius: 0px;
  }

  .form-control{
    border-radius: 0px;
  }

  #createrow{
    margin-top: 30px;
  }
</style>
