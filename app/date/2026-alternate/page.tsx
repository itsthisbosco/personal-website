import Link from "next/link";
import "../../globals.css";

export default function AlternateFuturePage() {
  return (
    <main className="future-page-container">
      <div className="curse-words-wrapper">
        <Link href="/date/2026-future/next" className="curse-word black-word">
          仆
        </Link>
        <span className="curse-word grey-word">街</span>
      </div>
      <Link href="/" className="back-link future-back-link">
        Go Back
      </Link>
    </main>
  );
}
