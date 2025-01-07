
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
});
