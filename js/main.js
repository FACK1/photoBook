var apiRandomPhoto = 'https://picsum.photos/400/400/?random';

function getRangomImage(fn){
  fetch(apiRandomPhoto)
  .then(function(res){
    fn(res.url)
  });
}


getRangomImage(function(img) {
  document.getElementById('img-selection').src = img;
})
document.getElementById('btn-change-photo').addEventListener('click', function() {
  getRangomImage(function(img) {
    document.getElementById('img-selection').src = img;
  })
})
