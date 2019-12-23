import axios from '../axios'

export function login(username, password) {
  return axios({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
