import Link from "next/link";
import "../../globals.css";

export default function ToBeContinuedPage() {
  return (
    <div className="date-page-container">
      <h1 className="date-title" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', textAlign: 'center', padding: '0 2rem' }}>
        to be continue project...
      </h1>
      <Link href="/" className="back-link">
        Go Back
      </Link>
    </div>
  );
}
