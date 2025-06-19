import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Apa itu UPIObat?',
      answer: 'UPIObat adalah layanan informasi obat yang disediakan oleh Tim Farmasi Apotek UPT Puskesmas Pamulang untuk membantu masyarakat memahami penggunaan obat secara rasional.'
    },
    {
      question: 'Bagaimana Cara Penggunaan Obat yang Benar?',
      answer: 'Penggunaan obat yang benar meliputi membaca petunjuk dokter atau apoteker, mengikuti dosis yang dianjurkan, dan menyimpan obat sesuai instruksi.'
    },
    {
      question: 'Mengapa ada aturan minum obat setelah makan?',
      answer: 'Aturan ini biasanya diberikan untuk mengurangi iritasi lambung atau meningkatkan penyerapan obat tertentu.'
    },
    {
      question: 'Mengapa ada aturan minum obat sebelum makan?',
      answer: 'Obat sebelum makan sering diresepkan untuk memastikan penyerapan maksimal atau untuk kondisi tertentu seperti asam lambung.'
    },
    {
      question: 'Mengapa antibiotik harus dihabiskan?',
      answer: 'Menghabiskan antibiotik mencegah resistensi bakteri dan memastikan infeksi sepenuhnya hilang.'
    },
    {
      question: 'Bagaimana cara melarutkan antibiotik sirup kering?',
      answer: 'Larutkan dengan air sesuai takaran yang diberikan oleh apoteker, lalu kocok hingga merata sebelum digunakan.'
    },
    {
      question: 'Apakah semua obat memiliki efek samping?',
      answer: 'Tidak semua obat memiliki efek samping, tetapi sebagian besar bisa menyebabkan efek samping tergantung pada kondisi pasien.'
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <h2 className="faq-subtitle">Hal yang sering ditanyakan seputar obat</h2>
      <p className="faq-author">disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang</p>
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
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
        {question}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQSection;