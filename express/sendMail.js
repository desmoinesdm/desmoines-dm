document.getElementById("sendMail").addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;

    axios
        .post("http://localhost:4040/api/contact", {name: name, email: email, phone: phone, subject: subject})
        .then(res => console.log("res: ", res))
        .catch(err => console.log("err: ", err))
}