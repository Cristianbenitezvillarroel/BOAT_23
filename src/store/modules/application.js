function initialApplicationState() {
  return {
    isLogin: true,
    isShowDrawer: null,
  }
}

const application = {
  namespaced: true,
  state: initialApplicationState,
  mutations: {
    isLogin(state, visible) {
      state.isLogin = visible;
    },
  }
};

export default application;