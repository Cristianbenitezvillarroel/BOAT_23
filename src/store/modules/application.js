function initialApplicationState() {
  return {
    isShowDrawer: true,
  }
}

const application = {
  namespaced: true,
  state: initialApplicationState,
  mutations: {
    isShowDrawer(state, visible) {
      state.isShowDrawer = visible;
    },
  }
};

export default application;