import { createSelector } from 'reselect';

const limit = 5;

const getAllUsers = state => state.users;
const getCurrentPage = state => state.currentPage;

const getFiveUsers = createSelector(
  [getAllUsers, getCurrentPage],
  (users, page) =>
    page === 1
      ? users.slice(0, limit)
      : users.slice(page * limit - limit, page * limit)
);

const getMaxPage = createSelector(
  [getAllUsers],
  users => Math.ceil(users.length / limit)
);

export default { getAllUsers, getCurrentPage, getFiveUsers, getMaxPage };
