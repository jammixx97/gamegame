<template >
  <div id="game-app"  >
      <v-app >
        <v-container fluid   class="bg white--text">
          <v-row>
            <v-col cols="12" class="text-center black--text" >
              <h1> Welcome to JAMMIXX GAME! </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
              cols="12" 
              lg="4" 
              md="4" 
              sm="4"
              > 
                <div class="d-flex justify-center"> 
                  <v-avatar size="300">
                    <v-img 
                      height="300" 
                      width="300" 
                      src="../assets/luffy.jpg" 
                    >
                    </v-img>
                  </v-avatar>
                </div>
                <div id="luffy-health" class="mt-5">
                  <div v-bind:style="{width: luffyHealth + '%'}" class="text-center"> {{luffyHealth}}%</div>
                </div>
                <div class="text-center ml-5">
                  <span>Health Bar</span>
                </div>
                
                <div id="skill-bar" class="mt-5">
                  <div v-bind:style="{width: ultimate + '%'}" class="text-center"> {{ultimate}}</div>
                </div>
                <div class="text-center white--text">
                  <span>Special Skill Bar</span><br>
                  <small>Note: You can only cast Ultimate when bar reaches 70 above. </small>
                </div>
            </v-col>
              <v-col 
                cols="12"
                lg="4"
                md="4"
                sm="4"
                >
                <div class="text-center black--text">
                  <h1> Luffy VS Kaido </h1>
                </div>
                <div class="mt-10">
                  <v-alert type="success" v-if="kaidoHealth < 0">
                    Congrats! You have won against Kaido. Wanna play again? Click the Start Button. 
                  </v-alert>
                  <v-alert type="error" v-if="luffyHealth < 0">
                    SO FAKEN SAD NOOB!!! CLICK START AGAIN TO BEAT KAIDO!. 
                  </v-alert>
                  <v-alert border="bottom"
                      colored-border
                      type="info"
                      elevation="2" 
                      v-if="ultimate >= 70">
                    Your ultimate is now ready! Use it now!. 
                  </v-alert>
                </div>
              </v-col>
              <v-col 
                cols="12" 
                lg="4" 
                md="4" 
                sm="4"
                >
                <div class="d-flex justify-center">
                  <v-avatar size="300" >
                    <v-img 
                      height="300" 
                      width="300"
                      v-if="!kaidoLost" 
                      src="../assets/kaido.png"  >
                    </v-img>
                    <v-img 
                      height="300" 
                      width="300"
                      v-else 
                      src="../assets/kaidolose.jpg"  >
                    </v-img>
                  </v-avatar>
                </div>
                  <div id="kaido-health" class="mt-5">
                    <div v-bind:style="{width: kaidoHealth + '%'}" class="text-center" min=0 >{{kaidoHealth}}%</div>
                  </div>
                  <div class="text-center">
                    <span>Health Bar</span>
                  </div>
              </v-col>
            </v-row>
            <v-row align="center" class="pt-5">
              <v-col cols="12" sm="12">
                  <div class="text-center">
                    <v-btn 
                    @click="StartGame"
                    x-large 
                    color="primary" 
                    class="mr-5" 
                    dark
                    v-if="!gameIsGoing"
                    >
                    <v-icon>mdi-arrow-left-drop-circle</v-icon> Start Game</v-btn>
                  </div>
              </v-col>
            </v-row>  
            <v-row 
              align="center" 
              class="pt-5" 
              v-if="gameIsGoing"
            >
              <v-col 
                cols="12" 
                sm="12"
              >
                <div class="text-center">
                  <v-btn 
                    @click="attack" 
                    x-large 
                    color="success" 
                    class="mr-5" 
                    fab dark small
                  >
                    <v-icon>
                      mdi-sword
                    </v-icon>
                    
                  </v-btn>
                  <v-btn
                    @click="heal"
                    x-large 
                    color="success" 
                    class="mr-5"
                    fab dark small
                  >
                    <v-icon>
                      mdi-cards-heart
                    </v-icon>
                      
                  </v-btn>
                  <v-btn 
                  @click="ultimateAttack"
                    
                    x-large color="success" 
                    :disabled='isDisabled' 
                    class="mr-5"
                  >
                    <v-icon>
                      mdi-sword-cross
                    </v-icon>
                    Use Ultimate!
                  </v-btn>
                  
                  <v-btn
                      @click="restartGame" 
                    x-large 
                    color="success" 
                    dark 
                    class="mr-5"
                  >
                    <v-icon>
                      mdi-restore
                    </v-icon>
                    Restart
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div id="row">
                  <ul id="status">
                    <h3 class=" black--text"> Logs: </h3>
                    <li v-for="update in updates"
                        :class="update.actor"
                        :key="update"
                      >
                      {{ (update.actor) }} {{ update.message }} {{ update.dmg }}HP
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
        </v-container>
      </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    luffyHealth:100,
    ultimate:0,
    ended:false,
    kaidoHealth:100,
    gameIsGoing:false,
    ultimateAttackk:false,
    maxInput: 100,
    minInput: 0,
    kaidoLost:false,
    updates:[

    ]
  }),
  
  methods: {
    attack:function(){
      var damage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      this.kaidoHealth -= damage; 
       this.updates.push({
        actor: 'Luffy', 
        message: ' hit Kaido for ', 
        dmg: damage
      });
      this.kaidoAttack();
      if(this.utimate != 100){
      var skillUp = 10;
      this.ultimate += skillUp;
        // if(this.ultimate > 70){
        //   this.
        // }
      }
    },

    kaidoAttack(){
      var damage = Math.floor(Math.random() * 10) + 1;
      this.luffyHealth -= damage;
      this.updates.push({
        actor: 'Kaido', 
        message: ' hit Luffy for ', 
        dmg: damage
      });
        this.checkStatus();
    },
    
    ultimateAttack:function(){
      var damage = 20;
        this.kaidoHealth -= damage;
        this.updates.push({
        actor: 'Luffy', 
        message: ' hit Kaido for ', 
        dmg: damage
      });
        this.kaidoAttack();
        this.checkStatus();
        this.ultimate = 0;
         
      },

      
    restartGame: function() {
      this.updates = [];
      this.luffyHealth = 100;
      this.kaidoHealth = 100;
      this.ultimate = 0;
      this.kaidoLost = false;
    },
      
    StartGame:function(){
      this.gameIsGoing = true;
      this.updates = [];
      this.luffyHealth = 100;
      this.kaidoHealth = 100;
      this.ultimate = 0;
    },

    heal: function() {
      var healAmount = Math.floor(Math.random() * 10) + 1;
      this.luffyHealth += healAmount;
      if(this.luffyHealth > 100) this.luffyHealth = 100;
            this.updates.push({
        actor: 'Luffy', 
        message: ' healed for ', 
        dmg: healAmount
      });
      this.kaidoAttack();
    },
    checkStatus(){
      if(this.luffyHealth < 0){
          this.gameIsGoing = false;
      } else if(this.kaidoHealth < 0){
          this.gameIsGoing = false;
          this.kaidoLost = true;
      } 
    }
  },

  computed:{
    isDisabled(){
      if(this.ultimate <= 69){
        return !this.ultimateAttackk;
        }
      // else{
      //   return this.ultimateAttackk;
      // }
      
    }
  }
  
}
</script>


<style scoped>

#luffy-health{
  width:200px;
  border:2px solid #000;
  margin: 0 auto 20px auto;
}
#luffy-health div{
  height: 20px;
  background: crimson;
}
#skill-bar {
  width:200px;
  border:2px solid #000;
  margin: 0 auto 20px auto;
  
}
#skill-bar div{
  height: 20px;
  background: green;
}

#kaido-health{
   width:200px;
  border:2px solid #000;
  margin: 0 auto 20px auto;
}
#kaido-health div{
  height: 20px;
  background: crimson;
}
.imgback{
  height: 100%
}
#row {
  margin: 1em auto;
}
#status { 
  padding: 0;
}
#status li{
 color: rgb(0, 0, 0); 
    text-align: center; padding: 1em; list-style-type: none;
}

#status li.Kaido{
   background: rgba(225,10,25,0.5);
   
}

#status li.Luffy{
   background: rgba(10,255,225,0.5);
}

.bg{
  background-image:url("../assets/onepiece.png");
	background-repeat: no-repeat;
	background-size: 100%;
	background-position:50% 50%;
	height: 100vh;
}


</style>