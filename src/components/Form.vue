<template>
    
    <div class="form container mt-5 text-light">
 <form>
     <label class="mb-5">Ingresa los datos de tu auto aquí</label>
    <div class="form-group">
       
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="No. de Placa">
    </div>
    <div class="form-group">
       
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Marca">
    </div>
     <div class="form-group">
      
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Color">
    </div>
    
</form>
        
    </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}


</style>
