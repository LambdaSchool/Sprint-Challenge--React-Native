
module.exports = {
  getDogBreeds: function () {
    return fetch('https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
      .then(res => res.message)
  }
}