// from data.js
var tableData = data;

// YOUR CODE HERE!

// select  tbody d3
// 2 functions 
// 1st function would be printing the table iterating over obejects forEach
// 2nd function getting your inputvar = select and get value from input tag , if(inputvar): fvar1 tabledata.filter(date === input.date) call 1st func with fvar1
// event listner d3.selecta().on(click,2nd funmc)


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

    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    console.log(inputDate);

    var filteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate);
    console.log("tableData has been filtered by ${inputDate}");
    console.log(filteredEncounters);
    composeTable(filteredEncounters);
});

composeTable(tableData);