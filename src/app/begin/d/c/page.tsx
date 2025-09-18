import "@/app/page.css"
import Link from "next/link";

export default function QuizDC() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">What are you looking for?</p>

      <div className="questionList">
        <Link href={"/begin/d/c/a"}>
          <p className="quizAnswer">Inspiration</p>
        </Link>
        <Link href={"/begin/d/c/b"}>
          <p className="quizAnswer">Assurance</p>

        </Link>
        <Link href={"/begin/d/c/c"}>
          <p className="quizAnswer">Next Steps</p>
        </Link>
      </div>
    </div>
  );
}
