import "@/app/page.css"
import Link from "next/link";

export default function QuizBB() {
  return (
    <div className="quizPage">
      <div className="quizCont">
        <p className="quizQuestion">What are you looking for?</p>

        <div className="questionList">
          <Link href={"/begin/b/b/a"}>
            <p className="quizAnswer">Inspiration</p>
          </Link>
          <Link href={"/begin/b/b/b"}>
            <p className="quizAnswer">Assurance</p>

          </Link>
          <Link href={"/begin/b/b/c"}>
            <p className="quizAnswer">Next Steps</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
