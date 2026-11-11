import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-screen flex-col justify-center py-24">
      <p className="mb-4 font-medium text-ink-soft">404</p>
      <h1 className="statement mb-6">Off the map</h1>
      <p className="lede mb-10">
        This page does not exist. It may have moved, or the link has a typo.
      </p>
      <Link href="/" className="btn self-start">
        Back to the home page
      </Link>
    </div>
  );
}
