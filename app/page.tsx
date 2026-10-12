import Image from "next/image";
import { TG_LINK } from "./constants";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <header>
          <a className="brand" href="#">
            <Image src="/assets/new/logo.jpg" alt="S2TAcademy logo" width={2048} height={2048} />
            <span>
              <b>S2TAcademy</b>
              <small>by Lennart</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#books">Explore the ebooks</a>
            <a className="cta header-cta" data-dialog="delivery" href={TG_LINK} target="_blank" rel="noopener noreferrer">
              GET FREE EBOOKS
            </a>
          </nav>
        </header>

        <main>
          <section className="intro">
            <div className="eyebrow">Three free ebooks · In English</div>
            <h1>
              Build your understanding.
              <br />
              <span>One chapter at a time.</span>
            </h1>
            <p>
              Explore platform controls, chart-pattern concepts and structured risk-management
              ideas in three illustrated ebooks.
            </p>
            <a className="cta" data-dialog="delivery" href={TG_LINK} target="_blank" rel="noopener noreferrer">
              GET FREE EBOOKS
            </a>
          </section>

          <figure className="showcase">
            <div className="showcase-copy">
              <div className="eyebrow">The education collection</div>
              <h2>
                Three ebooks.
                <br />
                Different perspectives.
              </h2>
              <p>
                Platform fundamentals.
                <br />
                Chart-pattern concepts.
                <br />
                Risk-management overview.
              </p>
              <a className="cta showcase-cta" data-dialog="delivery" href={TG_LINK} target="_blank" rel="noopener noreferrer">
                GET FREE EBOOKS
              </a>
            </div>
            <Image
              src="/assets/new/ebook-showcase-three.png"
              alt="Studio display mockup of all three S2TAcademy ebooks"
              width={1536}
              height={1024}
              quality={100}
              sizes="(min-width: 740px) 900px, 100vw"
            />
            <figcaption>
              Digital PDF ebooks. Book mockups are for display only; no printed books are
              included.
            </figcaption>
          </figure>

          <div className="offer-strip">
            <span>Three complementary ebooks</span>
            <span>Illustrated explanations</span>
            <span>No performance promises</span>
          </div>

          <section id="books">
            <div className="section-title">
              <div>
                <div className="eyebrow">Your learning collection</div>
                <h2>Platforms. Patterns. Risk management.</h2>
              </div>
              <p>
                Explore the tools, examples and concept overview. Assess the risks and
                limitations before applying any concepts.
              </p>
            </div>
            <div className="books">
              <article className="book-card">
                <Image
                  src="/assets/new/ebook-cover.jpg"
                  alt="Platform fundamentals ebook cover"
                  width={1824}
                  height={2362}
                  sizes="105px"
                />
                <div>
                  <small>01 / PLATFORM FUNDAMENTALS</small>
                  <h3>The Platform Guide</h3>
                  <p>
                    Four chapters covering mobile and desktop setup, account connections and
                    platform controls.
                  </p>
                  <p className="note">
                    Platform names and cover details are setup examples only, not
                    recommendations.
                  </p>
                </div>
              </article>

              <article className="book-card">
                <Image
                  src="/assets/new/charts-cover.jpg"
                  alt="Chart Pattern Mastery ebook cover"
                  width={1824}
                  height={2362}
                  sizes="105px"
                />
                <div>
                  <small>02 / CHART ANALYSIS</small>
                  <h3>Chart Pattern Mastery</h3>
                  <p>
                    Illustrated explanations of flags, wedges, triangles and reversals,
                    including example chart setups.
                  </p>
                  <p className="note">
                    Patterns can fail. Examples are illustrative and are not forecasts or
                    performance promises.
                  </p>
                </div>
              </article>

              <article className="book-card">
                <Image
                  src="/assets/new/risk-cover.jpg"
                  alt="Risk Management Blueprint ebook cover"
                  width={1824}
                  height={2362}
                  sizes="105px"
                />
                <div>
                  <small>03 / RISK MANAGEMENT OVERVIEW</small>
                  <h3>Risk Management Blueprint</h3>
                  <p>
                    An overview of risk allocation, diversification and structured
                    risk-management concepts.
                  </p>
                  <p className="note">
                    Contains educational examples. Risk-management concepts do not guarantee
                    protection or outcomes; results can vary.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="learn" aria-label="Important learning context">
            <article>
              <h3>Understand exposure</h3>
              <p>
                A small amount does not guarantee low risk. Exposure depends on the product and
                how it is used.
              </p>
            </article>
            <article>
              <h3>Allow for slippage</h3>
              <p>
                Execution prices can differ from displayed prices, especially during volatility.
              </p>
            </article>
            <article>
              <h3>Know the limits of protective orders</h3>
              <p>
                Protective orders do not guarantee an exact exit price during gaps or fast
                markets.
              </p>
            </article>
          </section>

          <section className="request" id="request">
            <div>
              <div className="eyebrow">Your free copies</div>
              <h2>Start with a simple message.</h2>
              <p>
                Ask &ldquo;I would like the free platform, chart-pattern and risk-management
                ebooks&rdquo; in Telegram. The team will reply with all three PDFs. Delivery is
                manual; no response time is guaranteed.
              </p>
            </div>
            <a className="cta" data-dialog="delivery" href={TG_LINK} target="_blank" rel="noopener noreferrer">
              GET FREE EBOOKS
            </a>
          </section>

          <section className="faq" aria-label="Common questions">
            <details>
              <summary>Do I need an account to start?</summary>
              <p>
                No. You can read all three books without one. Explore unfamiliar platform
                controls in a demo environment; demo and live conditions can differ.
              </p>
            </details>
            <details>
              <summary>What type of information do the books contain?</summary>
              <p>
                The platform and chart-pattern guides explain platform controls and analysis
                concepts. The Risk Management Blueprint also covers structured risk-management
                ideas. Reading a book is not personalized financial advice, and no outcome is
                guaranteed.
              </p>
            </details>
          </section>

          <aside className="risk">
            <strong>Risk warning.</strong> Some financial products are complex and can carry a
            high risk of loss. Education does not remove this risk. This material is general
            information, not a personal recommendation. Examples are not recommendations.
          </aside>
        </main>

        <footer>
          <span>S2TAcademy by Lennart</span>
          <div>
            <a href="/pdfs/legal-notice.pdf" target="_blank" rel="noopener noreferrer">
              Legal Notice
            </a>{" "}
            ·{" "}
            <a href="/pdfs/imprint.pdf" target="_blank" rel="noopener noreferrer">
              Imprint
            </a>{" "}
            ·{" "}
            <a href="/pdfs/risk-disclaimer.pdf" target="_blank" rel="noopener noreferrer">
              Risk Disclaimer
            </a>{" "}
            ·{" "}
            <a href="/pdfs/data-privacy.pdf" target="_blank" rel="noopener noreferrer">
              Data Privacy
            </a>
          </div>
        </footer>
      </div>

      <div className="mobile-action">
        <a className="cta" data-dialog="delivery" href={TG_LINK} target="_blank" rel="noopener noreferrer">
          GET FREE EBOOKS
        </a>
        <span>Three free PDFs · Request on Telegram</span>
      </div>
    </>
  );
}
