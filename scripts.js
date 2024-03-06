let randomPass1 = document.getElementById("rectangle1");
let randomPass2 = document.getElementById("rectangle2");

function createRandomPasswords(length) {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

randomPass1.textContent = "";
randomPass2.textContent = "";

document.getElementById("passwordButton").addEventListener("click", function() {
  let password1 = createRandomPasswords(15);
  let password2 = createRandomPasswords(15);

  randomPass1.textContent = password1;
  randomPass2.textContent = password2;
});