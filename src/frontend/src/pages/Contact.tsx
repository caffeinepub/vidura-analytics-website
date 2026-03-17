import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { actor } = useActor();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitContact(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
    onSuccess: () => {
      setSubmitted(true);
      reset();
      toast.success("Message sent successfully! We will get back to you soon.");
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: (error) => {
      toast.error(`Failed to send message: ${error.message}`);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Get in Touch | Vidura Analytics, Tramba, Rajkot, Gujarat"
        description="Contact Vidura Analytics in Tramba, Rajkot for R&D testing, bioassay screening, and microbiology QC services. Email, phone, and WhatsApp available."
      />

      <div className="container py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch to discuss your testing needs or request a quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" {...register("name", { required: true })} />
                  {errors.name && (
                    <p className="text-sm text-destructive">Name is required</p>
                  )}
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      Message is required
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
                {submitted && (
                  <p className="text-sm text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">[ADD_NUMBER]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">[ADD_EMAIL]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">[ADD_ADDRESS]</p>
                    <p className="text-muted-foreground">
                      Tramba, Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/[ADD_NUMBER]", "_blank")
                }
                className="w-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = "tel:[ADD_NUMBER]";
                }}
                className="w-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call
              </Button>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="pt-6">
                <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Map: Tramba, Rajkot, Gujarat
                    </p>
                    <p className="text-sm text-muted-foreground">
                      (Map embed placeholder)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
