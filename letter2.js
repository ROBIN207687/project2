const text =
  "hey👋 Miss Beautifull ,  I wnna Say Something For a long time. 😉First Time apni feeling share kar rha hu islye hasio mat. Tere baare Kuch likha hai , Ki tu kitni Pyaari🥰, kitni kind😘, or Teri Smile killer hai yaar😂😍, Your laughter, And your every thing is special. Now i feel like Life is a colorless without your presence by my side.  And in my heart Special place that only your friendship. but me tujhe kabhi crush nhi banana chata kyoki crush kabhi nhi milti🥹🥹 , islye me chata hu ki Miss NEHA RAI sirf meri hoke rahee😉🤞 . Jese tu chahti hai ki koi sirf mera ho vese hi I want you Only 🥹, .Or koi mera jesa nhi hoga dusra jo teri itni carega Jo meri tarah tujhe har time secretly notice karega😂😉.. Ek baar trust karke dekh yaar 🥰🤞😊mujhse jyada teri har choti cheej ka khyal koi nhi rakhega shart lagata hu me is baat pe😎😎,... or me bhi chata hu ki tu kabhi mere liye jealous ho jese me feel karta hu tere kisi or ke baare me baat karte hue🤨😠,..or tujhse apne saare secrects share karna chahta hu jo aajtak ksi se nhi kiye kyoki tu sabse jyada special,  Because I like You secretly❤️😘";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();