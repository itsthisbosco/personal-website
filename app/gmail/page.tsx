import Link from "next/link";
import "../globals.css";

export default function GmailPage() {
  return (
    <div className="date-page-container" style={{position: "relative", minHeight: "100vh"}}>
      <h1 className="date-title" style={{fontWeight: "400", fontSize: "clamp(1rem, 4vw, 2.5rem)", letterSpacing: "0.05em", margin: "auto"}}>
        <a href="mailto:boscokwan1214@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
          boscokwan1214@gmail.com
        </a>
      </h1>
      <Link href="/" className="back-link" style={{position: "absolute", bottom: "3rem", border: "2px solid black", padding: "0.5rem 1.5rem", fontSize: "1rem"}}>
        Go Back
      </Link>
    </div>
  );
}
