// Quiz questions and the full mapping from answer paths to tool suggestions.
// Path format: "[q1]/[q2]/[q3]" where:
//   q1: 1=Career, 2=Finances, 3=Relationship, 4=Side Project
//   q2: 1=Too Low, 2=Neutral, 3=Too High
//   q3: 1=Inspiration, 2=Assurance, 3=Next Steps

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
      { value: "1", label: "Career", sublabel: "workload / career change / decisions at work" },
      { value: "2", label: "Finances", sublabel: "personal / decisions and risk / economic change" },
      { value: "3", label: "Relationship", sublabel: "partnership / family & friendship / conflict" },
      { value: "4", label: "Side Project", sublabel: "creative blocks / starting something new / ideas" },
    ],
  },
  {
    id: "q2",
    text: "What is the temperature of the uncertainty?",
    options: [
      { value: "1", label: "Too low", sublabel: "stuck, flat, uninspired" },
      { value: "2", label: "Neutral", sublabel: "uncertain but managing" },
      { value: "3", label: "Too high", sublabel: "overwhelmed, anxious, spinning" },
    ],
  },
  {
    id: "q3",
    text: "What kind of input are you looking for?",
    options: [
      { value: "1", label: "Inspiration" },
      { value: "2", label: "Assurance" },
      { value: "3", label: "Next Steps" },
    ],
  },
];

export const resultMap: Record<string, [string, string, string]> = {
  // Career
  "1/1/1": ["Frontiers", "Adjacent Possible", "As If"],
  "1/1/2": ["Reverse Insurance", "Fait Sur Mesure", "Riding the Waves"],
  "1/1/3": ["Regret Minimization", "Runways/Landing Strips", "Bricolage"],
  "1/2/1": ["Framing", "Infinite Game", "Personal Real Options"],
  "1/2/2": ["Aplomb", "Know Your Risks", "As If"],
  "1/2/3": ["Regret Minimization", "Cognitive Flexibility", "Pivot"],
  "1/3/1": ["Framing", "10,000 Shots", "Hope is Active"],
  "1/3/2": ["Riding the Waves", "Learned Optimism", "Worst Case Scenario"],
  "1/3/3": ["Dumbo Feathers", "Don't Force Machinery", "Values vs Goals"],

  // Finances
  "2/1/1": ["Frontiers", "Stories", "Personal Real Options"],
  "2/1/2": ["Aplomb", "Dumbo Feathers", "Frustration Management"],
  "2/1/3": ["Regret Minimization", "Know Your Risks", "Small Steps"],
  "2/2/1": ["Framing", "Stories", "Techs You Live By"],
  "2/2/2": ["Riding the Waves", "Alternatives & Probabilities", "Optimization Myth"],
  "2/2/3": ["Regret Minimization", "Values vs Goals", "Small Steps"],
  "2/3/1": ["Reimagining Resources", "Sorting Knowns vs Unknowns", "Picaresque"],
  "2/3/2": ["Uncertainty Balancers", "Connection & Community", "Worst Case Scenario"],
  "2/3/3": ["Don't Force Machinery", "Cognitive Flexibility", "Learning in Fog"],

  // Relationship
  "3/1/1": ["Stories", "Fait Sur Mesure", "Memento Mori"],
  "3/1/2": ["Values vs Goals", "Embrace Being Human", "Learned Optimism"],
  "3/1/3": ["Reverse Insurance", "Activate & Unlock", "Techs You Live By"],
  "3/2/1": ["Adjacent Possible", "As If", "Memento Mori"],
  "3/2/2": ["Values vs Goals", "Frustration Management", "Optimization Myth"],
  "3/2/3": ["Infinite Game", "Uncertainty Manifesto", "Learning in Fog"],
  "3/3/1": ["Alternatives & Probabilities", "Picaresque", "As If"],
  "3/3/2": ["Riding the Waves", "Comforts", "Frustration Management"],
  "3/3/3": ["Don't Force Machinery", "Hope is Active", "Techs You Live By"],

  // Side Project
  "4/1/1": ["10,000 Shots", "Memento Mori", "Techs You Live By"],
  "4/1/2": ["Stories", "Know Your Risks", "Dumbo Feathers"],
  "4/1/3": ["Infinite Game", "Bricolage", "Pivot"],
  "4/2/1": ["Adjacent Possible", "Activate & Unlock", "Creative Competition"],
  "4/2/2": ["Uncertainty Balancers", "Alternatives & Probabilities", "Optimization Myth"],
  "4/2/3": ["Stories", "Bricolage", "Small Steps"],
  "4/3/1": ["Dumbo Feathers", "Reimagining Resources", "Cognitive Flexibility"],
  "4/3/2": ["Riding the Waves", "Sorting Knowns vs Unknowns", "Worst Case Scenario"],
  "4/3/3": ["Regret Minimization", "Personal Real Options", "Reimagining Resources"],
};

export function getQ2Label(q1: string): string {
  const q1Labels: Record<string, string> = {
    "1": "career",
    "2": "financial",
    "3": "relationship",
    "4": "project",
  };
  return `What is the temperature of the ${q1Labels[q1] ?? ""} uncertainty?`;
}