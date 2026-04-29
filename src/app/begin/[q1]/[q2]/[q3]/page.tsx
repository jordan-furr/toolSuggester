import "@/app/page.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { resultMap } from "@/data/quiz";
import { getToolByName } from "@/data/tools";

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
        <p className="resultIntro">Three tools for where you are at:</p>
        <div className="suggestions">
          {tools.map((tool) => (
            <div key={tool!.id} className="toolCard">
              <div className="toolNumber">#{tool!.number}</div>
              <div className="toolBody">
                <p className="toolName">{tool!.name}</p>
                <p className="toolText">{tool!.description}</p>
              </div>
            </div>
          ))}
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
              Get the book
            </a>
            <a
              className="primary"
              href="https://spintheupwheel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              42 Tool Dashboard
            </a>
            <a
              className="primary"
              href="https://course.theupsideofuncertainty.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Course
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a
          href="https://theupsideofuncertainty.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          theupsideofuncertainty.com →
        </a>
      </footer>
    </div >
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const q1 of ["a", "b", "c", "d"]) {
    for (const q2 of ["a", "b", "c"]) {
      for (const q3 of ["a", "b", "c"]) {
        params.push({ q1, q2, q3 });
      }
    }
  }
  return params;
}