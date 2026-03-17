import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Bioactivity Screening",
      desc: "Plant extracts & natural products analysis",
    },
    {
      title: "Antimicrobial Screening",
      desc: "BSL-1 scope antimicrobial testing",
    },
    { title: "QC Microbiology", desc: "Internal QC & contamination checks" },
    {
      title: "Water/Food Testing",
      desc: "Screening & environmental monitoring",
    },
    { title: "Bioinformatics", desc: "Sequence analysis & data support" },
    { title: "Data Analysis", desc: "Statistics & report formatting" },
    {
      title: "Outsourcing Coordination",
      desc: "GC-MS/LC-MS & sequencing support",
    },
    { title: "Training & Workshops", desc: "Lab skills & assay training" },
  ];

  const industries = [
    {
      title: "Herbal & Nutraceutical",
      image: "/assets/generated/industry-herbal.dim_300x200.png",
    },
    {
      title: "Food Businesses",
      image: "/assets/generated/industry-food.dim_300x200.png",
    },
    {
      title: "Water Testing",
      image: "/assets/generated/industry-water.dim_300x200.png",
    },
    {
      title: "Researchers & Startups",
      image: "/assets/generated/industry-research.dim_300x200.png",
    },
    {
      title: "Hygiene Monitoring",
      image: "/assets/generated/industry-hygiene.dim_300x200.png",
    },
  ];

  return (
    <>
      <SEOHead
        title="Vidura Analytics - Bioassay Screening & Microbiology QC Lab in Rajkot, Gujarat"
        description="R&D testing support for bioassays, microbiology QC, water screening in Rajkot. Non-clinical analytical lab offering documented integrity and transparent reporting."
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[oklch(0.205_0_0)] to-[oklch(0.145_0_0)] text-white overflow-hidden"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x800.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.205_0_0/0.9)] to-[oklch(0.145_0_0/0.85)]" />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Science you can trust, every time.
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Screening and QC analytics for products, water, and research —
              with documented integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: "/sample-submission" })}
                className="text-lg px-8"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/sample-submission" })}
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Submit a Sample
              </Button>
            </div>
            <p className="text-sm text-white/70 pt-4">
              Non-clinical screening/QC only; not for medical diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Infographic */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <img
                  src="/assets/generated/icon-bioassays.dim_120x120.png"
                  alt="Bioassays"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold">Bioassays</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <img
                  src="/assets/generated/icon-microbiology.dim_120x120.png"
                  alt="Microbiology QC"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold">Microbiology QC</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <img
                  src="/assets/generated/icon-water-food.dim_120x120.png"
                  alt="Water/Food Micro"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold">Water/Food Micro</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <img
                  src="/assets/generated/icon-bioinformatics.dim_120x120.png"
                  alt="Bioinformatics"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold">Bioinformatics</h3>
              </CardContent>
            </Card>
          </div>

          {/* Workflow Ribbon */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-center">
            <div className="font-semibold text-lg">Sample</div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="font-semibold text-lg">Test</div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="font-semibold text-lg">Insights</div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="font-semibold text-lg">Report</div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <img
                  src="/assets/generated/icon-defined-scope.dim_80x80.png"
                  alt="Defined Scope"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold">Defined Scope</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <img
                  src="/assets/generated/icon-documented-sops.dim_80x80.png"
                  alt="Documented SOPs"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold">Documented SOPs</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <img
                  src="/assets/generated/icon-transparent-reporting.dim_80x80.png"
                  alt="Transparent Reporting"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold">Transparent Reporting</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Vidura Analytics provides R&D, screening, and internal QC support
              for analytical and microbiological testing. We serve researchers,
              startups, and businesses with transparent, documented results for
              non-clinical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, _index) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate({ to: "/services" })}
              variant="outline"
              size="lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="font-semibold text-lg">Enquiry & Scope Check</h3>
              <p className="text-sm text-muted-foreground">
                Contact us with your testing needs. We'll confirm if it's within
                our scope.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="font-semibold text-lg">Sample Submission</h3>
              <p className="text-sm text-muted-foreground">
                Submit samples following our acceptance criteria and guidelines.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="font-semibold text-lg">Testing & Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We perform in-house testing or coordinate with third-party labs.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                4
              </div>
              <h3 className="font-semibold text-lg">Report & Support</h3>
              <p className="text-sm text-muted-foreground">
                Receive detailed reports with interpretation support within
                scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidura */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Vidura Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl">
                  Results with Integrity
                </h3>
                <p className="text-muted-foreground">
                  Every test is performed with documented procedures and
                  transparent methodology.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl">
                  Clear Scope + Disclaimers
                </h3>
                <p className="text-muted-foreground">
                  We clearly define what we do and don't do, ensuring no
                  regulatory risks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl">
                  Reliable Documentation
                </h3>
                <p className="text-muted-foreground">
                  Complete logs, SOPs, and traceable records for every analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, _index) => (
              <Card
                key={industry.title}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate({ to: "/industries" })}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-32 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-sm text-center">
                    {industry.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-gradient-to-r from-[oklch(0.205_0_0)] to-[oklch(0.145_0_0)] text-white">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to start?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: "/sample-submission" })}
                className="text-lg px-8"
              >
                <FileText className="mr-2 h-5 w-5" />
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://wa.me/[ADD_NUMBER]", "_blank")
                }
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.location.href = "tel:[ADD_NUMBER]";
                }}
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
