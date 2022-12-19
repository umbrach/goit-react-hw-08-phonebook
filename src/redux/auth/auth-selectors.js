const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrenUser;
const selectToken = state => state.auth.token;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectUserEmail,
  selectIsFetchingCurrentUser,
  selectToken,
};

export default authSelectors;