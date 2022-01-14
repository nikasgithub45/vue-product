<template>
<v-container >
  <v-app-bar color="deep-purple accent-4" dark>
    <template v-slot:extension>
      <v-text-field
        label="Filled"
        placeholder="Search"
        filled
        rounded
        dense
      ></v-text-field>
      <v-tabs>
        <v-btn
          color="green"
          depressed
          elevation="2"
          large
          small
          x-large
          class="ml-40"
          >Create</v-btn
        >
        <v-tab>products</v-tab>
        <v-tab>orders</v-tab>
        <v-tab>Requests</v-tab>
        <v-tab>Manage</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</v-container>
</template>