// Section switching
function showSection(sectionId) {
  const sections = ['home', 'learn', 'calculator', 'converter','about'];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  });
}

// Profit/Loss calculator
function calculate() {
  let buy = parseFloat(document.getElementById("buy").value);
  let sell = parseFloat(document.getElementById("sell").value);
  let qty = parseFloat(document.getElementById("qty").value);

  if(isNaN(buy) || isNaN(sell) || isNaN(qty)) {
    alert("Please enter valid numbers");
    return;
  }

  let profit = (sell - buy) * qty;
  document.getElementById("result").innerText = "Your Profit/Loss = " + profit;
}
// Currency Converter
function convertCurrency() {
  let usd = parseFloat(document.getElementById("usdAmount").value);
  let currency = document.getElementById("currency").value;
  let rate;

  if (isNaN(usd)) {
    alert("Please enter a valid amount");
    return;
  }

  switch(currency) {
    case "bdt": rate = 118.5; break;
  }

  let converted = usd * rate;
  document.getElementById("conversionResult").innerText = 
  `Converted Amount = ${converted.toFixed(2)} ${currency.toUpperCase()}`;
}


  let converted = usd * rate;
  document.getElementById("conversionResult").innerText = 
  `Converted Amount = ${converted.toFixed(2)} ${currency.toUpperCase()}`;
}
