<template>
      <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                  Countries Navigation
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tour</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shop</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>know More</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

</style>