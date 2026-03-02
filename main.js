function cDiscount(){
    let budget = document.getElementById("budget").value;
    let disVal = Number(budget * .2).toFixed(2);
    document.getElementById("brands-discounts").innerHTML = 
    `<h3>Recommended Brands:</h3>
        <button class="btn btn-outline-primary" type="button">Acer</button>
        <button class="btn btn-outline-primary" type="button">Lenovo</button>
        <button class="btn btn-outline-primary" type="button">Dell</button>
    <h3>Eligible discount: <br> <span class="badge bg-primary" id="dis">${disVal}</span></h3>`;
}
function cStore(){
    document.getElementById("locations").innerHTML = 
    `<h2>VillMan</h2>
     <p>Level 1 (infront of Ramen 99), Trinoma Mall, EDSA corner North Ave., Quezon City</p>
     <p>5/F Cyberzone SM City North Edsa The Annex, Quezon City</p>`
}