<template>
  <div class="container">
    <div class="personal_info">
      <nuxt-link to="/">
        <img src="https://dummyimage.com/42x42.png?text=logo" alt />
      </nuxt-link>
      <h3>恍如初年</h3>
      <p class="desc" @click="test">我们从未准备好，只是时间到了。</p>
    </div>
    <ul class="article_list">
      <article-card></article-card>
    </ul>
  </div>
</template>

<script>
import articleCard from "~/components/articles/articleCard";
export default {
  components: {
    articleCard
  }
};
</script>

<style lang="less">
.container {
  .personal_info {
    display: flex;
    align-items: flex-end;
    margin-bottom: 3rem;
    a {
      img {
        height: 42px;
        width: 42px;
        border-radius: 50%;
        transform: translateY(2px);
        border: 1px solid #eee;
      }
    }

    h3 {
      font-size: 2rem;
      padding: 0 15px;
      font-weight: 500;
    }

    .desc {
      color: #888;
    }
  }
  .article_list {
    list-style: none;
  }
}
</style>
