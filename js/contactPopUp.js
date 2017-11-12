/* Create contact */

const sideNavContact = document.querySelector(".sidenav-contact");
const addContact = document.querySelector(".add-contact");
const main = document.querySelector(".main");
const fullName = document.querySelector(".full-name");
const closePaneEdit = document.querySelector(".close-pane button:first-child");
const closePaneClose = document.querySelector(".close-pane button:last-child");
const formCancelBtn = document.querySelector(".edit-contact div:last-child button:last-child");
const contactPaneInputField = document.querySelectorAll(".contact-input-field");
const formConfirmBtn = document.querySelector(".edit-contact div:last-child button:first-child");
const conImg = document.querySelector(".contact-name img");

addContact.addEventListener('click', contactPane);

function contactPane() {
    fullName.innerText = "Create New Contact"
    main.style.display = 'none';
    contactBox.style.display = "block";
    closePaneEdit.style.display = "none";
    for( let i = 0 ; i < contactPaneInputField.length ; i++ )
    contactPaneInputField[i].removeAttribute("disabled");
    openNavbar = true;
    closeNav();
}

closePaneClose.addEventListener("click", exitAddContactPane);
formCancelBtn.addEventListener("click", exitAddContactPane);

function exitAddContactPane() {
    main.style.display = "block";
    contactBox.style.display = "none";
    closePaneEdit.removeAttribute("display");
    for( let i = 0 ; i < contactPaneInputField.length ; i++ )
    contactPaneInputField[i].setAttribute("disabled","true");
    resetForm();
}

closePaneEdit.addEventListener("click", editContact);

function editContact() {
    for( let i = 0 ; i < contactPaneInputField.length ; i++ )
    if( contactPaneInputField[i].hasAttribute("disabled") )
    contactPaneInputField[i].removeAttribute("disabled");
}

sideNavContact.addEventListener("click", resetContactPage);

function resetContactPage() {
    exitAddContactPane();
    openNavbar = true;
    closeNav();
}


var index1;

function contactSelect(index) {
    index1 = index;
    main.style.display = 'none';
    contactBox.style.display = "block";
    let name = contInfo[index].querySelector(".name").innerText;
    let numb = contInfo[index].querySelector(".number").innerText;
    let lName = name.substring( 0 , name.indexOf(','));
    let fName = name.substring( name.lastIndexOf(' ')+1 , name.length);
    fullName.innerText = fName + " " + lName;
    for ( let d of data ) {
        if ( (d.contactInfo.firstName + " " + d.contactInfo.lastName) == (fName + " " + lName) && numb == d.contactInfo.phoneNumber) {
            let formDetails = document.querySelectorAll(".contact-input-field");
            formDetails[0].value = fName;
            formDetails[1].value = lName;
            formDetails[2].value = numb;
            formDetails[3].value = d.contactInfo.birthday;
            formDetails[4].value = d.contactInfo.address;
            conImg.setAttribute("src", d.contactInfo.imageUrl);
        }
    }
}

formConfirmBtn.addEventListener("click", confirmContact);

function confirmContact() {
    let fName = contactPaneInputField[0].value.trim();
    let lName = contactPaneInputField[1].value.trim();
    let num = contactPaneInputField[2].value.trim();
    let bDay = contactPaneInputField[3].value.trim();
    let address = contactPaneInputField[4].value.trim();
    if(fullName.innerText == 'Create New Contact' && !closePaneClose.hasAttribute("disabled")) {
        let firstChar = lName.charAt(0).toUpperCase();
        let contactObject01 = new contactObject( fName, lName, bDay, address, num, "" );
        let lexicalObjects01 = new lexicalObjects( firstChar, contactObject01);
        data[data.length] = lexicalObjects01;
    }
    else {
        data[index1].contactInfo.firstName = fName;
        data[index1].contactInfo.lastName = lName;
        data[index1].contactInfo.phoneNumber = num;
        data[index1].contactInfo.birthday = bDay;
        data[index1].contactInfo.address = address;
    }
    document.querySelector(".contacts").innerHTML = "";
    data.sort(sortAsc);
    loadContacts();
    exitAddContactPane();

    if (openNavbar == false) {
        openNavbar = true;
        closeNav();
    }
}

/* Reset form */

function resetForm() {
    contactPaneInputField[0].value = "";
    contactPaneInputField[1].value = "";
    contactPaneInputField[2].value = "";
    contactPaneInputField[3].value = "";
    contactPaneInputField[4].value = "";
    conImg.setAttribute("src","./images/I0pBwxh6_400x400.jpg");
}