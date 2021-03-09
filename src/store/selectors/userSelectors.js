import {createSelector} from 'reselect';

const user = state => state.user;

export const selectIsLoading = createSelector(
    [user],
    (user) => user?.isLoading
)

export const selectCurrentUser = createSelector(
    [user],
    (user) => user.currentUser
)