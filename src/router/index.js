import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
