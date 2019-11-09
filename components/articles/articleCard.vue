<template>
  <li class="art-card">
    <nuxt-link to="/">
      <h4 class="card-title">随便写个文章的标题</h4>
    </nuxt-link>
    <p
      class="card-content"
    >先测试一下，这里要写的东西，这里肯定要把markdown转换成正常可以看的格式的。然后再添加自定义标签，比如@more来截取一部分来显示。马上就完成了。。。</p>
    <div class="card-footer">
      <div class="footer-left">
        <span>2019.11.7</span>
        <span>200 次浏览</span>
        <span>30 条评论</span>
      </div>
      <div class="footer-right">
        <div class="tags">
          <img src="https://dummyimage.com/14x14.gif?text=tags" alt />
          <nuxt-link to="/">
            <span>javascript</span>
          </nuxt-link>
        </div>
        <div class="category">
          <img src="https://dummyimage.com/14x14.png?text=category" alt />
          <nuxt-link to="/">
            <span>frontend</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style lang="less">
.art-card {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 20px;
  transition: all .2s linear;

  &:hover {
    background: #effbff;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  }

  .card-title {
    color: rgba(18, 17, 17, 0.78);
    font-size: 1.6rem;
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: center;
  }
  .card-content {
    margin: 12px 0 25px;
    font-size: 16px;
    color: #615b5b;
    text-indent: 2em;
    line-height: 28px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: #4d4d4d;

    .footer-right {
      display: flex;

      .category {
        margin-left: 15px;
      }
    }
  }
}
</style>