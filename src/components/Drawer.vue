<template>
  <v-navigation-drawer 
    v-model="$store.state.drawer"
    :mobile-breakpoint="760"
    app
  >
    <v-img
      class="pa-4 pt-7"
      :heigth="170"
      gradient="90deg, rgba(227,25,55,1) 0%, rgba(168,36,101,1) 60%, rgba(82,54,171,1) 100%"
    >
      <v-avatar size="70" class="mb-2">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <div class="white--text font-weight-bold text-subtitle-1">Cristian</div>
      <div class="white--text text-subtitle-2">Benítez Villarroel</div>
    </v-img>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t('prueba') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () { 
    return {
      items: [
        { title: 'Datos del evento', icon: 'mdi-format-list-checks', to: '/' },
      ], 
    }
  }
}
</script> 