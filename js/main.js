console.log("working");
function checkValid() {

  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;
  const email = document.forms["form1"]["email"].value;
  const phone = document.forms["form1"]["phone"].value;
  const formaatti = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  const phoneFormat = /(\+358)[0-9]{9}/;
  //const address = document.forms["form1"]["address"].value;
  const zipcode = document.forms["form1"]["zipcode"].value;
  const password = document.forms["form1"]["password"].value;

  console.log(email);

  if (firstName === "" || firstName.length > 25) {
    alert("First name is not valid.");
    return false;
  }
  if (lastName === "" || lastName.length > 30) {
    alert("Last name is not valid.");
    return false;
  }
  if (!email.match(formaatti) || email === "") {
    alert("Email is not valid.");
    return false;
  }
  if (!phone.match(phoneFormat) && phone !== "") {
    alert("Phone is not valid.");
    return false;
  }
  if (zipcode.length === 5 || zipcode !== "") {
    alert("Zipcode is not valid.");
    return false;
  }
  if (password === "") {
      alert("Password is not valid.");
      return false;
  }

}
/*
function checkEmail(email) {
  return email.match(formaatti);
}
*/