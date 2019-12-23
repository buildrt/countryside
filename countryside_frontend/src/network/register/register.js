import axios from '../axios'

export function register(username,password) {
  return axios({
    url: '/register',
    method: 'post',
    data: {
      username,
      password,
    }
  })
}
