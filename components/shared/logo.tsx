import Link from "next/link";
import { Trophy } from "lucide-react";
import { APP_CONFIG, ROUTES } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link
      href={ROUTES.HOME}
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Trophy className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg leading-none font-extrabold tracking-tight">
          {APP_CONFIG.name}
        </span>
        {showTagline && (
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
            Table Tennis Platform
          </span>
        )}
      </div>
    </Link>
  );
}
