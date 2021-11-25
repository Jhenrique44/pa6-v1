import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
    {
      name: "Rock in Rio", 
      description: "Festival full of old school rock", 
      email: "RockFestival@ig.com", 
      startDate: "2077-06-21", 
      endDate: "2077-06-29", 
      priceTicket: 300,
      address: "Rio de janeiro - RJ"  
    },
    {
      name: "Lollapalooza", 
      description: "Festival internacional de musica indie", 
      email: "lollapalloza@ig.com", 
      startDate: "2022-03-30", 
      endDate: "2022-04-04", 
      priceTicket: 500,
      address: "São Paulo - SP"
    },
    {
      name: "Tomorrowland", 
      description:  "Festival de Musica eletronica", 
      email: "tomorrowland@ig.com", 
      startDate: "2023-03-30", 
      endDate: "2023-04-04", 
      priceTicket: 250,
      address: "Bruxelas - BEL"    
    },
    {
      name: "Coachella", 
      description:  "Festival de musica, tradicional da Califórnia", 
      email: "coachella@ig.com", 
      startDate: "2022-03-30", 
      endDate: "2022-04-06", 
      priceTicket: 300,
      address: "Califórnia - EUA"    
    },
    {
      name: "Cascamorras ", 
      description:  "Festival tradicional da espanha", 
      email: "cascamorras@ig.com", 
      startDate: "2025-03-27", 
      endDate: "2025-03-29", 
      priceTicket: 50,
      address: "Baza - SPA"    
    },
    // 
    {
     name: "Dia de los Muertos ", 
      description:  "Festival comemorativo tradicional do méxico", 
      email: "losmuertos@ig.com", 
      startDate: "2022-12-23", 
      endDate: "2022-12-29", 
      priceTicket: "Free",
      address: "México - MEX" 
    },
    {
      name: "Cascamorras ", 
      description:  "Aniversario infantil do Ethan", 
      email: "SalãoAni@ig.com", 
      startDate: "2022-03-30", 
      endDate: "2030-03-04", 
      priceTicket: 50,
      address: "Baza - SPA"
    },
    {
      name: "Festival da Lua cheia", 
      description:  "festival tipico da Tailandia para a chegada da lua cheia", 
      email: "moon@ig.com", 
      startDate: "2024-03-22", 
      endDate: "2024-03-23", 
      priceTicket: 50,
      address: "Tailandia - THA"
    }
    
  ],
  title: "Hello"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title.toLocaleUpperCase()
    }
  }
})
