<template>
  <div class="home">
    <h1>Welcome to my todo app</h1>
    <div>
      <div id='todo-card' v-for='todo in getTodoItems' :key='todo.activity'>
      <div class="activity">{{todo.activity}}</div>
      <div class="description">{{todo.description}}</div>

      <div><button class="del" @click='deleteTodoItem(todo.id)'>Delete todo</button></div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  },
  computed: {
    ...mapGetters(['getTodoItems'])
  },
  methods:{
    ...mapActions(['deleteTodoItem'])
  }
}
</script>
