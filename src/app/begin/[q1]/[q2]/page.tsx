import "@/app/page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions } from "@/data/quiz";

interface Props {
  params: Promise<{ q1: string; q2: string }>;
}

export default async function Q3Page({ params }: Props) {
  const { q1, q2 } = await params;
  if (!["a", "b", "c", "d"].includes(q1) || !["a", "b", "c"].includes(q2)) notFound();

  const q3 = questions[2];

  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="stepIndicator">Question 3 of 3</p>
        <p className="quizQuestion">{q3.text}</p>
        <div className="questionList">
          {q3.options.map((opt) => (
            <Link key={opt.value} href={`/begin/${q1}/${q2}/${opt.value}`}>
              <p className="quizAnswer">{opt.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const q1 of ["a", "b", "c", "d"]) {
    for (const q2 of ["a", "b", "c"]) {
      params.push({ q1, q2 });
    }
  }
  return params;
}