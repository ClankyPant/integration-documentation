<template>
  <v-dialog v-model="model" persistent max-width="290">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template> -->

    <!-- Dialog Body Block -->
    <v-card dark>
      <!-- Title Block -->
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>

      <!-- Content Block -->
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>

      <!-- Action Block -->
      <v-card-actions>
        <v-spacer></v-spacer>

        <slot name="button"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from "vue-property-decorator";

@Component({})
export default class Dialog extends Vue {
  @VModel({ type: Boolean })
  model!: boolean;

  @Prop()
  title!: string;

  dialog = true;
}
</script>
