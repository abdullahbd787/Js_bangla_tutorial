function Something(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  var message = greet + " " + getFirstName();
  console.log(message);
}
Something("Good Morning", "Abdullah Al Mamun");
