const bookingForm = document.querySelector("#booking-form");

bookingForm.addEventListener("submit", (e) => {
  const user = {
    "fullname": e.target.fullname.value,
    "email": e.target.email.value,
    "phone": e.target.phonenumber.value
  }

  if (!localStorage.getItem("user")){
    localStorage.setItem("user", JSON.stringify(user));
    return
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let user;

  if (localStorage.getItem("user")){
    user = JSON.parse(localStorage.getItem("user"));

    const name = bookingForm.querySelector("#fullname");
    const email = bookingForm.querySelector("#email");
    const phone = bookingForm.querySelector("#phonenumber");

    name.value = user.fullname;
    email.value = user.email;
    phone.value = user.phone;
  }
})