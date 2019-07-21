let charCodeNum = 0;
let letterCiphered = 0;

function result(buttonId) {
  const message = document.getElementById('msg').value;
  const offset = parseInt(document.getElementById('offset').value);
  const messageCiphered = encode(message, offset);
  const messageDeciphered = decode(messageCiphered, offset);

  if (buttonId === 'encode') {
    document.getElementById('messageCiphered').innerHTML = messageCiphered;
  } else {
    document.getElementById('messageDeciphered').innerHTML = messageDeciphered;
  }
}

function encode(message, offset) {
  let cipheredMessage = [];

  for (let i = 0; i < message.length; i++) {
    charCodeNum = message[i].charCodeAt();
    if (charCodeNum >= 65 && charCodeNum <= 90) {
      letterCiphered = (charCodeNum - 65 + offset) % 26 + 65;
      cipheredMessage.push(String.fromCharCode(letterCiphered));
    } else if (charCodeNum >= 97 && charCodeNum <= 122) {
      letterCiphered = (charCodeNum - 97 + offset) % 26 + 97;
      cipheredMessage.push(String.fromCharCode(letterCiphered));
    } else if (charCodeNum === 32) {
      letterCiphered = 35;
      cipheredMessage.push(String.fromCharCode(letterCiphered));
    }
  }
  return cipheredMessage.join('');
}

function decode(message, offset) {
  let decipheredMessage = [];

  for (let i = 0; i < message.length; i++) {
    charCodeNum = message[i].charCodeAt();
    if (charCodeNum >= 65 && charCodeNum <= 90) {
      letterDeciphered = (charCodeNum - 90 - offset) % 26 + 90;
      decipheredMessage.push(String.fromCharCode(letterDeciphered));
    } else if (charCodeNum >= 97 && charCodeNum <= 122) {
      letterDeciphered = (charCodeNum - 122 - offset) % 26 + 122;
      decipheredMessage.push(String.fromCharCode(letterDeciphered));
    } else if (charCodeNum === 35) {
      letterDeciphered = 32;
      decipheredMessage.push(String.fromCharCode(letterDeciphered));
    }
  }
  return decipheredMessage.join('');
}