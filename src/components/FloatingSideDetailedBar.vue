<template>
<transition name="modal">
  <div class="modal-mask" @click="$emit('close')">
  <div v-if="!showhides" class="modal portDetailContainer modal-container">
    <div class="portdetails">
      <button class="closeBtn" id="daas" @click="$emit('close')">x</button>
      <h1>{{titileofheadera}}</h1>
      <h4>{{smalldesc}}</h4>
      <div class="sideBody">
        <p>
          This si what

        </p>
      </div>
    </div>
  </div>
  </div>
  </transition>
</template>

<script>
  export default {
    props:{
      showhide:Boolean,
      titileofheader:String,
      smalldesca:String
    },
    data(){
      return{
        showhides:this.showhide,
        titileofheadera:this.titileofheader,
        smalldesc:this.smalldesca
      }
    },

  }
</script>

<style>

.portDetailContainer{
  z-index: 9999;
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  background: white;
  height: 100vh;
  box-shadow: 5px 5px 20px 5px black;

}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}



.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform:  scale(1.1) !important;
  transform: scale(1.1) !important;
}

.closeBtn{
  
  background:red;
  color: white;
  border-radius: 50%;
  width: 2.1em;
  height: 2.1em;

 text-align: center;
  align-items: center;
  align-self: center;
  align-content: center;
  vertical-align:middle;
  text-align: center;
  border: none;
  font-size: 1.5em;

  cursor: pointer;
  
}
.closeBtn:hover{
  background: rgb(158, 16, 16);
}


</style>