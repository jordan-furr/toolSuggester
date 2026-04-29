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
