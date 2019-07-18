<template>
<div>
<h1>
    pruebas funcionando
</h1>
<button class="btn btn-outline-light btn-lg text-dark" @click="localizacion">localizacion</button>
</div>


</template>

<script>

    export default{
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