<template>

  <v-card class="ma-7">
    <v-toolbar
      color="#a82465"
      dark
      flat
    >
      <v-icon>mdi-format-list-bulleted</v-icon>
      <v-toolbar-title>Listado de eventos</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
            :active.sync="active"
            v-model="tree"
            :items="sbuList"
            expand-icon="mdi-chevron-down"
            activatable
            item-key="name"
            open-on-click
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col
        cols="12"
        md="6"
      >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="text-h6 font-weight-light grey--text pa-4 text-center"
          >
            Datos del evento
          </div>
          
          <!-- <div>
            <v-btn> Cancelar evento </v-btn>
            <v-btn> Cambiar encuesta de pre-registro </v-btn>
          </div> -->
          <p>{{ selected }}</p>
        </v-card-text>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        text
        @click="tree = []"
      >
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        class="white--text"
        color="green darken-1"
        depressed
      >
        Send invitations / Reminders
        <v-icon right>
          mdi-send
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Api from '@/api/servicesMocked';
export default {
  components: {
    btn: () => import('@/components/Button')
  },
  data() {
    return {
      active: [],
      isShowTree: false,
      tree: [],
      sbuList: []
    }
  },
  created () {
    this.getEventData()
  },
  computed: {
    selected () {
        if (!this.active.length) return undefined

        return this.active[0]
      },
  },
  
  methods: {
    async getEventData() {
      try {
        this.sbuList = await Api.getEventData();
      } catch(error) {
        // this.checkWhatErrorIs(error.response.status);
      }
      // console.log(data)
    },
  }
}
</script>

