<template>

    <div  className="container">
        <h1 className="titleMain">Developer | Student</h1>

           <Face/>

            <div>
                <h3>Thani</h3>
                <p>Thaninayagam</p>
            </div>

        <router-link to="/explore"> <button className="btn">Explore me</button></router-link>

    </div>

</template>

<script>

import Face from '../components/Face.vue'

export default {
    components:{
        Face
    }
}
</script>

<style scoped>


h1{
    margin-bottom: 25px;
}



.btn{
    padding: 15px;
    background:var(--primarycolor);
    color: var(--primaryBackgorundColor);
    border: 0;
    border-radius: 25px;
    cursor: pointer;  
    font-size: 1.6em; 
    transition: all 0.5s;
    box-shadow: 5px 5px 5px #727272;  
    margin-top: 15px;
    
}

.btn:hover{
    background: var(--primarycolorDarkVarient);
    animation: bounce-in 1s infinite;   
   
}

.btn:active{
    background: var(--primaryBackgorundActive);
    
}



img{
    margin-bottom: 25px;
    
}







</style>