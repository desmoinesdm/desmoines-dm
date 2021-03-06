document.getElementById("sendMail").addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;

    let contactH1 = document.getElementById("contact-h1");
    let form = document.getElementById("sendMail");
    let thankYou = document.getElementById("thank-you");

    console.log("sendMail fired!", name, email, phone, subject);

    fetch('/api/contact', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, email: email, phone: phone, subject: subject}),
      })
    //   .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        contactH1.classList.add("display-none");
        form.classList.add("display-none");
        thankYou.classList.remove("display-none");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}