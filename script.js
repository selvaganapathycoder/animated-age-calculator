function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (!dob) {
      result.textContent = " Please enter your date of birth!";
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    result.textContent = ` You are ${age} year(s) old!`;
  }