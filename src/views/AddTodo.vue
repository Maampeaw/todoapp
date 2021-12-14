<template>
  <div class="about">
    <h1>Add todo here</h1>
    <form action="">
    <div>
  Todo <div><input type="text" class="description" name='activity' v-model='formData.activity'></div>
  </div>
  <div>
    Description <div><input type="text" class="description" v-model='formData.description'></div>
  </div>

 <div> <button class="add" @click.prevent ='addit'>Add todo</button ></div>
 
 </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      formData: {
        activity: ' ',
        description: ' '
      }
    }
   },
    methods: {
      ...mapActions(['addTodoItem']),
      addit(){
        const data = {
          activity : this.formData.activity,
          description : this.formData.description
        }
        this.addTodoItem(data)
        this.formData.activity =''
        this.formData.description = ''
      }
    }

}
</script>


<style scoped>
.about div{
  margin-top: 16px;
}
</style>