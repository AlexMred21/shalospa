import TokenService from '../services/token-service';
import config from '../config';


const ArtApiService = {
  getArtGallery() {
    return fetch(`${config.API_ENDPOINT}/art`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
    getArtGalleryById(userId) {
        return fetch(`${config.API_ENDPOINT}/art/gallery/${userId}`, {
          method: 'GET',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      getArtImage(id) {
        return fetch(`${config.API_ENDPOINT}/art/${id}`, {

        })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
      },
      getDailyArtImage(id) {
        return fetch(`${config.API_ENDPOINT}/met/daily`, {

        })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
      },
      getUsername(userId) {
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
          method: 'GET',
        })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(resJson => resJson.user_name)
      },
      getComments(objectId) {
        return fetch(`${config.API_ENDPOINT}/comments/${objectId}`, {

        })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
      },
      postComment(user_name, art_id, comment) {
        return fetch(`${config.API_ENDPOINT}/comments`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
          body: JSON.stringify({
            user_name,
            art_id,
            comment
            }),
      })
          .then(res => {
              if (!res.ok) {
                  return res.json().then(error => {
                      throw error;
                  });
              }
              return res.json();
          })
      },
      postToGallery(art_id, user_id) {
        return fetch(`${config.API_ENDPOINT}/art/gallery/${user_id}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          art_id
          }),
        })
        .then(res => {
          if (!res.ok) {
              return res.json().then(error => {
                  throw error;
              });
          }
          return res.json()
            .then(window.location = '/gallery')
      })
      }
}

export default ArtApiService