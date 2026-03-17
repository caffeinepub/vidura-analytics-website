import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SampleType, TestCategory, Turnaround } from "../backend";

interface FormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  city: string;
  sampleType: SampleType;
  testsRequested: TestCategory[];
  matrix: string;
  solvent: string;
  concentration: string;
  preservatives: string;
  quantityAvailable: string;
  preferredTurnaround: Turnaround;
  notes: string;
  noHumanSamples: boolean;
  nonClinicalUse: boolean;
  sampleSpecificResults: boolean;
}

export default function SampleSubmission() {
  const { actor } = useActor();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedTests, setSelectedTests] = useState<TestCategory[]>([]);

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      if (!actor) throw new Error("Actor not initialized");

      await actor.submitSample(
        data.name,
        data.organization,
        data.email,
        data.phone,
        data.city,
        data.sampleType,
        selectedTests,
        {
          matrix: data.matrix,
          solvent: data.solvent,
          concentration: data.concentration,
          preservatives: data.preservatives,
        },
        BigInt(Number.parseInt(data.quantityAvailable) || 0),
        data.preferredTurnaround,
        data.notes,
        {
          noHumanSamples: data.noHumanSamples,
          nonClinicalUse: data.nonClinicalUse,
          sampleSpecificResults: data.sampleSpecificResults,
        },
      );
    },
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Sample submission received successfully!");
    },
    onError: (error) => {
      toast.error(`Submission failed: ${error.message}`);
    },
  });

  const onSubmit = (data: FormData) => {
    if (
      !data.noHumanSamples ||
      !data.nonClinicalUse ||
      !data.sampleSpecificResults
    ) {
      toast.error("All compliance checkboxes must be checked");
      return;
    }
    if (selectedTests.length === 0) {
      toast.error("Please select at least one test");
      return;
    }
    submitMutation.mutate(data);
  };

  const testOptions = [
    { value: TestCategory.microbiology, label: "Microbiology" },
    { value: TestCategory.pesticides, label: "Pesticides" },
    { value: TestCategory.mycotoxins, label: "Mycotoxins" },
    { value: TestCategory.heavyMetals, label: "Heavy Metals" },
    { value: TestCategory.residualSolvents, label: "Residual Solvents" },
    { value: TestCategory.nutrients, label: "Nutrients" },
    { value: TestCategory.vitamins, label: "Vitamins" },
    { value: TestCategory.hormones, label: "Hormones" },
  ];

  const toggleTest = (test: TestCategory) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test],
    );
  };

  if (submitted) {
    return (
      <>
        <SEOHead
          title="Sample Submission Success | Vidura Analytics"
          description="Your sample submission has been received. We will contact you shortly with next steps."
        />
        <div className="container py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12 text-center space-y-6">
              <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
              <h1 className="text-3xl font-bold">Submission Received!</h1>
              <p className="text-lg text-muted-foreground">
                Thank you for submitting your sample request. We will review
                your requirements and contact you within 24-48 hours.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 text-left space-y-4">
                <h2 className="font-semibold text-lg">Next Steps:</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>
                    We will confirm if your request falls within our scope
                  </li>
                  <li>You'll receive sample packing and shipping guidelines</li>
                  <li>
                    Upon sample receipt, testing will begin as per agreed
                    timeline
                  </li>
                  <li>Reports will be delivered with interpretation support</li>
                </ol>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 text-left space-y-2">
                <h3 className="font-semibold">Generic Packing Guidance:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use leak-proof containers with secure lids</li>
                  <li>Label samples clearly with unique identifiers</li>
                  <li>Include sample details sheet with submission</li>
                  <li>Pack with adequate cushioning to prevent breakage</li>
                  <li>
                    For temperature-sensitive samples, use appropriate cold
                    packs
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Contact Information:</h3>
                <p className="text-sm text-muted-foreground">
                  Email: [ADD_EMAIL]
                </p>
                <p className="text-sm text-muted-foreground">
                  Phone/WhatsApp: [ADD_NUMBER]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Sample Submission - Submit Your Testing Request | Vidura Analytics"
        description="Submit samples for bioassay screening, microbiology QC, water testing, and more. R&D and internal QC support in Rajkot, Gujarat."
      />

      <div className="container py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sample Submission
            </h1>
            <p className="text-lg text-muted-foreground">
              Submit your testing request and we'll confirm scope and provide
              next steps.
            </p>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              All submissions are for non-clinical screening/QC only. We do not
              accept human/clinical samples.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        Name is required
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      {...register("organization", { required: true })}
                    />
                    {errors.organization && (
                      <p className="text-sm text-destructive">
                        Organization is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        Email is required
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">
                        Phone is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" {...register("city", { required: true })} />
                  {errors.city && (
                    <p className="text-sm text-destructive">City is required</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sample Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sampleType">Sample Type *</Label>
                  <Select
                    onValueChange={(value) =>
                      setValue("sampleType", value as SampleType)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sample type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={SampleType.extract}>
                        Extract
                      </SelectItem>
                      <SelectItem value={SampleType.product}>
                        Product
                      </SelectItem>
                      <SelectItem value={SampleType.water}>Water</SelectItem>
                      <SelectItem value={SampleType.food}>Food</SelectItem>
                      <SelectItem value={SampleType.swab}>Swab</SelectItem>
                      <SelectItem value={SampleType.data}>Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tests Requested *</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {testOptions.map((test) => (
                      <div
                        key={test.value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={test.value}
                          checked={selectedTests.includes(test.value)}
                          onCheckedChange={() => toggleTest(test.value)}
                        />
                        <Label
                          htmlFor={test.value}
                          className="font-normal cursor-pointer"
                        >
                          {test.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="matrix">Matrix</Label>
                    <Input
                      id="matrix"
                      {...register("matrix")}
                      placeholder="e.g., ethanol extract"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solvent">Solvent</Label>
                    <Input
                      id="solvent"
                      {...register("solvent")}
                      placeholder="e.g., ethanol, water"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="concentration">Concentration</Label>
                    <Input
                      id="concentration"
                      {...register("concentration")}
                      placeholder="e.g., 10 mg/mL"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preservatives">Preservatives</Label>
                    <Input
                      id="preservatives"
                      {...register("preservatives")}
                      placeholder="If any"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantityAvailable">
                    Quantity Available (mL or g) *
                  </Label>
                  <Input
                    id="quantityAvailable"
                    type="number"
                    {...register("quantityAvailable", { required: true })}
                  />
                  {errors.quantityAvailable && (
                    <p className="text-sm text-destructive">
                      Quantity is required
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTurnaround">
                    Preferred Turnaround *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setValue("preferredTurnaround", value as Turnaround)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select turnaround" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={Turnaround.standard}>
                        Standard
                      </SelectItem>
                      <SelectItem value={Turnaround.urgent}>Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    {...register("notes")}
                    rows={4}
                    placeholder="Any special requirements or notes"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Declarations *</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="noHumanSamples"
                    {...register("noHumanSamples", { required: true })}
                  />
                  <Label
                    htmlFor="noHumanSamples"
                    className="font-normal cursor-pointer"
                  >
                    I confirm that no human/clinical samples are being
                    submitted.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="nonClinicalUse"
                    {...register("nonClinicalUse", { required: true })}
                  />
                  <Label
                    htmlFor="nonClinicalUse"
                    className="font-normal cursor-pointer"
                  >
                    I understand this is for non-clinical screening/QC only; not
                    for medical diagnosis.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="sampleSpecificResults"
                    {...register("sampleSpecificResults", { required: true })}
                  />
                  <Label
                    htmlFor="sampleSpecificResults"
                    className="font-normal cursor-pointer"
                  >
                    I agree that results apply only to the sample received.
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending
                ? "Submitting..."
                : "Submit Sample Request"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
