import "@/app/page.css"
import Link from "next/link";
import { questions } from "@/data/quiz";

export default function BeginQuiz() {
  const q1 = questions[0];

  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="stepIndicator">Question 1 of 3</p>
        <p className="quizQuestion">{q1.text}</p>
        <div className="questionList">
          {q1.options.map((opt) => (
            <Link key={opt.value} href={`/begin/${opt.value}`}>
              <p className="quizAnswer">
                {opt.label}
                {opt.sublabel ? ` (${opt.sublabel})` : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
