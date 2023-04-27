const summaryLabels = document.getElementById("summary-labels");

fetch ("./data.json")
    .then( res => res.json())
    .then(data => {
        data.forEach(element => {
            const summarySubtitle = element.category;
            const summaryPoint = element.score;
            const summaryIcon = element.icon;  
            
            const summaryLabel = document.createElement("div");
            summaryLabel.className("summary-label");

            const sumaryTitle = document.createElement("p");
            sumaryTitle.className("summary-subtitle");
            sumaryTitle.innerText = summarySubtitle;

            const summaryPt = document.createElement("p");
            summaryPt.className("summary-point");
            
            console.log(summarySubtitle);
            console.log(summaryPoint);
            console.log(summaryIcon);
    });
});

