<template>
  <div>
    <v-app-bar
      dark
      app
      dense
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="90deg, rgba(227,25,55,1) 0%, rgba(168,36,101,1) 60%, rgba(82,54,171,1) 100%"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="isShowDrawer = !isShowDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
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
}
</script> 