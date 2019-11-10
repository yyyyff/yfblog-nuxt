import * as services from "~/api"

export const state = () => ({
  option: {}
})

export const mutations = {
  setOption(state, data) {
    state.option = data
  }
}

export const actions = {
  async getOption({ commit }) {
    const data = await services.getOption()
    commit("setOption", data.option)
  }
}
