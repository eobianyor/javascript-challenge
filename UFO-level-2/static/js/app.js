// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// var inputDate = d3.select("#datetime");

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

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    var inputElement1 = d3.select("#datetime");
    var inputDate = inputElement1.property("value");
    var inputElement2 = d3.select("#city");
    var inputCity = inputElement2.property("value");
    var inputElement3 = d3.select("#shape");
    var inputShape = inputElement3.property("value");
    console.log(inputDate, inputCity, inputShape);

    var onceFilteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate);
    var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city === inputCity);
    var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.shape === inputShape);
    console.log(`tableData has been filtered by ${inputDate}, ${inputCity} and ${inputShape} `);
    console.log(thriceFilteredEncounters);
    composeTable(thriceFilteredEncounters);
});

composeTable(tableData);
