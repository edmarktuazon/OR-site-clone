/** @format */

import { createRouter, createWebHistory } from "vue-router";
import TheHomeView from "../views/TheHomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: TheHomeView,
		},
		{
			path: "/tour",
			name: "tour",
			component: () => import("../views/TheTourView.vue"),
		},
		{
			path: "/music",
			name: "music",
			component: () => import("../views/TheMusicView.vue"),
		},
		{
			path: "/newsletter",
			name: "newsletter",
			component: () => import("../views/TheNewsletterView.vue"),
		},
		{
			path: "/album",
			name: "album",
			component: () => import("../views/TheOneYearAlbumView.vue"),
		},
		{
			path: "/store",
			name: "stor",
			component: () => {
				window.location.href = "https://shop.oliviarodrigo.com/";
				return null;
			},
		},
		{
			path: "/shop",
			name: "shop",
			component: () => {
				window.location.href =
					"https://shop.oliviarodrigo.com/collections/driving-home-2-u";
				return null;
			},
		},
		{
			path: "/dh2u",
			name: "dh2u",
			component: () => {
				window.location.href = "https://www.youtube.com/watch?v=mj93w1BBqHU";
				return null;
			},
		},
		// {
		// 	path: "/data/:id",
		// 	name: "data.show",
		// 	component: () => import("../views/ThePageShowView.vue"),
		// },
	],
});
export default router;
