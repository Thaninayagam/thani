<template>
  
  <div className="portfolio">
      <Backbutton to="/explore"/>
      <Face/>
    <h1>Portfolio</h1>
    <div className="cards">
        
        <PortfolioCard v-for="(port,index) in orid" :da2d="index" v-bind:key="index" v-bind:srca="port.urls" v-bind:projectTitle="port.projectTitle" v-bind:projectDesc="port.projectDesc"/>
        

<!-- <slot v-if="jk">
          <FloatingSideDetailedBar v-bind:showhide="jk"/>
      </slot> -->



    </div>
  </div>

</template>

<script>

import Backbutton from '../components/Backbutton.vue'
import Face from '../components/Face.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import prortfolios from '../dataservice/exploreMenuItems'

export default {
    components:{
        Face,
        PortfolioCard,
        Backbutton,
        
    },

    data(){
        return{
            orid:"",            
            publicPath: "",
            
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

        },

    },
    async mounted() {
        this.getPorts();
    },

    // computed:{
    //     dsd(){
    //         return FloatingSideDetailedBar;
    //     }
    // }
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