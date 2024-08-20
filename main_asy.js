async function loadIntoTable(url, table){

  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const {headers, rows} = await response.json();


  // Clear table
  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  // populate headers
  for(const headerText of headers) {
    const headerElement = document.createElement("th");

    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }
  
}


loadIntoTable("./data.json", document.querySelector("table"));
