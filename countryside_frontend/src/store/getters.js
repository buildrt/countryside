export default {
  isLogin(state) {
    console.log('isLogin'+state.loginJudge);
    return state.loginJudge;
  },
  getUserName(state) {
    return state.userName;
  },
  getPassWord(state) {
    return state.passWord;
  }
}