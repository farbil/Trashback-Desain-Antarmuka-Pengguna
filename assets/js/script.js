// Script for daftar.html (Register)
const daftarForm = document.getElementById('daftarForm');
if (daftarForm) {
  const errorMsg = document.getElementById('errorMsg');
  daftarForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMsg.textContent = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      errorMsg.textContent = 'Email dan password harus diisi.';
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = 'Password minimal 6 karakter.';
      return;
    }

    // Simpan akun sederhana ke localStorage lalu arahkan ke halaman masuk
    localStorage.setItem('tb_email', email);
    localStorage.setItem('tb_password', password);
    localStorage.setItem('tb_registered', 'true');

    window.location.href = 'masuk.html';
  });
}

// Script for masuk.html (Login)
const masukForm = document.getElementById('masukForm');
if (masukForm) {
  const errorMsg = document.getElementById('errorMsg');
  masukForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMsg.textContent = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      errorMsg.textContent = 'Email dan password harus diisi.';
      return;
    }

    const savedEmail = localStorage.getItem('tb_email');
    const savedPassword = localStorage.getItem('tb_password');
    const registered = localStorage.getItem('tb_registered');

    if (!registered) {
      errorMsg.textContent = 'Akun belum terdaftar. Silakan daftar terlebih dahulu.';
      return;
    }

    if (email !== savedEmail || password !== savedPassword) {
      errorMsg.textContent = 'Email atau password salah.';
      return;
    }

    // Berhasil masuk – arahkan ke halaman utama
    alert('Selamat datang kembali, ' + email + '! 🎉');
    window.location.href = '../pages/home.html';
  });
}
