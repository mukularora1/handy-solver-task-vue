import { createStore } from "vuex"
import actions from "./action.js"
import getter from "./getter.js"
import mutation from "./mutation.js"
export const store = createStore({
  state() {
    return {
      posts: [],
      comments: [],
      isLoading: false,
      userDetail: null,
      post: null
    }
  },
  mutations: mutation,
  actions: actions,
  getters: getter
})
