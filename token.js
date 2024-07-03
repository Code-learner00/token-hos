// token.js
function printReceipt() {
  // Get the values from the input fields
  const hospitalName = document.getElementById('hospital-name').value;
  const patientName = document.getElementById('patient-name').value;
  const visitorName = document.getElementById('visitor-name').value;
  const visitorPhNo = document.getElementById('visitor-ph-no').value;
  const tokenNo = document.getElementById('token-no').value;
  const dateTime = document.getElementById('date-time').value;
  const time = document.getElementById('time').value;

  // Create a receipt string
  let receipt = `
    ${hospitalName}\n
    Patient Name: ${patientName}\n
    Visitor Name: ${visitorName}\n
    Visitor Phone No: ${visitorPhNo}\n
    Token No: ${tokenNo}\n
    Date and Time: ${dateTime}\n
    Time: ${time}\n
  `;

  // Print the receipt using printJS
  printJS({
    printable: receipt,
    type: 'raw',
    font: 'onospace',
    fontSize: 12,
    align: 'center',
    margins: { top: 10, bottom: 10, left: 10, right: 10 },
  });
}
