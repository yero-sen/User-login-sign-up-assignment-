// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let userNamInEl = document.getElementById('usernameSIn');
let userNamUpEl = document.getElementById('usernameSUp');
let userPassInEl = document.getElementById('userpassSIn');
let userPassUpEl = document.getElementById('userpassSUp');
let userPassConfirmEl = document.getElementById('userpassConfirm');

// Global Variables
let membershipList = loadInfo();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  // Get the info
  let userNamUp = userNamUpEl.value;

  // Check if the username is available
  let index = findUser(membershipList, userNamUp);

  if (index !== -1) {
    alert('User name already in use.');
  } else {
    contSignUp();
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  // Get the info
  let userNamIn = userNamInEl.value;
  let userPassIn = userPassInEl.value;

  for (let i = 0; i < membershipList.length; i++) {
    if (userNamIn === membershipList[i].name && userPassIn === membershipList[i].password) {
      alert('SignIn Successful.');
    } else if (userNamIn !== membershipList[i].name || userPassIn !== membershipList[i].password) {
      alert('Incorrect imformation.');
    } else {
      alert('Error!');
    }
  }
}



// Helper Functions
function member(userName, userPass) {
  return {
    name: userName,
    password: userPass
  };
}

// Save the members informations
function saveInfo() {
  localStorage.setItem('membershipList', JSON.stringify(membershipList));
}

// Load the members informations
function loadInfo() {
  let membershipStr = localStorage.getItem('membershipList');
  return JSON.parse(membershipStr) ?? [];
}

function findUser(memberInfo, usernam) {
  for (let i = 0; i < memberInfo.length; i++) {
    if (usernam === memberInfo[i].name) {
      return i;
    }
  }
  return -1;
}

function contSignUp() {
  let userNUp = userNamUpEl.value;
  let userPassUp = userPassUpEl.value;
  let userPassCon = userPassConfirmEl.value;

  // Make sure the input fields are not empty and that the password and confirm password values match.
  if (userNUp === '' || userPassUp === '' || userPassCon === '') {
    alert('Not enough information filled it.');
  } else if (userPassUp != userPassCon) {
    alert("Passwords doesn't match.");
  } else {
    // Add to the membership list
    membershipList.push(member(userNUp, userPassUp));
    saveInfo();
    alert('Sign up has been completed');
  }
}