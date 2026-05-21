export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
] as const;

export const TRUST_COMPANIES = [
  { name: "VORTEX", icon: "RefreshCw" },
  { name: "NEXORA", icon: "LayoutGrid" },
  { name: "Elevate", icon: "AlignJustify" },
  { name: "Brightline", icon: "Sun" },
  { name: "CoreByte", icon: "Hexagon" },
  { name: "Visionary", icon: "CheckCheck" },
] as const;

export const SERVICE_CARDS = [
  {
    id: "ai-strategy",
    title: "AI Strategy",
    description:
      "We help you define the right AI strategy to solve real business challenges.",
    icon: "Brain",
  },
  {
    id: "process-automation",
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to boost productivity and accuracy.",
    icon: "Settings2",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description:
      "Turn data into actionable insights with advanced analytics and AI models.",
    icon: "BarChart3",
  },
  {
    id: "ai-assistants",
    title: "AI Assistants",
    description:
      "Build intelligent AI assistants that engage customers and improve support.",
    icon: "Bot",
  },
] as const;

export const COMING_SOON_SECTIONS = [
  { id: "solutions", label: "Solutions" },
  { id: "about", label: "About Us" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Let's Talk" },
] as const;
