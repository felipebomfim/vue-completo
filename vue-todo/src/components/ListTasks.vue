<template>
    <div>
        <v-list v-model:selected="settingsSelection" select-strategy="leaf">
            <v-list-subheader>General</v-list-subheader>
            <v-list-item v-for="item in props.tasks" :key="item.key" :subtitle="item.subtitle" :title="item.title"
                :value="item.value">
                <template v-slot:prepend="{ isSelected, select }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="isSelected" @update:model-value="select"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
                <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="grey-lighten" icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="editar" @click="toggleDialog(indexTaskSelected)">
                                <v-list-item-title >Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="deletar">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </v-list>
        <DialogTaskFields :dialog="showDialogTaskFields" :task="tasks[indexTaskSelected]" @toggle-dialog="toggleDialog(indexTaskSelected)"/>

    </div>
</template>

<script setup>
const props = defineProps({
    tasks: Object
})

const showDialogTaskFields = ref(false);

const toggleDialog = (index) =>{
    showDialogTaskFields.value = !showDialogTaskFields.value;
    indexTaskSelected.value = index;
}


const settingsSelection = ref([])

const indexTaskSelected = ref(0);
</script>