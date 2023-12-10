let calendarJson = []

const url = `https://run.mocky.io/v3/72f17ce5-d41e-4e62-8cf0-fe642124f606`;

const response = fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    calendarJson = response.json();
    newCalendarList = calendarJson.filter()
    console.log(response)
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  function sendEmail(){
      Email.send({
          Host : `smtp.elasticemail.com`,
          Username : `spencegrigg@gmail.com`,
          Password : `1DB0F8EDB63F3A7423F81C57CF4D865DCBFC`,
          To : `spencegrigg@gmail.com`,
          From : document.getElementById(`email`).value,
        Subject : `Piano Lessons Message`,
        Body : `Name: ${document.getElementById(fname).value} <br> Email: ${document.getElementById("cname").value} <br> Phone: ${document.getElementById("phone").value} <br> Message: ${document.getElementById("message").value}`
    }).then(
        message => alert(`Message Sent Successfully`)
        );
    }
    
    