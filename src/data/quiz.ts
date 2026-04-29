// Quiz questions and the full mapping from answer paths to tool suggestions.
// Path format: "[q1]/[q2]/[q3]" where:
//   q1: a=Career, b=Finances, c=Relationship, d=Side Project
//   q2: a=Too Low, b=Neutral, c=Too High
//   q3: a=Inspiration, b=Assurance, c=Next Steps

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  value: string;
  label: string;
  sublabel?: string;
}

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Where is uncertainty showing up for you?",
    options: [
      {
        value: "a",
        label: "Career",
        sublabel: "workload stress / career change / decisions at work",
      },
      {
        value: "b",
        label: "Finances",
        sublabel: "personal / business / global",
      },
      {
        value: "c",
        label: "Relationship",
        sublabel: "partnership / family / friendship / community",
      },
      {
        value: "d",
        label: "Side Project / Creative Pursuits",
      },
    ],
  },
  {
    id: "q2",
    text: "What is the temperature of the uncertainty?",
    options: [
      { value: "a", label: "Too low", sublabel: "stuck, flat, uninspired" },
      { value: "b", label: "Neutral", sublabel: "uncertain but managing" },
      { value: "c", label: "Too high", sublabel: "overwhelmed, anxious, spinning" },
    ],
  },
  {
    id: "q3",
    text: "What kind of input are you looking for?",
    options: [
      { value: "a", label: "Inspiration" },
      { value: "b", label: "Assurance" },
      { value: "c", label: "Next Steps" },
    ],
  },
];

// Maps path "q1/q2/q3" → array of 3 tool names (must match tools.ts names exactly)
export const resultMap: Record<string, [string, string, string]> = {
  // Career
  "a/a/a": ["Frontiers", "Adjacent Possible", "As If"],
  "a/a/b": ["Reverse Insurance", "Fait Sur Mesure", "Riding the Waves"],
  "a/a/c": ["Regret Minimization", "Runways/Landing Strips", "Bricolage"],
  "a/b/a": ["Framing", "Infinite Game", "Personal Real Options"],
  "a/b/b": ["Aplomb", "Know Your Risks", "As If"],
  "a/b/c": ["Regret Minimization", "Cognitive Flexibility", "Pivot"],
  "a/c/a": ["Framing", "10,000 Shots", "Hope is Active"],
  "a/c/b": ["Riding the Waves", "Learned Optimism", "Worst Case Scenario"],
  "a/c/c": ["Dumbo Feathers", "Don't Force Machinery", "Values vs Goals"],

  // Finances
  "b/a/a": ["Frontiers", "Stories", "Personal Real Options"],
  "b/a/b": ["Aplomb", "Dumbo Feathers", "Frustration Management"],
  "b/a/c": ["Regret Minimization", "Know Your Risks", "Small Steps"],
  "b/b/a": ["Framing", "Stories", "Techs You Live By"],
  "b/b/b": ["Riding the Waves", "Alternatives & Probabilities", "Optimization Myth"],
  "b/b/c": ["Regret Minimization", "Values vs Goals", "Small Steps"],
  "b/c/a": ["Reimagining Resources", "Sorting Knowns vs Unknowns", "Picaresque"],
  "b/c/b": ["Uncertainty Balancers", "Connection & Community", "Worst Case Scenario"],
  "b/c/c": ["Don't Force Machinery", "Cognitive Flexibility", "Learning in Fog"],

  // Relationship
  "c/a/a": ["Stories", "Fait Sur Mesure", "Memento Mori"],
  "c/a/b": ["Values vs Goals", "Embrace Being Human", "Learned Optimism"],
  "c/a/c": ["Reverse Insurance", "Activate & Unlock", "Techs You Live By"],
  "c/b/a": ["Adjacent Possible", "As If", "Memento Mori"],
  "c/b/b": ["Values vs Goals", "Frustration Management", "Optimization Myth"],
  "c/b/c": ["Infinite Game", "Uncertainty Manifesto", "Learning in Fog"],
  "c/c/a": ["Alternatives & Probabilities", "Picaresque", "As If"],
  "c/c/b": ["Riding the Waves", "Comforts", "Frustration Management"],
  "c/c/c": ["Don't Force Machinery", "Hope is Active", "Techs You Live By"],

  // Side Project
  "d/a/a": ["10,000 Shots", "Memento Mori", "Techs You Live By"],
  "d/a/b": ["Stories", "Know Your Risks", "Dumbo Feathers"],
  "d/a/c": ["Infinite Game", "Bricolage", "Pivot"],
  "d/b/a": ["Adjacent Possible", "Activate & Unlock", "Creative Competition"],
  "d/b/b": ["Uncertainty Balancers", "Alternatives & Probabilities", "Optimization Myth"],
  "d/b/c": ["Stories", "Bricolage", "Small Steps"],
  "d/c/a": ["Dumbo Feathers", "Reimagining Resources", "Cognitive Flexibility"],
  "d/c/b": ["Riding the Waves", "Sorting Knowns vs Unknowns", "Worst Case Scenario"],
  "d/c/c": ["Regret Minimization", "Personal Real Options", "Reimagining Resources"],
};

export function getQ2Label(q1: string, q2: string): string {
  const q1Labels: Record<string, string> = {
    a: "career",
    b: "financial",
    c: "relationship",
    d: "project",
  };
  const q2Labels: Record<string, string> = {
    a: "Too low",
    b: "Neutral",
    c: "Too high",
  };
  return `What is the temperature of the ${q1Labels[q1] ?? ""} uncertainty?`;
}