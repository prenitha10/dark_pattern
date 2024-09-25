// popup.js
document.addEventListener('DOMContentLoaded', function () {
        
    chrome.runtime.onMessage.addListener(function (message) {
        if (message.action === 'sendMatchData') {
            document.getElementById('count').textContent = message.matchData.Total;
            
            const Categories = message.matchData.Categories;
            const catList = document.getElementById("categoryList");

            for (const category in Categories) {
                const value = Categories[category];
            
                // Checks if dark pattern count is non-zero
                if (value !== 0) {
                  const listItem = document.createElement("li");
                  listItem.textContent = `${category}: ${value}`;
                  catList.appendChild(listItem);
                }
              }

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("categoryShow").onclick = function () {
        chrome.tabs.executeScript({
            file: 'highlighter.js'
        });
        var content = document.getElementById("collapsibleCategory");
        var main_container = document.querySelector(".counter-container");
        if (!content) {
            return;
        }

        var body = document.body;

        if (content.style.display === "flex") {
            content.style.display = "none";
            body.style.height = "400px";
            main_container.style.flex = "0 1 auto";
        } else {
            main_container.style.display = "flex";
            content.style.display = "flex";
            main_container.style.flex = "1";
            body.style.minHeight = "400px";
            body.style.height = "auto";
            main_container.style.marginBottom = "10px";
            main_container.style.marginTop = "5px";
        }
    }
});

// popup.js


// Function to perform the calculation
function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);

  if (isNaN(num1)) {
    document.getElementById('result').textContent = 'Invalid input';
  } else {
    let ref_fee=24;
    let profit_fee=8;
    let ship_fee=2;
    let storage_fee=192;
    let tax=3200;
    // popup.js

let dealer_prof = num1 * (profit_fee/100);
let shipping_fee = num1 * (ship_fee/100);
let resale_val = num1 - (dealer_prof + shipping_fee + storage_fee)

// Display results in the popup
    let resultString = `Price as per Amazon : ${num1}<br>Referral Fees in Amazon :  ${ref_fee}<br>Dealer Profit per Product : ${dealer_prof}<br>Shipping Fees in Product : ${shipping_fee}<br>Storage Fees : ${storage_fee}<br>Resale Value : ${resale_val}`;

// Display results in the popup
document.getElementById('result').innerHTML = resultString;
  }
}

// Event listener for the Calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

