console.log('%c HI', 'color: firebrick')
// Challenge 1
  const imgList = document.querySelector("#dog-image-container")
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
  fetch(imgUrl)
    .then(response => response.json())
    .then(function(imgResponse){
      let doggyArray = []
      imgResponse.message.forEach(function(photoLinks){
        doggyArray.push(photoLinks)
        console.log(doggyArray)
      })

      doggyArray.forEach(function(e){
        let blankLi = document.createElement("li")
        let blankImg = document.createElement("img")
        blankImg.src = e
        blankLi.append(blankImg)
        imgList.append(blankLi)

      })


    })