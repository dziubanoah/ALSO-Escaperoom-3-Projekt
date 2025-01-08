const submit2 = document.getElementById("submit");
const input2 = document.getElementById("NameInput");
submit2.addEventListener('click', function(event) {
    event.preventDefault(); 

    const values2 = input2.value; 
    console.log(values2);

    fetch('http://192.168.1.143:7953/', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: values2,
        mode: "no-cors"
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        //console.error('Fehler:', error);
    });
});
