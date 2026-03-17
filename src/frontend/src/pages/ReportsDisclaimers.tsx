import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function ReportsDisclaimers() {
  return (
    <>
      <SEOHead
        title="Reports & Disclaimers - Understanding Our Testing Scope | Vidura Analytics"
        description="Learn about our report scope, limitations, and biosafety boundaries. Non-clinical screening and QC support only."
      />

      <div className="container py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Reports & Disclaimers
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding our testing scope, report limitations, and biosafety
            boundaries.
          </p>
        </div>

        <Alert className="max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-base">
            All testing and reports are for non-clinical screening/QC only; not
            for medical diagnosis.
          </AlertDescription>
        </Alert>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Our Reports Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Vidura Analytics provides testing reports for{" "}
                <strong>R&D, screening, and internal QC support</strong>. Our
                reports document analytical and microbiological findings based
                on the specific sample received and tested.
              </p>
              <p>Our reports include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Test methodology and parameters used</li>
                <li>Raw data and calculated results</li>
                <li>Observations and measurements</li>
                <li>Interpretation support within our scope</li>
                <li>Clear statement of limitations and disclaimers</li>
              </ul>
              <p className="font-semibold text-foreground">
                Our reports are NOT intended for regulatory submissions, medical
                diagnosis, or clinical decision-making unless explicitly
                contracted under appropriate accreditation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                How to Read Results & Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Results Apply to Sample Received Only
                </h3>
                <p>
                  All results are specific to the exact sample submitted. They
                  do not represent batch quality, product consistency, or any
                  other samples from the same source.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Screening vs. Statutory Testing
                </h3>
                <p>
                  Our testing is for screening and internal QC purposes. For
                  statutory/regulatory compliance (FSSAI, BIS, export, etc.),
                  testing must be performed by appropriately accredited
                  laboratories.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Interpretation Support
                </h3>
                <p>
                  We provide interpretation support within our technical scope.
                  This includes explaining what the results mean scientifically,
                  but does not extend to regulatory compliance advice or medical
                  interpretation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Uncertainty and Variability
                </h3>
                <p>
                  All analytical measurements have inherent uncertainty.
                  Biological samples show natural variability. Results should be
                  interpreted considering these factors.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Outsourced Reports Handling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For tests requiring advanced instrumentation (GC-MS, LC-MS,
                sequencing), we coordinate with
                <strong> third-party laboratories</strong>.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">Important:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Testing is performed by the third-party lab, not by Vidura
                    Analytics
                  </li>
                  <li>
                    Their scope, accreditation, and terms apply to the testing
                  </li>
                  <li>
                    We coordinate logistics, sample preparation, and provide
                    interpretation support
                  </li>
                  <li>
                    Reports are issued by the third-party lab; we assist with
                    understanding results
                  </li>
                </ul>
              </div>
              <p>
                We carefully select partner laboratories based on their
                capabilities and quality standards, but we do not assume
                responsibility for their testing procedures or accreditation
                status.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Biosafety Boundary Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  All microbiology work is conducted within{" "}
                  <strong>BSL-1 (Biosafety Level 1)</strong> scope only.
                </AlertDescription>
              </Alert>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What This Means:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    We work only with non-pathogenic, environmental, and
                    food-grade microorganisms
                  </li>
                  <li>No clinical isolates or BSL-2 pathogens are handled</li>
                  <li>No human/clinical samples are accepted</li>
                  <li>No genetically modified or recombinant organisms</li>
                  <li>No animal studies or animal-derived clinical samples</li>
                </ul>
              </div>
              <p>
                This biosafety boundary ensures safe operations and compliance
                with regulatory requirements while serving R&D and QC needs for
                non-clinical applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                No Medical/Diagnostic Claims
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                Vidura Analytics does NOT provide medical testing, clinical
                diagnostics, or health-related services.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">We Do NOT:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Test human samples (blood, urine, tissue, etc.)</li>
                  <li>Provide medical diagnosis or health advice</li>
                  <li>Conduct clinical trials or clinical research</li>
                  <li>
                    Offer services for patient care or treatment decisions
                  </li>
                  <li>
                    Make claims about disease prevention, treatment, or cure
                  </li>
                </ul>
              </div>
              <p>
                Our services are strictly for research, product development,
                quality control, and non-clinical applications. Any use of our
                results for medical purposes is outside our scope and not
                supported.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Questions About Reports?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have questions about your report, need clarification on
                results, or want to discuss interpretation within our scope,
                please contact us:
              </p>
              <div className="space-y-1">
                <p>Email: [ADD_EMAIL]</p>
                <p>Phone/WhatsApp: [ADD_NUMBER]</p>
              </div>
              <p>
                We're here to help you understand your results and support your
                R&D and QC objectives within our defined scope.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
