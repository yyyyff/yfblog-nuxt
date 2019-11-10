import Vue from "vue"
import toastComp from "./toast"

let toastConstructor = Vue.extend(toastComp)
let _id = 1
let instance
let instances = []

const Toast = (options = {}) => {
  if (typeof options === "string") {
    options = {
      message: options
    }
  }
  let id = `toast_${_id++}`
  let userCloseFn = options.onClose
  options.onClose = function() {
    Toast.close(id, userCloseFn)
  }
  let offset = 20
  if (instances.length) {
    instances.forEach(item => {
      offset += item.$el.offsetHeight + 16
    })
  }
  options.offset = offset
  options.show = true
  instance = new toastConstructor({
    data: options
  })
  instance.id = id
  document.body.appendChild(instance.$mount().$el)
  instances.push(instance)
  return instance
}

Toast.close = (id, userCloseFn) => {
  let len = instances.length
  let index = -1
  let removedHeight
  for (let i in instances) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userCloseFn === "function") {
        userCloseFn(instances[i])
      }
      instances.splice(i, 1)
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style["top"] =
      parseInt(dom.style["top"], 10) - removedHeight - 16 + "px"
  }
}

export default Toast
