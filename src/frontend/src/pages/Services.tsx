import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Services - Bioassay Screening, Microbiology QC, Water Testing | Vidura Analytics"
        description="R&D testing services: bioactivity screening, antimicrobial testing, QC microbiology, water/food testing, bioinformatics, and data analysis in Rajkot, Gujarat."
      />

      <div className="container py-16 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive R&D, screening, and internal QC support for analytical
            and microbiological testing.
          </p>
        </div>

        {/* In-house Services */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="default" className="mb-4 text-base px-4 py-2">
              In-house Services
            </Badge>
            <h2 className="text-3xl font-bold">Core Laboratory Testing</h2>
          </div>

          <div className="grid gap-8">
            {/* Bioactivity Screening */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Bioactivity Screening
                </CardTitle>
                <p className="text-muted-foreground">
                  Plant extracts, nutraceuticals, and natural products
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Total Phenolic Content (TPC) & Total Flavonoid Content
                      (TFC)
                    </li>
                    <li>
                      Antioxidant assays: DPPH, ABTS, FRAP, Reducing Power, TAC
                    </li>
                    <li>
                      Antidiabetic screening: α-amylase inhibition,
                      α-glucosidase inhibition
                    </li>
                    <li>
                      IC50 calculations, dose-response curves, and comparative
                      ranking reports
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Plant extracts, herbal formulations, nutraceutical products,
                    natural compounds (non-clinical)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    R&D/screening only. Not for clinical samples or medical
                    diagnosis. Results apply to sample received.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>

            {/* Antimicrobial Screening */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Antimicrobial / Antifungal Screening
                </CardTitle>
                <p className="text-muted-foreground">BSL-1 scope only</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    BSL-1 organisms only. No clinical isolates or BSL-2
                    pathogens.
                  </AlertDescription>
                </Alert>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Agar diffusion (zone of inhibition measurements)</li>
                    <li>
                      MIC / MBC determination (broth dilution / microdilution)
                    </li>
                    <li>Yeast and mould screening (as feasible)</li>
                    <li>
                      Custom organism panels within approved biosafety scope
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Extracts, essential oils, antimicrobial compounds,
                    preservatives (non-clinical testing)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    BSL-1 organisms only. No human/clinical samples. No
                    GM/recombinant work. R&D/screening support only.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>

            {/* QC Microbiology */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">QC Microbiology</CardTitle>
                <p className="text-muted-foreground">
                  Internal QC and screening support
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Total Aerobic Microbial Count (TAMC) / Total Yeast & Mould
                      Count (TYMC)
                    </li>
                    <li>Yeast and mould enumeration</li>
                    <li>Basic contamination checks</li>
                    <li>
                      Specified pathogen presence/absence (only within approved
                      scope, non-statutory unless contracted)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Herbal products, cosmetics, raw materials, finished goods
                    (internal QC screening)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    Internal QC/screening only. Not for regulatory submissions
                    without proper accreditation. No clinical samples.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>

            {/* Water/Food/Environment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Water / Food / Environment Basics
                </CardTitle>
                <p className="text-muted-foreground">
                  Screening and internal QC support
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Drinking water microbiology: HPC/TPC, coliform/E. coli
                      (MPN/membrane filtration)
                    </li>
                    <li>Food microbiology basics (screening)</li>
                    <li>Hygiene swabs and surface monitoring</li>
                    <li>Environmental monitoring basics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Drinking water, process water, food samples, surface swabs,
                    environmental samples
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    Screening/internal QC only. Not FSSAI notified or NABL
                    accredited. Results for internal use unless explicitly
                    contracted.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Computational Services */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-2">
              Computational Services
            </Badge>
            <h2 className="text-3xl font-bold">
              Bioinformatics & Data Analysis
            </h2>
          </div>

          <div className="grid gap-8">
            {/* Bioinformatics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Bioinformatics / Sequence Services
                </CardTitle>
                <p className="text-muted-foreground">
                  Non-clinical sequence analysis and support
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>16S/ITS identification support</li>
                    <li>
                      Multiple sequence alignment (MSA) and phylogenetic
                      analysis
                    </li>
                    <li>Primer design and validation</li>
                    <li>ORF/domain/motif analysis</li>
                    <li>AMR screening summaries (informational)</li>
                    <li>Microbiome workflow support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Sequence data files, FASTA/FASTQ files, microbial isolate
                    data (non-clinical)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    Non-clinical research support only. No human genomic data.
                    No medical/diagnostic interpretation.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>

            {/* Data Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Data Analysis / Statistics / Reporting Support
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional data handling and visualization
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Data cleaning and organization</li>
                    <li>Statistical analysis and comparative studies</li>
                    <li>IC50 calculations and dose-response modeling</li>
                    <li>Professional plots and visualizations</li>
                    <li>Report formatting and presentation support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                  <p className="text-muted-foreground">
                    Raw data files, Excel sheets, experimental datasets
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope Limits:</h4>
                  <p className="text-muted-foreground">
                    Data analysis support only. We do not validate or certify
                    data for regulatory submissions.
                  </p>
                </div>
                <Button onClick={() => navigate({ to: "/sample-submission" })}>
                  Request a Quote for this Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Outsourcing Coordination */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-base px-4 py-2">
              Outsourcing Coordination
            </Badge>
            <h2 className="text-3xl font-bold">Third-Party Testing Support</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Outsourcing Coordination + Interpretation Support
              </CardTitle>
              <p className="text-muted-foreground">
                GC-MS, LC-MS, and sequencing coordination
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Third-party lab performs testing; their scope and
                  accreditation applies. We coordinate logistics and provide
                  interpretation support.
                </AlertDescription>
              </Alert>
              <div>
                <h4 className="font-semibold mb-2">What You Get:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>GC-MS and LC-MS testing coordination</li>
                  <li>DNA/RNA sequencing coordination</li>
                  <li>Sample preparation guidance</li>
                  <li>Results interpretation support (within scope)</li>
                  <li>Logistics and communication management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Typical Sample Types:</h4>
                <p className="text-muted-foreground">
                  Samples requiring advanced instrumentation not available
                  in-house
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Scope Limits:</h4>
                <p className="text-muted-foreground">
                  We coordinate only. Testing performed by third-party labs.
                  Their scope, accreditation, and terms apply.
                </p>
              </div>
              <Button onClick={() => navigate({ to: "/sample-submission" })}>
                Request a Quote for this Service
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Training & Workshops */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-2">
              Training & Workshops
            </Badge>
            <h2 className="text-3xl font-bold">Skill Development</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Training / Workshops</CardTitle>
              <p className="text-muted-foreground">
                Lab skills and assay training (BSL-1 only)
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What You Get:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Basic lab skills training</li>
                  <li>Microbiology basics (BSL-1 scope only)</li>
                  <li>Assay training (bioactivity, antimicrobial screening)</li>
                  <li>Corporate and college workshops</li>
                  <li>Hands-on practical sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Who It's For:</h4>
                <p className="text-muted-foreground">
                  Students, researchers, startup teams, corporate QC personnel
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Scope Limits:</h4>
                <p className="text-muted-foreground">
                  BSL-1 training only. No clinical procedures. No animal work.
                  Educational/skill development focus.
                </p>
              </div>
              <Button onClick={() => navigate({ to: "/sample-submission" })}>
                Request a Quote for this Service
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
