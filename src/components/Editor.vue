<template>
  <v-card width="100%" height="100%">
    <v-card-title v-show="fileSelected == false"> Select a file </v-card-title>

    <div v-show="fileSelected">
      <v-card-title> Document title </v-card-title>
      <v-card-text>
        <div id="editor_js"></div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorJS from "@editorjs/editorjs";

@Component({})
export default class Editor extends Vue {
  fileSelected = true;
  editor: EditorJS = new EditorJS({
    holder: "editor_js",
    placeholder: "Write a new documentation!",
    tools: { Table: Table },
  });
}
</script>
