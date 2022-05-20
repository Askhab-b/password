function generatePassword(length, string, amount) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = ''
    let arr = []

    for(let i = 0; i < (!amount ? 1: amount); i++) {
      for (j = 0; j < length; j++) {
      
      
    if (string === "easy") {
  
      result += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    if(string === "medium") {
      const medium = alphabet + digits
      result += medium[Math.floor(Math.random() * medium.length)]

    }
       if (string === 'hard') {
         const hard = alphabet + digits + symbols
         result += hard[Math.floor(Math.random() * hard.length)]
       }
    }
    arr.push(result)
    result = ''
    }
    if (!amount) {
      return arr.join('')
    }
    return arr;
  }
  console.log(generatePassword(5, 'hard', 3))