import "./style.css";

const startGame = () => {
  const pElement = document.querySelector("p");
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  document.querySelector("button").innerText = "Ввести";
  pElement.style.color = "transparent";
  input.placeholder = "Введите число";
  input.style.fontSize = "25px";
  button.removeEventListener("click", startGame);

  let maxNumber = input.value ? Number(input.value) : 100;
  input.value = "";

  let counter = 1;
  let advice = "";

  const randomNumber = Math.round(
    Math.random() * (new Date().getMilliseconds() % (maxNumber + 1))
  );

  if (randomNumber % 2 === 0) advice = "четным";
  else advice = "нечетным";

  const buttonClickHandler = () => {
    const userValue = Number(input.value);
    counter++;
    if (userValue > maxNumber || userValue < 1)
      pElement.innerText = `Диапазон числа от 1 до ${maxNumber}`;
    else {
      if (userValue === randomNumber) {
        pElement.innerText = `Ты угадал число с ${counter} попытки`;
        const input = document.querySelector("input");
        input.placeholder = "Введите верхний предел";
        input.value = "";
        input.style.fontSize = "20px";
        const button = document.querySelector("button");

        button.innerText = "Ещё раз";
        button.removeEventListener("click", buttonClickHandler);
        document.querySelector("button").addEventListener("click", startGame);
      } else if (userValue > randomNumber) {
        pElement.innerText = `Попытка ${counter}. Загаданное число меньше`;
        if (counter >= 4)
          pElement.innerText = `${pElement.innerText}. Число является ${advice}`;
      } else if (userValue < randomNumber) {
        {
          pElement.innerText = `Попытка ${counter}. Загаданное число больше`;
          if (counter >= 4)
            pElement.innerText = `${pElement.innerText}. Число является ${advice}`;
        }
      }
    }
    pElement.style.color = "white";
    console.log(randomNumber);
  };

  document
    .querySelector("button")
    .addEventListener("click", buttonClickHandler);
};

document.querySelector("button").addEventListener("click", startGame);
