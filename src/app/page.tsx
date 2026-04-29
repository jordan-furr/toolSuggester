import Image from "next/image";
import "@/app/page.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <div className="bookCont">
          <Link target="_blank" href={"https://www.amazon.com/Upside-Uncertainty-Guide-Finding-Possibility/dp/1647823013?adgrpid=180038482722&hvpone=&hvptwo=&hvadid=748008426882&hvpos=&hvnetw=g&hvrand=11061902880981339779&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199217&hvtargid=dsa-2414841787086&hydadcr=&mcid=&hvocijid=11061902880981339779--&hvexpln=67&tag=googhydr-20&hvsb=Money_d&hvcampaign=dsadesk"}>
            <Image
              className="book"
              src="/theupside.jpg"
              alt="Next.js logo"
              width={400}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

        </div>
        <div className="heroText">
          <div>
            <p className="eyebrow">The Upside of Uncertainty</p>
            <p className="heroQuestion">What&apos;s your scenario?</p>
            <p className="description">Personalized suggestions from 42 tools for uncertainty</p>
          </div>
          <div className="ctas">
            <Link className="primary" href="/begin">
              Begin now →
            </Link>

          </div>
        </div>
      </main>
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
          theupsideofuncertainty.com
        </a>
      </footer>
    </div>
  );
}
