let user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer",
 };

  function logWecomeUser(welcomeString) {
    console.log(
      '${welcomeString}, ${user.firstName}. your occupation is: ${user.occupation}'
    );
  }

  let bindLogWelcomeuser = logWelcomeUser.bind(user);

  bindLogWelcomeUser("welcome"); 