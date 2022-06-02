// variables
let count = 0
let getSelected = ""
const homeSection = document.getElementById('homeSection')
const questionBloc = document.getElementById('question-bloc')
const radioGroup = document.querySelectorAll('.radio-group')
const firstSection = document.getElementById("first-section")
const twoSection = document.getElementById('two-section')
const thirdSection = document.getElementById('third-section')
const fourSection = document.getElementById('four-section')
const fiveSection = document.getElementById('five-section')
const sixSection = document.getElementById("six-section")
const sevenSection = document.getElementById('seven-section')
const eightSection = document.getElementById('eight-section')
const nineSection = document.getElementById('nine-section')
const tenSection = document.getElementById('ten-section')
const elevenSection = document.getElementById("eleven-section")
const twelveSection = document.getElementById('twelve-section')
const thirteenSection = document.getElementById('thirteen-section')
const fourteenSection = document.getElementById('fourteen-section')
const fifteenSection = document.getElementById('fifteen-section')
const succesSection = document.getElementById('success-section')
const failSection = document.getElementById('fail-section')
let printScore = document.getElementById('printScore')
let printScoreFail = document.getElementById('printScoreFail')
let nameSucces = document.getElementById('nameSucces')
let emailSucces = document.getElementById('emailSucces')
let nameFail = document.getElementById('nameFail')
let emailFail = document.getElementById('emailFail')
let section = document.querySelectorAll('section')
let mac = document.querySelectorAll('.innerbar')
let tex = document.querySelectorAll('.text')
let inputData = document.querySelector('input-data')
let btnaccueilSucces = document.getElementById('btn-accueilSucces')
let btnaccueilFail = document.getElementById('btn-accueilFail')
let btnSuivant1 = document.getElementById('btn-suivant1')
let btnSuivant2 = document.getElementById('btn-suivant2')
let btnSuivant3 = document.getElementById('btn-suivant3')
let btnSuivant4 = document.getElementById('btn-suivant4')
let btnSuivant5 = document.getElementById('btn-suivant5')
let btnSuivant6 = document.getElementById('btn-suivant6')
let btnSuivant7 = document.getElementById('btn-suivant7')
let btnSuivant8 = document.getElementById('btn-suivant8')
let btnSuivant9 = document.getElementById('btn-suivant9')
let btnSuivant10 = document.getElementById('btn-suivant10')
let btnSuivant11 = document.getElementById('btn-suivant11')
let btnSuivant12 = document.getElementById('btn-suivant12')
let btnSuivant13 = document.getElementById('btn-suivant13')
let btnSuivant14 = document.getElementById('btn-suivant14')
let btnSuivant15 = document.getElementById('btn-suivant15')
let btnQuitter = document.querySelectorAll('.btn-quitter')



// event listeners
eventListeners()

function eventListeners() {

  document.querySelector('#form').addEventListener('submit', newUser)
  
  radioGroup[0].addEventListener('click', enableButton1)
  radioGroup[1].addEventListener('click', enableButton2)
  radioGroup[2].addEventListener('click', enableButton3)
  radioGroup[3].addEventListener('click', enableButton4)
  radioGroup[4].addEventListener('click', enableButton5)
  radioGroup[5].addEventListener('click', enableButton6)
  radioGroup[6].addEventListener('click', enableButton7)
  radioGroup[7].addEventListener('click', enableButton8)
  radioGroup[8].addEventListener('click', enableButton9)
  radioGroup[9].addEventListener('click', enableButton10)
  radioGroup[10].addEventListener('click', enableButton11)
  radioGroup[11].addEventListener('click', enableButton12)
  radioGroup[12].addEventListener('click', enableButton13)
  radioGroup[13].addEventListener('click', enableButton14)
  radioGroup[14].addEventListener('click',enableButton15)
  btnSuivant1.addEventListener('click', bttnSuivant1)
  btnSuivant2.addEventListener('click', bttnSuivant2)
  btnSuivant3.addEventListener('click', bttnSuivant3)
  btnSuivant4.addEventListener('click', bttnSuivant4)
  btnSuivant5.addEventListener('click', bttnSuivant5)
  btnSuivant6.addEventListener('click', bttnSuivant6)
  btnSuivant7.addEventListener('click', bttnSuivant7)
  btnSuivant8.addEventListener('click', bttnSuivant8)
  btnSuivant9.addEventListener('click', bttnSuivant9)
  btnSuivant10.addEventListener('click', bttnSuivant10)
  btnSuivant11.addEventListener('click', bttnSuivant11)
  btnSuivant12.addEventListener('click', bttnSuivant12)
  btnSuivant13.addEventListener('click', bttnSuivant13)
  btnSuivant14.addEventListener('click', bttnSuivant14)
  btnSuivant15.addEventListener('click', bttnSuivant15)
  btnaccueilSucces.addEventListener('click', acceuilSucces)
  btnaccueilFail.addEventListener('click', acceuilFail)


  // btnSuivant[1].addEventListener('click', btnSuivant2)
}


