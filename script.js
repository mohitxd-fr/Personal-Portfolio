var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
// JavaScript for Side Menu

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// Script for Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwb2qRVPF7yEb5o-jkX23EG0zdizHEdsW-ISkSOyDwn3MYJyH7zb5APV1tr9o_MW3Crg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>{
        msg.innerHTML="Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})