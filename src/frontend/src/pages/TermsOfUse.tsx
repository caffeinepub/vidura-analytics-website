import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function TermsOfUse() {
  return (
    <>
      <SEOHead
        title="Terms of Use | Vidura Analytics"
        description="Terms of use for Vidura Analytics services - scope, liability, and service conditions."
      />

      <div className="container py-16 space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Alert className="max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            By using our services, you agree to these terms. Please read them
            carefully before submitting samples or engaging our services.
          </AlertDescription>
        </Alert>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Scope</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Vidura Analytics provides{" "}
                <strong>R&D, screening, and internal QC support</strong> for
                analytical and microbiological testing. Our services are
                strictly for non-clinical applications.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">We DO provide:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Bioactivity screening and antimicrobial testing (BSL-1 only)
                  </li>
                  <li>QC microbiology and water/food testing (screening)</li>
                  <li>Bioinformatics and data analysis support</li>
                  <li>Outsourcing coordination for advanced testing</li>
                  <li>Training and workshops (BSL-1 scope)</li>
                </ul>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">
                  We DO NOT provide:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Human/clinical sample testing or medical diagnostics</li>
                  <li>BSL-2 pathogen work or clinical isolates</li>
                  <li>GM/recombinant DNA work or animal studies</li>
                  <li>
                    NABL/FSSAI accredited statutory testing (unless explicitly
                    contracted)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Liability Limitations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>Results are specific to the sample received.</strong> We
                do not warrant or guarantee that results represent batch
                quality, product consistency, or any other samples from the same
                source.
              </p>
              <p>
                Our testing is for screening and internal QC purposes. We make
                no warranty regarding fitness for any particular purpose,
                regulatory compliance, or suitability for commercial use.
              </p>
              <p>
                To the maximum extent permitted by law, Vidura Analytics shall
                not be liable for any indirect, incidental, consequential, or
                punitive damages arising from the use of our services or
                reliance on our reports.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Ensuring samples are legally obtained and compliant with all
                  applicable regulations
                </li>
                <li>
                  Providing accurate information about sample composition and
                  handling requirements
                </li>
                <li>
                  Proper packing and shipping of samples to prevent damage or
                  contamination
                </li>
                <li>
                  Confirming that samples fall within our scope before
                  submission
                </li>
                <li>
                  Understanding and accepting that we do not accept
                  human/clinical samples
                </li>
              </ul>
              <p>
                We reserve the right to reject samples that do not meet our
                acceptance criteria or fall outside our scope.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results Limitation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our reports provide screening and QC data for R&D purposes. They
                are <strong>not intended for</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Regulatory submissions or statutory compliance (unless
                  explicitly contracted under accreditation)
                </li>
                <li>Medical diagnosis or clinical decision-making</li>
                <li>Legal proceedings or litigation support</li>
                <li>
                  Product labeling or marketing claims without independent
                  verification
                </li>
              </ul>
              <p>
                Clients are responsible for determining the appropriate use of
                our results and ensuring compliance with all applicable
                regulations in their jurisdiction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outsourced Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For tests requiring advanced instrumentation (GC-MS, LC-MS,
                sequencing), we coordinate with third-party laboratories. In
                such cases:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Testing is performed by the third-party lab, not by Vidura
                  Analytics
                </li>
                <li>
                  The third-party lab's scope, accreditation, terms, and
                  conditions apply
                </li>
                <li>
                  We coordinate logistics and provide interpretation support but
                  do not assume responsibility for the third-party lab's testing
                  procedures
                </li>
                <li>
                  Clients accept the third-party lab's terms when engaging such
                  services
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment and Cancellation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Payment terms are agreed upon before sample submission.
                Cancellations must be requested before testing begins. See our{" "}
                <a
                  href="/refund-cancellation"
                  className="text-primary hover:underline"
                >
                  Refund/Cancellation Policy
                </a>{" "}
                for details.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be posted on this page with an updated date. Continued use
                of our services after changes constitutes acceptance of the
                modified terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>For questions about these terms, please contact us:</p>
              <div className="space-y-1">
                <p>Email: [ADD_EMAIL]</p>
                <p>Phone: [ADD_NUMBER]</p>
                <p>Address: [ADD_ADDRESS], Tramba, Rajkot, Gujarat, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
