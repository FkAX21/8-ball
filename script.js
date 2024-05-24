var input = document.getElementById("question");
var button = document.getElementById("btn");
var magicoutput = document.getElementById("output");

button.addEventListener("click", magicbutton);

function magicbutton() {
  let question = input.value;
  console.log(question);
  let answer = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(answer);

  if (question.toLowerCase() == `does the magic ball work`) {
    magicoutput.innerHTML = `How dare you doubt me`;
  } else if (question.toLowerCase() == `Is JavaScript awesome `) {
    magicoutput.innerHTML = `Of Course!`;
  } else if (
    question.toLowerCase() == `Are the New york knicks winning the championship`
  ) {
    magicoutput.innerHTML = `Without a Doubt.`;
  } else if (question.toLowerCase() == `Is the sky blue?`) {
    magicoutput.innerHTML = `As I see it, yes.`;
  } else if (question.toLowerCase() == `Is cr7 the goat?`) {
    magicoutput.innerHTML = `Concentrate and ask again.`;
  } else if (question.toLowerCase() == `Are the oiles winning it all`) {
    magicoutput.innerHTML = `Don't count on it`;
  } else if (question.toLowerCase() == `Is global warming bad`) {
    magicoutput.innerHTML = `Outlook not so good.`;
  } else if (question.toLowerCase() == `Messi or Ronaldo`) {
    magicoutput.innerHTML = `Messi`;
  } else if (question.toLowerCase() == `Is drake the best artist of all time`) {
    magicoutput.innerHTML = `Not even top 5`;
  } else if (answer == 0) {
    magicoutput.innerHTML = `Without a Doubt.`;
  } else if (answer == 1) {
    magicoutput.innerHTML = `As I see it, yes.`;
  } else if (answer == 2) {
    magicoutput.innerHTML = `Concentrate and ask again.`;
  } else if (answer == 3) {
    magicoutput.innerHTML = `Don't count on it.`;
  } else if (answer == 4) {
    magicoutput.innerHTML = `Outlook not so good.`;
  } else if (answer == 5) {
    magicoutput.innerHTML = `Absoloutly not`;
  } else {
    magicoutput.innerHTML =
      `How dare you doubt me`.innerHTml = `please ask a question`;
  }
}
