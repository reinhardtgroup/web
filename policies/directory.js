document.addEventListener('DOMContentLoaded', function() {
    // URL to the directory.json file hosted on GitHub Pages
    const jsonFileUrl = 'https://reinhardtgroup.github.io/web/directory.json';
    
    // Fetch the directory data from the static JSON file
    fetch(jsonFileUrl)
        .then(response => response.json())
        .then(data => {
            const directoryListingTable = document.querySelector('#directory-listing tbody');
            renderDirectoryListing(data.policies, directoryListingTable);
        })
        .catch(error => console.error('Error fetching directory data:', error));

    // Function to render the directory structure in the table
    function renderDirectoryListing(policies, table) {
        // Loop through each policy (directory) and render it
        policies.forEach(policy => {
            // Display the directory path as a bold row
            const row = document.createElement('tr');
            const pathCell = document.createElement('td');
            pathCell.colSpan = 2; // This cell will span two columns
            pathCell.style.fontWeight = 'bold'; // Make the directory path bold
            pathCell.textContent = policy.path;
            row.appendChild(pathCell);
            table.appendChild(row);

            // Render the files inside this directory
            policy.files.forEach(file => {
                const fileRow = document.createElement('tr');
                const filenameCell = document.createElement('td');
                const link = document.createElement('a');
                link.href = `${policy.path}/${file.filename}`; // Build the full path to the file
                link.textContent = file.filename;
                filenameCell.appendChild(link);
                fileRow.appendChild(filenameCell);
                
                // Add description cell
                const descriptionCell = document.createElement('td');
                descriptionCell.textContent = file.description;
                fileRow.appendChild(descriptionCell);
                table.appendChild(fileRow);
            });
        });
    }
});
