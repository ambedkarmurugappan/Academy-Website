# Connect the enquiry form to Google Sheets

1. Open the sheet, add headers in row 1: `Timestamp | Full Name | Mobile Number | Email Address`.
2. Extensions → Apps Script, paste:

```js
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
      .appendRow([new Date(), d.fullName, "'" + d.mobile, d.email]);
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy → New deployment → Web app, Execute as: Me, Who has access: Anyone. Copy the `/exec` URL.
4. Save it as the project secret `ENQUIRY_SHEET_ENDPOINT`.
