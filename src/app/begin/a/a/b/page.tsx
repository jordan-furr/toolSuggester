import "@/app/page.css"
import Link from "next/link";
import Image from "next/image";

export default function ResultAAA() {
    return (
        <div className="resultPage">
            <div></div>
            <div className="resultCont">
                {/* Career, Too Low, Assurance */}
                <p className="quizQuestion">Well done! Consider these three tools:</p>
                <div className="suggestions">
                    <p className="toolName">Reverse Insurance (#2)</p>
                    <p className="toolText">An instinctual fear of uncertainty sometimes leads us to forget that we also need uncertainty. Humans need surprise, spontaneity, and change—and those things are inherently uncertain.</p>

                    <p className="toolName">Fait Sur Mesure (#16)</p>
                    <p className="toolText">Sometimes we fall into the trap of following someone else’s plan for our life. We forget that we can, at any time, customize our lives in bright and beautiful ways. Your life should be, as the French say, fait sur mesure—made to your measure.</p>

                    <p className="toolName">Riding The Waves (#26)</p>
                    <p className="toolText">Emotions come in waves, with highs and lows. Know that the cycle is natural—everyone feels it. If you’re at a low point, better times are coming!</p>
                    <div className="ctas">
                        <Link
                            className="primary"
                            href="/"
                        >
                            <Image
                                className="logo"
                                src="/up.png"
                                alt="UP First Aid Cross"
                                width={20}
                                height={20}
                            />
                            Start over
                        </Link>
                    </div>
                </div>

            </div>
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
                    Get the book
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
                    href="https://course.theupsideofuncertainty.com"
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
                    Online course →
                </a>
            </footer>
        </div>
    );
}
