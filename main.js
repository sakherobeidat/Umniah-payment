// Start of Getting items
let divContainsSearch = document.querySelector(".search");
let liContainsSearchIcon = document.querySelector("#first-li");
let searchIcon = document.querySelector(".hd .search #first-li> i");
let spanOfIconX = document.querySelector(".hd .search #first-li span");
let burger1 = document.querySelector("div.burger1");
let burger2 = document.querySelector("div.burger2");
let navigation1 = document.querySelector(".nav1");
let navigation2 = document.querySelector(".nav2");
let inputSection1 = document.querySelector(".pay > form > input#phone");
let sectionOneBtn1 = document.querySelector(".pay button#one");
let sectionOneBtnReset = document.querySelector(".pay button#two");
let sectionOfPayment = document.querySelector("section.paym");
let h3One = document.querySelector("h3.p");
let firstPaymentMethod = document.querySelector(".contpay");
let h3Two = document.querySelector("h3.p.s");
let secondPaymentMethod = document.querySelector(".type");
let thirdPaymentMethod = document.querySelector(".amount");
let fourthPaymentMethod = document.querySelector(".paym > div.pinN");
let boxChoices1 = Array.from(document.querySelectorAll(".box"));
let boxChoices2 = Array.from(document.querySelectorAll(".box2"));
let sectionTwoBtn1 = document.querySelector(".amount button.confirm");
let sectionTwoBtn2 = document.querySelector(".pinN button.confirm");
let lastInputValidation = document.querySelector(".pinN .lastInp");
// End of Getting items
// classes to use active for showing ----- wrong for input if wrong
// Start clicked functions on search icon and X
searchIcon.onclick = function () {
  divContainsSearch.classList.add("clicked");
};
spanOfIconX.onclick = function () {
  divContainsSearch.classList.remove("clicked");
};
// End clicked functions on search icon and X

// Start burger and nav's to view and hide
burger1.onclick = () => {
  burger1.classList.toggle("clicked");
  navigation1.classList.toggle("active");
};
burger2.onclick = () => {
  burger2.classList.toggle("clicked");
  navigation2.classList.toggle("active");
};
// End burger and nav's to view and hide
// Start input phone number validation
inputSection1.onkeyup = function changed() {
  let val = this.value;
  if (val.length === 3) {
    if (val !== "078") {
      inputSection1.classList.add("wrong");
      setTimeout(() => {
        this.value = "";
        inputSection1.classList.remove("wrong");
      }, 1500);
    }
  }
};

// End input phone number validation
// Start buttons submit
sectionOneBtn1.onclick = function submitButtonClick(event) {
  let count = 0;
  event.preventDefault();
  if (inputSection1.value.length === 10 && count === 0) {
    sectionOfPayment.classList.toggle("active");
    h3One.classList.toggle("active");
    firstPaymentMethod.classList.toggle("active");
    count++;
  } else {
    inputSection1.classList.add("wrong");
    setTimeout(() => {
      inputSection1.value = "";
      inputSection1.classList.remove("wrong");
    }, 1500);
    return false;
  }
};
sectionOneBtnReset.onclick = function submitButtonClick(event) {
  event.preventDefault();
  boxChoices1.forEach(r => {
    r.classList.remove("active");
  });
  boxChoices2.forEach(r => {
    r.classList.remove("active");
  });
  sectionOfPayment.classList.remove("active");
  h3One.classList.remove("active");
  firstPaymentMethod.classList.remove("active");
  h3Two.classList.remove("active");
  secondPaymentMethod.classList.remove("active");
  thirdPaymentMethod.classList.remove("active");
  fourthPaymentMethod.classList.remove("active");
};
sectionTwoBtn1.onclick = function submitButtonClick(event) {
  event.preventDefault();
};
sectionTwoBtn2.onclick = function submitButtonClick(event) {
  event.preventDefault();
};
// End buttons submit

// Start boxs choise click
boxChoices1.forEach(function (e, i) {
  e.addEventListener("click", function () {
    if (this.classList.contains("active") === true) {
      this.classList.remove("active");
      boxChoices1.forEach(r => {
        r.classList.remove("active");
      });
      h3Two.classList.remove("active");
      secondPaymentMethod.classList.remove("active");
      fourthPaymentMethod.classList.remove("active");
      if (
        thirdPaymentMethod.classList.contains("active") === true &&
        secondPaymentMethod.classList.contains("active") === false
      ) {
        boxChoices2.forEach(function (e) {
          e.classList.remove("active");
          thirdPaymentMethod.classList.remove("active");
        });
      }
    } else {
      boxChoices1.forEach(r => {
        r.classList.remove("active");
      });
      this.classList.add("active");
      if (i !== 1 && this.classList.contains("active")) {
        fourthPaymentMethod.classList.remove("active");
        h3Two.classList.add("active");
        secondPaymentMethod.classList.add("active");
      } else {
        h3Two.classList.remove("active");
        secondPaymentMethod.classList.remove("active");
        fourthPaymentMethod.classList.add("active");
      }
    }
  });
});

boxChoices2.forEach(function (e) {
  e.addEventListener("click", function () {
    if (this.classList.contains("active") === true) {
      this.classList.remove("active");
      boxChoices2.forEach(r => {
        r.classList.remove("active");
      });
      thirdPaymentMethod.classList.remove("active");
    } else {
      boxChoices2.forEach(r => {
        r.classList.remove("active");
      });
      this.classList.add("active");
      thirdPaymentMethod.classList.add("active");
    }
  });
});
lastInputValidation.onkeyup = function changed() {
  let val = this.value;
  if (val.length < 13) {
    lastInputValidation.classList.add("wrong");
  } else lastInputValidation.classList.remove("wrong");
};
// End boxs choise click
