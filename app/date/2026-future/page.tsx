import Link from "next/link";
import "../../globals.css";

export default function FutureDatePage() {
  return (
    <main className="future-page-container">
      <div className="curse-words-wrapper">
        <Link href="/date/2026-future/next" className="curse-word black-word">
          屌
        </Link>
        <span className="curse-word grey-word">鳩</span>
        <span className="curse-word grey-word">撚</span>
        <span className="curse-word grey-word">柒</span>
        <span className="curse-word grey-word">閪</span>
      </div>
      <Link href="/" className="back-link future-back-link">
        Go Back
      </Link>
    </main>
  );
}
