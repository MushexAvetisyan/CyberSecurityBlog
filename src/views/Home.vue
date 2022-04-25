<template>
  <div class="home">
    <blog-post :post="welcomeScreen"/>
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
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
  }),
  components: { BlogPost },
};
</script>

<style>
.home{
}
</style>
