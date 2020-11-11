// from data.js
var tableData = data;

// YOUR CODE HERE!

// select  tbody d3
// 2 functions 
// 1st function would be printing the table iterating over obejects forEach
// 2nd function getting your inputvar = select and get value from input tag , if(inputvar): fvar1 tabledata.filter(date === input.date) call 1st func with fvar1
// event listner d3.selecta().on(click,2nd funmc)

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

// Create a custom function to run a filter on the data when a date is given and the 'Filter button' is pressed
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    console.log(inputDate);

    if (inputDate != "") {
        var filteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate);
        console.log("tableData has been filtered by ${inputDate}");
        console.log(filteredEncounters);
        composeTable(filteredEncounters);
    }
    else {
        d3.select('#text1').text('DATA OUT OF RANGE, PLEASE CHOOSE A DATE BETWEEN X AND Y')
        console.log("Please choose a date");
    }
});

composeTable(tableData);