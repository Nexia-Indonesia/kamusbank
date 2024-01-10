// script.js
var abbreviationsData = abbreviations;
var table; // Deklarasikan variabel tabel di luar fungsi renderTable

function renderTable() {
   table = $('#myTable').DataTable({
    "pageLength": 10,
    "paging": true,
    "language": {
      "url": "Indonesian.json"
    }
  });

  // Clear the existing rows
  table.clear();

  for (var i = 0; i < abbreviationsData.length; i++) {
    table.row.add([
      abbreviationsData[i].abbreviation,
      abbreviationsData[i].expansion
    ]).draw(false);
  }
}

$(document).ready(function() {
  renderTable();
});
