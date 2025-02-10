// Get the chart canvas
var donationsChart = document.getElementById('donationsChart').getContext('2d');

// Define the chart data
var donationsChart = new Chart(donationsChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'السنة الحالية',
                data: [30, 25, 40, 45, 20, 30, 50, 60, 40, 30, 20, 10],
                borderColor: 'black',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'السنة السابقة',
                data: [20, 15, 30, 35, 10, 20, 40, 50, 30, 20, 10, 5],
                borderColor: 'blue',
                borderDash: [5, 5], // Dashed line
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        // maintainAspectRatio: false,
        scales: {
            y: {
                position: 'right',  // Move Y-axis values to the right
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + 'K';
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: '  اجمالي التبرعات    ',  // Chart title
                align: 'end',  // Aligns title to the right
                position: 'top',
                font: { size: 16 },
                color: 'black',
                padding: "5px"
            },
            legend: {
                position: 'top',
                align: 'end', // Align legend to the right
                labels: {
                    font: { size: 14 },
                    usePointStyle: true
                }
            }
        }
    }
});



// Get the chart canvas
var donationsDetails = document.getElementById('donationsDetails').getContext('2d');

// Define the chart data
var donationsChart = new Chart(donationsDetails, {
    type: 'bar',
    data: {
        labels: ['اجمالي', 'المراجعه', 'قيد الانتظار', 'تبرع الحالي'],
        datasets: [{
            data: [30, 18, 8, 22],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + 'K';
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: '   بيانات مفصله كل تبرع    ',
                align: 'end',
                position: 'top',
                font: { size: 16 },
                color: 'black',
                padding: "5px"
            },
            legend: {
                display: false,
            }
        }
    }
});





