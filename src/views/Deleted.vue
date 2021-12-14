<template>
    <div class="content-wrapper">
        <h1>Deleted Items</h1>


          <div>
      <div id='todo-card' v-for='todo in getDeletedItems' :key='todo.id'>
      <div class="activity">{{todo.activity}}</div>
      <div class="description">{{todo.description}}</div>

      <div><button class="del" @click='restoreTodoItem(todo.id)'>restore</button></div>
    </div>
    
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {mapActions} from 'vuex'
export default {
    name: 'Recycle',
    computed:{
        ...mapGetters(["getDeletedItems"])
    },
    methods:{
        ...mapActions(['restoreTodoItem'])
    }
}
</script>