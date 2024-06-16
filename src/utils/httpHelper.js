import axios from 'axios'

export default {
  async makeGetRequest({ url, baseURL = 'http://localhost:8070', opts = {} }) {
    const headers = {
      Accept: 'application/json'
    }

    const options = {
      baseURL,
      headers,
      timeout: 120000,
      ...opts
    }

    const instance = axios.create(options)

    return instance.get(url).catch((error) => {
      throw error
    })
  },

  async makePostRequest({ url, baseURL = 'http://localhost:8070', postBody, formData = false, onProgress = () => {}, opts }) {
    let headers = {
      'Content-Type': 'application/json'
    }

    if (formData) {
      headers['Content-Type'] = 'multipart/form-data'
    }

    const options = {
      baseURL,
      headers,
      timeout: 120000,
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        onProgress(percentCompleted)
      },
      ...opts
    }

    const instance = axios.create(options)

    let body = formData ? postBody : JSON.stringify(postBody)

    return instance.post(url, body).catch((error) => {
      throw error
    })
  }
}
