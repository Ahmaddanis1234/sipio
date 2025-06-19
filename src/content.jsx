import React, { useState } from "react";
import "./css/FAQSection.css";
import "./css/BUDSection.css";
import "./css/Footer.css";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu UPIObat?",
      answer:
        "UPIObat adalah layanan informasi obat yang disediakan oleh Tim Farmasi Apotek UPT Puskesmas Pamulang untuk membantu masyarakat memahami penggunaan obat secara rasional.",
    },
    {
      question: "Bagaimana Cara Penggunaan Obat yang Benar?",
      answer:
        "Penggunaan obat yang benar meliputi membaca petunjuk dokter atau apoteker, mengikuti dosis yang dianjurkan, dan menyimpan obat sesuai instruksi.",
    },
    {
      question: "Mengapa ada aturan minum obat setelah makan?",
      answer:
        "Aturan ini biasanya diberikan untuk mengurangi iritasi lambung atau meningkatkan penyerapan obat tertentu.",
    },
    {
      question: "Mengapa ada aturan minum obat sebelum makan?",
      answer:
        "Obat sebelum makan sering diresepkan untuk memastikan penyerapan maksimal atau untuk kondisi tertentu seperti asam lambung.",
    },
    {
      question: "Mengapa antibiotik harus dihabiskan?",
      answer:
        "Menghabiskan antibiotik mencegah resistensi bakteri dan memastikan infeksi sepenuhnya hilang.",
    },
    {
      question: "Bagaimana cara melarutkan antibiotik sirup kering?",
      answer:
        "Larutkan dengan air sesuai takaran yang diberikan oleh apoteker, lalu kocok hingga merata sebelum digunakan.",
    },
    {
      question: "Apakah semua obat memiliki efek samping?",
      answer:
        "Tidak semua obat memiliki efek samping, tetapi sebagian besar bisa menyebabkan efek samping tergantung pada kondisi pasien.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <h2 className="faq-subtitle">Hal yang sering ditanyakan seputar obat</h2>
      <p className="faq-author">
        disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
        {question}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export const BUDItem = () => {
  return (
    <>
      <section className="bud-ed-info">
        <h2 className="bud-ed-title">Kenali Waktu Penggunaan Obat</h2>
        <div className="bud-ed-boxes">
          <div className="bud-ed-card">
            <h3 className="bud-ed-subtitle bud">Beyond Use Date (BUD)</h3>
            <p>
              <strong>Definisi</strong>
              <br />
              Batas waktu penggunaan produk obat setelah diracik/disiapkan atau
              setelah kemasan primernya dibuka/dirusak (ampul, vial, blister,
              dll yang bersentuhan langsung dengan obat).
            </p>
            <p>
              <strong>Kegunaan</strong>
              <br />
              Menentukan batasan waktu stabil suatu obat.
            </p>
          </div>
          <div className="bud-ed-card">
            <h3 className="bud-ed-subtitle ed">Expired Date (ED)</h3>
            <p>
              <strong>Definisi</strong>
              <br />
              Tanggal terakhir di mana keefektifan dan keamanan produk obat
              masih terjamin untuk dikonsumsi atau digunakan oleh konsumen.
            </p>
            <p>
              <strong>Kegunaan</strong>
              <br />
              Menentukan batasan waktu stabil suatu obat.
            </p>
          </div>
        </div>
        <div className="bud-ed-notes">
          <p className="bud-ed-note">
            Waktu BUD bisa sama atau lebih pendek dibandingkan ED. Karena inilah
            penting untuk tenaga kesehatan khususnya{" "}
            <strong className="highlight">
              Apoteker untuk mengetahui ketentuan dan mencantumkan pada kemasan
              obat.
            </strong>
          </p>
        </div>
      </section>
      <div className="bud-extra-section">
        <h3 className="bud-extra-title">
          Catat yuk! <br />
          Beyond Use Date (BUD) Sediaan Non Steril
        </h3>

        <table className="bud-extra-table">
          <thead>
            <tr>
              <th>Sediaan</th>
              <th>Beyond Use Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Topical/Dermal mengandung air, semisolid, mucosal liquid</td>
              <td>30 Hari</td>
            </tr>
            <tr>
              <td>Oral mengandung air</td>
              <td>14 Hari pada suhu 2-8°C</td>
            </tr>
            <tr>
              <td>Tetes mata mini dose</td>
              <td>3x14 jam setelah dibuka</td>
            </tr>
            <tr>
              <td>Tetes mata/telinga</td>
              <td>28 hari setelah dibuka</td>
            </tr>
            <tr>
              <td>Sirup kering</td>
              <td>7–14 hari setelah diencerkan</td>
            </tr>
            <tr>
              <td>Injeksi insulin multidose</td>
              <td>
                28 hari pada suhu ruang <br />
                60 Hari pada suhu 2-8°C
              </td>
            </tr>
            <tr>
              <td>Racikan padat (puyer, kapsul)</td>
              <td>
                25% dari ED <br />
                atau 180 hari setelah peracikan
              </td>
            </tr>
            <tr>
              <td>Racikan tidak mengandung air</td>
              <td>
                25% dari ED <br />
                atau 90 hari setelah peracikan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="poster-section">
        <h1>Baca Poster Berikut Yuk Agar kita Semakin Mengenal Obat</h1>
        <div className="image-container">
          <img src="https://sipio.tangerangselatankota.go.id/static/media/ImgDagusibu.39a2adfb.svg" />
          <div className="some-images">
            <img src="https://sipio.tangerangselatankota.go.id/static/media/ImgTanyaLimao.640483ce.svg" />
            <img src="https://sipio.tangerangselatankota.go.id/static/media/ImgGunakanObat.224a6c74.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export const InfoObat = () => {
  return <></>;
};

export const ArtikelObat = () => {
  return <></>;
};

export const TanyaApoteker = () => {
  return <></>;
};

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="left">
          <img src="https://sipio.tangerangselatankota.go.id/static/media/logoPuskesmasPamulang.d661861b.png" />
          <p className="text">
            <span>Alamat</span>
            <p>
              Jl. Surya Kencana No.1, Pamulang Barat, Kec. Pamulang, Kota
              Tangerang Selatan, Banten 15417
            </p>
          </p>
          <p className="text">
            <span>Telepon</span>
            <p>(021) 7445537</p>
          </p>
        </div>
        <div className="right">
          <img
            className="logo-tangsel"
            src="https://sipio.tangerangselatankota.go.id/static/media/LogoTangSel.7b6a04c1.png"
          />
          <img
            className="logo-kemenkes"
            src="https://sipio.tangerangselatankota.go.id/static/media/LogoKemenkes.4d1a67f2.png"
          />
        </div>
      </footer>
    </>
  );
};
