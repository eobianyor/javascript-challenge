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
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

    // Get the value property of the input element
    var inputDate = inputElement1.property("value");
    var inputCity = inputElement2.property("value");
    var inputState = inputElement3.property("value");
    var inputCountry = inputElement4.property("value");
    var inputShape = inputElement5.property("value");

    console.log(inputDate, inputCity, inputShape);

    // // Run 3 filters to get the data filtered by date time, city & shape
    if (inputDate != "") {
        d3.select('#errortext').text("");
        var onceFilteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate)
    }
    else { onceFilteredEncounters = tableData };
    if (inputCity != "") {
        d3.select('#errortext').text("");
        var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city.toLowerCase() === inputCity.toLowerCase())
    }
    else { twiceFilteredEncounters = onceFilteredEncounters };
    if (inputState != "") {
        d3.select('#errortext').text("");
        var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.state.toLowerCase() === inputState.toLowerCase())
    }
    else { thriceFilteredEncounters = twiceFilteredEncounters };
    if (inputCountry != "") {
        d3.select('#errortext').text("");
        var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase())
    }
    else { fourthFilteredEncounters = thriceFilteredEncounters };
    if (inputShape != "") {
        d3.select('#errortext').text("");
        var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase())
    }
    else { fifthFilteredEncounters = fourthFilteredEncounters };
    console.log(`tableData has been filtered by ${inputDate}, ${inputCity}, ${inputState}, ${inputCountry}  and ${inputShape} `);
    console.log(fifthFilteredEncounters);
    if (fifthFilteredEncounters != "") { d3.select('#errortext').text(""); composeTable(fifthFilteredEncounters) }
    else {
        tbody.html("");
        d3.select('#errortext').text('DATA NOT FILTERED, PLEASE SELECT A FILTER CRITERIA ON THE LEFT');
        console.log("Data not filtered, please select a filter criteria on the left")
    }

});

composeTable(tableData);
