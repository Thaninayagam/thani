<template>
  <div className="cardContainer">
      <div className="cardImageHolder">
         <img src="../assets/sites/app_thubm.png" alt="">
      </div>
      <div className="cardContents">
          <h2>E-Commerce Store</h2>
          <p>Full Fledge Ecommerce Website</p>
          <button className="btn">View More</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.cardContainer{
    width: 348px;
    height: 205;
    background: var(--primaryBackgorundColor);
    border-radius: 10px;
    box-shadow: 1px 3px 10px black;
    display: flex;
    margin: 15px;
}



.cardContents{
    margin: 15px;
}

.cardContents :last-child{
    justify-self: flex-end;
    align-self: end;
    
}

.cardImageHolder{
    width: 142px;
    border-right: solid 5px var(--primarycolor);
}
.cardImageHolder img{
    object-fit: cover;
    width: 100%;
}

.btn{
    padding: 10px;
    background:var(--primarycolor);
    color: var(--primaryBackgorundColor);
    border: 0;
    border-radius: 15px;
    cursor: pointer;  
    font-size: 0.9em; 
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


</style>