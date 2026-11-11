"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="wrap flex items-center justify-between gap-4 py-4 min-[600px]:py-6">
      <Link href="/" className="wide text-[15px] font-bold tracking-[-0.01em] min-[600px]:text-[17px]">
        {SITE_CONFIG.name}
      </Link>
      <nav aria-label="Main" className="-mr-3 flex text-[15px] min-[600px]:text-base">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 items-center px-2.5 font-medium underline-offset-[7px] transition-colors min-[600px]:px-4 ${
                active
                  ? "text-ink underline decoration-amber decoration-2"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
