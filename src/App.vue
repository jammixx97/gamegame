<template>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1>Welcome to Jammixx Monster Game!</h1>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
           <img src="./assets/luffy.jpg" class="img-round">
           <p>asdadas</p>
        </v-col>
          <v-col cols="12" lg="6" md="6" sm="6">
            <img src="./assets/kaido.png" class="img-round">
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-round{
    border-radius: 50%;
    width:250px;
    height:250px;        
}
</style>
