const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morsStr = '';
  let morsSymb = [];
  for (let i = 0; i < expr.length; i += 10) {
    morsSymb.push(expr.slice(i, i + 10));
  }
  for (let j = 0; j < morsSymb.length; j++) {
    for (let k = 1; k < morsSymb[j].length; k += 2) {
      if (morsSymb[j][k] === '*' && morsSymb[j][k+8] === '*') morsStr += ' ';
      if (morsSymb[j][k] === '1') morsStr += '-';
      if (morsSymb[j][k] === '0' && morsSymb[j][k - 1] === '1') morsStr += '.';
    }
    morsSymb[j] = morsStr;
    for (let f in MORSE_TABLE) {
      if (morsSymb[j] === f) morsSymb[j] = MORSE_TABLE[f];
      else continue;
    }
    morsStr = '';
  }
  return morsSymb.join('');
}

module.exports = {
    decode
}