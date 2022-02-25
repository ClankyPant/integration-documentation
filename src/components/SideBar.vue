<template>
  <v-navigation-drawer :mini-variant.sync="mini" permanent dark app>
    <v-btn text width="100%" v-show="mini == false" @click.stop="mini = !mini">
      <v-icon>{{ arrowSide }}</v-icon>
    </v-btn>

    <v-treeview
      dark
      v-if="mini == false"
      :mini-variant.sync="mini"
      :items="directoryArray"
    >
      <template v-slot:label="{ item }">
        <span class="document_pointer">
          {{ item.name }}
        </span>
      </template>
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
      </template>
    </v-treeview>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DirectoryModel from "@/models/DirectoryModel";
import DirectoryService from "@/services/DirectoryService";

@Component({
  components: {},
})
export default class SideBar extends Vue {
  mini = true;

  get arrowSide(): string {
    return this.mini ? "mdi-chevron-right" : "mdi-chevron-left";
  }

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
