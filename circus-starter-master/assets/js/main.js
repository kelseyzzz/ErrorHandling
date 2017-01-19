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



// ANSWERS


// 1) Shuffle
//    Code:

 //   Link:


// 2) Common Test

//          Name: FizzBuzz

//          Code: public class Test 
//                {
//                public static void main(String[] args)  
//                {
//                String whack =  "Whack", pop = "pop";
//                for (int i = 1; i <= 100; i++)
//                {
//                if (i % 77 == 0) //check if number in position i is divisable by 15, if so don't check other 2 conditions - we don't want a double print
//                {
//                  System.out.println(whack + pop + " " + i));
//                }
//                else if (i % 7  == 0 )
//                {
//                  System.out.println(whack + " " + i);
//                }
//                else if (i % 11== 0)
//                {
//                  System.out.println(pop + " "+ i);
//                }
//                }
//                }
//                }

//    Link: http://www.java67.com/2015/10/how-to-solve-fizzbuzz-in-java.html


//3) Email Validation

//          Code: 
                //get the email address field content by id, here id=email
                //var email =  $('#email').val();   
                 
                //this is the regular expression to match
                //var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                 
                //then finally, you test the email using the pattern
                 
                //var validEmail = pattern.test(email);  
                 
                //the variable validEmail will only return true if the email matches the pattern 

    //Link: https://www.quora.com/What-is-the-process-to-validate-an-email-address-in-JavaScript


//4) Window Outer Width

//          Info:

//            Window.outerWidth

//              Chrome: 1
//              Firefox(Gecko): 1.0 ( 1.7 or earlier)
//              Internet Explorer: 9
//              Opera: 9
//              Safari: 3

//          Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth

