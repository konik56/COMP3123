const greeter = (myArray) => {
  const greetText = "Hello:";
  for (const item of myArray) {
    console.log(`${greetText} ${item}`);
  }
};

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);
