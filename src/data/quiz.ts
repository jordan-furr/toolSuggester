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
  "a/b/b": ["Aplomb", "As If", "Know Your Risks"],
  "a/b/c": ["Regret Minimization", "Cognitive Flexibility", "Pivot"],
  "a/c/a": ["Hope is Active", "10,000 Shots", "Framing"],
  "a/c/b": ["Learned Optimism", "Worst Case Scenario", "Riding the Waves"],
  "a/c/c": ["Values vs Goals", "Don't Force Machinery", "Dumbo Feathers"],

  // Finances
  "b/a/a": ["Stories", "Personal Real Options", "Frontiers"],
  "b/a/b": ["Aplomb", "Frustration Management", "Dumbo Feathers"],
  "b/a/c": ["Regret Minimization", "Small Steps", "Know Your Risks"],
  "b/b/a": ["Techs You Live By", "Framing", "Stories"],
  "b/b/b": ["Alternatives & Probabilities", "Riding the Waves", "Optimization Myth"],
  "b/b/c": ["Regret Minimization", "Values vs Goals", "Small Steps"],
  "b/c/a": ["Reimagining Resources", "Sorting Knowns vs Unknowns", "Picaresque"],
  "b/c/b": ["Uncertainty Balancers", "Connection & Community", "Worst Case Scenario"],
  "b/c/c": ["Don't Force Machinery", "Cognitive Flexibility", "Learning in Fog"],

  // Relationship
  "c/a/a": ["Fait Sur Mesure", "Stories", "Memento Mori"],
  "c/a/b": ["Learned Optimism", "Values vs Goals", "Embrace Being Human"],
  "c/a/c": ["Reverse Insurance", "Activate & Unlock", "Techs You Live By"],
  "c/b/a": ["Memento Mori", "As If", "Adjacent Possible"],
  "c/b/b": ["Optimization Myth", "Frustration Management", "Values vs Goals"],
  "c/b/c": ["Infinite Game", "Uncertainty Manifesto", "Learning in Fog"],
  "c/c/a": ["As If", "Alternatives & Probabilities", "Picaresque"],
  "c/c/b": ["Riding the Waves", "Comforts", "Frustration Management"],
  "c/c/c": ["Helping Others", "Techs You Live By", "Hope is Active"],

  // Side Project
  "d/a/a": ["Techs You Live By", "Memento Mori", "10,000 Shots"],
  "d/a/b": ["Stories", "Dumbo Feathers", "Know Your Risks"],
  "d/a/c": ["Bricolage", "Pivot", "Infinite Game"],
  "d/b/a": ["Creative Competition", "Adjacent Possible", "Activate & Unlock"],
  "d/b/b": ["Alternatives & Probabilities", "Uncertainty Balancers", "Optimization Myth"],
  "d/b/c": ["Stories", "Small Steps", "Bricolage"],
  "d/c/a": ["Reimagining Resources", "Cognitive Flexibility", "Dumbo Feathers"],
  "d/c/b": ["Sorting Knowns vs Unknowns", "Riding the Waves", "Worst Case Scenario"],
  "d/c/c": ["Reimagining Resources", "Regret Minimization", "Personal Real Options"],
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