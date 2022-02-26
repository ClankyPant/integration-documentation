<template>
  <v-card width="100%" height="100%">
    <v-card-title> Titulo do Documento </v-card-title>
    <v-card-text>
      <div id="editor_js"></div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorJS from "@editorjs/editorjs";

@Component({})
export default class Editor extends Vue {
  editor: EditorJS = new EditorJS("editor_js");
}
</script>
