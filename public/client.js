// Connect to the Socket.io server
const socket = io();

// Listen for the 'objectData' event
socket.on('objectData', (data) => {
  console.log('Received object data:', data);

  var tableBody = document.querySelector('#data-table tbody');  
  // Loop through the object properties and populate the table
  tableBody.innerHTML = "";
  for (const name in data) {
      if (data.hasOwnProperty(name)) {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellValue1 = row.insertCell(1);
        const cellValue2 = row.insertCell(2);
        const cellValue3 = row.insertCell(3);
    
        cellName.textContent = name;
        cellValue1.textContent = data[name][0];
        cellValue2.textContent = data[name][1];
        cellValue3.textContent = data[name][2];
      }
    }  

});

socket.on('textGenerated', (generatedText) => {
  console.log('Received generated text:', generatedText);
  var gtext = document.querySelector("#gpt").innerHTML = `${generatedText}`;
});