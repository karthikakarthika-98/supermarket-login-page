function register() {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let item = document.getElementById("items").value;
    let quantity = document.getElementById("quantity").value;
    let gst = document.getElementById("Gst").value;
    
    // Validate inputs
    if (name === "" || number === "" || item === "Select Items" || quantity === "" || gst === "") {
        alert("Please fill in all fields correctly");
        return;
    }
    
    // if (isNaN(number) || number.length !== 10) {
    //     alert("Please enter a valid 10-digit phone number");
    //     return;
    // }
    
    // if (isNaN(quantity) || quantity <= 0) {
    //     alert("Please enter a valid quantity");
    //     return;
    // }
    
    // if (isNaN(gst) || gst < 0) {
    //     alert("Please enter a valid GST amount");
    //     return;
    //  }
    
    // Calculate total with GST (assuming GST is a percentage)
    let price = { 
        "sugar": 200,
         "oil": 150, 
         "rice": 250, 
         "vegetables": 200,
          "spices": 300 
        };
    var itemPrice=price[item];    
    var total = itemPrice * quantity;
    let gstAmount=(total*12)/100;
    total += gstAmount;
    
    // Add data to the table
    let table = document.querySelector("#tables table");
    let newRow = table.insertRow();
    
    newRow.innerHTML = `
    <td style="border: 1px solid black; padding: 5px;">${name}</td>
    <td style="border: 1px solid black; padding: 5px;">${number}</td>
    <td style="border: 1px solid black; padding: 5px;">${item}</td>
    <td style="border: 1px solid black; padding: 5px;">${quantity}</td>
    <td style="border: 1px solid black; padding: 5px;">₹${total.toFixed(2)}</td>
`;

table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("items").value = "Select Items";
    document.getElementById("quantity").value = "";
    document.getElementById("Gst").value = "";
}
