export type CompanyType = "hyperscaler" | "gsi" | "si";
export type Region = "United States" | "Canada";

// Service capabilities of the 2026 Lyzr Agentic AI Services Map — North America.
// These are the rows of the market map and the grouping order for the directory.
export const CATEGORY_ORDER = [
  "Document Automation",
  "Workflow Optimization",
  "Decision Support",
  "Customer Experience Automation",
  "Process Intelligence",
] as const;

export const CATEGORY_FILTERS = ["All", ...CATEGORY_ORDER] as const;

// End-customer verticals (the columns of the map).
export const VERTICALS = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Retail & Logistics",
  "Manufacturing",
  "Telecom",
] as const;

export const REGION_OPTIONS: Region[] = ["United States", "Canada"];
export const TAG_OPTIONS = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Retail & Logistics",
  "Manufacturing",
  "Telecom",
] as const;

export const TAG_EMOJIS: Record<string, string> = {
  "Lyzr Recognised": "",
  "Agentic AI Services Leader": "",
};

export interface Company {
  name: string;
  city: string;
  employees: string;
  services: string[];
  international: string;
  website: string;
  description: string;
  companyType: CompanyType;
  hyperscalerBadges?: ("AWS" | "GCP" | "Azure" | "GSI")[];
  region: Region;
  country?: string;
  revenue?: string;
  tags?: string[];
  /** Service capability — one of CATEGORY_ORDER. The market-map row. */
  category?: string;
  /** End-customer vertical — the market-map column. */
  vertical?: string;
}

// Helper to keep each entry terse and consistent.
function mk(
  name: string,
  website: string,
  city: string,
  region: Region,
  category: string,
  vertical: string,
  revenue: string,
  employees: string,
  description: string
): Company {
  return {
    name,
    website,
    city,
    region,
    country: region === "Canada" ? "Canada" : "USA",
    category,
    vertical,
    revenue,
    employees,
    description,
    services: [vertical],
    international: region === "Canada" ? "Canada" : "USA",
    companyType: "si",
    tags: ["Lyzr Recognised", "Agentic AI Services Leader", vertical, region === "Canada" ? "Canada" : "USA", revenue],
  };
}

