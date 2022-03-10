<template>
  <v-app>
    <drawer />
    <app-bar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    drawer: () => import('@/components/Drawer'),
    appBar: () => import('@/components/AppBar')
  },

  data () {
    return {
    }
  }
};
</script>
