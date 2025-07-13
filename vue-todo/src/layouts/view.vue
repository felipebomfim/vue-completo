<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer">
			<v-list>
				<v-list-item
					prepend-avatar="https://github.com/yurimarcon/avatars/blob/main/Colored/ToyFaces_Colored_BG_29.jpg?raw=true"
					subtitle="Todo List" title="User name">

				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list :lines="false" density="compact" nav>
				<v-list-item :to="item.to" v-for="(item, i) in items" :key="i">
					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>

					<v-list-item-title v-text="item.text"></v-list-item-title>
				</v-list-item>

			</v-list>
		</v-navigation-drawer>

		<v-app-bar>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-app-bar-title>Application</v-app-bar-title>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup>
import { ref } from "vue";

const items = [
	{ text: 'Home', icon: 'mdi-folder', to: "/" },
	{ text: 'About', icon: 'mdi-account-multiple', to: "/about" },
]

const drawer = ref(null);
</script>

<style scoped>
</style>