import "@/app/page.css"
import Link from "next/link";

export default function QuizC() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What is the temperature of the relationship uncertainty?</p>

        <div className="questionList">
          <Link href={"/begin/c/a"}>
            <p className="quizAnswer">Too low</p>
          </Link>
          <Link href={"/begin/c/b"}>
            <p className="quizAnswer">Neutral</p>

          </Link>
          <Link href={"/begin/c/c"}>
            <p className="quizAnswer">Too high</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
