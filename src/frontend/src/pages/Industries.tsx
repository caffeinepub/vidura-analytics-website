import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

export default function Industries() {
  const industries = [
    {
      title: "Herbal / Nutraceutical / Natural Products",
      image: "/assets/generated/industry-herbal.dim_300x200.png",
      description:
        "Bioactivity screening, antimicrobial testing, and QC support for herbal extracts, nutraceutical formulations, and natural product research. We help validate efficacy claims and ensure product quality through documented testing.",
    },
    {
      title: "Food Businesses (Internal QC Support)",
      image: "/assets/generated/industry-food.dim_300x200.png",
      description:
        "Microbiology screening for food products, raw materials, and finished goods. Support for internal quality control programs with TAMC/TYMC, pathogen screening, and contamination checks. Ideal for startups and small food businesses.",
    },
    {
      title: "Water Testing Needs (Screening/Internal QC)",
      image: "/assets/generated/industry-water.dim_300x200.png",
      description:
        "Drinking water and process water microbiology screening. HPC/TPC, coliform/E. coli testing using MPN and membrane filtration methods. Support for internal monitoring and quality assurance programs.",
    },
    {
      title: "Researchers / Students / Startups",
      image: "/assets/generated/industry-research.dim_300x200.png",
      description:
        "Comprehensive R&D support for academic research, student projects, and startup ventures. From bioassays to bioinformatics, we provide flexible testing solutions with interpretation support to help advance your research goals.",
    },
    {
      title: "Hygiene Monitoring (Swabs/Environment)",
      image: "/assets/generated/industry-hygiene.dim_300x200.png",
      description:
        "Surface swab testing and environmental monitoring for manufacturing facilities, laboratories, and food processing units. Help maintain hygiene standards with regular microbial monitoring and contamination assessment.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Industries We Serve - Herbal, Food, Water, Research | Vidura Analytics"
        description="Serving herbal/nutraceutical, food businesses, water testing, researchers, and hygiene monitoring needs with R&D and QC testing support in Gujarat."
      />

      <div className="container py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground">
            Providing specialized R&D, screening, and internal QC support across
            diverse sectors with documented integrity and transparent reporting.
          </p>
        </div>

        <div className="grid gap-8">
          {industries.map((industry, _index) => (
            <Card key={industry.title} className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Don't See Your Industry?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with a variety of sectors requiring non-clinical analytical
            and microbiological testing. Contact us to discuss your specific
            needs and confirm if they fall within our scope.
          </p>
        </div>
      </div>
    </>
  );
}
