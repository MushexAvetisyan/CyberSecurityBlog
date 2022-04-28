import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Phishing For Login/Password",
        blogCoverPhoto: "cybersec",
        blogDate: "April 26, 2022",
      },
      {
        blogTitle: "DDOS ATTACK",
        blogCoverPhoto: "cybersecurity1",
        blogDate: "April 27, 2022",
      },
      {
        blogTitle: "TROJAN FOR HACKING",
        blogCoverPhoto: "cybersecurity08",
        blogDate: "April 28, 2022",
      },
      {
        blogTitle: "ANONYMOUS",
        blogCoverPhoto: "whyis",
        blogDate: "April 29, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "cybersecurity1",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "cybersecurity08",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "whyis",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "ANONYMOUS",
        blogCoverPhoto: "whyis",
        blogDate: "April 29, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "Cropped",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "cybersecurity1",
        blogDate: "April 30, 2022",
      },
      {
        blogTitle: "HOW TO LEARN HACKING",
        blogCoverPhoto: "cybersecurity08",
        blogDate: "April 30, 2022",
      },

    ],

    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log(state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
