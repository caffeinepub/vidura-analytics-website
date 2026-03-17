import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export default function MobileStickyQuote() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 right-4 z-40 lg:hidden">
      <Button
        size="lg"
        onClick={() => navigate({ to: "/sample-submission" })}
        className="shadow-lg rounded-full px-6"
      >
        <FileText className="h-5 w-5 mr-2" />
        Request a Quote
      </Button>
    </div>
  );
}
