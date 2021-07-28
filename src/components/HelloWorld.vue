<template>
    <h1>{{msg="sd"}}</h1>
</template>

<script setup>


import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0,msg:"Thani Devs" })

document.title=state.msg;
</script>

<style scoped>
a {
  color: #084b2d;
} 
</style>
