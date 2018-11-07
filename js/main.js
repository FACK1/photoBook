
function getRangomImage(fn, height=400, width=400){
  var apiRandomPhoto = `https://picsum.photos/${height}/${width}/?random`;
  fetch(apiRandomPhoto)
  .then(function(res){
    fn(res.url)
  });
}

function setRandomImage(el, height=400, width=400){
  getRangomImage(function(url){
      el.src = url;
  }, height, width);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setRandomImage(document.getElementById('img-selection'));
document.getElementById('btn-change-photo').addEventListener('click', function() {
  setRandomImage(document.getElementById('img-selection'));
})

setRandomImage(document.getElementById('img-facebook-photo'), 400, 350);
setInterval(function(){
  setRandomImage(document.getElementById('img-facebook-photo'), 400, 350);
  let likes    = document.getElementById('number-of-likes').innerText,
      shares   = document.getElementById('number-of-shares').innerText,
      comments = document.getElementById('number-of-comments').innerText;
  likes = parseInt(likes) + getRandomInt(10);
  comments = parseInt(comments) + getRandomInt(5);
  shares = parseInt(shares) + getRandomInt(2);
  document.getElementById('number-of-likes').innerText = likes;
  document.getElementById('number-of-comments').innerText = comments;
  document.getElementById('number-of-shares').innerText = shares;
}, 3000);
