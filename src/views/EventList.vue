<template>

  <v-card>
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-icon>mdi-silverware</v-icon>
      <v-toolbar-title>Event List</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="getEventData"
            :items="sbuList"
            selected-color="indigo"
            open-on-click
            selectable
            return-object
            expand-icon="mdi-chevron-down"
            on-icon="mdi-bookmark"
            off-icon="mdi-bookmark-outline"
            indeterminate-icon="mdi-bookmark-minus"
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
            Select your favorite breweries
          </div>
          
          <div>
            <btn btntext="cancelar" mdicon="mdi-cancel"></btn>
            <btn btntext="Cambiar encuesta de pre-registro" color="info"></btn>
            <v-btn> Cancelar evento </v-btn>
            <v-btn> Cambiar encuesta de pre-registro </v-btn>
          </div>

          <v-scroll-x-transition
            group
            hide-on-leave
          >
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="grey"
              dark
              small
              class="ma-1"
            >
              <v-icon
                left
                small
              >
                mdi-beer
              </v-icon>
              
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
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
      "isShowTree": false,
      "tree": [],
      "sbuList": []
    }
  },
  created () {
    this.getEventData()
  },
  methods: {
    async getEventData() {
      try {
        this.sbuList = await Api.getEventData();
        debugger
      } catch(error) {
        debugger
        // this.checkWhatErrorIs(error.response.status);
      }
      debugger
      // console.log(data)
    }
  }
}
</script>
