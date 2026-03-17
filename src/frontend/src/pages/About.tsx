import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="About Us - Two-Person Startup Lab in Rajkot, Gujarat | Vidura Analytics"
        description="Learn about Vidura Analytics, a two-person startup analytical lab in Tramba, Rajkot offering R&D testing with documented integrity and transparent reporting."
      />

      <div className="container py-16 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Vidura Analytics
          </h1>
          <p className="text-2xl text-primary font-semibold">
            Results with Integrity
          </p>
        </div>

        {/* Founder Story */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Story</h2>
          <Card>
            <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vidura Analytics started as a{" "}
                <strong>two-person startup lab</strong> with a simple mission:
                provide reliable, documented analytical and microbiological
                testing for researchers, startups, and small businesses who need
                quality results without the complexity of large commercial labs.
              </p>
              <p>
                Based in <strong>Tramba, Rajkot, Gujarat</strong>, we recognized
                a gap in the market for transparent, scope-defined testing
                services that prioritize integrity over volume. Many small
                businesses and researchers need R&D support and internal QC
                testing but don't require (or can't afford) the overhead of
                fully accredited statutory testing.
              </p>
              <p>
                We built Vidura Analytics to fill that gap—offering professional
                testing with clear disclaimers, documented procedures, and
                honest communication about what we can and cannot do.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Mission</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-xl text-center font-semibold">
                "To deliver reliable analytical and microbiological testing with
                documented integrity, transparent reporting, and clear scope
                definition—supporting R&D and QC needs for non-clinical
                applications."
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-3">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-muted-foreground">
                  We clearly communicate our scope, limitations, and what our
                  results mean. No hidden terms, no exaggerated claims.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Documentation</h3>
                <p className="text-muted-foreground">
                  Every test follows documented SOPs. We maintain complete logs
                  and traceable records for all analyses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Safety</h3>
                <p className="text-muted-foreground">
                  We operate within BSL-1 biosafety boundaries and follow all
                  safety protocols to protect our team and clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Clear Scope</h3>
                <p className="text-muted-foreground">
                  We define exactly what we do and don't do. No ambiguity, no
                  regulatory risks, no false expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facilities */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Facilities</h2>
          <Card>
            <CardContent className="pt-6 space-y-4 text-muted-foreground">
              <p>
                Vidura Analytics operates a <strong>one-shop lab setup</strong>{" "}
                designed for efficiency and proper workflow management. Our
                facility follows a zoning approach to maintain sample integrity
                and prevent cross-contamination:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Sample Receipt Zone
                  </h4>
                  <p className="text-sm">
                    Dedicated area for receiving, logging, and initial
                    inspection of incoming samples.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Wet Bench Area
                  </h4>
                  <p className="text-sm">
                    Equipped for sample preparation, assay setup, and analytical
                    procedures with proper ventilation.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Incubation Zone
                  </h4>
                  <p className="text-sm">
                    Temperature-controlled incubators for microbiology work and
                    time-dependent assays.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Reporting Desk
                  </h4>
                  <p className="text-sm">
                    Clean area for data analysis, report preparation, and client
                    communication away from wet work.
                  </p>
                </div>
              </div>
              <p>
                This zoning approach ensures proper workflow, minimizes
                contamination risks, and maintains the integrity of both samples
                and results throughout the testing process.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Partner with Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a researcher, startup, or small business, we're here
            to support your R&D and QC needs with reliable testing and
            transparent communication.
          </p>
          <Button size="lg" onClick={() => navigate({ to: "/contact" })}>
            Get in Touch
          </Button>
        </section>
      </div>
    </>
  );
}
