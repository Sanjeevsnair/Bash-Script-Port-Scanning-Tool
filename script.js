async function scanPorts() {
    const target = document.getElementById('target').value;
    const response = await fetch('/scan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ target })
    });
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Port Scan Results</h2>';
    if (data.error) {
        resultsDiv.innerHTML += `<p>Error: ${data.error}</p>`;
    } else {
        resultsDiv.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
}
