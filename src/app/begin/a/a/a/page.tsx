import "@/app/page.css"
import Link from "next/link";
import Image from "next/image";


export default function ResultAAB() {
    return (
        <div className="resultPage">
            <div></div>
            <div className="resultCont">
                {/* Career, Too Low, Inspiration */}
                <p className="quizQuestion">Well done! Consider these three tools:</p>
                <div className="suggestions">
                    <p className="toolName">Frontiers (#3)</p>
                    <p className="toolText">Frontiers can feel daunting, but they are where we do our best work. There are myriad accessible frontiers awaiting us that could transform our daily lives.</p>

                    <p className="toolName">Adjacent Possible (#4)</p>
                    <p className="toolText">Adjacent possibles are the infinite ways in which the future can be reinvented, hovering at the edge of our awareness, waiting to be discovered.</p>
                    
                    <p className="toolName">As If (#39)</p>
                    <p className="toolText">Living as if something was already true is a technique philosophers and political activists use to invoke action and change. Living as if possibilities exist can increase the chances that they will come to be and helps us endure while we wait for them.</p>
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
