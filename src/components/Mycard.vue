<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"

  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

      <v-img
        :src="`https://picsum.photos/500/300?image=${ 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${ 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>


    <v-card-title>
        <!-- {{myCards.name}} -->
    {{ cardInfo.nome.abreviado}} - {{cardInfo.localizacao.regiao.nome}}
    </v-card-title>
    
    <v-card-subtitle>
    Language:   {{cardInfo.linguas[0].nome}}
    </v-card-subtitle>
    <v-card-text>
      {{cardInfo.historico}}
    </v-card-text>
   
    
  </v-card>
</template>
<script>
  export default {
    props: ['cardid', 'cardInfo'],
    
    data () {
      return{
        loading: false,
        selection: 1,
        card: this.$store.state.cards
      }
    }, 
    computed: {
      cards(){
        console.log(this.$store.state.cards);
        console.log(this.cardid);
        return this.$store.state.cards

    }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>