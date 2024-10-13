function greet(msg) {
  function persons(name) {
    return msg + ", " + name + "!";
  }
  return persons;
}

const d = new Date();
let time = d.getHours();
// var time = 21;
if (time <= 10) {
  var gm = greet("Good Morning");
} else if (time <= 15) {
  var gm = greet("Good Noon");
} else if (time <= 18) {
  var gm = greet("Good After Noon");
} else if (time <= 20) {
  var gm = greet("Good Evening");
} else if (time <= 24) {
  var gm = greet("Good Night");
}

// var gm = greet("Good Morning");
var msgs = gm("Abdullah Al Mamun");
console.log(msgs);

// var gn = greet("Good Night");
// console.log(gn("Reduan Khan"));

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var base10 = base(10);
console.log(base10(2));
