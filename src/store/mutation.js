export default {
  setLoader(state) {
    state.isLoading = !state.isLoading
  },
  clearPost(state) {
    state.userDetail = null
    state.comments = []
    state.post = null
    state.posts = []
  }
}
