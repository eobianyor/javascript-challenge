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

    // // Run 3 filters to get the data filtered by date time, city & shape OPTION1
    // if (inputDate != "" & inputCity != "" & inputState != "" & inputCountry != "" & inputShape != "") {
    //     var onceFilteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate);
    //     var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city.toLowerCase() === inputCity.toLowerCase());
    //     var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.state.toLowerCase() === inputState.toLowerCase());
    //     var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase());
    //     var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
    //     console.log(`tableData has been filtered by ${inputDate}, ${inputCity}, ${inputState}, ${inputCountry}  and ${inputShape} `);
    //     console.log(fifthFilteredEncounters);
    //     composeTable(fifthFilteredEncounters);
    // }
    // else if (inputDate == "" & inputCity != "" & inputState != "" & inputCountry != "" & inputShape != "") {
    //     onceFilteredEncounters = tableData;
    //     var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city.toLowerCase() === inputCity.toLowerCase());
    //     var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.state.toLowerCase() === inputState.toLowerCase());
    //     var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase());
    //     var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
    //     console.log(`tableData has been filtered by ${inputCity}, ${inputState}, ${inputCountry}  and ${inputShape} `);
    //     console.log(fifthFilteredEncounters);
    //     composeTable(fifthFilteredEncounters);
    // }
    // else if (inputDate == "" & inputCity == "" & inputState != "" & inputCountry != "" & inputShape != "") {
    //     twiceFilteredEncounters = tableData;
    //     var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.state.toLowerCase() === inputState.toLowerCase());
    //     var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase());
    //     var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
    //     console.log(`tableData has been filtered by ${inputState}, ${inputCountry}  and ${inputShape} `);
    //     console.log(fifthFilteredEncounters);
    //     composeTable(fifthFilteredEncounters);
    // }
    // else if (inputDate == "" & inputCity == "" & inputState == "" & inputCountry != "" & inputShape != "") {
    //     thriceFilteredEncounters = tableData;
    //     var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase());
    //     var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
    //     console.log(`tableData has been filtered by ${inputCountry}  and ${inputShape} `);
    //     console.log(fifthFilteredEncounters);
    //     composeTable(fifthFilteredEncounters);
    // }
    // else if (inputDate == "" & inputCity == "" & inputState == "" & inputCountry == "" & inputShape != "") {
    //     fourthFilteredEncounters = tableData;
    //     var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase());
    //     console.log(`tableData has been filtered by ${inputShape} `);
    //     console.log(fifthFilteredEncounters);
    //     composeTable(fifthFilteredEncounters);
    // }
    // else {
    //     d3.select('#text1').text('DATA OUT OF RANGE, PLEASE CHOOSE A DATE BETWEEN X AND Y')
    //     console.log("Please choose a date");
    // }


    if (inputDate != "") { var onceFilteredEncounters = tableData.filter(Encounters => Encounters.datetime === inputDate) }
    else { onceFilteredEncounters = tableData };
    if (inputCity != "") { var twiceFilteredEncounters = onceFilteredEncounters.filter(Encounters => Encounters.city.toLowerCase() === inputCity.toLowerCase()) }
    else { twiceFilteredEncounters = onceFilteredEncounters };
    if (inputState != "") { var thriceFilteredEncounters = twiceFilteredEncounters.filter(Encounters => Encounters.state.toLowerCase() === inputState.toLowerCase()) }
    else { thriceFilteredEncounters = twiceFilteredEncounters };
    if (inputCountry != "") { var fourthFilteredEncounters = thriceFilteredEncounters.filter(Encounters => Encounters.country.toLowerCase() === inputCountry.toLowerCase()) }
    else { fourthFilteredEncounters = thriceFilteredEncounters };
    if (inputShape != "") { var fifthFilteredEncounters = fourthFilteredEncounters.filter(Encounters => Encounters.shape.toLowerCase() === inputShape.toLowerCase()) }
    else { fifthFilteredEncounters = fourthFilteredEncounters };
    console.log(`tableData has been filtered by ${inputDate}, ${inputCity}, ${inputState}, ${inputCountry}  and ${inputShape} `);
    console.log(fifthFilteredEncounters);
    if (fifthFilteredEncounters != "") { composeTable(fifthFilteredEncounters) }
    else {
        d3.select('#text1').text('DATA NOT FILTERED, PLEASE SELECT A FILTER CRITERIA ON THE LEFT')
        console.log("Please choose a date")
    }

});

composeTable(tableData);
