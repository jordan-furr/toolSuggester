import "@/app/page.css"
import Link from "next/link";

export default function QuizCB() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">What are you looking for?</p>

      <div className="questionList">
        <Link href={"/begin/c/b/a"}>
          <p className="quizAnswer">Inspiration</p>
        </Link>
        <Link href={"/begin/c/b/b"}>
          <p className="quizAnswer">Assurance</p>

        </Link>
        <Link href={"/begin/c/b/c"}>
          <p className="quizAnswer">Next Steps</p>
        </Link>
      </div>
    </div>
  );
}
