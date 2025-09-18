import "@/app/page.css"
import Link from "next/link";

export default function BeginQuiz() {
  return (
    <div className="quizPage">
      <p className="quizQuestion">Where is uncertainty showing up for you?</p>

      <div className="questionList">
        <Link href={"/begin/a"}>
          <p className="quizAnswer">Career (workload stress/ career change/ decisions at work)</p>
        </Link>
        <Link href={"/begin/b"}>
          <p className="quizAnswer"> Finances (personal/ business/ global)</p>

        </Link>
        <Link href={"/begin/c"}>
          <p className="quizAnswer">Relationship (partnership/ family/ friendship/ community)</p>

        </Link>
        <Link href={"/begin/d"}>
          <p className="quizAnswer">Side Project / Creative Pursuits</p>

        </Link>
      </div>
    </div>
  );
}
