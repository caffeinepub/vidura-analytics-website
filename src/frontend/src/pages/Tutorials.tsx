import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, ExternalLink, Mail, PlayCircle } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "Introduction to Antioxidant Assays",
    description:
      "Learn the basics of DPPH, ABTS, and FRAP assays used in bioactivity screening. This tutorial covers principles, sample preparation, and result interpretation for plant extracts and nutraceuticals.",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
    quizUrl: "https://docs.google.com/forms/d/e/EXAMPLE/viewform", // placeholder
    category: "Bioactivity Screening",
  },
  {
    id: 2,
    title: "Microbiology QC Fundamentals",
    description:
      "Understanding TAMC, TYMC, and contamination checks in quality control. This tutorial walks through standard procedures for microbial enumeration used in product and environmental screening.",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
    quizUrl: "", // no quiz for this one
    category: "QC Microbiology",
  },
];

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PlayCircle className="h-8 w-8 text-accent" />
            <Badge
              variant="secondary"
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
            >
              Learning Hub
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tutorials
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Learn at your own pace — watch our lab tutorials and test your
            knowledge with quick quizzes.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.id}
                data-ocid={`tutorials.item.${tutorial.id}`}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Video Embed */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={tutorial.youtubeUrl}
                    title={tutorial.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-xl font-bold text-foreground leading-snug">
                      {tutorial.title}
                    </h2>
                    <Badge
                      variant="outline"
                      className="text-xs shrink-0 text-accent border-accent/40"
                    >
                      {tutorial.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {tutorial.description}
                  </p>

                  {tutorial.quizUrl && (
                    <Button
                      asChild
                      data-ocid={`tutorials.quiz.button.${tutorial.id}`}
                      className="w-full sm:w-auto gap-2"
                    >
                      <a
                        href={tutorial.quizUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ClipboardList className="h-4 w-4" />
                        Take the Quiz
                        <ExternalLink className="h-3 w-3 opacity-70" />
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-14 text-center border border-border rounded-2xl py-10 px-6 bg-muted/30">
            <PlayCircle className="h-10 w-10 text-accent mx-auto mb-3 opacity-70" />
            <p className="text-foreground font-semibold text-lg mb-1">
              More tutorials coming soon.
            </p>
            <p className="text-muted-foreground text-sm">
              Have a topic suggestion?{" "}
              <a
                href="/contact"
                data-ocid="tutorials.contact.link"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                <Mail className="inline h-3.5 w-3.5 mr-1" />
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
