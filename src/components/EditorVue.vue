<template>
  <v-card width="100%" height="100%">
    <v-card-title v-show="fileSelected == false"> Select a file </v-card-title>
    <div v-show="fileSelected">
      <v-card-title> Document title </v-card-title>
      <v-card-text>
        <EditorMenu v-model="editor" />
        <editor-content :editor="editor" />
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "@/components/EditorMenu.vue";

@Component({ components: { EditorContent, EditorMenu } })
export default class EditorVue extends Vue {
  fileSelected = true;

  editor = new Editor({
    content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "teste",
      },
    },
  });
}

console.log(EditorMenu);
</script>
