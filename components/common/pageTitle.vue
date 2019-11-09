<template>
  <div class="container">
    <div class="title_info">
      <h3>归档页面</h3>
      <p class="desc">按照年月归档存放的文章</p>
    </div>
    <ul class="article_list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import articleCard from '~/components/articles/articleCard'
export default {
  components: {
    articleCard
  }
};
</script>

<style lang="less">
.container {
  .title_info {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    h3 {
      font-size: 2.5rem;
      margin-bottom:1rem;
      font-weight:800;
    }

    .desc {
      color: #888;
      font-size:1.2rem;
    }
  }
  .article_list {
    list-style: none;
  }
}
</style>
