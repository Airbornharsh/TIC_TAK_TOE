const cross = document.getElementById('cross');
const zero = document.getElementById('zero');

const oneBtn = document.getElementById('onebtn');
const twoBtn = document.getElementById('twobtn');
const threeBtn = document.getElementById('threebtn');
const fourBtn = document.getElementById('fourbtn');
const fiveBtn = document.getElementById('fivebtn');
const sixBtn = document.getElementById('sixbtn');
const sevenBtn = document.getElementById('sevenbtn');
const eightBtn = document.getElementById('eightbtn');
const nineBtn = document.getElementById('ninebtn');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const reset1 = document.getElementById('reset');

const score = document.getElementById('score');

let tictac = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0,
  seven: 0,
  eight: 0,
  nine: 0
}

let c = null;
let p = 0;
let check;
let m1, m2, m3, m4, m5, m6, m7, m8;
const crossvalue = 'cross';
const zerovalue = 'zero';



function oneHandler() {
  if (c != null) {
    if (tictac.one == 0 && p == 0) {
      if (c == 1) {
        one.textContent = '❌';
        tictac.one = 1;
        console.log('❌');
        result();
        computero();

        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        one.textContent = '⭕';
        tictac.one = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function twoHandler() {
  if (c != null) {
    if (tictac.two != 1 && tictac.two != 10 && p == 0) {
      if (c == 1) {
        two.textContent = '❌';
        tictac.two = 1;
        console.log('❌');

        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        two.textContent = '⭕';
        tictac.two = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }

      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function threeHandler() {
  if (c != null) {
    if (tictac.three != 1 && tictac.three != 10 && p == 0) {
      if (c == 1) {
        three.textContent = '❌';
        tictac.three = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        three.textContent = '⭕';
        tictac.three = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function fourHandler() {
  if (c != null) {
    if (tictac.four != 1 && tictac.four != 10 && p == 0) {
      if (c == 1) {
        four.textContent = '❌';
        tictac.four = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        four.textContent = '⭕';
        tictac.four = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function fiveHandler() {
  if (c != null) {
    if (tictac.five != 1 && tictac.five != 10 && p == 0) {
      if (c == 1) {
        five.textContent = '❌';
        tictac.five = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        five.textContent = '⭕';
        tictac.five = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function sixHandler() {
  if (c != null) {
    if (tictac.six != 1 && tictac.six != 10 && p == 0) {
      if (c == 1) {
        six.textContent = '❌';
        tictac.six = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        six.textContent = '⭕';
        tictac.six = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function sevenHandler() {
  if (c != null) {
    if (tictac.seven != 1 && tictac.seven != 10 && p == 0) {
      if (c == 1) {
        seven.textContent = '❌';
        tictac.seven = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        seven.textContent = '⭕';
        tictac.seven = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function eightHandler() {
  if (c != null) {
    if (tictac.eight != 1 && tictac.eight != 10 && p == 0) {
      if (c == 1) {
        eight.textContent = '❌';
        tictac.eight = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        eight.textContent = '⭕';
        tictac.eight = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function nineHandler() {
  if (c != null) {
    if (tictac.nine != 1 && tictac.nine != 10 && p == 0) {

      if (c == 1) {
        nine.textContent = '❌';
        tictac.nine = 1;
        console.log('❌');
        result();
        computero();
        if (check == crossvalue) {
          winalert();
        }

      }
      else if (c == 0) {
        nine.textContent = '⭕';
        tictac.nine = 10;
        console.log('⭕');
        result();
        computerx();
        if (check == zerovalue) {
          winalert();
        }
      }
    } else {
      alert('Click Carefully');
    }
  } else {
    choose();
  }
}

function winalert() {
  //alert('YOU WON');
  p = 1;
  score.textContent = 'YOU WON';

}

function losealert() {
  // alert('YOU LOSE');
  p = 1;
  score.textContent = 'YOU LOSE';

}

function draw() {
  if ((tictac.one == 1 || tictac.one == 10) && (tictac.two == 1 || tictac.two == 10) && (tictac.three == 1 || tictac.three == 10) && (tictac.four == 1 || tictac.four == 10) && (tictac.five == 1 || tictac.five == 10) && (tictac.six == 1 || tictac.six == 10) && (tictac.seven == 1 || tictac.seven == 10) && (tictac.eight == 1 || tictac.eight == 10) && (tictac.nine == 1 || tictac.nine == 10)) {
    // alert('DRAW');
    p = 1;
    score.textContent = 'DRAW';

  }

}

function result() {
  m1 = parseInt(tictac.one + tictac.two + tictac.three);
  m2 = parseInt(tictac.four + tictac.five + tictac.six);
  m3 = parseInt(tictac.seven + tictac.eight + tictac.nine);
  m4 = parseInt(tictac.one + tictac.four + tictac.seven);
  m5 = parseInt(tictac.two + tictac.five + tictac.eight);
  m6 = parseInt(tictac.three + tictac.six + tictac.nine);
  m7 = parseInt(tictac.one + tictac.five + tictac.nine);
  m8 = parseInt(tictac.seven + tictac.five + tictac.three);
  if (c == 1) {
    if (m1 == 3 || m2 == 3 || m3 == 3 || m4 == 3 || m5 == 3 || m6 == 3 || m7 == 3 || m8 == 3) {
      check = crossvalue;
    }
  }
  else if (c == 0) {
    if (m1 == 30 || m2 == 30 || m3 == 30 || m4 == 30 || m5 == 30 || m6 == 30 || m7 == 30 || m8 == 30) {
      check = zerovalue;
    }
  }
}

function choose() {
  alert("CHOOSE BELOW WHAT YOU WANT")
}

function reset() {
  tictac = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0
  }
  one.textContent = '';
  two.textContent = '';
  three.textContent = '';
  four.textContent = '';
  five.textContent = '';
  six.textContent = '';
  seven.textContent = '';
  eight.textContent = '';
  nine.textContent = '';
  zero.style.visibility = "visible";
  cross.style.visibility = "visible";
  p = 0;
  c = null;
  score.textContent = 'RESULT';
  check = '';
}

reset1.addEventListener('click', reset);

oneBtn.addEventListener('click', oneHandler);
twoBtn.addEventListener('click', twoHandler);
threeBtn.addEventListener('click', threeHandler);
fourBtn.addEventListener('click', fourHandler);
fiveBtn.addEventListener('click', fiveHandler);
sixBtn.addEventListener('click', sixHandler);
sevenBtn.addEventListener('click', sevenHandler);
eightBtn.addEventListener('click', eightHandler);
nineBtn.addEventListener('click', nineHandler);



cross.addEventListener('click', function() {
  c = 1;
  zero.style.visibility = "hidden";
});

zero.addEventListener('click', function() {
  c = 0;
  cross.style.visibility = "hidden";
});