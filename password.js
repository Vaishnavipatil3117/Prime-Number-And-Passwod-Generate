function generatePassword(firstName, lastName) {
    const firstChars = firstName.slice(0, 2);
    const lastChars = lastName.slice(0, 2);
    const randomDigits = Math.floor(Math.random() * 900) + 100;
    return firstChars + lastChars + randomDigits;
  }
  
  const firstName = "vaishnavi";
  const lastName = "patil";
  const password = generatePassword(firstName, lastName);
  console.log("Generated Password:", password);