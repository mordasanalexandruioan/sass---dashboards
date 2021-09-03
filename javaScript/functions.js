let eventCloseAlert = e => {
    let obj = e.target;
    let alert = document.getElementsByClassName('alert')[0];
    if (obj.id == "closeAlert") {
        alert.className += " desappear";
    }
}

//traffic-widget

let trafficCanvas = document.getElementsByClassName('traffic-chart')[0];


let trafficData = {
    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
    ],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
        fill: true,
    }, ],
};


let trafficOptions = {
    plugins: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    }
};

let trafficChart = new Chart(trafficCanvas, {


    type: "line",
    data: trafficData,
    options: trafficOptions

})





let trafficDaily = document.getElementsByClassName('traffic-daily')[0];

let trafficDataDaily = {
    labels: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    datasets: [{
        data: [75, 110, 175, 125, 235, 200, 115],
        backgroundColor: "rgb(116, 118, 192)",
        borderWidth: 1,
        fill: true,
    }, ],
};

let trafficOptionsDaily = {
    plugins: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false,
        },
    }
};

let trafficChartDaily = new Chart(trafficDaily, {
    type: "bar",
    data: trafficDataDaily,
    options: trafficOptionsDaily
})




let mobileUsers = document.querySelector('.traffic-users');

let mbUsersData = {
    labels: [
        'Desktop',
        'Tablet',
        'Phones'
    ],


    datasets: [{
            label: "# of Users",

            data: [76, 12, 12],

            borderWidth: 0,


            backgroundColor: [
                'rgb(116, 118, 192)',
                'rgb(116, 214, 134)',
                'rgb(81, 182, 200)'
            ]
        },

    ],
};




let mbUsersOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
            },
        },
    }
};



let mbUserChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: mbUsersData,
    options: mbUsersOptions
});

let eventSettings = e => {
    let obj = e.target;
    let button = obj.parentNode;
    let li = button.parentNode;
    let ul = li.parentNode;

    if (button.className == "on-off-buttons off" || obj.className == "circle-button off" || obj.textContent == "OFF") {
        button.classList.remove("off");
        button.classList.add("on");
        button.children[2].classList.remove("off");
        button.children[2].classList.add("on");
    } else if (button.className == "on-off-buttons on" || obj.className == "circle-button on" || obj.textContent == "ON") {
        button.classList.remove("on");
        button.classList.add("off");
        button.children[2].classList.remove("on");
        button.children[2].classList.add("off");
    }
}