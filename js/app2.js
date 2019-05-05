var developers = getData();

/*
    STEP 1:
        1- Get developers oject from LocalStorage
        2- Render on DOM
*/

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

function renderDOM(developers) {
    for (i = 0; i < developers.length; i++) {
        createCard(developers);
    }
}


/* 
    STEP 2: 
        1- Taking Values from Form
        2- Storing them into Developers Object
        3- Adding New Card in Dom
*/



// Getting Form Values and adding them into developer object function

function addCard() {

    var name = document.querySelector('#name').value;
    var designation = document.querySelector('#designation').value;
    var mail = document.querySelector('#mail').value;
    var phone = document.querySelector('#phone').value;
    var skills = document.querySelector('#skills').value;
    var salary = document.querySelector('#salary').value;
    var linkedin = document.querySelector('#linkedin').value;
    var facebook = document.querySelector('#facebook').value;

    var myValues = {
        "name": name,
        "designation": designation,
        "mail": mail,
        "phone": phone ,
        "skills" : skills,
        "salary": salary,
        "linkedin": linkedin ,
        "facebook": facebook
    }

    developers.push(myValues);
    var myArrayValue = [];
    myArrayValue.push(myValues);

    saveData(developers);

    createCard(myArrayValue);

    
}


function createCard(valuesForCard) {

    for (i = 0; i < valuesForCard.length; i++) {
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
    skills_p.className = "card_employee_skills";

    facebook_icon.className = "fab fa-github-square right-align";
    linkedin_icon.className = "fab fa-facebook square right-align";


        name_p.textContent = `${valuesForCard[i]["name"]}`;
        designation_p.textContent = `${valuesForCard[i]["designation"]}`;
        email_p.textContent = `${valuesForCard[i]["email"]}`;
        // skills_p.textContent = `${valuesforCard[i]["skills"]}`;
        salary_p.textContent = `${valuesForCard[i]["salary"]}`;
        phone_p.textContent = `${valuesForCard[i]["phone"]}`;
    



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
    card_div.appendChild(facebook_icon);
    card_div.appendChild(linkedin_icon);
    }
 }


/*
    MAIN LOGIC
*/

window.onload = function() {
        renderDOM(developers);
  };

const button = document.querySelector("#send");

button.addEventListener('click', (e) => {
    e.preventDefault();
    addCard();
})