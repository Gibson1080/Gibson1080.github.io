//validate the contact us form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const button = document.getElementById("send");
button.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
  } else {
    setSuccessFor(phone);
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccessFor(message);
  }
}
setErrorFor = (input, message) => {
  // const formControl = input.parentElement; //form-control
  // console.log(formControl);
  const error = document.getElementById("error");

  //add error message inside small
  error.innerText = message;

  //add error class
  // formControl.className = "form-control error";
};

setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

isEmail = (email) => {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    email
  );
};

// get all the booked buttons
const bookButtons = document.querySelectorAll("#bookpackage");
// loop through the buttons
bookButtons.forEach((button) => {
  // add event listener to each button
  button.addEventListener("click", (e) => {
    // get the button text
    const buttonText = e.target.innerText;

    // check if the button text is book
    if (buttonText === "Book") {
      // change the button text to booked
      e.target.innerText = "Booked";
      //change color to red
      e.target.style.backgroundColor = "red";
    } else {
      // change the button text to book
      e.target.innerText = "Book";
    }
  });
});

const error = document.getElementById("error");
const subscribe = document.getElementById("subscribe");
const emailsubscribe = document.getElementById("emailsubscribe");
console.log(subscribe);
subscribe.addEventListener("click", (e) => {
  // e.preventDefault();
  if (emailsubscribe.value === "") {
    error.innerHTML = "Please enter your email address";
    alert("Please enter your email address");
  } else {
    alert("Thank you for subscribing");
  }
});

const bookLinks = document.querySelectorAll("#book");
//loop through the links
bookLinks.forEach((link) => {
  //add an event listener to each link
  link.addEventListener("click", (e) => {
    //prevent the default behaviour of the link
    e.preventDefault();
    //change the text of the link to booked
    link.textContent = "Booked";
    //change the color of the link to red
    link.style.color = "red";
    link.style.backgroundColor = "white";
  });
});

const aboutimage = document.getElementById("aboutimage");

aboutimage.addEventListener("click", function () {
  console.log("clicked");
  aboutimage.style.transform = "rotate(180deg)";
  aboutimage.style.transition = "all 1s";
});
