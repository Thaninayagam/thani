<template>
  
  <div className="portfolio">
      <Backbutton to="/explore"/>
      <Face/>
    <h1>Portfolio</h1>
    <div className="cards">
        
        <PortfolioCard v-for="port in orid" v-bind:key="port.index" :srca="port.urls" :projectTitle="port.projectTitle" :projectDesc="port.projectDesc"/>
        


    </div>
  </div>

</template>

<script>
import Backbutton from '../components/Backbutton.vue';
import Face from '../components/Face.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import prortfolios from '../dataservice/exploreMenuItems'

export default {
    components:{
        Face,
        PortfolioCard,
        Backbutton
    },

    data(){
        return{
            orid:""
        }
    },
    methods:{
        getPorts:function fd(){
            // this.orid=
            // [
            //     {urls:"/src/assets/sites/app_thubm.png",projectTitle:"E-Commerce",projectDesc:"Full fedge ecommerce"},
            //     {urls:"/src/assets/sites/app_thubm.png",projectTitle:"E-Commerce",projectDesc:"Full fedge ecommerce"},
            //     {urls:"/src/assets/sites/app_thubm.png",projectTitle:"E-Commerce",projectDesc:"Full fedge ecommerce"},
            //     {urls:"/src/assets/sites/app_thubm.png",projectTitle:"E-Commerce",projectDesc:"Full fedge ecommerce"}
            // ];
            this.orid=prortfolios;
            
        }
    },
    async mounted() {
        this.getPorts();
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