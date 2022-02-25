<template>
  <div id="editor_container">
    <div id="editorjs">T</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorJS from "@editorjs/editorjs";

@Component({
  components: {},
})
export default class Editor extends Vue {
  editor: EditorJS = new EditorJS("editorjs");
}
</script>

<style scoped>
#editor_container {
  width: 100%;
  height: 100vh;

  background: #F6E8EA;
}
</style>
