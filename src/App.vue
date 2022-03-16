<template>
  <v-app>
    <drawer v-if="!$route.path.includes('login')" />
    <app-bar v-if="!$route.path.includes('login')" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    drawer: () => import('@/components/Drawer'),
    appBar: () => import('@/components/AppBar')
  },
  computed: {
    ...mapState('application', ['isLogin'])
  },
  data () {
    return {
    }
  }
};
</script>
