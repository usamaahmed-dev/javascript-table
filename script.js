let username = prompt("Please enter your name", "");
alert("Hello " + username);

function getAnumber() {
    let num = prompt("Enter a number JALDI");
    for (let i = 1; i <= 10; i++) {
        console.log(num + "x" + i + "=" + i * num);
    }
}

getAnumber()