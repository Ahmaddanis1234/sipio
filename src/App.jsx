import React, { useState, useRef } from 'react';
import logo from './assets/LogoPuskesmasPamulang2.webp';

const PamulangPuskesmasInfoObat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const rightImageRef = useRef(null);

  const handleBoxClick = () => {
    console.log('Box clicked'); 
    if (rightImageRef.current) {
      rightImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-container" role="main" aria-label="Pelayanan Informasi Obat UPT Puskesmas Pamulang">
      <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' show' : ''}`} aria-label="Primary mobile navigation">
        <a href="#info">Informasi Obat</a>
        <a href="#kontak">Kontak</a>
        <a href="#tentang">Tentang Kami</a>
      </nav>

      <main>
        <section className="content-left">
          <img src={logo} alt="Logo UPT Puskesmas Pamulang" className="logo" />
          <h1 className="main-title">Pelayanan<br />Informasi Obat</h1>
          <p className="welcome-text">Selamat datang di website Pelayanan Informasi Obat UPT Puskesmas Pamulang!</p>
          <p className="description-text">
            Anda dapat mencari informasi terkait obat yang diberikan di UPT Puskesmas Pamulang di situs ini
            yang disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang. Layanan ini bertujuan
            untuk meningkatkan pengetahuan masyarakat dan tenaga kesehatan dalam penggunaan obat-obatan yang rasional.
          </p>
        </section>

        <section className="content-right" aria-label="Illustrative content of two pharmacists holding medicine boxes">
          <img
            src="GambarHeaderKanan.webp"
            alt="Illustration of two pharmacists holding medicine boxes"
            draggable="false"
            loading="lazy"
            ref={rightImageRef}
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </section>
      </main>

      {/* Navigation Boxes Section */}
      <section className="info-boxes">
        <div className="box" onClick={handleBoxClick} tabIndex={0} role="button" aria-pressed="false" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleBoxClick(); }}>
          <i className="icon-home"></i>
          <h3>Beranda Farmasi</h3>
          <p>Laman utama layanan informasi obat UPT Puskesmas Pamulang</p>
        </div>
        <div className="box" tabIndex={0} role="button" aria-pressed="false" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') alert('Kotak lain belum dihubungkan'); }}>
          <i className="icon-directory"></i>
          <h3>Direktori & Informasi Obat</h3>
          <p>Baca dan ketahui deskripsi, cara minum, dan hal lainnya mengenai obat yang anda gunakan</p>
        </div>
        <div className="box" tabIndex={0} role="button" aria-pressed="false" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') alert('Kotak lain belum dihubungkan'); }}>
          <i className="icon-article"></i>
          <h3>Artikel Obat</h3>
          <p>Baca dan ketahui artikel tentang obat</p>
        </div>
        <div className="box" tabIndex={0} role="button" aria-pressed="false" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') alert('Kotak lain belum dihubungkan'); }}>
          <i className="icon-faq"></i>
          <h3>F.A.Q</h3>
          <p>Baca dan ketahui hal yang sering ditanyakan mengenai obat</p>
        </div>
        <div className="box" tabIndex={0} role="button" aria-pressed="false" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') alert('Kotak lain belum dihubungkan'); }}>
          <i className="icon-ask"></i>
          <h3>Tanya Apoteker</h3>
          <p>Ada pertanyaan seputar obat yang belum terjawab? Tanya kami di sini</p>
        </div>
      </section>

      {/* New Content Section for BUD and ED */}
      <section className="bud-ed-info">
        <h2>Kenali Waktu Penggunaan Obat</h2>
        <h3>Beyond Use Date (BUD) & Expired Date (ED)</h3>
        <h4>Definisi</h4>
        <p>Batasan waktu penggunaan produk obat setelah dibuka dan disimpan sesuai ketentuan primer (di luar/di dalam, vial, blister, dll.)</p>
        
        <h4>Kegunaan</h4>
        <p>Menentukan batasan waktu stabil suatu obat.</p>
        
        <h4>Catat yuk! Beyond Use Date (BUD) Sedian Non Steril</h4>
        <table>
          <thead>
            <tr>
              <th>Siapa</th>
              <th>Beyond Use Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ruang perawatan</td>
              <td>24 Hari pada suhu 2°C - 8°C</td>
            </tr>
            <tr>
              <td>Ruang gizi</td>
              <td>14 Hari pada suhu 2°C - 8°C</td>
            </tr>
            <tr>
              <td>Ruang mulut dosis</td>
              <td>48 Jam pada suhu 2°C - 25°C</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PamulangPuskesmasInfoObat;

