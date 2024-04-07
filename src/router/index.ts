import { createRouter, createWebHistory } from "vue-router";
import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/gsapto",
      component: GsapTo,
      name: "gsapto",
    },
    {
      path: "/gsapfrom",
      component: GsapFrom,
      name: "gsapfrom",
    },
    {
      path: "/gsapfromto",
      component: GsapFromTo,
      name: "gsapfromto",
    },
    {
      path: "/gsaptimeline",
      component: GsapTimeline,
      name: "gsaptimeline",
    },
    {
      path: "/gsapstagger",
      component: GsapStagger,
      name: "gsapstagger",
    },
    {
      path: "/gsapscrolltrigger",
      component: GsapScrollTrigger,
      name: "gsapscrolltrigger",
    },
    {
      path: "/gsaptext",
      component: GsapText,
      name: "gsaptext",
    },
    {
      path: "/",
      component: Home,
      name: "home",
    },
  ],
});

export default router;
