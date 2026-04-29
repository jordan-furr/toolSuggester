import "@/app/page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions } from "@/data/quiz";

interface Props {
  params: Promise<{ q1: string }>;
}

const q1Labels: Record<string, string> = {
  a: "career",
  b: "financial",
  c: "relationship",
  d: "project",
};

export default async function Q2Page({ params }: Props) {
  const { q1 } = await params;
  if (!["a", "b", "c", "d"].includes(q1)) notFound();

  const q2 = questions[1];
  const questionText = `What is the temperature of the ${q1Labels[q1]} uncertainty?`;

  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="stepIndicator">Question 2 of 3</p>
        <p className="quizQuestion">{questionText}</p>
        <div className="questionList">
          {q2.options.map((opt) => (
            <Link key={opt.value} href={`/begin/${q1}/${opt.value}`}>
              <p className="quizAnswer">{opt.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ["a", "b", "c", "d"].map((q1) => ({ q1 }));
}