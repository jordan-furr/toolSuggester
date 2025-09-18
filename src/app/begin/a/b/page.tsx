import "@/app/page.css"
import Link from "next/link";

export default function QuizAB() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">What are you looking for?</p>

      <div className="questionList">
        <Link href={"/begin/a/b/a"}>
          <p className="quizAnswer">Inspiration</p>
        </Link>
        <Link href={"/begin/a/b/b"}>
          <p className="quizAnswer">Assurance</p>

        </Link>
        <Link href={"/begin/a/b/c"}>
          <p className="quizAnswer">Next Steps</p>
        </Link>
      </div>
    </div>
  );
}
