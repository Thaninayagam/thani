<template>
    
      <router-link to="" ><button >{{exploreName}}</button></router-link>
    

</template>

<script setup>


import { defineProps, reactive } from 'vue'

defineProps({
  urlpath: String,
  exploreName:String
})




</script>

<style scoped>

button{
    background: var(--primarycolor);
    padding: 10px;
    font-size: 2em;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin: 25px;
    color: var(--primaryBackgorundColor);
}

button:hover{
    background: var(--primarycolorDarkVarient);
}


</style>