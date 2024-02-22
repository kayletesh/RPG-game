let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [
  "stick",
  //   "dagger",
  //   "shortSword",
  //   "spear",
  //   "greatSword",
  //   "fireBlast",
];
// buttons
const buttonStore = document.querySelector("#buttonStore");
const buttonTavern = document.querySelector("#buttonTavern");
const buttonVenture = document.querySelector("#buttonVenture");
// stats and such
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth')

// store buttons
function goStore() {
  console.log("Going to store.");
}

// Tavern functions
function goTavern() {
  console.log("Going to tavern.");
}
// marsh functions

function ventureForth() {
  console.log("Setting out on an adventure!!")
}

// //final boss code
// function fightFinalBoss() {
//   console.log("Fighting Final Boss.");
// }

// initialize buttons

buttonStore.addEventListener('click', (goStore))
buttonTavern.addEventListener('click', (goTavern))
buttonVenture.addEventListener('click', (ventureForth))