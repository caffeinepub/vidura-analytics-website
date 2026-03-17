import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellation from "./pages/RefundCancellation";
import ReportsDisclaimers from "./pages/ReportsDisclaimers";
import SampleSubmission from "./pages/SampleSubmission";
import Services from "./pages/Services";
import TermsOfUse from "./pages/TermsOfUse";
import Tutorials from "./pages/Tutorials";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: Industries,
});

const sampleSubmissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sample-submission",
  component: SampleSubmission,
});

const reportsDisclaimersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reports-disclaimers",
  component: ReportsDisclaimers,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});

const tutorialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tutorials",
  component: Tutorials,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const termsOfUseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms-of-use",
  component: TermsOfUse,
});

const refundCancellationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/refund-cancellation",
  component: RefundCancellation,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  industriesRoute,
  sampleSubmissionRoute,
  reportsDisclaimersRoute,
  aboutRoute,
  faqRoute,
  tutorialsRoute,
  contactRoute,
  privacyPolicyRoute,
  termsOfUseRoute,
  refundCancellationRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
