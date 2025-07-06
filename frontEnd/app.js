const header = document.getElementById('main-header');


window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const pathInput = document.getElementById('path');
const urlInput = document.getElementById('url');
const notif = document.getElementById('notif');

document.getElementById('kirim').addEventListener('click', async () => {
    const path = pathInput.value.trim();
    const url = urlInput.value.trim();

    console.log('tesapakah jalan');

    notif.classList.add('hidden');
    notif.classList.remove('success','error', 'blink');

    if (!path || !url) {
        showNotif('Path dan URL wajib diisi!', false);
        return;
    }

    const API_BASE = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://go.michonas.me';

    try {
        const res = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path, url })
        });

        const result = await res.json();
        showNotif(result.message || 'Gagal menambahkan path', res.ok);

        } catch (err) {
            showNotif('Tidak dapat terhubung ke server.', false);
            console.error(err);
        }
});

function showNotif(message, isSuccess) {
    notif.textContent = message;
    notif.classList.remove('hidden');
    notif.classList.add('blink');

    if (isSuccess) {
    notif.classList.add('success');
    } else {
    notif.classList.add('error');
    }

    // Trigger ulang animasi
    void notif.offsetWidth;
    notif.classList.remove('blink');
    void notif.offsetWidth;
    notif.classList.add('blink');
}