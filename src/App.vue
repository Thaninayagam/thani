<template>

<!-- <li v-for="item in routes" :key="item.index">
   <router-link :to="item.path">{{ item.name }}</router-link> 
  </li> -->

    <div className="backgroundholder">
      
      <router-view></router-view>

    </div>  

</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core"
import router from "./router/index"


  let routes=router.getRoutes();
  console.log(routes);



// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

  

</script>

<style>

:root{
    --primarycolor:rgb(27, 171, 238);
    --primarycolorDarkVarient:rgb(18, 106, 146);    
    --primaryBackgorundActive:rgb(1, 63, 130);
    --primaryBackgorundColor:rgb(255, 255, 255);

    
}

h1{
    color: var(--primarycolor);
    
}

p{
  color: gray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.backgroundholder{
    background: url('assets/backg.png');   
    background-repeat: no-repeat;
    background-size: cover;    
    object-fit: contain;
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:var(--primaryBackgorundColor);
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 55px;

    

}
.backgroundholder :nth-child(1) {    
    animation: fadein 0.6s;
}




@keyframes bounce-in {
  0% {
    transform: scale(1);
    
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(-100%);
    
  }
  50% {
    opacity:0.5;
  }
  100% {
    opacity :1;
  }
}

@media screen and (min-width: 500px) {
  .container {
     
  }
}

</style>
