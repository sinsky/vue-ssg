import "./style.css";
import App from "./App.vue";
import { ViteSSG } from "vite-ssg";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {},
);
