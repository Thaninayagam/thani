<template>
  
  <div className="portfolio">
      <Backbutton to="/explore"/>
      <Face/>
    <h1>Portfolio</h1>
    <div className="cards">
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>


    </div>
  </div>

</template>

<script>
import Backbutton from '../components/Backbutton.vue';
import Face from '../components/Face.vue'
import PortfolioCard from '../components/PortfolioCard.vue'

export default {
    components:{
        Face,
        PortfolioCard,
        Backbutton
    }
}
</script>

<style>

.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

}
.portfolio{
    margin-top:25px ;
}



</style>