const summaryLabels = document.getElementsByClassName("summary-labels");

fetch ("./data.json")
    .then( res => res.json())
    .then(data => {
        data.forEach(element => {
            const summarySubtitle = element.category;
            const summaryPoint = element.score;
            const summaryIcon = element.icon;  

            const summaryLabel = document.createElement("div");

        });
    })

