console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {

});

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
  fetch(imgUrl)
    .then(response => response(json))
    .then(json => console.log(json));