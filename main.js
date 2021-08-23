// תרגיל 1+2

var testedArray = [];
var coronaForm = document.getElementById("coronaForm");
var submitCorona = document.getElementById("submitCorona");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var birthYear = document.getElementById("birthYear");
var id = document.getElementById("userId");
var city = document.getElementById("userCity");

coronaForm.onsubmit = function (refresh) {
    refresh.preventDefault();
    var testedPerson = {
        firstName: firstName.value,
        lastName: lastName.value,
        yearOfBitrh: birthYear.value,
        id: id.value,
        city: city.value
    }
    var date = new Date();
    testedPerson.time = (`${date.getHours()}:${date.getMinutes()}`)
    testedPerson.date = (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
    testedArray.push(testedPerson)
    for (i = 0; i < testedArray.length; i++) {
        for (j = i + 1; j < testedArray.length; j++) {
            if (testedArray[i].id == testedArray[j].id) {
                testedArray.pop()
                console.log("id number already exists")
            }
        }
    }
    // תרגיל 4
    for (i = 0; i < testedArray.length; i++) {
        document.getElementById("fourDiv").innerText = ` ${testedArray[i].firstName} ${testedArray[i].lastName} ${testedArray[i].yearOfBitrh}  ${testedArray[i].id} ${testedArray[i].city} ${testedArray[i].time} ${testedArray[i].date} `
    }
    // תרגיל 5
    for (i = 0; i < testedArray.length; i++) {
        document.getElementById("divFive").innerHTML += `<p> ${testedArray[i].firstName} ${testedArray[i].lastName} ${testedArray[i].yearOfBitrh}  ${testedArray[i].id} ${testedArray[i].city} ${testedArray[i].time} ${testedArray[i].date}</p> `
    }
}


//  תרגיל 2+3
var testedOne = {
    firstName: "Bamba",
    lastName: "Lulu",
    yearOfBitrh: 1998,
    id: "351246",
    city: "Lod city"
}
var testedTwo = {
    firstName: "Moti",
    lastName: "Lohim",
    yearOfBitrh: 2006,
    id: "356",
    city: "Ashdod"
}
var testedThree = {
    firstName: "Johny",
    lastName: "Bravo",
    yearOfBitrh: 1990,
    id: "7",
    city: "Hollywood"
}
var date = new Date();
testedOne.time = (`${date.getHours()}:${date.getMinutes()}`)
testedOne.date = (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
testedArray.push(testedOne)
testedTwo.time = (`${date.getHours()}:${date.getMinutes()}`)
testedTwo.date = (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
testedArray.push(testedTwo)
testedThree.time = (`${date.getHours()}:${date.getMinutes()}`)
testedThree.date = (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
testedArray.push(testedThree)

// תרגיל 6
firstName.oninput = function () {
    firstName.value = firstName.value.toUpperCase();
}
lastName.oninput = function () {
    lastName.value = lastName.value.toUpperCase();
}
city.oninput = function () {
    city.value = city.value.toUpperCase();
}
console.log(testedArray);

// תרגיל 7
var searchByName = document.getElementById("searchByName");
var nameSearcher = document.getElementById("nameSearcher");
var divSeven = document.getElementById("divSeven");
nameSearcher.onclick = function () {
    for (var i = 0; i < testedArray.length; i++) {
        if (testedArray[i].firstName == searchByName.value) {
            divSeven.innerHTML += (`<p>${testedArray[i].firstName} ${testedArray[i].lastName} ${testedArray[i].yearOfBitrh}  ${testedArray[i].id} ${testedArray[i].city} ${testedArray[i].time} ${testedArray[i].date}</p>`)
        }
    }
    if (divSeven.innerHTML.length < 2) {
        divSeven.innerHTML += `<p>name does not exist</p>`
    }
}



// תרגיל 8
var searchById = document.getElementById("searchById");
var idSearcher = document.getElementById("idSearcher");
var divEight=document.getElementById("divEight");
idSearcher.onclick = function () {
    for (var i = 0; i < testedArray.length; i++) {
        if (testedArray[i].id == searchById.value) {
       divEight.innerHTML += (`<p>${testedArray[i].firstName} ${testedArray[i].lastName} ${testedArray[i].yearOfBitrh}  ${testedArray[i].id} ${testedArray[i].city} ${testedArray[i].time} ${testedArray[i].date}</p>`)

        }

    }
if(divEight.innerHTML.length<2){
    divEight.innerHTML+=`<p>Id does not exist</p>`
}
}