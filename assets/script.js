
let dolar = 5.7;

const usdInput = document.querySelector("#usd");
const brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000,00"
convert("usd-to-brl")

function formatCurrency(value) {
  let fixedValue = fixValue(value);

  let options = {
    userGouping: false,
    minimumFractionDigits: 2,
  }

  let formater = new Intl.NumberFormat("pt-BR", options);
  
  return formater.format(fixedValue);
};

function fixValue(value) {
  let numberFormat = value.replace(",", ".");
  let resultNumber = Number(numberFormat);

  if (resultNumber == NaN) {
    resultNumber = 0;
  }

  return resultNumber;
};

function convert(type) {
  if (type == "usd-to-brl") {
    let fixedValue = fixValue(usdInput.value);
     
    let result = fixedValue * dolar;
    result = result.toFixed(2);

    brlInput.value = formatCurrency(result);
  }

  if (type == "brl-to-usd") {
    let fixedValue = fixValue(brlInput.value);
     
    let result = fixedValue / dolar;
    result = result.toFixed(2);

    usdInput.value = formatCurrency(result);
  }
}
