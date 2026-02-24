function cDiscount(){
    let budget = document.getElementById("budget").value;
    let disVal = budget * .2;
    document.getElementById("brands-discounts").innerHTML = '<div class="container col-md-4 bg-light text-dark rounded mt-3 text-center" id="brands-discounts"> <h3>Recommended Brands:</h3> <button class="btn btn-outline-primary" type="button">Acer</button> <button class="btn btn-outline-primary" type="button">Lenovo</button> <button class="btn btn-outline-primary" type="button">Dell</button> <h3>Eligible discount: <span class="badge bg-primary" id></span></h3> </div>';
}
function cStore(){

}