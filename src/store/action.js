import axios from "axios"
export default {
  async getPosts(store) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      if (response.data && response.data.length) {
        store.state.posts = response.data
      }
    } catch (error) {
      return { status: "error", data: error }
    }
  },
  async getUserDetail(store, { userId }) {
    try {
      // console.log(store)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (response.data && response.data) {
        store.state.userDetail = response.data
      }
      console.log(response.data)
    } catch (error) {
      return { status: "error", data: error }
    }
  },
  async getPostComments(store, { postId }) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      if (response.data && response.data) {
        store.state.comments = response.data
      }
    } catch (error) {
      return { status: "error", data: error }
    }
  },
  async getPost(store, { postId }) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      if (response.data && response.data) {
        store.state.post = response.data
      }
    } catch (error) {
      return { status: "error", data: error }
    }
  }
}
