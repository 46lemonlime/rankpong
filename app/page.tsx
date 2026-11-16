import Link from "next/link";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import {
  Trophy,
  Users,
  TrendingUp,
  ShieldCheck,
  Flame,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32 border-b border-border/40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
          <Container className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground mb-6 backdrop-blur">
              <Flame className="h-3.5 w-3.5 text-primary" />
              <span>Table Tennis League & Tournament Platform</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
              Organize clubs. Compete fiercely.{" "}
              <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">
                Climb the ranks.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              RankPong is the community platform for table tennis players and clubs.
              Manage club communities, record ranked matches, track global ELO ratings,
              and run local leagues and tournaments.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={ROUTES.REGISTER}
                className={buttonVariants({ size: "lg", className: "gap-2" })}
              >
                Join RankPong
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={ROUTES.CLUBS}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Explore Clubs
              </Link>
            </div>
          </Container>
        </section>

        {/* Core Pillars / Feature Highlights */}
        <section className="py-20 sm:py-24 bg-muted/10">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Everything your table tennis club needs
              </h2>
              <p className="mt-3 text-muted-foreground">
                Built from the ground up for private communities, friendly rivalries, and competitive circuits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Club Communities
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Private clubs with member roles (Owner, Admins, Members). Accept invite codes or review membership requests.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Global ELO & Stats
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Play friendly and ranked head-to-head matches. Dynamic ELO rating recalculations and match history analytics.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Leagues & Tournaments
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Run seasonal club leagues, round-robins, and single or double elimination tournaments with automatic bracket seeding.
                </p>
              </div>
            </div>

            {/* Architecture Banner */}
            <div className="mt-16 rounded-xl border border-border/80 bg-muted/40 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Scaffolding Milestone Completed</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Next.js App Router &bull; Supabase SSR &bull; Tailwind CSS &bull; shadcn/ui
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    TypeScript strict mode, path aliases, environment schemas, and modular feature architecture configured.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    MVP Ready for Feature Development
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
