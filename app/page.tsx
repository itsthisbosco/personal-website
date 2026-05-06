import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="dates-grid">
        <Link href="/date/2021-03-31" className="date-link">2021.3.31</Link>
        <Link href="/date/2022-11-04" className="date-link">2022.11.4</Link>
        <Link href="/date/2023-01-16" className="date-link">2023.1.16</Link>

        <Link href="/date/2023-02-07" className="date-link">2023.2.7</Link>
        <Link href="/date/2023-11-16" className="date-link">2023.11.16</Link>

        <Link href="/date/2024-05-24" className="date-link">2024.5.24</Link>
        <Link href="/date/2024-10-28" className="date-link">2024.10.28</Link>
        <Link href="/date/2025-05-26" className="date-link">2025.5.26</Link>

        <Link href="/date/2025-08-16" className="date-link">2025.8.16</Link>
        <Link href="/date/2026-alternate" className="date-link">2026.?.??</Link>
        <Link href="/project/to-be-continued" className="date-link" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: '400', justifySelf: 'start', alignSelf: 'center' }}>to be continue project...</Link>
      </div>
      <div className="dates-row large-row">
        <Link href="/date/2026-future" className="date-link-large">2026</Link>
      </div>

      <div className="footer-row">
        <Link href="/bosco-kwan" className="footer-link">BOSCO KWAN</Link>

        <div className="social-icons">
          <Link href="/instagram" className="icon-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link><a href="mailto:boscokwan1214@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>


            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>

          </a>
        </div>
      </div>
    </main>
  );
}
