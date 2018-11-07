function sendMessage(img){
  if(!fb_page_access_token  && typeof !fb_page_access_token !== 'undefined'){
    alert('You must specify a valid FB Access Token');
    return;
  }
  fetch(`https://graph.facebook.com/v2.6/me/messages?access_token=${fb_page_access_token}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        recipient : {
          id: "1855999237796614"
        },
        message:{
            attachment:{
            type:"image", 
            payload:{
              url:"https://picsum.photos/400/400/?image=358", 
              is_reusable:true
            }
          }
        }
      })
  }).then(res=>res.json())
    .then(res => alert("Message Sent Succ."));
}

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


function getGifImage(fn, q){
  if(api_key  && typeof !api_key !== 'undefined'){
    fn('https://media3.giphy.com/media/IHOOMIiw5v9VS/giphy.gif');
    return;
  }
  var apiGif = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`;
  fetch(apiGif)
  .then(function(res){
    return res.json();
  })
  .then(function(res){
    fn(res.data[getRandomInt(res.data.length-1)].images.downsized_large.url);
  });
}

function setGifImage(el, q){
  getGifImage(function(url){
      el.src = url;
  }, q);
}

setGifImage(document.getElementById('img-selection-gif'), 'cat');
document.getElementById('btn-change-photo-gif').addEventListener('click', function() {
  let query = document.getElementById('txt-photo-gif').value;
  console.log(query);
  setGifImage(document.getElementById('img-selection-gif'), query);
});
document.getElementById('btn-send-to-friend-gif').addEventListener('click', function() {
  let img = document.getElementById('img-selection-gif').src;
  sendMessage(img);
});

setRandomImage(document.getElementById('img-selection'));
document.getElementById('btn-change-photo').addEventListener('click', function() {
  setRandomImage(document.getElementById('img-selection'));
});
document.getElementById('btn-send-to-friend').addEventListener('click', function() {
  let img = document.getElementById('img-selection').src;
  sendMessage(img);
});

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



var myFullpage = new fullpage('#main', {
  sectionsColor: ['#3C5A99', '#4BBFC3', '#7BAABE', '#ccddff']
});
