import queryString from "query-string";

export const API_URL = "https://quest-engine-back.herokuapp.com";

export const fetchApi = (url, options = {}) => {

  options.headers = options.headers || {};
  options.headers['Content-Type'] = 'application/json';

  let token = window.localStorage.getItem('jwt');
  console.log('options.headers.authorization',options.headers.authorization)
  if (options.headers.authorization === undefined) {
      options.headers.authorization = token ? `Bearer ${token}`: '';
  }
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status < 400) {
          return response
        } else {
          throw response;
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
          reject(error);
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    const queryStringParams = {
      ...params
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
  }
  static post(url, options = {}) {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      ...params
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
  }

  static delete(url, options = {}) {
    const { body = {} } = options;
    const queryStringParams = {};
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: "DELETE",
        //mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
  }

    static setToken(value) {
        value ? window.localStorage.setItem("jwt", value) : window.localStorage.removeItem("jwt")
    }
}