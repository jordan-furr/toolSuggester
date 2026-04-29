import "@/app/page.css"
import Link from "next/link";
import Image from "next/image";

export default function ResultABA() {
    return (
        <div className="resultPage">
            <div></div>
            <div className="resultCont">
                {/* Career, Neutral, Inspiration */}
                <p className="quizQuestion">Well done! Consider these three tools:</p>
                <div className="suggestions">
                    <p className="toolName">Framing (#1)</p>
                    <p className="toolText">When you reframe uncertainty as possibility, your ability to navigate it increases because your experience shifts from the fear of loss to the anticipation of gain.</p>

                    <p className="toolName">Infinite Game (#5)</p>
                    <p className="toolText">Infinite players learn to question the boundaries, the rules, and the game itself, reinventing both the games they are playing and themselves.</p>

                    <p className="toolName">Personal Real Options (#12)</p>
                    <p className="toolText">Research on hybrid entrepreneurs reveals that risking it all is often counterproductive. Having a portfolio of both certain and uncertain projects helps reduce anxiety while increasing your chances of success.</p>
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
