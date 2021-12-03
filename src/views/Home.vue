<template>
<div >
  <div class="title">
    <h1>Know More About all Countries!
</h1>
  </div>
  <div class="chang">
  </div>
<v-row no-gutters>
      <v-col
        v-for="(data,i) in events"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
      <Mycard :cardid="i" :cardInfo="data"/>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import Mycard from '../components/Mycard.vue'
  export default {
    name: 'Home',
    data(){
      return{
        
        }
    },
    computed:  {
      myCards(){
        // console.log(this.$store.state.cards);
        return this.$store.state.cards
      },
      events(){
        
        console.log(this.$store.state.countries)
        return this.$store.state.countries
      },
      title(){
        return this.$store.state.title
      }
    },
    components: {
      Mycard,
    },
   created(){
      this.$store.dispatch("fetchEvents")

    }
  }
</script>