// functions
let valid = true
let timer = null
let names
let emails

// management the first question page
function newUser(e) {
  e.preventDefault()
  // read data of name and email

  names = document.getElementById('name').value
  emails = document.getElementById('email').value


  if ((names.length >=1) && (emails.length >= 1)) {
     // add class homepage to home section
  homeSection.classList.add('homePage')
  // set timer for the first question
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[0].style.width = progress + '%'
    tex[0].textContent = width

    if (width == 0) {
      enableButton1()
      btnSuivant1.click()
    }
  }, 1000)
  // display first section
  firstSection.style.display = 'block' 
  } else{
    document.getElementById('name').style.border = '1px solid red'
   document.getElementById('email').style.border = '1px solid red'
   if(names<1){
    document.querySelector('.errorname').style.display = 'block'
   }
   if(emails<1){
    document.querySelector('.errormail').style.display = 'block'
   }
  }

  
  //   //  // add name and email to local storage
  //   //   addLocalStorage(name,email)
}

// management the second question page
function bttnSuivant1() {

  clearInterval(timer)
  timer = null

  firstSection.style.display = 'none'
  twoSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[1].style.width = progress + '%'
    tex[1].textContent = width

    if (width == 0) {
      enableButton2()
      btnSuivant2.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == ".js") {
      count += 1
    }

  }
  console.log(count);



}
// management the third question page
function bttnSuivant2() {
  clearInterval(timer)
  timer = null
  twoSection.style.display = 'none'
  thirdSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[2].style.width = progress + '%'
    tex[2].textContent = width

    if (width == 0) {
      enableButton3()
      btnSuivant3.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "sum()") {
      count += 1
    }
  }
  console.log(count);

}

// manage the four page

function bttnSuivant3() {
  clearInterval(timer)
  timer = null
  thirdSection.style.display = 'none'
  fourSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[3].style.width = progress + '%'
    tex[3].textContent = width

    if (width == 0) {
      enableButton4()
      btnSuivant4.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "script") {
      count += 1
    }
  }
  console.log(count);

}
// manage the five question
function bttnSuivant4() {

  clearInterval(timer)
  timer = null
  fourSection.style.display = 'none'
  fiveSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[4].style.width = progress + '%'
    tex[4].textContent = width

    if (width == 0) {
      enableButton5()
      btnSuivant5.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "join()") {
      count += 1
    }
  }
  console.log(count);


}

// manage the six question
function bttnSuivant5() {
  clearInterval(timer)
  timer = null
  fiveSection.style.display = 'none'
  sixSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[5].style.width = progress + '%'
    tex[5].textContent = width

    if (width == 0) {
      enableButton6()
      btnSuivant6.click()
    }
  }, 1000)

  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "body") {
      count += 1
    }
  }
  console.log(count);

}

// manage the seven question
function bttnSuivant6() {
  clearInterval(timer)
  timer = null
  sixSection.style.display = 'none'
  sevenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[6].style.width = progress + '%'
    tex[6].textContent = width

    if (width == 0) {
      enableButton7()
      btnSuivant7.click()
    }
  }, 1000)


  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "//Ceci est un commentaire") {
      count += 1
    }
  }
  console.log(count);
}

// manage the eight section
function bttnSuivant7() {
  clearInterval(timer)
  timer = null
  sevenSection.style.display = 'none'
  eightSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[7].style.width = progress + '%'
    tex[7].textContent = width

    if (width == 0) {
      enableButton8()
      btnSuivant8.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "faux") {
      count += 1
    }
  }
  console.log(count);
}

// manage the nine section
function bttnSuivant8() {
  clearInterval(timer)
  timer = null
  eightSection.style.display = 'none'
  nineSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[8].style.width = progress + '%'
    tex[8].textContent = width

    if (width == 0) {
      enableButton9()
      btnSuivant9.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "while (i <= 5)") {
      count += 1
    }
  }
  console.log(count);

}

