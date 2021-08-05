<template>
  
  <div>
   
      <Backbutton to="/"/>
    <div className="container">
        <ExploreBtns to="/portfolio" exploreName="Portfolio" />
        <ExploreBtns to="/" exploreName="About & Skills" />
        <ExploreBtns to="/" exploreName="Contact & Profiles" />
        <ExploreBtns to="/" exploreName="Profile Card" />

    </div>

  </div>
     

    

</template>

<script>
import Backbutton from '../components/Backbutton.vue';

import ExploreBtns from '../components/ExploreBtns.vue';

//console.log(ExploreBtns);

export default {
  components: {
    ExploreBtns,
    Backbutton
  }
}

</script>



<style>



</style>