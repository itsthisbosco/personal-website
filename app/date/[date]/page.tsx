import Link from "next/link";
import "../../globals.css";

export async function generateStaticParams() {
  // Add any dates here that should use this dynamic template
  // Currently including 2025-10-28 which has no static page.tsx
  return [
    { date: "2025-10-28" }
  ];
}

export default async function DatePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  
  // Format from URL-friendly "2025-06-15" back to "2025.6.15" roughly, 
  // or just directly replace dashes with dots if you want "2025.06.15".
  // To match exactly, we'll just format it generically or keep it as is.
  const displayDate = date.replace(/-/g, '.');

  return (
    <div className="date-page-container">
      <h1 className="date-title">{displayDate}</h1>
      <Link href="/" className="back-link">
        Go Back
      </Link>
    </div>
  );
}
