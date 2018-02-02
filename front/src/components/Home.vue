<template>
  <div>
    <h4 class="text-center">All todos</h4>
    <hr>
    <div class="row" id="myrow">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <ul class="list-group list-group-flush" v-if="todos && todos.length">
            <li class="list-group-item" v-for="todo of todos" to="/"><router-link :to="{ name: 'Show', params: { id: todo.id }}">{{todo.content}}</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      todos: [],
      todo:1
    }
  },

  created() {
    axios.get('http://127.0.0.1:8000/api/todo')
    .then(response => {
      // JSON responses are automatically parsed.
      this.todos = response.data
      console.log(this.todos)
    })
  }
}
</script>

<style media="screen">

</style>
