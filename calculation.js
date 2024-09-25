//function waits until it is defined by the user
document.addEventListener('DOMContentLoaded', function () 
{
  document.getElementById('highlightBtn').addEventListener('click', function () 
  {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) 
    {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'highlight' });
    });
  });
});
// Function to perform the calculation
function calculate() 
{
    let num1 = parseFloat(document.getElementById('num1').value);
    if (isNaN(num1)) 
    {
        document.getElementById('result').textContent = 'Invalid input';
    } 
    else 
    {
        let ref_fee=24;
        let profit_fee=8;
        let ship_fee=2;
        let storage_fee=192;
        let tax=3200;
        let dealer_prof = num1 * (profit_fee/100);
        let shipping_fee = num1 * (ship_fee/100);
        let resale_val = num1 - (dealer_prof + shipping_fee + storage_fee)
        let resultString = `Price as per Amazon : ${num1}<br>Referral Fees in Amazon :  ${ref_fee}<br>Dealer Profit per Product : ${dealer_prof}<br>Shipping Fees in Product : ${shipping_fee}<br>Storage Fees : ${storage_fee}<br>Resale Value : ${resale_val}`;
        document.getElementById('result').innerHTML = resultString;
    }
}
document.getElementById('calculateBtn').addEventListener('click', calculate);

