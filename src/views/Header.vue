<template>
  <v-container>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <template v-slot:extension>
        <v-text-field
          label="Filled"
          placeholder="Search"
          filled
          rounded
          dense
        />
        <v-tabs>
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              persistent
              max-height="500px"
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Open Dialog
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Car profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="6"
                        sm="6"
                        md="4"
                      >
                        <v-file-input accept="image/*" />
                        <v-text-field
                          ref="name"
                          v-model="currentProduct.name"
                          label="Name"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="currentProduct.mpn"
                          label="MPN's"
                          hint="example of helper text only on focus"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="currentProduct.category"
                          label="Category"
                          hint="example of persistent helper text"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="currentProduct.manufacturer"
                          label="Manufacturer*"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="currentProduct.available"
                          label="Available"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          v-model="currentProduct.type"
                          label="type"
                          required
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="saveItem"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-tab>products</v-tab>
          <v-tab>orders</v-tab>
          <v-tab>Requests</v-tab>
          <div class="text-center">
            <v-col cols="auto">
              <v-dialog
                transition="dialog-bottom-transition"
                max-width="600"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Profile
                  </v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="primary"
                      dark
                    >
                      User profile
                    </v-toolbar>
                    <v-card-text>
                      <div class="text-h2 pa-12">
                        {{ userInfo.name }}
                      </div>
                      <div class="text-h2 pa-12">
                        {{ userInfo.email }}
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </div>
          <v-btn
            color="success"
            @click="$router.push('/login')"
          >
            Log in
          </v-btn>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions, mapGetters } from 'vuex';

const defaultProduct = () => ({
  picture: '',
  name: '',
  mpn: '',
  category: '',
  manufacturer: '',
  type: '',
  available: '',
  id: null,
});
const defaultuser = () => ({
  nameCheck: '',
  password: '',
  name: '',
  surname: '',
  email: '',
  passwordCheck: '',
});
export default {
  name: 'Header',
  data: () => ({
    //   items: [
    //   {
    //     title: "Click Me",
    //   },
    //   {
    //     title: "Click Me",
    //   },
    // ],
    snackbar: false,
    text: 'item created succsesfuly',
    timeout: 2000,
    dialog: false,
    currentProduct: defaultuser(),
  }),
  computed: {
    ...mapGetters(['user', 'userInfo']),
  },

  methods: {
    ...mapActions(['setProducts', 'setUser']),
    saveItem() {
      this.snackbar = true;
      this.currentProduct.id = uuidv4();
      // this.$emit("currentProduct", this.currentProduct);
      this.setProducts(this.currentProduct);
      this.currentProduct = defaultProduct();
      this.dialog = false;
    },
  },

};
</script>
