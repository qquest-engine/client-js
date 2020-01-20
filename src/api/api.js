import queryString from "query-string";

export const API_URL = "https://quest-engine-back.herokuapp.com";

export const fetchApi = (url, options = {}) => {
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
        //mode: "cors",
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
        mode: "cors",
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
}