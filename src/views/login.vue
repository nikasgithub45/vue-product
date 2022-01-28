<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>

        <v-flex xs12 mb-4>
          <h1 class="display-1 font-weight-bold mb-3">Shop vue</h1>
        </v-flex>
        <v-flex offset-md-3 xs6>
          <v-text-field v-model="currentUser.nameCheck"></v-text-field>
          <v-text-field
            autocomplete="current-password"
            label="Enter password"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @input="(_) => (userPassword = _)"
            v-model="currentUser.passwordCheck"
          ></v-text-field>
        </v-flex>
        <!-- <v-btn color="success" @click="saveValue()">Click this</v-btn> -->
      </v-layout>
    </v-form>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Join us </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentUser.name"
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentUser.lastname"
                    label="Legal last name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <!-- <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col> -->
                <v-col cols="12">
                  <v-text-field
                    v-model="currentUser.email"
                    label="Email*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    v-model="currentUser.password"
                    required
                  ></v-text-field>
                </v-col>
                <!-- <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col> -->
                <!-- <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col> -->
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveValue"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn color="success" @click="verifyUser">Click this</v-btn>
    <p v-if="failed">Verification failed</p>
  </v-container>
</template>

// <script>
// import { mapActions } from "vuex";
// const defaultuser = () => {
//   return {
//     nameCheck: "",
//     name: "",
//     lastname: "",
//     email: "",
//     password: "",
//   };
// };
// export default {
//   data: () => ({
//     currentUser: defaultuser(),
//     valid: true,
//     value: true,
//     rules: {
//       required: (value) => !!value || "Required.",
//     },
//   }),
//   methods: {
//     ...mapActions(["setUser"]),
//     saveValue() {
//       this.setUser(this.currentUser);
//     },
//   },
// };
//
</script>
<script>
import { mapActions,mapGetters } from "vuex";

const defaultuser = () => {
  return {
    nameCheck:"",
    password:"",
    name: "",
    surname: "",
    email: "",
    passwordCheck:""
  };
};
export default {
  data: () => ({
    isCorrect:false,
    failed: false,
    currentUser: defaultuser(),
    valid: true,
    value: true,
    dialog: false,
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    ...mapGetters(["userInfo"]),
    ...mapActions(["setUser"]),
    saveValue() {
      this.dialog = false;
      this.setUser(this.currentUser);
      console.log(this.currentUser);
    },
     verifyUser() {
        for (const key in this.currentUser){
            if(this.currentUser.name != this.currentUser.nameCheck && this.currentUser.password != this.currentUser.passwordCheck || this.currentUser.name.length == 0 && this.currentUser.password.length == 0 ){
               this.failed = true
            }else{
              this.isCorrect = true
              this.$router.push('/')
            }
        }
     },
  },
};
</script>