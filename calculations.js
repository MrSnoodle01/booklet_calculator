document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const numberOfBooklets = document.getElementById('numBooklets').value;
    const numberOfBookletPages = document.getElementById('bookletPages').value;
    const bookletHeight = document.getElementById('bookletHeight').value;
    const bookletWidth = document.getElementById('bookletWidth').value;
    output = document.getElementById('output');

    if (numberOfBookletPages == 0 || numberOfBooklets == 0 || bookletHeight == 0 || bookletWidth == 0) {
        output.innerHTML = "";
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
        return;
    }

    const sheetsPerBooklet = Math.ceil(numberOfBookletPages / 4);
    const totalSheets = sheetsPerBooklet * numberOfBooklets;
    const numBlankPages = numberOfBookletPages % 4;
    const sheetSize = bookletWidth * 2;

    output.innerHTML = `
    ${numberOfBookletPages > 48 ? "WARNING Thick booklets may not lay flat <br>" : ""}
    Total sheets: ${totalSheets} <br>
    Sheets per booklet: ${sheetsPerBooklet} <br>
    ${numBlankPages > 0 ? `Blank pages added: ${numBlankPages} <br>` : ""} 
    Size of sheet before folding: ${sheetSize}" x ${bookletHeight}" <br>
    `
});