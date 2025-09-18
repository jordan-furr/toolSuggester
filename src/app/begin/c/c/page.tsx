import "@/app/page.css"
import Link from "next/link";

export default function QuizCC() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What are you looking for?</p>

        <div className="questionList">
          <Link href={"/begin/c/c/a"}>
            <p className="quizAnswer">Inspiration</p>
          </Link>
          <Link href={"/begin/c/c/b"}>
            <p className="quizAnswer">Assurance</p>

          </Link>
          <Link href={"/begin/c/c/c"}>
            <p className="quizAnswer">Next Steps</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
