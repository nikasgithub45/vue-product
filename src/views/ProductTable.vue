/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <template>
          <v-toolbar flat>
            <v-divider
              class="mx-4"
              inset
              vertical
            />
            <v-spacer />
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="name"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.category"
                          label="category"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.available"
                          label="available"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.type"
                          label="type"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <!-- <template v-slot:item.action="{ item }"> -->

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save(item.id)"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
                <!-- </template> -->
              </v-card>
            </v-dialog>
            <v-dialog
              v-model="dialogDelete"
              max-width="500px"
            >
              <v-card>
                <v-card-title
                  class="text-h5"
                >
                  Are you sure you want to delete this item?
                </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="closeDelete"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="deleteItemConfirm"
                  >
                    OK
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template>
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
          <v-icon @click="renderItem(item)">
            mdi-chevron-left
          </v-icon>
        </template>
      </template>
    </v-data-table>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductTable',
  icons: {
    iconfont: 'mdi',
  },
  data: () => ({
    snackbar: false,
    text: 'New item was deleted',
    timeout: 2000,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'picture',
        align: 'start',
        sortable: false,
        value: 'picture',
      },
      { text: 'name', value: 'name' },
      { text: 'mpn', value: 'mpn' },
      { text: 'category', value: 'category' },
      { text: 'available', value: 'available' },
      { text: 'type', value: 'type', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      mpm: '',
      category: '',
      available: '',
      type: '',
      id: null,
    },
    defaultItem: {
      name: '',
      mpn: '',
      category: '',
      availeble: '',
      type: '',
    },
  }),
  computed: {
    ...mapGetters(['products', 'user', 'userInfo']),
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },
  watch: {
    dialog(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.close();
    },
    dialogDelete(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapActions(['removeProduct', 'setCurrentProduct', 'editCurrentProduct', 'saveEditedProduct']),
    renderItem(item) {
      console.log(item, 'dkjdjdjdjkdjdj');
      this.setCurrentProduct(item);
      this.$router.push('/product-page');
    },
    editItem(item) {
      this.dialog = true;
      // this.editCurrentProduct(item);
      console.log(item);
    },
    deleteItem() {
      this.dialogDelete = true;
    },

    deleteItemConfirm(item) {
      console.log(this.products);
      const removeIndex = this.products.findIndex(
        (product) => product.id === item.id,
      );
      this.removeProduct(removeIndex);
      this.snackbar = true;
      this.closeDelete();
    },
    close() {
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    save(id) {
      this.editedItem.id = id;
      this.editCurrentProduct(this.editedItem);
      this.close();
    },
  },
};
</script>
