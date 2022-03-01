<template>
  <v-card width="100%" height="100%">
    <v-card-title v-show="fileSelected == false"> Select a file </v-card-title>

    <div v-show="fileSelected">
      <v-card-title> Document title </v-card-title>
      <v-card-text>
        <editor-content :editor="editor" />
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";

@Component({ components: { EditorContent } })
export default class EditorVue extends Vue {
  fileSelected = true;
  editor = new Editor({
    content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
    extensions: [StarterKit, Document, Paragraph, Text, Heading],
  });
}
</script>
