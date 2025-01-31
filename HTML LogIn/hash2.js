function doPost(e) {
    var action = e.parameter.action;
    var username = e.parameter.username;
    var password = e.parameter.password;
  
    if (action === 'login') {
      return handleLogin(username, password);
    } else if (action === 'signup') {
      return handleSignup(username, password);
    } else {
      return ContentService.createTextOutput("Invalid action").setMimeType(ContentService.MimeType.TEXT);
    }
  }
  
  // Handle the login functionality
  function handleLogin(username, password) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = sheet.getDataRange().getValues();
  
    // Hash the input password (you need to hash the entered password to compare it)
    var hashedInputPassword = hashPassword(password);
  
    // Check if the username and hashed password match
    for (var i = 1; i < data.length; i++) {
      var storedUsername = data[i][0];
      var storedHashedPassword = data[i][1];
  
      // Compare the hashed password from the input with the stored hashed password
      if (storedUsername === username && storedHashedPassword === hashedInputPassword) {
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
      }
    }
  
    return ContentService.createTextOutput("Denied").setMimeType(ContentService.MimeType.TEXT);
  }
  
  // Handle the signup functionality
  function handleSignup(username, password) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = sheet.getDataRange().getValues();
  
    // Check if the username already exists
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === username) {
        return ContentService.createTextOutput("Username exists").setMimeType(ContentService.MimeType.TEXT);
      }
    }
  
    // Hash the password before saving it
    var hashedPassword = hashPassword(password);
    
    // Add the new username and hashed password to the sheet
    sheet.appendRow([username, hashedPassword]);
  
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  
  // Hash the password using SHA-256
  function hashPassword(password) {
    // Compute the SHA-256 hash of the password
    var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
    
    // Convert the byte array to a hex string
    var hexString = hash.map(function(byte) {
      return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0');
    }).join('');
  
    return hexString;
  }
  