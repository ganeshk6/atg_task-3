function inputDisable() {

  // Show loading state
  document.getElementById('myForm').classList.add('loading');
  document.getElementById('loadingSpinner').style.display = 'block';

  // Simulate a 2-second delay
  setTimeout(function() {
    // Disable input field after click on button
    document.getElementById('inputField').disabled = true;
    // Disable button disable after click on button
    document.getElementById('submitButton').disabled = true;

    // Remove loading state
    document.getElementById('myForm').classList.remove('loading');
    document.getElementById('loadingSpinner').style.display = 'none';
  }, 2000);
}
function buttonGroup2() {

  // Show loading state
  document.getElementById('myForm2').classList.add('loading');
  document.getElementById('loadingSpinner2').style.display = 'block';
  // display remove search icon
  document.getElementById('searchIcon').style.display = 'none';
  
  // Simulate a 2-second delay
  setTimeout(function() {
      // Disable input field after click on button
      document.getElementById('inputField2').disabled = true;
      // Disable button disable after click on button

    //   document.getElementById('submitButton2').disabled = true;
    
      // display block search icon
      document.getElementById('searchIcon').style.display = 'block';
    
    // Remove loading state
    document.getElementById('myForm2').classList.remove('loading');
    document.getElementById('loadingSpinner2').style.display = 'none';
  }, 2000);
}
function buttonGroup3() {

  // Show loading state
  document.getElementById('myForm3').classList.add('loading');
  document.getElementById('loadingSpinner3').style.display = 'block';
  // display none search icon
  document.getElementById('searchIcon2').style.display = 'none';
  
  // Simulate a 2-second delay
  setTimeout(function() {
      // Disable input field after click on button
      document.getElementById('inputField3').disabled = true;
      // Disable button disable after click on button
      document.getElementById('submitButton3').disabled = true;
      // display block search icon
      document.getElementById('searchIcon2').style.display = 'block';
    
    // Remove loading state
    document.getElementById('myForm3').classList.remove('loading');
    document.getElementById('loadingSpinner3').style.display = 'none';
  }, 2000);
}