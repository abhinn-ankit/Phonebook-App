/* Search by last Name */

var contactInfo;

SEARCHBAR.addEventListener("keyup", function () {
    searchContact(this);
});

SMALLSRCHBTN.addEventListener("keyup", function () {
    searchContact(this);
});

function searchContact(current) {
    let flag = new Array();
    contactInfo = document.querySelectorAll(".contact-info");
    console.log(contactInfo);
    let filter = current.value.toUpperCase();
    console.log(filter);
    for (let i = 0; i < contactInfo.length; i++) {
        let name = contactInfo[i].children[0];
        console.log(name);
        if ( (data[i].contactInfo.lastName.toUpperCase() + " " + data[i].contactInfo.firstName.toUpperCase()).indexOf(filter) > -1) {
            contactInfo[i].style.display = "inline-flex";
            flag.push(true);
        } else {
            contactInfo[i].style.display = "none";
            flag.push(false);
        }
    }
    let count = 0;
    let contactSection = document.querySelectorAll(".contact-section");
    let contactWrapper = document.querySelectorAll(".contact-wrapper");
    for ( let i = 0 ; i < contactWrapper.length ; i++ ) {
        let cwlength =  0;
        for ( let j = 0 ; j < contactWrapper[i].childNodes.length ; j++ ) {
            if( !flag[count] ) {
                cwlength++;
            }
            count++;
        }
        console.log(cwlength);
        if( cwlength == contactWrapper[i].childNodes.length) {
            contactSection[i].style.display = "none";
        } else {
            contactSection[i].style.display = "flex";
        }
    }
}