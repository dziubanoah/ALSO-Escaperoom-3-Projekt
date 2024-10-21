let btn = document.getElementById("Button1");

btn.addEventListener('click', function() {
    window.alert("clicked")
    fetch('http://192.168.66.66/script.php', {
        method: 'POST',
        //mode: 'no-cors',
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
        })
    });