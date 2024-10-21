const submit2 = document.getElementById("submit");
const input2 = document.getElementById("NameInput");
submit2.addEventListener('click', function(event) {
    event.preventDefault(); 

    const values2 = input2.value; 
    console.log(values2);

    fetch('http://192.168.1.194/Teamname_log.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'inputValue=' + encodeURIComponent(values2), 
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        //console.error('Fehler:', error);
    });
});
