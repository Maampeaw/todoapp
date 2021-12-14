import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const VuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    todoItems: [],
    currentId: 0,
    deletedItems: []
  },
  getters: {
    getTodoItems: state => state.todoItems,
    getCurrentId: state => state.currentId,
    getTodoById: (state) => (id) =>{
      return state.todoItems.find(item => item.id === id)
    },
    getDeletedItems: (state) => state.deletedItems,
    getDeletedTodoById: (state) => (id) =>{
      return state.deletedItems.find(item => item.id === id )
    }
  },
  mutations: {
    updateTodoItems: (state, payload) => {
      state.todoItems.push(payload)
    },
    updateCurrentId: (state) => {state.currentId +=1},
    removeItem: (state, payload) => {
      state.todoItems = state.todoItems.filter(item =>  item.id !== payload)
    },
    updateDeletedItems:  (state, payload) => {state.deletedItems.push(payload)},
    removeDeletedItems: (state, payload) =>{
      state.deletedItems = state.deletedItems.filter(item => item.id !=payload)
    }
  },
  actions: {
    addTodoItem(context, payload){
      const data = {id: context.state.currentId, ...payload}
      context.commit('updateTodoItems', data)
      context.commit('updateCurrentId')
      
    },
    deleteTodoItem(context, payload){
      const currentTodo = context.getters.getTodoById(payload)
      context.commit('removeItem', payload)
      context.commit('updateDeletedItems', currentTodo)
    },
    restoreTodoItem(context, payload){
      const currentTodo = context.getters.getDeletedTodoById(payload)
      context.commit('removeDeletedItems', payload)
      context.commit('updateTodoItems', currentTodo)
    }
   
    
  },
  modules: {
  },
  plugins:[
    VuexLocal.plugin
  ]
})
