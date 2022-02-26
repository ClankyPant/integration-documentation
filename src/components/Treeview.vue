<template>
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
      <v-btn v-show="item.file" icon plain>
        <v-icon size="16">mdi-plus</v-icon>
      </v-btn>
    </template>
  </v-treeview>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DirectoryModel from "@/models/DirectoryModel";
import DirectoryService from "@/services/DirectoryService";

@Component({
  components: {},
})
export default class SideBar extends Vue {
  creatingNew = false;
  get directoryArray(): DirectoryModel[] {
    let result: DirectoryModel[] = DirectoryService.getAllDirectory();

    if (result.length <= 0) {
      result.push(new DirectoryModel(Math.random(), "Documentação", [], true));
    }

    return result;
  }
}
</script>

<style scoped>
.document_pointer {
  cursor: pointer;
}
</style>
