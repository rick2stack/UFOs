// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// declare a variable tbody
//use d3.select to tell java to look for the <tbody> in HTML
// d3 is "data driven document" java library and creates data visualizations in web standards
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // This for loop will just iterate through the data list (or index or how data is build)
    data.forEach((dataRow) => {
      // Append a row to the table body
      // tr is row of table (this includes header)
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      // you can't just go values(dataRow), you need to define it as an object
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  // #dateime will be a tag in the HTML code
  // this is saying grab (select) #datetime and make it (property) a value  
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  // "on" is the funciton that listens 
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);