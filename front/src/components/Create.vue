<template>
  <div>
    <h4 class="text-center">Create a new todo</h4>
    <hr>
    <div class="row" id="createrow">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <input type="text" id="content" class="form-control" v-model="content">
            <button type="button" class="btn btn-info btn-block btn-sm m-t-5" @click="postContent()">Add Todo</button>
            {{content}}
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
        content: ''
      }
    },

    methods:{
      postContent(){
        axios.post('http://127.0.0.1:8000/api/todo',{
          content:this.content
        }).then(this.$router.push('/'))
      }
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
