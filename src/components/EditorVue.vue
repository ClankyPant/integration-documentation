<template>
  <v-card width="100%" height="100%">
    <v-card-title v-show="fileSelected == false"> Select a file </v-card-title>
    <div v-show="fileSelected">
      <v-card-title> Document title </v-card-title>
      <v-card-text class="outside-editor-content">
        <v-card>
          <v-card-text>
            <div id="editorJs"></div>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-btn dark @click="save()">Salvar</v-btn>
        <v-btn dark @click="save()">Desfazer</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorService from "@/services/EditorService";

@Component({ components: {} })
export default class EditorVue extends Vue {
  fileSelected = true;

  editor = EditorService.getEditor();

  async save(): Promise<void> {
    this.editor.save().then((result) => {
      console.log(result);
    });
  }
}
</script>

<style scoped>
.outside-editor-content {
  padding: 0 130px 0 130px;
  min-height: 80vh;
}
</style>
