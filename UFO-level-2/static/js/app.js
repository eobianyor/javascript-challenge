// from data.js
var tableData = data;

// YOUR CODE HERE!
// select  tbody d3
var tbody = d3.select("tbody");
// var inputDate = d3.select("#datetime");

// Create a custom function to append a table to the html page
function composeTable(inputData) {
    tbody.html("");
    inputData.forEach(Encounters => {
        // console.log(tableData);

        var row = tbody.append('tr');

        Object.values(Encounters).forEach(value => {
            row.append('td').text(value);
        });

    });
}

// console.log(inputDate);
// Create a custom function to run a filter on the data when the search values are given and the 'Filter button' is pressed
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#shape");

    // Get the value property of the input element
    var inputDate = inputElement1.property("value");
    var inputCity = inputElement2.property("value");
    var inputShape = inputElement3.property("value");

    console.log(inputDate, inputCity, inputShape);

    // Run 3 filters to get the data filtered by date time, city & shape
    if (inputDate != "") {
        var onceFilteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate);
    }
    else if (inputCity != "") {
        var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city.toLowerCase() === inputCity.toLowerCase());
    }
    else if (inputShape != "") {
        var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
        console.log(`tableData has been filtered by ${inputDate}, ${inputCity} and ${inputShape} `);
        console.log(thriceFilteredEncounters);
        composeTable(thriceFilteredEncounters);
    }

    else {
        d3.select('#text1').text('DATA OUT OF RANGE, PLEASE CHOOSE A DATE BETWEEN X AND Y')
        console.log("Please choose a date");
    }
});

composeTable(tableData);
