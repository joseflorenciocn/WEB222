// All you JavaScript code for assignment 4 should be in this file

window.onload = function() 
{	
    //document.querySelector("#menu_1") = generateTable_menu1;	 
    document.querySelector("#menu_21").onclick = generateTable_menu21;
    document.querySelector("#menu_22").onclick = generateTable_menu22;


    //****** Menu 1 Code ********/
       // get the reference for the body
       var tbl = document.querySelector("#outputTable");
   
       // remove existing Body element
       var tblExistingBody = tbl.querySelector("tbody");
       if (tblExistingBody) tbl.removeChild(tblExistingBody);
     
        // creates a <tbody> element
        var tblBody = document.createElement("tbody");
   
   
        // creating all table rows
        for (var i = 0; i < countries.length; i++) 
        {
           // creates a table row
           var row = document.createElement("tr");
           // Create a <td> element and put them at the end of the table row
           row.appendChild(getTdElement(countries[i].Code));
           row.appendChild(getTdElement(countries[i].Name.English));
           row.appendChild(getTdElement(countries[i].Continent));
           row.appendChild(getTdElement(countries[i].AreaInKm2));
           row.appendChild(getTdElement(countries[i].Population));
           row.appendChild(getTdElement(countries[i].Capital));
   
    
           // add the row to the end of the table body
           tblBody.appendChild(row);
       }
   
       // put the <tbody> in the <table>
       tbl.appendChild(tblBody);
   
       // Create a <td> element and a text
       function getTdElement(text) 
       {
       var cell = document.createElement("td");
       var cellText = document.createTextNode(text);
       cell.appendChild(cellText);
       return cell;
       }
   
  }

 function generateTable_menu21()
 {  
    // get the reference for the body
    var tbl = document.querySelector("#outputTable");

    // remove existing Body element
    var tblExistingBody = tbl.querySelector("tbody");
    if (tblExistingBody) tbl.removeChild(tblExistingBody);
 /* 
    // creates a <tbody> element
    var tblBody = document.createElement("tbody");


    // creating all table rows
    for (var i = 0; i < countries.length; i++) 
    {
        // creates a table row
        var row = document.createElement("tr");
        // Create a <td> element and put them at the end of the table row
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdElement(countries[i].Name.English));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));

 
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // Create a <td> element and a text
    function getTdElement(text) 
    {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
    }
*/
 };


 function generateTable_menu22()
 {
    var menu_21 = document.querySelector("#subtitle");
    menu_21.innerHTML= "Merda"; 
     /* 
      // Removing a specified element when knowing its parent node
      var element = document.getElementById("subtitle");
      while (element.firstChild) 
      {
        element.removeChild(element.firstChild);
      }
  /*
  //Funciona sem menu_1
      //Update the subtitle
      var menu1_node = document.createElement("h4");
      menu1_node.innerHTML = "teste";
     // menu1_node.innerHTML = "List of Countries and Dependencies teste";
      // give it an id attribute called 'newSpan'
      menu1_node.setAttribute("id", "subtilte");
  
  
      var menu1_title = document.querySelector("#subtitle");
      var parentDiv = menu1_title.parentNode;
  
  
      parentDiv.replaceChild(menu1_node, menu1_title);
  */
 };
