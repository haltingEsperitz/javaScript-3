function encrypt() {
    let message = document.getElementById("message").value;
    let cipher = 3;
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message.charAt(i);
  
      if (char.match(/[a-z]/i)) {
        let code = message.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + cipher) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + cipher) % 26) + 97);
        }
      }
  
      encryptedMessage += char;
    }
  
    alert("Encrypted message: " + encryptedMessage);
  }