import "@/app/page.css"
import Link from "next/link";

export default function QuizB() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What is the temperature of the finance uncertainty?</p>

        <div className="questionList">
          <Link href={"/begin/b/a"}>
            <p className="quizAnswer">Too low</p>
          </Link>
          <Link href={"/begin/b/b"}>
            <p className="quizAnswer">Neutral</p>

          </Link>
          <Link href={"/begin/b/c"}>
            <p className="quizAnswer">Too high</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
