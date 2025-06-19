import { useState, useRef } from "react";
import logo from "./assets/LogoPuskesmasPamulang2.webp";
import { BUDItem } from "./content";
import { FAQSection } from "./content";

const PamulangPuskesmasInfoObat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const rightImageRef = useRef(null);

  const boxItems = [
    {
      icon: "icon-home",
      title: "Beranda Farmasi",
      desc: "Laman utama layanan informasi obat UPT Puskesmas Pamulang",
      onClick: () => handleBoxClick(),
    },
    {
      icon: "icon-directory",
      title: "Direktori & Informasi Obat",
      desc: "Baca dan ketahui deskripsi, cara minum, dan hal lainnya mengenai obat yang anda gunakan",
      onClick: () => alert("Kotak lain belum dihubungkan"),
    },
    {
      icon: "icon-article",
      title: "Artikel Obat",
      desc: "Baca dan ketahui artikel tentang obat",
      onClick: () => alert("Kotak lain belum dihubungkan"),
    },
    {
      icon: "icon-faq",
      title: "F.A.Q",
      desc: "Baca dan ketahui hal yang sering ditanyakan mengenai obat",
      onClick: () => alert("Kotak lain belum dihubungkan"),
    },
    {
      icon: "icon-ask",
      title: "Tanya Apoteker",
      desc: "Ada pertanyaan seputar obat yang belum terjawab? Tanya kami di sini",
      onClick: () => alert("Kotak lain belum dihubungkan"),
    },
  ];

  const handleBoxClick = () => {
    console.log("Box clicked");
    if (rightImageRef.current) {
      rightImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="page-container"
      role="main"
      aria-label="Pelayanan Informasi Obat UPT Puskesmas Pamulang"
    >
      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " show" : ""}`}
        aria-label="Primary mobile navigation"
      >
        <a href="#info">Informasi Obat</a>
        <a href="#kontak">Kontak</a>
        <a href="#tentang">Tentang Kami</a>
      </nav>

      <main>
        <section className="content-left">
          <img src={logo} alt="Logo UPT Puskesmas Pamulang" className="logo" />
          <h1 className="main-title">
            Pelayanan
            <br />
            Informasi Obat
          </h1>
          <p className="welcome-text">
            Selamat datang di website Pelayanan Informasi Obat UPT Puskesmas
            Pamulang!
          </p>
          <p className="description-text">
            Anda dapat mencari informasi terkait obat yang diberikan di UPT
            Puskesmas Pamulang di situs ini yang disusun oleh Tim Farmasi Apotek
            UPT Puskesmas Pamulang. Layanan ini bertujuan untuk meningkatkan
            pengetahuan masyarakat dan tenaga kesehatan dalam penggunaan
            obat-obatan yang rasional.
          </p>
        </section>

        <section
          className="content-right"
          aria-label="Illustrative content of two pharmacists holding medicine boxes"
        >
          <img
            src="GambarHeaderKanan.webp"
            alt="Illustration of two pharmacists holding medicine boxes"
            draggable="false"
            loading="lazy"
            ref={rightImageRef}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </section>
      </main>

      {/* Navigation Boxes Section */}
      <section className="info-boxes">
        {boxItems.map((item, index) => (
          <div
            key={index}
            className="box"
            onClick={item.onClick}
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") item.onClick();
            }}
          >
            <i className={item.icon}></i>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
        <BUDItem />
        <FAQSection />
    </div>
  );
};

export default PamulangPuskesmasInfoObat;
