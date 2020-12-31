var menu_list_array = ["Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravaganza Pizza"];  

                   
function getdisp(){
    var htmldata;
    console.log("Hi")
    htmldata = "<ol class='menulist'>"
    menu_list_array = menu_list_array.sort();
    console.log("22");
    for(var i=0; i<menu_list_array.length; i++){
        htmldata = htmldata +'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    console.log(htmldata);
    document.getElementById("display_addedmenu").innerHTML = htmldata;
    
    console.log("33");
}




function add_item1() {
    var newitem1 =  document.getElementById("item").value;
menu_list_array.push(newitem1);
console.log(menu_list_array.length);
var divdata ="<h4>"
divdata = divdata+newitem1+"</h4>"
console.log(divdata);

var elem = document.createElement("img");
elem.setAttribute("src", "images/pizzaImg.png");
elem.setAttribute("alt", "Pizza");
elem.setAttribute("width","33.33%")
document.getElementById("add_top").appendChild(elem)

var lbl = document.createElement("h4");
lbl.textContent = newitem1;
document.getElementById("add_top").appendChild(lbl);




}
