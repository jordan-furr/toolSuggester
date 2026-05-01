import "@/app/page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions } from "@/data/quiz";

interface Props {
  params: Promise<{ q1: string; q2: string }>;
}

export default async function Q3Page({ params }: Props) {
  const { q1, q2 } = await params;
  if (!["1", "2", "3", "4"].includes(q1) || !["1", "2", "3"].includes(q2)) notFound();

  const q3 = questions[2];

  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="stepIndicator">Question 3 of 3</p>
        <p className="quizQuestion">{q3.text}</p>
        <div className="questionList">
          {q3.options.map((opt) => (
            <Link key={opt.value} href={`/begin/${q1}/${q2}/${opt.value}`}>
              <div className="quizAnswer">
                <div>
                  <span className="quizAnswerMain">{opt.label}</span>
                  {opt.sublabel && <span className="quizAnswerSub">{opt.sublabel}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const q1 of ["1", "2", "3", "4"]) {
    for (const q2 of ["1", "2", "3"]) {
      params.push({ q1, q2 });
    }
  }
  return params;
}