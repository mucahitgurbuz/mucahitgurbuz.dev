"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="wrap relative z-30 flex items-baseline justify-between py-[30px]">
      <Link href="/" className="font-serif text-[21px] leading-none tracking-[-0.01em]">
        Mücahit Gürbüz
      </Link>
      <nav aria-label="Main" className="flex gap-[clamp(18px,3vw,36px)] text-[15px]">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={active ? "text-ink" : "text-pencil transition-colors hover:text-ink"}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
