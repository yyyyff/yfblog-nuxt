import axios from "./request"

//获取网站配置
export const getOption = async () => {
  const res = await axios.get("/option")
  return res.data
}

// 获取文章列表
export const getArticles = async params => {
  const res = await axios.get("/article", { params })
  return res.data
}

// 获取文章详情
export const getSingleArt = async slug => {
  const res = await axios.get(`/article/${slug}`)
  return res.data
}

// 标签文章
export const getTag = async slug => {
  const res = await axios.get(`/tags/${slug}`)
  return res.data
}

//分类文章
export const getCategory = async slug => {
  const res = await axios.get(`/categories/${slug}`)
  return res.data
}

// 获取文章归档
export const getArticleDir = async () => {
  const res = await axios.get("/articledir")
  return res.data
}
