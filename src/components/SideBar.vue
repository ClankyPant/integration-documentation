<template>
  <v-navigation-drawer width="18vw" permanent dark app>
    <Treeview />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Treeview from "@/components/Treeview.vue";

@Component({
  components: { Treeview },
})
export default class SideBar extends Vue {}
</script>
