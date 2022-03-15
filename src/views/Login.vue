<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="#a82465">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="isValidForm" ref="form">
              <v-text-field
                  v-model="username"
                  prepend-icon="mdi-account"
                  name="login"
                  label="Login"
                  type="text"
                  color="#a82465"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  color="#a82465"
                  required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isValidForm" color="#a82465" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Api from '@/api/servicesMocked';
export default {
  components: {
    btn: () => import('@/components/Button')
  },
  data() {
    return {
      loginData: [],
      username: '',
      password: '',
      isValidForm: false,
    }
  },
  created () {
    // this.login()
  },
  methods: {
    // async login() {
    //   try {
    //     this.loginData = await Api.login();
    //     this.$router.push({ name: 'EventList' });
    //   } catch(error) {
      //   }
    // }
    // Mocked login
    login() {
      this.$store.commit('application/isLogin', false);
      this.$router.push({ name: 'EventList' });
    }
  }
}
</script>