// manage the ten section
function bttnSuivant9() {

  clearInterval(timer)
  timer = null
  nineSection.style.display = 'none'
  tenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[9].style.width = progress + '%'
    tex[9].textContent = width

    if (width == 0) {
      enableButton10()
      btnSuivant10.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "tab = new Array(10)") {
      count += 1
    }
  }
  console.log(count);

}
//  manage the eleven section
function bttnSuivant10() {
  clearInterval(timer)
  timer = null
  tenSection.style.display = 'none'
  elevenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[10].style.width = progress + '%'
    tex[10].textContent = width

    if (width == 0) {
      enableButton11()
      btnSuivant11.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "Un pour chaque argument") {
      count += 1
    }
  }
  console.log(count);


}
// manage the the twelve section
function bttnSuivant11() {
  clearInterval(timer)
  timer = null
  elevenSection.style.display = 'none'
  twelveSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[11].style.width = progress + '%'
    tex[11].textContent = width

    if (width == 0) {
      enableButton12()
      btnSuivant12.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "Y") {
      count += 1
    }
  }
  console.log(count);


}
// manage the thirteen section
function bttnSuivant12() {
  clearInterval(timer)
  timer = null
  twelveSection.style.display = 'none'
  thirteenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[12].style.width = progress + '%'
    tex[12].textContent = width

    if (width == 0) {
      enableButton13()
      btnSuivant13.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "keypress") {
      count += 1
    }
  }
  console.log(count);


}
// manage the fourteen section
function bttnSuivant13() {
  clearInterval(timer)
  timer = null
  thirteenSection.style.display = 'none'
  fourteenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[13].style.width = progress + '%'
    tex[13].textContent = width

    if (width == 0) {
      enableButton14()
      btnSuivant14.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "A") {
      count += 1
    }
  }
  console.log(count);

}
// manage the fifteen section
function bttnSuivant14() {
  clearInterval(timer)
  timer = null
  fourteenSection.style.display = 'none'
  fifteenSection.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    mac[14].style.width = progress + '%'
    tex[14].textContent = width

    if (width == 0) {
      enableButton15()
      btnSuivant15.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "return") {
      count += 1
    }
  }
  console.log(count);

}
// the end section
function bttnSuivant15() {
  clearInterval(timer)
  timer = null
  fifteenSection.style.display = 'none'
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "charAt()") {
      count += 1
    }
  }
  console.log(count);

  if (count >= 7) {
    nameSucces.textContent = names
    emailSucces.textContent = emails
    succesSection.style.display = 'block'
    printScore.textContent = count + '/15'
  } else {
    nameFail.textContent = names
    emailFail.textContent = emails
    failSection.style.display = 'block'
    printScoreFail.textContent = count + '/15'
  }

}

btnQuitter.forEach(btn => {
  btn.addEventListener('click', () => {
    if (count >= 7) {
      nameSucces.textContent = names
      emailSucces.textContent = emails
      succesSection.style.display = 'flex'
      questionBloc.style.display ='none'
      printScore.textContent = count + '/15'
    } else {
      nameFail.textContent = names
      emailFail.textContent = emails
      failSection.style.display = 'flex'
      questionBloc.style.display ='none'
      printScoreFail.textContent = count + '/15'
    }
    btnaccueilFail.addEventListener('click', acceuilFail)
    btnaccueilSucces.addEventListener('click', acceuilSucces)
  })
})
function enableButton1() {
  btnSuivant1.removeAttribute('disabled')
  btnSuivant1.style.background = 'green'
}
function enableButton2() {
  btnSuivant2.removeAttribute('disabled')
  btnSuivant2.style.background = 'yellow'
}
function enableButton3() {
  btnSuivant3.removeAttribute('disabled')
  btnSuivant3.style.background = 'blue'
}
function enableButton4() {
  btnSuivant4.removeAttribute('disabled')
  btnSuivant4.style.background = 'black'
}
function enableButton5() {
  btnSuivant5.removeAttribute('disabled')
  btnSuivant5.style.background = 'purple'
}
function enableButton6() {
  btnSuivant6.removeAttribute('disabled')
  btnSuivant6.style.background = 'blue'
}
function enableButton7() {
  btnSuivant7.removeAttribute('disabled')
  btnSuivant7.style.background = 'blue'
}
function enableButton8() {
  btnSuivant8.removeAttribute('disabled')
  btnSuivant8.style.background = 'blue'
}
function enableButton9() {
  btnSuivant9.removeAttribute('disabled')
  btnSuivant9.style.background = 'blue'
}
function enableButton10() {
  btnSuivant10.removeAttribute('disabled')
  btnSuivant10.style.background = 'blue'
}
function enableButton11() {
  btnSuivant11.removeAttribute('disabled')
  btnSuivant11.style.background = 'blue'
}
function enableButton12() {
  btnSuivant12.removeAttribute('disabled')
  btnSuivant12.style.background = 'blue'
}
function enableButton13() {
  btnSuivant13.removeAttribute('disabled')
  btnSuivant13.style.background = 'blue'
}
function enableButton14() {
  btnSuivant14.removeAttribute('disabled')
  btnSuivant14.style.background = 'blue'
}
function enableButton15() {
  btnSuivant15.removeAttribute('disabled')
  btnSuivant15.style.background = 'blue'
}
function acceuilSucces() {
  document.location.reload(true)
}
function acceuilFail() {
  document.location.reload(true)
}