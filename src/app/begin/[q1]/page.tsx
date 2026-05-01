import "@/app/page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions, getQ2Label } from "@/data/quiz";

interface Props {
  params: Promise<{ q1: string }>;
}

export default async function Q2Page({ params }: Props) {
  const { q1 } = await params;
  if (!["1", "2", "3", "4"].includes(q1)) notFound();

  const q2 = questions[1];
  const questionText = getQ2Label(q1);

  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="stepIndicator">Question 2 of 3</p>
        <p className="quizQuestion">{questionText}</p>
        <div className="questionList">
          {q2.options.map((opt) => (
            <Link key={opt.value} href={`/begin/${q1}/${opt.value}`}>
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
  return ["1", "2", "3", "4"].map((q1) => ({ q1 }));
}