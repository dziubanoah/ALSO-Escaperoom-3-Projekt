
var input = document.getElementById("NameInput");
let submit = document.getElementById("submit");  // Korrekt: 'submit', nicht 'Sumit'
function getClientId() {
    let clientId = document.cookie.replace(/(?:(?:^|.*;\s*)clientId\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if (!clientId) {
        clientId = 'client-' + Date.now() + '-' + Math.random().toString(36);
        document.cookie = `clientId=${clientId}; path=/; max-age=31536000`; // 1 Jahr gültig
    }
    
    return clientId;
}

let clientId = getClientId();
console.log("Client ID:", clientId);

if (clientId === 'client-1728984694739-0.j354wprsbq') {
    input.style.display= "block"; 
    submit.style.display= "block";

}
else (
    console.log("Die coockie ID aus main.js ist nicht korrekt")
);
    window.alert("keks check durchgeführt");