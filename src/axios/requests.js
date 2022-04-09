import axios from 'axios'
// const url = 'http://localhost:3030'
const url = 'https://test-scraper-server.herokuapp.com'

export const get = (endpoint) => {
  return axios.get(`${url}/${endpoint}`)
}

export const getUsingParams = (endpoint, customParams) => {
  return axios.get(
    `${url}/${endpoint}`,{ params: customParams }
  );
}

export const post = (endpoint, data={}) => {
  return axios.post(`${url}/${endpoint}`, data)
}

export const put = (endpoint, data={}) => {
  return axios.put(`${url}/${endpoint}`, data)
}

export const del = (endpoint, data={}) => {
  return axios.delete(`${url}/${endpoint}`, data)
}
