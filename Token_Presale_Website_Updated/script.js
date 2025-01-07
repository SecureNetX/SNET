
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('status').innerText = `Verbunden: ${accounts[0]}`;
        } catch (error) {
            document.getElementById('status').innerText = 'Verbindung fehlgeschlagen.';
        }
    } else {
        alert('Bitte MetaMask installieren!');
    }
});

document.getElementById('buyTokens').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Bitte eine gültige Anzahl von Tokens eingeben.');
        return;
    }
    alert(`Du hast ${amount} Tokens gekauft! (Simulation)`);
    
    // Simulation des Fortschrittsbalkens (erhöht um 10%)
    let progressBar = document.getElementById('progress-bar');
    let progressText = document.getElementById('progress-text');
    let currentWidth = parseFloat(progressBar.style.width) || 0;
    let newWidth = Math.min(currentWidth + 10, 100);
    progressBar.style.width = newWidth + '%';
    progressText.innerText = `${newWidth}% des Ziels erreicht`;
});
