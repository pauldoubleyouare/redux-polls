export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
  return {
    type: REEIVE_USERS,
    users
  }
}