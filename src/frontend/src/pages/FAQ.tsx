import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What samples do you accept?",
      answer:
        "We accept non-clinical samples including plant extracts, herbal products, nutraceuticals, food samples, water samples, environmental swabs, and data files for bioinformatics analysis. We do NOT accept human/clinical samples, BSL-2 pathogens, or samples requiring GM/recombinant DNA work.",
    },
    {
      question: "Do you test human/clinical samples?",
      answer:
        "No. We do not accept or test human/clinical samples of any kind (blood, urine, tissue, etc.). Our services are strictly for non-clinical R&D, screening, and internal QC applications. We do not provide medical diagnostics or health-related testing.",
    },
    {
      question: "Are your reports NABL/FSSAI compliant?",
      answer:
        "We provide screening and internal QC reports for R&D purposes. Our reports are not from an NABL-accredited or FSSAI-notified laboratory unless explicitly contracted under such status. For statutory/regulatory compliance testing, you should use appropriately accredited laboratories. We can coordinate such testing through third-party labs if needed.",
    },
    {
      question: "What is your turnaround time?",
      answer:
        "Turnaround time depends on the specific test and current workload. Standard turnaround is typically 5-10 business days for most in-house tests. Urgent requests may be accommodated with prior discussion. Outsourced tests (GC-MS, LC-MS, sequencing) follow the third-party lab's timeline. We confirm expected turnaround after scope check and sample receipt.",
    },
    {
      question: "How do I submit samples from Rajkot or outstation?",
      answer:
        "Local Rajkot clients can drop off samples at our facility in Tramba after prior coordination. Outstation clients can courier samples using appropriate packing (leak-proof containers, proper labeling, cold packs if needed). We provide detailed packing and shipping guidelines after confirming your request. Contact us before sending samples to ensure proper handling.",
    },
    {
      question: "Do you offer interpretation of results?",
      answer:
        "Yes, we provide interpretation support within our technical scope. This includes explaining what the results mean scientifically, comparing values to literature references, and discussing implications for your R&D or QC objectives. We do not provide regulatory compliance advice or medical interpretation.",
    },
    {
      question: "Can you coordinate GC-MS/LC-MS testing?",
      answer:
        "Yes, we coordinate GC-MS, LC-MS, and sequencing services through third-party laboratories. We handle sample preparation, logistics, and provide interpretation support. Please note that testing is performed by the third-party lab, and their scope, accreditation, and terms apply. We assist with understanding results and integrating them with your project needs.",
    },
  ];

  return (
    <>
      <SEOHead
        title="FAQ - Frequently Asked Questions | Vidura Analytics"
        description="Common questions about sample submission, testing scope, turnaround times, and services at Vidura Analytics in Rajkot, Gujarat."
      />

      <div className="container py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, scope, and
            processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Still Have Questions?</h2>
          <p className="text-muted-foreground">
            If you don't find your answer here, feel free to contact us
            directly. We're happy to discuss your specific needs and confirm if
            they fall within our scope.
          </p>
          <div className="space-y-1 text-sm">
            <p>Email: [ADD_EMAIL]</p>
            <p>Phone/WhatsApp: [ADD_NUMBER]</p>
          </div>
        </div>
      </div>
    </>
  );
}
