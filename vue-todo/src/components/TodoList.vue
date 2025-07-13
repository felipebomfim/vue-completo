<template>
    <div>
        <v-text-field clearable label="Add Task" @keyup.enter="addTask" v-model="task.title">
        </v-text-field>
        <ListTasks :tasks="taskItems"></ListTasks>
    </div>
</template>

<script setup>

const taskItems = ref([
    { key: 'notifications', title: 'Notifications', description: 'Notify me about updates to apps or games that I downloaded' },
    { key: 'sound', title: 'Sound', description: 'Auto-update apps at any time. Data charges may apply' },
    { key: 'widgets', title: 'Auto-add widgets', description: 'Automatically add home screen widgets when downloads complete' },
]);

const task = ref({
    key: "",
    title: "",
    description: "",
});

const addTask = () => {
    console.log(task)
    taskItems.value.push({
        title: task.value.title,
        key: randomKeyGenerate(),
        description: ''
    })
    task.value = {
        key: "",
        title: "",
        description: "",
    }
}

const randomKeyGenerate = () => {
    return Math.random().toString(36).substring(2, 15);
}

</script>