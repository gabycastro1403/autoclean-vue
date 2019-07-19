<template>
<div>
<h1>
    pruebas funcionando
</h1>
<GmapMap class="container mt-5"
  v-bind:center = " {lat : 19.4292730   , lng :  -99.1806473 } " 
  v-bind:zoom = " 16 "
   style = " width: 80%; height: 300px "
>
<GmapMarker
   v-bind:position=" {lat : 19.4292730  , lng : -99.1806473 } " 
   v-bind:clickable="true"
   v-bind:draggable="true"
    @click="center=m.position"
  />
</GmapMap>

</div>


</template>

<script>
  
    export default {
        name:"pruebas",
         
  mounted(){
      this.localizacion()
  },

        methods: {
            localizacion(){
                if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition( (position)=>{
                 console.log( position.coords.latitude, position.coords.longitude);
             })
            }
            }

            
         
        }  
            
        }

    

</script>

<style>


</style>