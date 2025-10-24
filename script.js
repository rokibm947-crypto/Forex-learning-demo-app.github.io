// Section switching
function showSection(sectionId) {
  const sections = ['home', 'learn', 'calculator', 'about'];
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