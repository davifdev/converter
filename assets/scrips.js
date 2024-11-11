let dolar = 5.7;

const usdInput = document.querySelector("#usd");
const brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

function fixValue(value) {
  let numberFormat = value.replace(",", ".");
  let resultNumber = Number(numberFormat);

  return resultNumber;
};

function convert(type) {
  if (type == "usd-to-brl") {
    let fixedValue = fixValue(usdInput.value);
     
    let result = fixedValue * dolar;
    result.toFixed(2);
  }

  if (type == "brl-to-usd") {
    console.log("Converter de real para dolar!");
  }
}
