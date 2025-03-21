async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            document.getElementById("status").innerText = "Cüzdan Bağlandı!";
        } catch (error) {
            console.error(error);
            document.getElementById("status").innerText = "Bağlantı Hatası!";
        }
    } else {
        alert("Metamask yüklü değil!");
    }
}

function startProcess() {
    document.getElementById("status").innerText = "İşlem Başlatıldı...";
    
    setTimeout(() => {
        document.getElementById("status").innerText = "Airdrop ve Sniping işlemi tamamlandı!";
    }, 3000);
}

function flashLoan() {
    document.getElementById("status").innerText = "Flash Loan İşlemi Başlatıldı...";
    
    setTimeout(() => {
        document.getElementById("status").innerText = "Flash Loan Tamamlandı!";
    }, 5000);
}
