// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
const hearts = document.querySelectorAll(".like")

const modalToggle = () => {
  if (modal.className = "hidden") {
    modal.style.display = "none"
  }
}
modalToggle()

function likeCall(event) {
  const heart = event.target
  mimicServerCall("bogusUrl")
    .then(serverMessage => {
      heart.textContent = FULL_HEART
      heart.style.color = 'red'
    })
    .catch(error => {
      modal.className = "";
    })
}

for(heart of hearts) {
  heart.addEventListener("click", likeCall)
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
