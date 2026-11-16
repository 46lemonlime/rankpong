import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { APP_CONFIG, ROUTES } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              {APP_CONFIG.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={ROUTES.CLUBS} className="hover:text-foreground transition-colors">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href={ROUTES.RANKINGS} className="hover:text-foreground transition-colors">
                  Global Rankings
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TOURNAMENTS} className="hover:text-foreground transition-colors">
                  Tournaments & Leagues
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-muted-foreground/80">Rules & Fair Play</span>
              </li>
              <li>
                <span className="text-muted-foreground/80">ELO System</span>
              </li>
              <li>
                <span className="text-muted-foreground/80">Club Guidelines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} {APP_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>v{APP_CONFIG.version}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
