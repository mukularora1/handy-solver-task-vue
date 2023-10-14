import { createRouter, createWebHistory } from "vue-router"
import FeedBody from "./components/FeedBody.vue"
import UserPost from "./components/UserPost.vue"
import { store } from "./store"
const clearPost = () => {}
const routes = [
  {
    path: "/post/:id/:userId",
    component: UserPost,
    name: "Post",
    beforeEnter: clearPost
  },
  {
    path: "/",
    component: FeedBody,
    name: "Home"
  }
]

const router = createRouter({
  // mode: "history",
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // return desired position
    return { top: 0 }
  }
})
router.beforeEach((__, _, next) => {
  store.commit("clearPost")
  next()
})
export default router
