const url = "https://gauravgitacc.github.io/postAppData/auctionData.json";

const container = document.getElementById("contain");

async function fetchData() {
    try {
        const result = await fetch(url);
        const response = await result.json();
        renderData(response);
    } catch (erroe) {
        console.log(error);
    }
}

/* <div class="card">
    <div class="card-top">
        <div class="card-top-right">
            <div class="card-top-status">Approved</div>
            <span>S230SKAN</span>
        </div>
        <div class="card-top-left"><span>Mar 25, 2023, 11:02:05 AM</span></div>
    </div>
    <div class="card-bottom">
        <div class="from-location"><h4>Bellenduru spike lake</h4></div>
        <div class="to-location">KHB COlony, BAsaveshwar Nagar, bengaluru,Karnataka, India</div>
        <span id="price"><h3>@ 0</h3></span>
    </div>
</div> */

function renderData(data) {
    data.forEach(element => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.innerHTML = `
    <div class="card-top">
        <div class="card-top-right">
            <div class="card-top-status ${element.status.toLowerCase()}">${element.status}</div>
            <span id="caseNum">${element.caseNumber}</span>
        </div>
        <div class="card-top-left"><span id="caseNum">${element.date}</span></div>
    </div>
    <div class="card-bottom">
        <div class="from-location"><h4>${element.fromLocation}</h4></div>
        <div class="to-location">${element.toLocation}</div>
        <span id="price"><h3>${element.fare}</h3></span>
    </div>
`;

        // Append the card container to a parent element
        container.appendChild(cardContainer);

    });
}

fetchData();