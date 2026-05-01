import "@/app/page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resultMap } from "@/data/quiz";
import { getToolByName } from "@/data/tools";
import ToolCard from "@/app/components/ToolCard";

interface Props {
  params: Promise<{ q1: string; q2: string; q3: string }>;
}

export default async function ResultsPage({ params }: Props) {
  const { q1, q2, q3 } = await params;
  const path = `${q1}/${q2}/${q3}`;
  const toolNames = resultMap[path];

  if (!toolNames) notFound();

  const tools = toolNames.map((name) => getToolByName(name)).filter(Boolean);

  return (
    <div className="resultPage">
      <div></div>
      <div className="resultCont">
        <p className="resultEyebrow">Based on your answers</p>
        <p className="resultIntro">Here are three tools for you</p>
        <div className="suggestions">
          {tools.map((tool, i) => (
            <ToolCard key={tool!.id} tool={tool!} index={i} />
          ))}
        </div>
        <div className="ctas">
          <Link className="primary" href="/">
            ← Start over
          </Link>
          <a
            className="primary"
            href="https://www.amazon.com/Upside-Uncertainty-Guide-Finding-Possibility/dp/1647823013"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Upside of Uncertainty
          </a>
          <a
            className="primary"
            href="https://spintheupwheel.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All 42 tools →
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const q1 of ["1", "2", "3", "4"]) {
    for (const q2 of ["1", "2", "3"]) {
      for (const q3 of ["1", "2", "3"]) {
        params.push({ q1, q2, q3 });
      }
    }
  }
  return params;
}