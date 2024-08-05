document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("process.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        let responseElement = document.getElementById("response");

        if (data.status === "success") {
          responseElement.innerHTML = `<h2>Thank you for contacting us, ${data.name}!</h2>
                                         <p><strong>Email:</strong> ${data.email}</p>
                                         <p><strong>Message:</strong> ${data.message}</p>`;
        } else {
          responseElement.innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
