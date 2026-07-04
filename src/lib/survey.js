export const surveyQuestions = [
  {
    id: "organization",
    label: "What kind of organization?",
    options: [
      { value: "nonprofit", label: "Nonprofit" },
      { value: "social-purpose", label: "Social-purpose business" },
      { value: "individual", label: "Individual" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "funding",
    label: "How do you fund your work?",
    options: [
      { value: "grants", label: "Grants" },
      { value: "sales", label: "Sales" },
      { value: "donations", label: "Donations" },
      { value: "mix", label: "Mix" },
    ],
  },
  {
    id: "hours",
    label: "What eats the most hours?",
    options: [
      { value: "grant-writing", label: "Grant writing" },
      { value: "content", label: "Content and social" },
      { value: "compliance", label: "Compliance" },
      { value: "donor-comms", label: "Donor communication" },
      { value: "operations", label: "Operations" },
    ],
  },
  {
    id: "mascot",
    label: "Would a custom AI mascot fit your brand?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "maybe", label: "Maybe" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "technical",
    label: "How technical is your team?",
    options: [
      { value: "self-run", label: "We can run it ourselves" },
      { value: "managed", label: "We need it managed" },
      { value: "not-technical", label: "Not technical at all" },
    ],
  },
]

export const routes = {
  grant: {
    title: "Grant-Assist",
    eyebrow: "Best first move",
    text: "Pauli scouts fit, drafts the first pass, and gives your reviewer a clean approval trail.",
    cta: "Plan the grant scout",
  },
  steward: {
    title: "Steward",
    eyebrow: "Managed system",
    text: "Pauli keeps the mascot, content rhythm, forms, and grant queue tidy while your team works.",
    cta: "Map the managed build",
  },
  build: {
    title: "Build",
    eyebrow: "Owned stack",
    text: "Pauli ships the source, docs, and handoff so your technical team can run the system.",
    cta: "Scope the owned build",
  },
  insider: {
    title: "Insider Club",
    eyebrow: "Early access",
    text: "Watch the mascot flywheel form, get build notes, and step in when your timing is right.",
    cta: "Join the club",
  },
}

export function routeSurvey(answers) {
  const funded = ["grants", "sales", "donations", "mix"].includes(answers.funding)

  if (answers.organization === "nonprofit" && answers.funding === "grants") {
    return routes.grant
  }

  if (funded && answers.technical === "managed") {
    return routes.steward
  }

  if (funded && answers.technical === "self-run") {
    return routes.build
  }

  return routes.insider
}
