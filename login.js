let email = document.getElementById("email");
let password = document.getElementById("password");
let result = document.getElementById("result");

const checkLogin = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    alert("Please enter email and password");
    return;
  }

  await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.success) {
        result.innerHTML = `<p class="text-green-500">Login successful</p>`;
      }
    }).catch((err) => {
        result.innerHTML = `<p class="text-red-500">Login failed</p>`;
        console.log(err);
    });
}