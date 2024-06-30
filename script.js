function validatePassword() {
      const password = document.getElementById('form3Example4').value;
      const passwordCriteria = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

      if (!password) {
        alert("Password cannot be blank or null");
      } else if (!passwordCriteria.test(password)) {
        alert("Password is not matching the criteria");
      } else {
        alert("Password is valid");
      }
}