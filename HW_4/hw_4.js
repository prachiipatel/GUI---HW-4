function priceFields() {
    // Number of inputs to create
    var number = document.getElementById("priceNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("priceContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Price " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.name = "priceNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function mpgFields() {
    // Number of inputs to create
    var number = document.getElementById("mpgNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("mpgContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Mpg " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.name = "mpgNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function addTable() {
    var columNum = document.getElementById("priceNum").value;
    var rowNum = document.getElementById("mpgNum").value;
    var i, j;
    
    var heading = new Array();
    heading[0] = "Price/Fuel consumption";
    for (i = 1; i <= columNum; i++) {
        heading[i] = "Price" + i;
    }
    
    var stock = new Array();
    for(i = 0; i < rowNum; i++) {
        stock[i] = new Array();
    }
    
    var table = "<table>";
    
    for (i = 0; i < stock.length; i++) {
        table += "<tr>";
        for (j = 0; j < stock[i].length; j++) {
            table += "<td>" + stock[i][j] + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    
    /* I am still working on this, it took me a while to figure out how to display the table. I believe I can finish it if I would have little more time. */
    
}








