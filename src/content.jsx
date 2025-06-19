import React, { useState } from "react";
import "./css/FAQSection.css";
import "./css/BUDSection.css";

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
    <section className="bud-ed-info">
      <h2 className="bud-ed-title">Kenali Waktu Penggunaan Obat</h2>
      <div className="bud-ed-boxes">
        <div className="bud-ed-card">
          <h3 className="bud-ed-subtitle bud">Beyond Use Date (BUD)</h3>
          <p>
            <strong>Definisi</strong>
            <br />
            Batas waktu penggunaan produk obat setelah diracik/disiapkan atau
            setelah kemasan primernya dibuka/dirusak (ampul, vial, blister, dll
            yang bersentuhan langsung dengan obat).
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
            Tanggal terakhir di mana keefektifan dan keamanan produk obat masih
            terjamin untuk dikonsumsi atau digunakan oleh konsumen.
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
  );
};
