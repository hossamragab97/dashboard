document.addEventListener("DOMContentLoaded", function () {
    let donors = [
        { id: 1, name: "إيمان إبراهيم", phone: "+20124578136", amount: "EGP 00,00", method: "حساب بنكي" ,date:"22 oct, 2024" , receipt:"55.57%" },
        { id: 2, name: "محسن القطري", phone: "+20124578136", amount: "EGP 00,00",method: "حساب بنكي",date:"22 oct, 2024" , receipt:"55.57%"},
        { id: 3, name: "محسن القطري", phone: "+20124578136", amount: "EGP 00,00",method: "حساب بنكي" ,date:"22 oct, 2024" , receipt:"55.57%"}
    ];

    let donorTable = document.getElementById("donorTable");
    donors.forEach(donor => {
        let row = `<tr>
        <td>${donor.receipt}</td>
        <td>${donor.date}</td>
        <td>${donor.method}</td>
        <td>${donor.amount}</td>
        <td>${donor.phone}</td>
        <td>${donor.name}</td>
        <td>${donor.id}</td>
        </tr>`;
        donorTable.innerHTML += row;
    });
});
