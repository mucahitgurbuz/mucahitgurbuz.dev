import type { Metadata } from "next";
import Image from "next/image";
import { StoreBadges } from "@/components/shared/StoreBadges";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/hittheroad-ai-trip-planner/id6759530743";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mucahitgurbuz.hittheroad";
const APP_STORE_ID = "6759530743";
const APP_SCHEME_BASE = "hittheroad://share/";
const SITE_ORIGIN = "https://hittheroad.mucahitgurbuz.dev";

// Supabase project ref + anon key are public by design — the same pair is
// shipped in the iOS bundle. RLS + the edge function guard everything that
// matters server-side.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://emsxtezszxpyaomuonlg.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc3h0ZXpzenhweWFvbXVvbmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMzA5ODcsImV4cCI6MjA1MDYwNjk4N30.lAiHk-61H8BYS8WLnDPAuOdwbBtb9L2uUkgfFBDt0t8";

interface SharedTripSummary {
  trip_summary?: string;
  start_location?: { name?: string } | null;
  end_location?: { name?: string } | null;
  total_days?: number | null;
  total_distance?: number | null;
}

async function fetchSharedTrip(
  token: string,
): Promise<SharedTripSummary | null> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/get-shared-trip`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Origin: SITE_ORIGIN,
        },
        body: JSON.stringify({ token }),
        next: { revalidate: 300 },
      },
    );
    if (!response.ok) return null;
    const json = (await response.json()) as {
      data: SharedTripSummary | null;
      error: { message: string } | null;
    };
    if (json.error || !json.data) return null;
    return json.data;
  } catch {
    return null;
  }
}

interface PageProps {
  params: Promise<{ token: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { token } = await params;
  const trip = await fetchSharedTrip(token);

  const start = trip?.start_location?.name?.trim();
  const end = trip?.end_location?.name?.trim();
  const route = start && end ? `${start} → ${end}` : null;
  const headline = route ?? "A trip on HitTheRoad";
  const description =
    trip?.trip_summary?.trim() ||
    "Open this itinerary in HitTheRoad — your AI road-trip planner.";

  const shareUrl = `${SITE_ORIGIN}/share/${encodeURIComponent(token)}`;

  return {
    title: `${headline} · HitTheRoad`,
    description,
    metadataBase: new URL(SITE_ORIGIN),
    alternates: { canonical: `/share/${token}` },
    openGraph: {
      type: "website",
      siteName: "HitTheRoad",
      title: `${headline} · HitTheRoad`,
      description,
      url: shareUrl,
      images: [
        {
          url: "/hittheroad/logo.png",
          width: 1024,
          height: 1024,
          alt: "HitTheRoad",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${headline} · HitTheRoad`,
      description,
      images: ["/hittheroad/logo.png"],
    },
    other: {
      "apple-itunes-app": `app-id=${APP_STORE_ID}, app-argument=${shareUrl}`,
    },
    robots: { index: false, follow: false },
  };
}

function formatDistance(km?: number | null): string | null {
  if (km == null || !Number.isFinite(km) || km <= 0) return null;
  if (km < 100) return `${Math.round(km)} km`;
  return `${Math.round(km).toLocaleString("en-US")} km`;
}

export default async function SharedTripPage({ params }: PageProps) {
  const { token } = await params;
  const trip = await fetchSharedTrip(token);

  const start = trip?.start_location?.name?.trim();
  const end = trip?.end_location?.name?.trim();
  const days = trip?.total_days ?? null;
  const distance = formatDistance(trip?.total_distance);
  const deepLink = `${APP_SCHEME_BASE}${encodeURIComponent(token)}`;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-emerald-50 via-white to-amber-50 text-slate-900">
      <div className="w-full max-w-md flex flex-col gap-8">
        <header className="flex flex-col items-center text-center gap-3">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10">
            <Image
              src="/hittheroad/logo.png"
              alt="HitTheRoad"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Open this trip in HitTheRoad
          </h1>
          <p className="text-sm text-slate-600">
            HitTheRoad plans your road trip with AI. Tap below to open the
            shared itinerary in the app.
          </p>
        </header>

        {(start || end || days || distance || trip?.trip_summary) && (
          <section className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-4">
            {(start || end) && (
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                <span>{start ?? "Start"}</span>
                <span className="text-slate-400">→</span>
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                <span>{end ?? "Destination"}</span>
              </div>
            )}
            {(days || distance) && (
              <div className="flex gap-4 text-xs text-slate-500">
                {days ? <span>{days} days</span> : null}
                {distance ? <span>{distance}</span> : null}
              </div>
            )}
            {trip?.trip_summary ? (
              <p className="text-sm text-slate-600 leading-relaxed">
                {trip.trip_summary}
              </p>
            ) : null}
          </section>
        )}

        <div className="flex flex-col gap-3">
          <a
            href={deepLink}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white font-medium px-6 py-3 hover:bg-emerald-700 transition-colors"
          >
            Open in HitTheRoad
          </a>
          <StoreBadges
            appStore={APP_STORE_URL}
            googlePlay={PLAY_STORE_URL}
            className="justify-center"
          />
        </div>

        <p className="text-xs text-center text-slate-500">
          Don&apos;t have HitTheRoad yet? Install it from the App Store or Google
          Play, then open this link again to load the trip.
        </p>
      </div>
    </main>
  );
}
