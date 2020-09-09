var userscore = 0;
var userinput;

function computerinput() {
  var c = Math.floor(Math.random() * 6);
  console.log(c);
  return c;
}

function adduserscore() {
  var comvalue = computerinput();
  document.getElementById("userbatting").innerHTML = userinput;
  document.getElementById("systembowling").innerText = comvalue;
  if (comvalue === userinput) {
    alert("You are Bowled for" + userscore + " runs");
    userscore = 0;
    document.getElementById("userscore").innerText = userscore = 0;
    document.getElementById("userbatting").innerHTML = userinput = 0;
    document.getElementById("systembowling").innerText = comvalue = 0;
  } else {
    userscore = userscore + userinput;
    document.getElementById("userscore").innerText = userscore;
  }
}

function setinp(i) {
  console.log("Working");
  userinput = i;
  adduserscore();
}
