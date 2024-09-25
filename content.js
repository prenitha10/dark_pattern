// Function to highlight the UX/UI keywords in the web browser
function autoHighlightText() 
{
  let textToHighlight = "[%]|Deal of the day|Coupon|FREE delivery|Thursday, |15 February.|Order within |21 hrs|34 mins|Add gift options|ratings|offers|bought in past month|Limited time deal"; // Specify the text to highlight
  let regex = new RegExp(textToHighlight, "gi");
  // Iterate through all text nodes in the body of the webpage
  document.body.querySelectorAll('*').forEach(node => 
  {
    node.childNodes.forEach(childNode => 
    {
      if (childNode.nodeType === Node.TEXT_NODE) 
      {
        let textContent = childNode.textContent;
        let matches = textContent.match(regex);
        if (matches) 
        {
          let span = document.createElement('span');
          span.style.backgroundColor = 'yellow'; // Set highlight color
          // Replace the matched text with the highlighted span
          textContent = textContent.replace(regex, match => `<span style="background-color: yellow">${match}</span>`);
          // Update the text node with the highlighted content
          span.innerHTML = textContent;
          childNode.parentNode.replaceChild(span, childNode);
        }
      }
    });
  });
} 
// highlight text when the content script is executed
autoHighlightText();
  