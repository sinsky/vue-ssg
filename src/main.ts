import "./style.css";
import App from "./App.vue";
import { ViteSSG } from "vite-ssg";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";

export const router = createRouter({
  // TODO: createWebHistoryはエラーになるため、一時的にMemoryHistoryを利用する
  // https://github.com/antfu-collective/vite-ssg/issues/417
  history: createMemoryHistory(),
  routes,
});

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  // ({ app, router, routes, isClient, initialState }) => {
  //   // install plugins etc.
  // },
);
