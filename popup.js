//function which waits to until action is defined by user by clicking the button
document.addEventListener('DOMContentLoaded', function () 
{       
    chrome.runtime.onMessage.addListener(function (message) 
    {
        if (message.action === 'sendMatchData') 
        {
            document.getElementById('count').textContent = message.matchData.Total;      
            const Categories = message.matchData.Categories;
            const catList = document.getElementById("categoryList");
            for (const category in Categories) 
            {
                const value = Categories[category];
                if (value !== 0) {
                  const listItem = document.createElement("li");
                  listItem.textContent = `${category}: ${value}`;
                  catList.appendChild(listItem);
                }
            }
        }
    });
});
//performs the function to calculate the total dark pattern in each category
document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById("categoryShow").onclick = function () 
    {
        chrome.tabs.executeScript
        ({
            file: 'highlighter.js'
        });
        var content = document.getElementById("collapsibleCategory");
        var main_container = document.querySelector(".counter-container");
        if (!content) 
        {
            return;
        }
        var body = document.body;
        if (content.style.display === "flex") 
        {
            content.style.display = "none";
            body.style.height = "400px";
            main_container.style.flex = "0 1 auto";
        } 
        else 
        {
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