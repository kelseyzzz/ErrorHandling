function createBubble() {
  var bubble = document.createElement("div");
  bubble.setAttribute("class", "bubble");
  var size = Math.round(Math.random() * 100 + 1);
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.top = (window.innerHeight - size) + "px";
  bubble.style.left = (Math.round(Math.random() * (window.innerWidth + size) + 1)) + "px";

  document.body.appendChild(bubble);

  var speed = Math.round(Math.random()*50+50);
  var direction = Math.round(Math.random()*20 - 10);

  var moveInterval = setInterval(function() {
     var newTop = parseInt(bubble.style.top) - 10;
     var newLeft = parseInt(bubble.style.left) + direction;
    bubble.style.top = newTop + "px";
    bubble.style.left = newLeft + "px";

    if ( newTop < -100 ||
        newLeft < -100 ||
        newLeft > window.innerWidth ) {
        window.clearInterval(moveInterval);

      }

    });

  } 



window.onload = function() {
    var button = document.querySelector("#btn");

    button.addEventListener("click", function() {
      button.style.display = "none";
      for ( var i = 0; i < 100; i++ ) {
        createBubble();
    }

      showText();

  });
}

function showText() {
  var text = document.getElementsByTagName('p')[0];
  var studentName = "Kelsey Zahand";
  text.innerHTML += ", " + studentName + "!";
  text.style.opacity = 1;


}


