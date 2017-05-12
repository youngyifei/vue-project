import http from './httpBase'

export default {
  getCompanyType (cb, errorcb) {
    http.get('/api/WUApi/getCompanyType')
    .then(response => {
      if (response.status === 200) {
        cb(response.data)
      }
    })
    .catch(response => {
    })
  }
}
