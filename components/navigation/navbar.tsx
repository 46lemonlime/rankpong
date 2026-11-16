import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Logo showTagline />

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href={ROUTES.CLUBS}
            className="transition-colors hover:text-foreground"
          >
            Clubs
          </Link>
          <Link
            href={ROUTES.RANKINGS}
            className="transition-colors hover:text-foreground"
          >
            Rankings
          </Link>
          <Link
            href={ROUTES.TOURNAMENTS}
            className="transition-colors hover:text-foreground"
          >
            Competitions
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.LOGIN}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Log in
          </Link>
          <Link
            href={ROUTES.REGISTER}
            className={buttonVariants({ size: "sm" })}
          >
            Get Started
          </Link>
        </div>
      </Container>
    </header>
  );
}
