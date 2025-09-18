import "@/app/page.css"
import Link from "next/link";

export default function QuizD() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What is the temperature of the project uncertainty?</p>

        <div className="questionList">
          <Link href={"/begin/d/a"}>
            <p className="quizAnswer">Too low</p>
          </Link>
          <Link href={"/begin/d/b"}>
            <p className="quizAnswer">Neutral</p>

          </Link>
          <Link href={"/begin/d/c"}>
            <p className="quizAnswer">Too high</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
