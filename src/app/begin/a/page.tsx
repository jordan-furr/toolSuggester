import "@/app/page.css"
import Link from "next/link";

export default function QuizA() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">What is the temperature of the career uncertainty?</p>

      <div className="questionList">
        <Link href={"/begin/a/a"}>
          <p className="quizAnswer">Too low</p>
        </Link>
        <Link href={"/begin/a/b"}>
          <p className="quizAnswer">Neutral</p>

        </Link>
        <Link href={"/begin/a/c"}>
          <p className="quizAnswer">Too high</p>
        </Link>
      </div>
    </div>
  );
}
