function adjustStyles(fontSize, fontWeight, textTransform, bgColor, textColor) {
    return () => {
      document.documentElement.style["font-size"] = fontSize;
      document.documentElement.style["font-weight"] = fontWeight;
      document.documentElement.style["text-transform"] = textTransform;
      document.documentElement.style["background-color"] = bgColor;
      document.documentElement.style["color"] = textColor;
    };
  }
  
  function initialize() {
    let spookyMode = adjustStyles(9, "bold", "uppercase", "pink", "green");
    let darkMode = adjustStyles(12, "bold", "capitalize", "black", "white");
    let screamMode = adjustStyles(12, "normal", "lowercase", "white", "black");
  
    let welcomeMessage = document.createElement("p");
    welcomeMessage.innerHTML = "Welcome Holberton!";
    document.body.appendChild(welcomeMessage);
  
    let spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    spookyButton.onclick = () => {
      spookyMode();
    };
    document.body.appendChild(spookyButton);
  
    let darkButton = document.createElement("button");
    darkButton.innerHTML = "Dark mode";
    darkButton.onclick = () => {
      darkMode();
    };
    document.body.appendChild(darkButton);
  
    let screamButton = document.createElement("button");
    screamButton.innerHTML = "Scream mode";
    screamButton.onclick = () => {
      screamMode();
    };
    document.body.appendChild(screamButton);
  }
  
  initialize();
  