import Image from "next/image";
import "@/app/page.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <Image
          className="logo"
          src="/theupside.jpg"
          alt="Next.js logo"
          width={166}
          height={250}
        />

        <div className="ctas">
          <Link
            className="primary"
            href="/begin"
          >
            <Image
              className="logo"
              src="/up.png"
              alt="UP First Aid Cross"
              width={20}
              height={20}
            />
            Begin now
          </Link>

        </div>
      </main>
      <footer className="footer">
        <a
          href="https://www.amazon.com/Upside-Uncertainty-Guide-Finding-Possibility/dp/1647823013?adgrpid=180038482722&hvpone=&hvptwo=&hvadid=748008426882&hvpos=&hvnetw=g&hvrand=11061902880981339779&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199217&hvtargid=dsa-2414841787086&hydadcr=&mcid=&hvocijid=11061902880981339779--&hvexpln=67&tag=googhydr-20&hvsb=Money_d&hvcampaign=dsadesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Read the book
        </a>
        <a
          href="https://spintheupwheel.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          42 Tool Dashboard
        </a>
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
    </div>
  );
}
