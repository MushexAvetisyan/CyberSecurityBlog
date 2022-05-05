<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <span v-if="$refs.paginator">
        Viewing {{ $refs.paginator.pageItemsCount }} results
      </span>
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
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
      <button class="goToPage" @click="goToSecondPage">Go To First Page</button>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
export default {
  name: "Blogs",
  data: () => ({
    paginate: ["Cards"],
  }),
  components: {
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  methods: {
    goToSecondPage() {
      if (this.$refs.paginator) {
        this.$refs.paginator.goToPage(1);
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style scoped lang="scss">
.blog-cards {
  span{
    margin-left: 50px;
  }
  .goToPage{
    margin-top: 0;
    margin-left: 40px;
  }
  .paginate-links {
    width: 150px;
    display: flex;
    margin-top: 30px;
    height: 0;
    .active {
      background-color: #303030;
      color: white;
    }
    li {
      list-style-type: none;
      border: 1px solid gray;
      border-radius: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
      }
      &:hover {
        background-color: black;
        color: white;
        transition: 0.5s ease all;
      }
    }
  }
  .pagination {
    margin-top: 15px;
    position: relative;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 360px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1560px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50px;
    right: 60px;
    @media (max-width: 320px) {
      right: 25px;
    }

    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
