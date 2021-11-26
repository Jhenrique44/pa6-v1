<template>
<div >
<v-row no-gutters>
      <v-col
        v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
      <Mycard :cardid="i" :card="myCards[i]"/>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import Mycard from '../components/Mycard.vue'

  export default {
    name: 'Home',
    computed:  {
      myCards(){
        // console.log(this.$store.state.cards);
        return this.$store.state.cards
      },
      title(){
        return this.$store.state.title
      }
    },
    components: {
      Mycard,
    },
    data(){
      return{
        titleView: this.$store.state.title,
        }
    },
    
  }
</script>
