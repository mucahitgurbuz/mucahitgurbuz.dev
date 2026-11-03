import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-screen flex-col justify-center py-24">
      <p className="mb-4 text-[15px] text-pencil">404</p>
      <h1 className="display mb-6 text-[clamp(48px,8vw,104px)] leading-[0.95]">Off the map</h1>
      <p className="mb-10 max-w-[40ch] text-lg">
        This page does not exist. It may have moved, or the link has a typo.
      </p>
      <Link href="/" className="survey-link self-start font-medium">
        Back to the home page
      </Link>
    </div>
  );
}
