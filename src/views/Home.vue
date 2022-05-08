<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <span v-if="$refs.paginator">
          Viewing {{ $refs.paginator.pageItemsCount }} results
        </span>
        <div class="blog-cards">
          <paginate
            ref="paginator"
            class="pagination"
            name="Cards"
            :list="sampleBlogCards"
            :per="4"
          >
            <BlogCard
              :post="post"
              v-for="(post, index) in paginated('Cards')"
              :key="index"
            />
          </paginate>
          <paginate-links :limit="0" for="Cards"></paginate-links>
          <button class="GoToFirst" @click="goToSecondPage">
            Go To First Page
          </button>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for Your free account today</h2>
        <router-link class="router-button" to="#">
          Register For CyberSecurity Blog
          <arrow-right class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";
import arrowRight from "../assets/Icons/arrowRight.svg";
export default {
  name: "Home",
  data: () => ({
    welcomeScreen: {
      title: "Welcome!",
      blogPost:
        "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, " +
        "networks, and data from malicious attacks. It's also known as information technology security or " +
        "electronic information security. The term applies in a variety of contexts, from business to " +
        "mobile computing, and can be divided into a few common categories.",
      welcomeScreen: true,
      photo: "security-expertise",
    },
    sampleBlogPost: [
      {
        title: "This is Filler Title",
        blogHTML: "This is a filler blog post title",
        blogCoverPhoto: "cyber-security-webpage-banner-2",
      },
      {
        title: "This is Filler Title2",
        blogHTML: "This is a filler blog post title",
        blogCoverPhoto: "managed-security",
      },
    ],
    paginate: ["Cards"],
  }),
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
  methods: {
    goToSecondPage() {
      if (this.$refs.paginator) {
        this.$refs.paginator.goToPage(1);
      }
    },
  },
  components: { BlogPost, BlogCard, arrowRight },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
    margin-left: 50px;
  }
  span {
    margin-left: 50px;
    font-size: 16px;
  }
}
.GoToFirst {
  position: relative;
  left: 50px;
  bottom: 65px;
}
.blog-cards {
  margin-top: 20px;
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
