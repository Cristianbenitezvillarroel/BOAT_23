<template>
  <div>
    <v-app-bar
      app
      dense
      elevation="0"
      color="transparent"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="showHideDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/login">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('application', ['isShowDrawer'])
  },
  methods: {
    showHideDrawer() {
      debugger 
      this.isShowDrawer ? this.$store.commit('application/isShowDrawer', false) : this.$store.commit('application/isShowDrawer', true)
    }
  }
}
</script> 