<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="props.dialog"
      min-width="400"
      max-width="600"
      persistent
    >

      <v-card
        title="Edit Task"
      >
        <v-text-field label="Title" v-model="props.task.title"></v-text-field>
        <v-text-field label="Description" v-model="props.task.description"></v-text-field>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="$emit('toggle-dialog')">
            Save
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
    const props = defineProps({
        dialog: Boolean,
        task: Object
    });

    

</script>