var fileUrl = chrome.runtime.getURL('dataset.txt');
console.log(fileUrl);
fetch(fileUrl)
.then(response => response.text())
.then(content => 
{
  const arr = content.split('\n').filter(Boolean);
  var words = arr.map(element => element.replace('\r', ''));
  var bodyText = document.body.innerHTML;
  var matchCounter = 0;
  var categoryCounts = {//various category that is displayed
  "Forced Action":0,
  "False Reassurance":0,
  "Misdirection":0,
  "False Scarcity":0,
  "Social Proof":0,
  "Hidden Subscription":0,
  "False Affiliation":0,
  "Negative Option":0,
  "Upselling":0,
  "Positive Reinforcement":0,
  "Urgency":0
};
for (var i = 0; i < words.length; i++) 
{
  var wordData = words[i].split('@');
  var word = wordData[0];
  var category = wordData[1];
  var regex = new RegExp(word, 'gi');
  bodyText = bodyText.replace(regex, function(match) 
  {
    //if match found then incremented
    matchCounter++;
    if (category) 
    {
      if (!categoryCounts[category]) 
      {
        categoryCounts[category] = 1;
      } 
      else 
      {
        categoryCounts[category]++;
      }
    }
  });
}
sendMatchData({ Total: matchCounter, Categories:categoryCounts });
document.body.innerHTML = bodyText;
});
function sendMatchData(data) 
{
  chrome.runtime.sendMessage({ action: 'sendMatchData', matchData: data });
}