// The 24 North America firms, placed exactly as on the market map (service × vertical).
export const companies: Company[] = [
  // ── Document Automation ──
  mk("Apexon", "apexon.com", "Santa Clara, CA", "United States", "Document Automation", "Financial Services", "$250-500M", "3,500",
    "Digital engineering services with strong FS, healthcare and life-sciences practices on a Microsoft + AWS multi-cloud stack. Quantified production FS GenAI outcomes (70% dispute reduction, 12× faster letter generation, 92% cost reduction)."),
  mk("Adastra", "adastracorp.com", "Toronto, ON", "Canada", "Document Automation", "Financial Services", "$100-250M", "1,000+",
    "Data + AI consultancy with deep FS, insurance and public-sector practice across NA and EU. 2024 Microsoft Americas Partner of the Year (Data & AI), with verified production agentic deployments in regulated industries."),

  // ── Workflow Optimization ──
  mk("Quantiphi", "quantiphi.com", "Marlborough, MA", "United States", "Workflow Optimization", "Financial Services", "$500M+", "2,700",
    "AI-first digital-engineering firm with deep banking, healthcare and life-sciences depth across AWS, GCP and Azure. NelsonHall NEAT Leader 2025 for GenAI in Banking; Codeaira platform for legacy modernization."),
  mk("Trantor", "trantorinc.com", "Milpitas, CA", "United States", "Workflow Optimization", "Financial Services", "$50-100M", "600",
    "AI strategy + delivery firm with an Outcome-as-Agentic-Solution (OaAS) framework and Bedrock + Vertex AI multi-cloud delivery — outcome-oriented, beyond AWS-only peers."),
  mk("Logicworks", "logicworks.com", "New York, NY", "United States", "Workflow Optimization", "Manufacturing", "$50-100M", "250",
    "AWS Premier Partner specializing in compliance-heavy cloud workloads (HIPAA, PCI, SOC) for mid-market enterprises. Named manufacturing clients include 3M and ServPro."),
  mk("ClearScale", "clearscale.com", "San Francisco, CA", "United States", "Workflow Optimization", "Manufacturing", "$50-100M", "250",
    "AWS Premier Tier partner with a GenAI Workbench platform (Bedrock + AutoGen orchestration) and Clearview migration methodology. AWS GenAI Competency across 1,000+ cloud projects."),
  mk("Logic20/20", "logic2020.com", "Seattle, WA", "United States", "Workflow Optimization", "Telecom", "$20-50M", "250-400",
    "Seattle consultancy with strong utilities, telecom and grid-operations practice. Verified enterprise scale: a 60,000-employee Microsoft Copilot rollout plus utility AI grid-operations work."),
  mk("Improving", "improving.com", "Dallas, TX", "United States", "Workflow Optimization", "Retail & Logistics", "$100-250M", "1,500",
    "North American technology consultancy with a strong cultural identity — cloud, custom development and AI for the mid-market. Production agentic deployment with Lakeshore Learning."),
  mk("Accelirate", "accelirate.com", "Sunrise, FL", "United States", "Workflow Optimization", "Insurance", "$50-100M", "500",
    "RPA + GenAI services firm built around UiPath and Amazon Bedrock for FS and insurance workflow automation. AWS Advanced Partner with GenAI Specialization — bridges classical automation with agents."),
  mk("Kenway Consulting", "kenwayconsulting.com", "Chicago, IL", "United States", "Workflow Optimization", "Insurance", "$20-50M", "250",
    "Chicago consultancy specializing in FS, insurance and healthcare with strong Salesforce + data-engineering practices — a Midwest hub complementing the NYC/Boston firms."),

  // ── Decision Support ──
  mk("Trianz", "trianz.com", "Santa Clara, CA", "United States", "Decision Support", "Financial Services", "$100-250M", "2,000+",
    "Multi-cloud transformation firm with the proprietary Concierto Intelligence federated-AI platform (100+ pre-built autonomous agents) and AVRIO data marketplace. Top-3 Worldwide AWS NOVA GenAI Award winner."),
  mk("Tribe AI", "tribe.ai", "New York, NY", "United States", "Decision Support", "Financial Services", "$20-50M", "250",
    "PE-backed AI consultancy with a curated network of senior ML/AI engineers and AWS Advanced GenAI Competency. Senior-engineer delivery model with a strong PE / FS network for warm intros."),
  mk("West Monroe", "westmonroe.com", "Chicago, IL", "United States", "Decision Support", "Financial Services", "$500M+", "2,500",
    "PE-focused consulting firm with strong M&A diligence, utilities and FS practice plus the proprietary Nigel AI tool. Quantified production outcomes (30% productivity, €5.6M savings, 1,000+ tool uses)."),
  mk("Caylent", "caylent.com", "Irvine, CA", "United States", "Decision Support", "Healthcare", "$100-250M", "900",
    "AWS-native services firm specializing in agentic AI, GenAI and cloud modernization for healthcare, aviation and energy. AWS Global GenAI Consulting Partner of the Year 2025 (United Express: 90% MTTR reduction)."),
  mk("NorthBay Solutions", "northbaysolutions.com", "McLean, VA", "United States", "Decision Support", "Retail & Logistics", "$50-100M", "350+",
    "AWS pure-play firm with a GenAI Managed Services model and agentic workflow operations. Member of the AWS Generative AI Partner Innovation Alliance, collaborating directly with the AWS GenAI Innovation Center."),
  mk("Tredence", "tredence.com", "San Jose, CA", "United States", "Decision Support", "Retail & Logistics", "$250-500M", "4,200",
    "Data-science + AI consultancy with sharp retail/CPG focus and the ATOM.AI accelerator ecosystem (140+ accelerators). 2026 Snowflake Retail & CPG Partner of the Year, second consecutive year."),
  mk("Daugherty Business Solutions", "daugherty.com", "St. Louis, MO", "United States", "Decision Support", "Insurance", "$100-250M", "1,500",
    "40-year St. Louis consultancy with FS, insurance and healthcare practices and a strong data-governance + AI-readiness focus. Top Workplaces USA with a long-standing regulated-industry client base."),

  // ── Customer Experience Automation ──
  mk("Bridgenext", "bridgenext.com", "Iselin, NJ", "United States", "Customer Experience Automation", "Financial Services", "$100-250M", "800",
    "Growth-OS firm built on Salesforce Agentic AI with a digital-experience and customer-engagement focus across FS, manufacturing and healthcare — direct adjacency to Lyzr CX automation use cases."),
  mk("10Pearls", "10pearls.com", "Herndon, VA", "United States", "Customer Experience Automation", "Healthcare", "$50-100M", "1,000+",
    "Digital product-engineering and AI consultancy with a strong healthcare AI and HIPAA-compliant agent practice. Production multilingual, sentiment-aware healthcare agents with named clients."),
  mk("Avenga", "avenga.com", "New York, NY", "United States", "Customer Experience Automation", "Insurance", "$100-250M", "2,500",
    "Global digital-engineering firm with strong life-sciences, insurance and aviation practices. Tier-1 named clients (Lufthansa, Allianz) signal enterprise-grade delivery across a US + EU footprint."),
  mk("Spaulding Ridge", "spauldingridge.com", "Chicago, IL", "United States", "Customer Experience Automation", "Retail & Logistics", "$100-250M", "800",
    "Cross-platform AI-agents firm built on Salesforce Agentforce + Snowflake with a consumer-brands and media/entertainment focus. 2026 Snowflake Media & Entertainment Partner of the Year."),

  // ── Process Intelligence ──
  mk("Effectual", "effectual.ai", "Jersey City, NJ", "United States", "Process Intelligence", "Financial Services", "$50-100M", "250",
    "AWS Premier Tier partner with a strong public-sector and commercial-enterprise practice and AI accelerators on AWS Bedrock. 2025 AWS Public Sector Consulting Partner of the Year (NA); Gartner MQ Honorable Mention."),
  mk("Innovative Solutions", "innovativesol.com", "Rochester, NY", "United States", "Process Intelligence", "Healthcare", "$50-100M", "250",
    "Fastest-growing AWS Premier Tier partner in NA, focused on AI and data for growing businesses. One of the first with AWS Agentic AI Specialization and a 2-year strategic collaboration with AWS on agentic delivery."),
  mk("NashTech", "nashtechglobal.com", "Toronto / Vietnam", "Canada", "Process Intelligence", "Insurance", "$100-250M", "2,500",
    "Digital-engineering firm with a strong insurance and FS practice. Insurance vertical leader running an active agentic-AI working group with Insurtech UK (Mosaic, Hastings, YuLife) on underwriting, fraud and compliance."),
];

