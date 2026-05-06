import Link from "next/link";
import "../globals.css";

export default function InstagramPage() {
  return (
    <div className="date-page-container" style={{position: "relative", minHeight: "100vh"}}>
      <h1 className="date-title" style={{fontWeight: "400", fontSize: "clamp(1.5rem, 5vw, 3rem)", letterSpacing: "0.1em", margin: "auto"}}>
        <a href="https://www.instagram.com/_itsthisbosco.art" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
          _itsthisbosco.art
        </a>
      </h1>
      <Link href="/" className="back-link" style={{position: "absolute", bottom: "3rem", border: "2px solid black", padding: "0.5rem 1.5rem", fontSize: "1rem"}}>
        Go Back
      </Link>
    </div>
  );
}
