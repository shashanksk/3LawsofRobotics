let captchaText = document.getElementById('captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#000000";

let userText = document.getElementById('textBox');
let submitButton = document.getElementById('submitButton');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');

var captchaStr = "";
var pro = "";

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                 'q', 'r', 's', 't', 'u', 'v', 'w', 
                 'x', 'y', 'z', '0', '1', '2', '3', 
                 '4', '5', '6', '7', '8', '9'];

                 function generate_captcha() {
                  let emptyArr = [];
               
                  for (let i = 1; i <= 7; i++) {
                      emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
                  }
               
                  captchaStr = emptyArr.join('');
               
                  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
                  ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);
               
                  output.innerHTML = "";
               }
               
               generate_captcha();

               function generate_captcha1() {
                let emptyArr = [];
             
                for (let i = 1; i <= 7; i++) {
                    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
                }
             
                captchaStr = emptyArr.join('');
             
                ctx.clearRect(0, 0, captchaText.width, captchaText.height);
                ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);
             
                output.innerHTML = "Incorrect, please try again!(Think guysss)";

             }

               function check_captcha() {
                if (userText.value === captchaStr || userText.value === pro ) {
                  output.className = "incorrectCaptcha";
                  generate_captcha1();  
                  userText.value = "";
                } 

                

                else {

                  window.location.href = "../sksk.html";
                  // output.className = "correctCaptcha";
                  // output.innerHTML = "Correct!";
                  userText.value = "";
                   
                }
            }

            userText.addEventListener('keyup', function(e) {
              if (e.key === 'Enter') {
                 check_captcha();
              }
          });
          
          submitButton.addEventListener('click', check_captcha);

          refreshButton.addEventListener('click', generate_captcha);
