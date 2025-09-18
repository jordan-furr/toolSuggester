import "@/app/page.css"
import Link from "next/link";

export default function QuizAC() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">What are you looking for?</p>

      <div className="questionList">
        <Link href={"/begin/a/c/a"}>
          <p className="quizAnswer">Inspiration</p>
        </Link>
        <Link href={"/begin/a/c/b"}>
          <p className="quizAnswer">Assurance</p>

        </Link>
        <Link href={"/begin/a/c/c"}>
          <p className="quizAnswer">Next Steps</p>
        </Link>
      </div>
    </div>
  );
}