const TYPE_ORDER: Record<CompanyType, number> = {
  hyperscaler: 0,
  gsi: 1,
  si: 2,
};

export function getFilteredCompanies(
  companyList: Company[],
  search?: string,
  filter?: string,
  sort?: string,
  typeFilter?: string,
  regionFilter?: string[],
  tagFilter?: string[]
): Company[] {
  let result = [...companyList];

  if (typeFilter && typeFilter !== "All") {
    const typeMap: Record<string, CompanyType> = {
      "Hyperscaler Partner": "hyperscaler",
      "GSI": "gsi",
      "SI": "si",
    };
    const t = typeMap[typeFilter];
    if (t) result = result.filter((c) => c.companyType === t);
  }

  if (regionFilter && regionFilter.length > 0) {
    result = result.filter((c) => regionFilter.includes(c.region));
  }

  if (tagFilter && tagFilter.length > 0) {
    result = result.filter((c) => c.tags && tagFilter.every((t) => c.tags!.includes(t)));
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.services.some((s) => s.toLowerCase().includes(q)) ||
        c.description.toLowerCase().includes(q) ||
        (c.country && c.country.toLowerCase().includes(q)) ||
        (c.category && c.category.toLowerCase().includes(q)) ||
        (c.vertical && c.vertical.toLowerCase().includes(q)) ||
        c.region.toLowerCase().includes(q)
    );
  }

  // Filter by service capability (market-map row).
  if (filter && filter !== "All") {
    result = result.filter((c) => c.category === filter);
  }

  if (sort === "A–Z") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort?.startsWith("Tag: ")) {
    const tagName = sort.replace("Tag: ", "");
    result.sort((a, b) => {
      const aHas = a.tags?.includes(tagName) ? 1 : 0;
      const bHas = b.tags?.includes(tagName) ? 1 : 0;
      if (bHas !== aHas) return bHas - aHas;
      return a.name.localeCompare(b.name);
    });
  } else if (sort === "City") {
    result.sort((a, b) => a.city.localeCompare(b.city));
  }

  return result;
}
