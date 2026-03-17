import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundCancellation() {
  return (
    <>
      <SEOHead
        title="Refund & Cancellation Policy | Vidura Analytics"
        description="Refund and cancellation policy for Vidura Analytics testing services."
      />

      <div className="container py-16 space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Refund & Cancellation Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cancellation Before Testing Begins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you need to cancel your testing request{" "}
                <strong>before we begin analysis</strong>, please contact us as
                soon as possible:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Full refund if cancellation is made before sample receipt
                </li>
                <li>
                  Partial refund (minus sample handling and administrative
                  costs) if cancellation is made after sample receipt but before
                  testing begins
                </li>
                <li>Refund processing typically takes 7-10 business days</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cancellation After Testing Begins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Once testing has begun, cancellation is generally not possible
                as resources have been committed. However, we will consider
                requests on a case-by-case basis:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No refund for completed tests</li>
                <li>
                  Partial refund may be considered for multi-test requests where
                  some tests have not yet started
                </li>
                <li>
                  Costs already incurred (reagents, consumables, labor) will be
                  deducted from any refund
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refund Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Refunds may be issued in the following scenarios:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Sample is rejected due to falling outside our scope (full
                  refund)
                </li>
                <li>
                  We are unable to perform the requested test due to technical
                  limitations (full refund)
                </li>
                <li>
                  Significant delay in testing beyond agreed timeline due to our
                  fault (partial or full refund at our discretion)
                </li>
                <li>
                  Duplicate payment or billing error (full refund of excess
                  amount)
                </li>
              </ul>
              <p className="font-semibold text-foreground">
                Refunds are NOT provided for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Results that do not meet client expectations (we report what
                  we find)
                </li>
                <li>
                  Sample degradation or contamination during shipping (client
                  responsibility)
                </li>
                <li>Insufficient sample quantity provided by client</li>
                <li>Change of mind after testing is complete</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outsourced Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For tests coordinated through third-party laboratories (GC-MS,
                LC-MS, sequencing), the third-party lab's cancellation and
                refund policy applies. We will assist with communication but
                cannot override their terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Request Cancellation or Refund</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>To request a cancellation or refund:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Contact us via email at [ADD_EMAIL] or phone at [ADD_NUMBER]
                </li>
                <li>
                  Provide your sample submission details and reason for
                  cancellation/refund request
                </li>
                <li>
                  We will review your request and respond within 2 business days
                </li>
                <li>
                  If approved, refunds will be processed within 7-10 business
                  days to the original payment method
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For questions about this policy or to request a
                cancellation/refund:
              </p>
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
