// Ordered by item count per group of 3 so each grid row has uniform height:
// Row 1: Microsoft(5), Udemy(4), Cisco(3)
// Row 2: Google Cloud(3), AWS(3), Academic Programs(3)
// Row 3: Salesforce(2), Anthropic(2), MathWorks(2)

const certifications = [
  {
    issuer: "Microsoft",
    color: "from-blue-500 to-blue-700",
    items: [
      "SQL AI Developer Associate",
      "Azure AI Fundamentals",
      "Azure Data Fundamentals",
      "Azure Fundamentals",
      "Power Platform Fundamentals",
    ],
  },
  {
    issuer: "Udemy",
    color: "from-purple-500 to-purple-700",
    items: [
      "Python Complete Course",
      "NLP Course for Beginners",
      "SQL Bootcamp with MySQL, PHP & Python",
      "JavaScript, PHP & Python Complete Course",
    ],
  },
  {
    issuer: "Cisco",
    color: "from-teal-500 to-teal-700",
    items: [
      "Cybersecurity Essentials",
      "Introduction to Cybersecurity",
      "Introduction to IoT",
    ],
  },
  {
    issuer: "Google Cloud",
    color: "from-red-500 to-yellow-500",
    items: [
      "Associate Cloud Engineer",
      "Career Readiness - Associate Cloud Engineer Track",
      "Career Practitioner Pathway",
    ],
  },
  {
    issuer: "Amazon Web Services",
    color: "from-orange-500 to-orange-700",
    items: [
      "AWS Academy Cloud Foundations",
      "Introduction to the AWS Cloud",
      "Introduction to Artificial Intelligence",
    ],
  },
  {
    issuer: "Academic Programs",
    color: "from-violet-500 to-violet-700",
    items: [
      "Advanced Data Analytics Tools (VIT University)",
      "Data Science and Advanced Analytics (VIT University)",
      "Applied Data Science Externship (Google DSC)",
    ],
  },
  {
    issuer: "Salesforce",
    color: "from-sky-400 to-sky-600",
    items: [
      "Certified Agentforce Specialist",
      "Certified AI Associate",
    ],
  },
  {
    issuer: "Anthropic",
    color: "from-orange-400 to-red-500",
    items: [
      "AI Fluency: Frameworks & Foundations",
      "Claude 101",
    ],
  },
  {
    issuer: "MathWorks",
    color: "from-red-600 to-red-800",
    items: [
      "MATLAB Onramp",
      "Optimization Onramp",
    ],
  },
];

export default certifications;
