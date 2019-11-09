<template>
  <header v-scroll class="yf-head">
    <div class="head-left">
      <div class="logo">
        <nuxt-link to="/">
          <img src="https://dummyimage.com/42x42.jpg?text=logo" alt="logo" />
        </nuxt-link>
      </div>
      <div class="search">
        <button class="btn btn-light">博客搜索</button>
      </div>
    </div>
    <nav class="head-right">
      <div class="nav-item" v-for="list in nav" :key="list.path">
        <nuxt-link :to="list.path" class="btn btn-light" exact>{{list.name}}</nuxt-link>
        <template v-if="list.children">
          <div class="sub-nav">
            <nuxt-link
              class="sub-nav-item"
              v-for="child in list.children"
              :key="child.path"
              :to="child.path"
              exact
            >{{child.name}}</nuxt-link>
          </div>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import _ from "loadsh";
export default {
  data() {
    return {
      nav: [
        { path: "/archives", name: "归档" },
        {
          path: "/",
          name: "分类",
          children: [
            { path: "/frontend", name: "前端" },
            { path: "/javascript", name: "后端" }
            // TODO: 改用store fetch 获取 https://zh.nuxtjs.org/api/pages-fetch
          ]
        },
        { path: "/about", name: "关于" }
        // 同样后台获取
      ]
    };
  },

  directives: {
    scroll: {
      inserted(el) {
        let elHeight = el.clientHeight;
        window.addEventListener(
          "scroll",
          _.throttle(() => {
            let scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            scrollTop - elHeight > 0
              ? el.classList.add("fixed")
              : el.classList.remove("fixed");
          }, 200)
        );
      }
    }
  }
};
</script>

<style lang="less" scope>
.btn {
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.65rem 0.75rem;
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 1s;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;

  &:hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
}

.fixed {
  background: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 8px;
  transition: ease-in-out 0.2s;
}

.yf-head {
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  z-index: 2;
  padding: 0 35px;
  line-height: 4rem;
  transition: ease-in-out 0.2s;

  &:hover {
    .fixed();
  }

  .head-left {
    display: flex;
    align-items: center;

    .logo {
      a {
        display: flex;

        img {
          height: 42px;
          width: 42px;
          border-radius: 50%;
          border: 1px solid #eee;
          padding: 1px;
        }
      }
    }

    .search {
      margin-left: 1.5rem;
    }
  }

  .head-right {
    display: flex;
    .nav-item {
      margin-right: 2rem;
      position: relative;
      &:hover {
        .sub-nav {
          display: block;
        }
      }
      .sub-nav {
        display: none;
        position: absolute;
        transform: (translateX(-20%));
        z-index: 99;
        min-width: 20px;
        color: #212529;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        .sub-nav-item {
          display: block;
          width: 100px;
          font-weight: 400;
          color: #212529;
          white-space: nowrap;
          line-height: 2.5rem;
          &:hover {
            color: #16181b;
            background-color: #f8f9fa;
          }
        }
      }
    }
  }
}
</style>>