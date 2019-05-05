

// ============================================
// Step - 1 TAKE VALUES FROM FORM
// ============================================

// ============================================
// Step - 2 Store Them into object
// ============================================

// ============================================
// Step - 3 PUSH THAT OBJECT INTO LOCAL STORAGE
// ============================================

// ============================================
// Step - 4 TAKE BACK THAT STRING FRIM LS AND 
//          STORE IT INSIDE AN OBJECT AGAIN
// ============================================

// ============================================
// Step - 5 RENDER THEM INTO DOM
// ============================================


// RETRIVE DATA
function getData () {
    var returned_data = localStorage.getItem('developers');

    if (returned_data !== null) {
        return JSON.parse(returned_data);
    }

    else {
        var emptyArray = [];
        return emptyArray;
    }
}
// SAVE DATA

function saveData(developers) {
localStorage.setItem('developers', JSON.stringify(developers));
}

// var developers = getData();

var developers = getData();


var submitBtn = document.getElementById('send');

submitBtn.addEventListener('click', (e) => {

    e.preventDefault();
    createCard(developers);


});

// Saving Values into localStorage

function saveValuesInStorage() {

    var name = document.querySelector('#name').value;
    var designation = document.querySelector('#designation').value;
    var mail = document.querySelector('#mail').value;
    var phone = document.querySelector('#phone').value;
    var salary = document.querySelector('#salary').value;
    var skills = document.querySelector('#skills');
    var linkedin = document.querySelector('#linkedin').value;
    var facebook = document.querySelector('#facebook').value;

    var myValues = {
        "name": name,
        "designation": designation,
        "mail": mail,
        "phone": phone,
        "skills" : skills,
        "salary": salary,
        "linkedin": linkedin ,
        "facebook": facebook
    }

    console.log(myValues);

    developers.push(myValues);
    saveData(developers);
    createCard(myValues);
}


// Rerender DOM 

function renderDOM(developers) {
    document.querySelector('#card_holder').innerHTML = '';
    createCard(developers);
}

//Delete Cards 



 // Creating New Element

 function createCard(developers) {

    for (i = 0; i < developers.length; i++ ){
    
    const container = document.querySelector("#card_holder");
    const row_div = document.createElement('div');
    const col_div = document.createElement('div');
    const card_div = document.createElement('div');
    const seprator = document.createElement('hr');
   
    const name_p = document.createElement('p');
    const designation_p = document.createElement('p');
    const email_p = document.createElement('p');
    const phone_p = document.createElement('p');
    const skills_p = document.createElement('p');
    const salary_p = document.createElement('p');
   
    const facebook_icon = document.createElement('i');
    const linkedin_icon = document.createElement('i');
    
    row_div.className = "row";
    col_div.className = "col s12 m12 l12";
    card_div.className = "employee_card";
    
    salary_p.className = "card_employee_salary";
    name_p.className = "card_employee_name";
    designation_p.className = "card_employee_designation";
    email_p.className = "card_employee_email";
    phone_p.className = "card_employee_phone";

    facebook_icon.className = "fab fa-github-square right-align";
    linkedin_icon.className = "fab fa-facebook square right-align";


    name_p.textContent = `${developers[i]["name"]}`;
    designation_p.textContent = `${developers[i]["designation"]}`;
    email_p.textContent = `${developers[i]["email"]}`;
    salary_p.textContent = `${developers[i]["salary"]}`;
    skills_p.textContent = `${developers[i]["skills"]}`;
    phone_p.textContent = `${developers[i]["phone"]}`;

    // Appending elements

    container.appendChild(row_div);
    row_div.appendChild(col_div);
    col_div.appendChild(card_div);
    card_div.appendChild(name_p);
    card_div.appendChild(designation_p);
    card_div.appendChild(seprator);
    card_div.appendChild(email_p);
    card_div.appendChild(phone_p);
    card_div.appendChild(skills_p);
    card_div.appendChild(salary_p);
    card_div.appendChild(facebook_icon);
    card_div.appendChild(linkedin_icon);
    }
 }


