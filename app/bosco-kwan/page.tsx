import Link from "next/link";
import "../globals.css";

export default function BoscoKwanPage() {
  return (
    <div className="bosco-page">
      <div className="bosco-content">
        <div className="bosco-image-wrapper">
          <img
            src="/artist.jpg"
            alt="Bosco Kwan art installation"
            className="bosco-image"
          />
        </div>

        <div className="bosco-text-section !flex !flex-col">
          <div className="bosco-about">
            <h2 className="bosco-about-title">About artist</h2>
            <p className="bosco-about-text">
              Bosco kwan is a product and furniture designer from hong kong. Born
              on Dec 14,2004 I am completing my BA in product and furniture
              design at UAL: Chelsea collage of art.
            </p>
            <p className="bosco-about-text">
              I am a designer interested in how people interact with objects in
              everyday life. My work focuses on form, material, and user
              experience, exploring how design can shape behaviour and
              perception. I experiment with different ideas through making and
              testing, aiming to create functional objects that also communicate
              meaning and encourage interaction.
            </p>
            <p className="bosco-about-text">Now I live in London.</p>
          </div>

          <div className="bosco-name-footer">
            <span className="bosco-name">BOSCO KWAN</span>
          </div>
        </div>
      </div>
      <div className="bosco-back-container">
        <Link href="/" className="bosco-back-link">Go Back</Link>
      </div>
    </div>
  );
}
