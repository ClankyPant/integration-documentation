<template>
  <div>
    <v-treeview dark :items="directoryArray">
      <!-- Icon Block -->
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else> mdi-file-document-outline </v-icon>
      </template>

      <!-- Name Block -->
      <template v-slot:label="{ item }">
        <span class="document_pointer">
          {{ item.name }}
        </span>
      </template>

      <!-- Add New File Block -->
      <template v-slot:append="{ item }">
        <v-btn v-show="item.file" icon plain @click="openDialog(item)">
          <v-icon size="16">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-treeview>

    <!-- Dialog Block -->
    <Dialog v-model="showDialog" title="New Document">
      <template v-slot:content>
        <v-text-field
          dense
          outlined
          label="Name"
          v-model="newDirectoryName"
          :counter="MAX_NAME_LENGTH"
        >
        </v-text-field>
      </template>
      <template v-slot:button>
        <v-btn @click="closeDialog()" text> Cancel </v-btn>
        <v-btn :disabled="isInvalidName" @click="createNewDocument()" text>
          Create
        </v-btn>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DirectoryModel from "@/models/DirectoryModel";
import DirectoryService from "@/services/DirectoryService";
import Dialog from "@/components/Dialog.vue";

@Component({
  components: { Dialog },
})
export default class SideBar extends Vue {
  creatingNew = false;
  showDialog = false;

  MAX_NAME_LENGTH = 20;
  newDirectoryName = "";
  newDirectoryFather!: DirectoryModel;
  directoryArray = DirectoryService.getAllDocument();

  openDialog(directoryFather: DirectoryModel): void {
    this.newDirectoryFather = directoryFather;
    this.showDialog = true;
  }

  createNewDocument(): void {
    DirectoryService.saveNewDocument(
      this.newDirectoryFather,
      new DirectoryModel(Math.random(), this.newDirectoryName, [], false)
    );

    this.closeDialog();
    this.newDirectoryName = "";
    this.directoryArray = DirectoryService.getAllDocument();
  }

  closeDialog(): void {
    this.newDirectoryName = "";
    this.showDialog = false;
  }

  get isInvalidName(): boolean {
    return this.newDirectoryName.length > this.MAX_NAME_LENGTH;
  }
}
</script>

<style scoped>
.document_pointer {
  cursor: pointer;
}
</style>
