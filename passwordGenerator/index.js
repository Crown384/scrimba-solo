const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



let lengthPas = document.getElementById('pasLength').value;
let typePas = document.getElementById('pasType').value;
// console.log(typePas);

document.getElementById('pasLength').addEventListener('change', () => {
    lengthPas = document.getElementById('pasLength').value;
    // console.log(lengthPas);
    outPutPassword();
})
document.getElementById('pasType').addEventListener('change', () => {
    typePas = document.getElementById('pasType').value;
    // console.log(typeof typePas);
    outPutPassword();
})
// lengthPas.
function outPutPassword() {
    document.querySelector('.pas1').textContent = generatePassword(Number(lengthPas), typePas)
    document.querySelector('.pas2').textContent = generatePassword(Number(lengthPas), typePas)
}

function generatePassword(len, type) {
    let password = ''
    console.log(type)
    if (type === 'letters') {
        let newChar = characters.slice(0, 52);
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += characters[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else if (type === 'numbers') {
        let newChar = characters.slice(52, 62);
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += newChar[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else if (type === 'symbols') {
        let newChar = characters.slice(62, characters.length);
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += newChar[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else if (type === 'letters-numbers') {
        let newChar = characters.slice(0, 62);
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += newChar[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else if (type === 'letters-symbols') {
        let newChar = [...characters.slice(0, 52), ...characters.slice(62, characters.length)];
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += newChar[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else if (type === 'numbers-symbols') {
        let newChar = characters.slice(52, characters.length);
        let randChar = Math.floor(Math.random() * newChar.length)
        for (i = 0; i < len; i++) {
            password += newChar[Math.floor(Math.random() * newChar.length)]
        }
        return password
    } else {
        for (i = 0; i < len; i++) {
            password += characters[genRandChar()]
        }
        return password
    }
}


function genRandChar() {
    return Math.floor(Math.random() * characters.length)
}


function copyText(id) {
    let textToCopy = document.getElementById(id).textContent;
    navigator.clipboard.writeText(textToCopy);
}

// Math.random()