<template>
  <v-app>
    <!-- SideBar Block -->
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";

@Component({
  components: { SideBar },
})
export default class App extends Vue {}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
</style>
