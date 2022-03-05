<template>
  <div>
    <v-btn dark class="ma-2" @click="editor.chain().focus().toggleBold().run()">
      <v-icon>mdi-format-bold</v-icon>
    </v-btn>
    <v-btn
      dark
      class="ma-2"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      <v-icon> mdi-format-italic </v-icon>
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().setParagraph().run()"
    >
      paragraph
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      h1
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      h2
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      h3
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
    >
      h4
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
    >
      h5
    </v-btn>
    <v-btn
      class="ma-2"
      dark
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
    >
      h6
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, VModel, Vue } from "vue-property-decorator";
import { Editor } from "@tiptap/vue-2";

@Component({ components: {} })
export default class EditorMenu extends Vue {
  @VModel({})
  editor!: Editor;
}
</script>
