document.getElementById('Button1').addEventListener('click', function() {
    window.alert("clicked")
    fetch('http://192.168.1.194/script_mit_log.php', {
        method: 'GET',
    })
    .then(response => response.text())
    .then(data => {
        console.log("PHP echo:", data);
        window.alert("PHP echo: " + data);
    })
});