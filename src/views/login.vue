
<template>
   <v-container>
    <v-form ref="form" v-model="valid">
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>

        <v-flex xs12 mb-4>
          <h1 class="display-1 font-weight-bold mb-3">Shop vue</h1>
            
        </v-flex>
        <v-flex offset-md-3 xs6> 
          <v-text-field  v-model="currentUser.name"></v-text-field>
          <v-text-field
            autocomplete="current-password"
            label="Enter password"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @input="_=>userPassword=_"
          ></v-text-field>
        </v-flex>
        <v-btn color="success" @click="saveValue()">Click this</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

const defaultuser = () => {
  return  {
      name:"",
    }
};
  export default {
    data: () => ({
      
      currentUser:defaultuser(),
      valid: true,
      value: true,
      rules: {
        required: value => !!value || "Required.",
      },
    }),
    methods:{
        ...mapActions(["setUser"]),
        saveValue(){
            this.setUser(this.currentUser)
        }
    }
  };
</script>