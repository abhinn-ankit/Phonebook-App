/* Loading contacts */

function lexicalObjects( nameChar , contactInfo) {
    this.nameChar = nameChar;
    this.contactInfo = contactInfo;
}

function contactObject( firstName, lastName, birthday, address, phoneNumber, imageUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.address = address;
    this.imageUrl = imageUrl;
    this.phoneNumber = phoneNumber;
}

var data = new Array();


function loadJSON(callback){
    var req=new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET','./json/contacts.json',true);
    req.onload = function(){
        if(req.readyState == 4 && req.status == "200"){
            callback(req.responseText);
        }
    };
    req.send(null);
}


loadJSON(function(response) {
    let contactData = JSON.parse(response);
    for (let i = 0; i < contactData.contacts.length; i++) {
        // noinspection JSAnnotator
        let lName = contactData.contacts[i].last_name;
        // noinspection JSAnnotator
        let firstChar = lName.charAt(0);
        let contactObject01 = new contactObject( contactData.contacts[i].first_name, contactData.contacts[i].last_name, contactData.contacts[i].birthday, contactData.contacts[i].Address, contactData.contacts[i].phoneNumber, contactData.contacts[i].imageUrl );
        let lexicalObjects01 = new lexicalObjects( firstChar, contactObject01);
        data[i] = lexicalObjects01;
    }

    // Sort Array

    function sortAsc(a , b) {
        if (a.contactInfo.lastName.toUpperCase() < b.contactInfo.lastName.toUpperCase())
            return -1;
        else if (a.contactInfo.lastName.toUpperCase() > b.contactInfo.lastName.toUpperCase())
            return 1;
        return 0;
    }

    data.sort(sortAsc);
    console.log(data);


    loadContacts();


});


function loadContacts() {

    let div = document.querySelector(".contacts");
    let i = 0;
    let firstChar = "9";
    do {
        let contactDiv = document.createElement("div");
        contactDiv.classList.add("contact-section");

        if( firstChar.toUpperCase() != data[i].nameChar.toUpperCase() ) {
            firstChar = data[i].nameChar;
            let letter = document.createElement("h2");
            letter.classList.add("letters");
            letter.append(firstChar);
            contactDiv.appendChild(letter);
        }
        let contactInfoDiv = document.createElement("div");
        contactInfoDiv.classList.add("contact-info");

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        let nameDivText = document.createTextNode( data[i].contactInfo.lastName + ", " + data[i].contactInfo.firstName );
        nameDiv.appendChild(nameDivText);

        let num = document.createElement("div");
        num.classList.add("number");
        num.append(data[i].contactInfo.phoneNumber);

        contactInfoDiv.appendChild(nameDiv);
        contactInfoDiv.appendChild(num);

        contactDiv.appendChild(contactInfoDiv);

        div.appendChild(contactDiv);

        i++;
    } while( i < data.length );

}


