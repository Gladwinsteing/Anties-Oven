function doPost(e) {
    var action = e.parameter.action;
    var username = e.parameter.username;
    var password = e.parameter.password;
    var uniqueid = e.parameter.uniqueid;

    if (action === 'login') {
        return handleLogin(username, password);
    } else if (action === 'signup') {
        return handleSignup(username, password, uniqueid);
    } else {
        return ContentService.createTextOutput("Invalid action").setMimeType(ContentService.MimeType.TEXT);
    }
}

// Handle the login functionality
function handleLogin(username, password) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    if (!sheet) {
        return ContentService.createTextOutput("Sheet not found").setMimeType(ContentService.MimeType.TEXT);
    }

    var data = sheet.getDataRange().getValues();
    var hashedInputPassword = hashPassword(password);

    for (var i = 1; i < data.length; i++) {
        var storedUsername = data[i][0];
        var storedHashedPassword = data[i][1];

        if (storedUsername === username && storedHashedPassword === hashedInputPassword) {
            return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
        }
    }

    return ContentService.createTextOutput("Denied").setMimeType(ContentService.MimeType.TEXT);
}

// Handle the signup functionality
function handleSignup(username, password, uniqueid) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    if (!sheet) {
        return ContentService.createTextOutput("Sheet not found").setMimeType(ContentService.MimeType.TEXT);
    }
    
    var data = sheet.getDataRange().getValues();

    // Validate uniqueid
    if (!uniqueid || uniqueid.trim() === "") {
        return ContentService.createTextOutput("Invalid uniqueid").setMimeType(ContentService.MimeType.TEXT);
    }

    // Check if the username already exists
    for (var i = 1; i < data.length; i++) {
        if (data[i][0] === username) {
            return ContentService.createTextOutput("Username exists").setMimeType(ContentService.MimeType.TEXT);
        }
    }

    // Hash the password before saving it
    var hashedPassword = hashPassword(password);

    // Append the new data
    sheet.appendRow([username, hashedPassword, uniqueid]);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

// Hash the password using SHA-256
function hashPassword(password) {
    var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
    var hexString = hash.map(function(byte) {
        return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0');
    }).join('');
    return hexString;
}

