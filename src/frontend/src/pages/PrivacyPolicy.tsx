import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Vidura Analytics"
        description="Privacy policy for Vidura Analytics - how we collect, use, and protect your information."
      />

      <div className="container py-16 space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                When you use our services or contact us, we collect information
                that you provide directly, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, organization, email address, and phone number</li>
                <li>Sample details and testing requirements</li>
                <li>Communication preferences and correspondence</li>
                <li>Payment and billing information (when applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide testing services and deliver reports</li>
                <li>Communicate with you about your samples and results</li>
                <li>Process payments and maintain records</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure storage of physical and digital records</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your information (subject to legal
                  requirements)
                </li>
                <li>Withdraw consent for data processing (where applicable)</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
              <p>
                To exercise these rights, please contact us at [ADD_EMAIL] or
                [ADD_NUMBER].
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We retain your personal information and testing records for as
                long as necessary to fulfill the purposes outlined in this
                policy, comply with legal obligations, resolve disputes, and
                enforce our agreements. Typically, we retain records for a
                minimum of 3 years from the date of service completion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
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
