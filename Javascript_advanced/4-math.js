function divideBy(firstNumber) {
    return (secondNumber) => {
      return secondNumber / firstNumber;
    };
  }

  addBy100 = addBy(100);
  addBy100 = addBy(1000);
  dividendBy10 = divideBy(10);
  divideBy100 = divideBy(100);