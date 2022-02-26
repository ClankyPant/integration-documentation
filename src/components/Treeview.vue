<template>
  <div>
    <v-treeview dark :items="directoryArray">
      <!-- Icon Block -->
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
      </template>

      <!-- Name Block -->
      <template v-slot:label="{ item }">
        <span class="document_pointer">
          {{ item.name }}
        </span>
      </template>

      <!-- Add New File Block -->
      <template v-slot:append="{ item }">
        <v-btn v-show="item.file" icon plain @click="openDocumentCreation()">
          <v-icon size="16">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-treeview>

    <!-- Dialog Block -->
    <Dialog v-model="showDialog" title="New Document">
      <template v-slot:content>
        <v-text-field dense outlined label="Name"></v-text-field>
      </template>
      <template v-slot:button>
        <v-btn @click="cancelNewDocument()" text> Cancel </v-btn>
        <v-btn @click="createNewDocument()" text> Create </v-btn>
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

  openDocumentCreation(): void {
    this.showDialog = true;
  }

  createNewDocument(): void {
    DirectoryService.saveNewDocument(
      this.directoryArray[0],
      new DirectoryModel(Math.random(), "Teste", [], false)
    );

    console.log(this.directoryArray);
    console.log("Criou");
  }

  cancelNewDocument(): void {
    this.showDialog = false;
  }

  get directoryArray(): DirectoryModel[] {
    let result: DirectoryModel[] = DirectoryService.getAllDocument();

    return result;
  }
}
</script>

<style scoped>
.document_pointer {
  cursor: pointer;
}
</style>
