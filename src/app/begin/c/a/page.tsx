import "@/app/page.css"
import Link from "next/link";

export default function QuizCA() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What are you looking for?</p>

        <div className="questionList">
          <Link href={"/begin/c/a/a"}>
            <p className="quizAnswer">Inspiration</p>
          </Link>
          <Link href={"/begin/c/a/b"}>
            <p className="quizAnswer">Assurance</p>

          </Link>
          <Link href={"/begin/c/a/c"}>
            <p className="quizAnswer">Next Steps</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
