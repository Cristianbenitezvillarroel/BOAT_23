<template>
  <v-app>
    <drawer v-if="!isLogin" />
    <app-bar v-if="!isLogin" />
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
