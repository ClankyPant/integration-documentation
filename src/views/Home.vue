<template>
  <Editor />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Editor from "@/components/EditorVue.vue";

@Component({ components: { Editor } })
export default class Home extends Vue {}
</script>
