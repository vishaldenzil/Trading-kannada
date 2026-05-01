import type { CSSProperties } from "react";
import { Header } from "./components/Header";

const chartBars = [
  { height: "52%", direction: "up" },
  { height: "68%", direction: "up" },
  { height: "44%", direction: "down" },
  { height: "73%", direction: "up" },
  { height: "38%", direction: "down" },
  { height: "60%", direction: "up" },
  { height: "82%", direction: "up" },
  { height: "48%", direction: "down" },
  { height: "71%", direction: "up" },
  { height: "58%", direction: "up" },
  { height: "35%", direction: "down" },
  { height: "64%", direction: "up" },
];

const features = [
  {
    number: "01",
    title: "Simple Kannada Lessons",
    body: "Concepts are explained in everyday Kannada with practical examples from Indian markets.",
  },
  {
    number: "02",
    title: "Market Logic",
    body: "Focus on price action, candles, reversals, risk reward, and trade planning.",
  },
  {
    number: "03",
    title: "Beginner to Advanced",
    body: "Start free on YouTube, then move into advanced day trading strategies through the course.",
  },
];

const videos = [
  {
    href: "https://www.youtube.com/watch?v=13DMjJ56Mw8",
    image: "https://i.ytimg.com/vi/13DMjJ56Mw8/hqdefault.jpg",
    alt: "Banknifty live trading video thumbnail",
    category: "Live Trading",
    title: "ಮಾರ್ಕೆಟ್ Opening Trick ಲೈವ್ ಟ್ರೇಡಿಂಗ್ | Banknifty Live Trading Profit",
  },
  {
    href: "https://youtu.be/DXLfTDeINoc",
    image: "https://i.ytimg.com/vi/DXLfTDeINoc/hqdefault.jpg",
    alt: "Trading Kannada lesson thumbnail",
    category: "Trading Psychology",
    title: "ಟ್ರೇಡಿಂಗ್ ನಲ್ಲಿ ಹಣ ಡಬಲ್ ಮಾಡೋದು ಹೇಗೆ?",
  },
  {
    href: "https://youtu.be/X0KYvg_OrTM",
    image: "https://i.ytimg.com/vi/X0KYvg_OrTM/hqdefault.jpg",
    alt: "Risk reward ratio video thumbnail",
    category: "Risk Reward",
    title: "Lossನಿಂದ profit ಆಗಿದ್ದು ಹೇಗೆ | Power of Risk Reward Ratio",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero">
          <div className="hero-media" aria-hidden="true">
            <div className="terminal">
              <div className="terminal-top">
                <span />
                <span />
                <span />
                <strong>NIFTY / BANKNIFTY</strong>
              </div>
              <div className="chart-grid">
                {chartBars.map((bar, index) => (
                  <i
                    key={`${bar.height}-${index}`}
                    style={{ "--h": bar.height, "--type": bar.direction } as CSSProperties}
                  />
                ))}
              </div>
              <div className="signal-card">
                <span>Price Action</span>
                <strong>Risk first. Entry second.</strong>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Your path to professional trading success</p>
            <h1>Master stock market trading in Kannada.</h1>
            <p className="hero-copy">
              Trading Kannada simplifies stock market, option buying, Bank Nifty analysis, and price action lessons for
              learners across Karnataka.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#course">
                Join Day Trading Course
              </a>
              <a className="button secondary" href="https://www.youtube.com/c/TRADINGKANNADA" target="_blank" rel="noreferrer">
                View YouTube Channel
              </a>
            </div>
            <div className="metrics" aria-label="Channel highlights">
              <div>
                <strong>76K+</strong>
                <span>YouTube subscribers</span>
              </div>
              <div>
                <strong>3.7M+</strong>
                <span>Video views</span>
              </div>
              <div>
                <strong>300+</strong>
                <span>Trading videos</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section split">
          <div>
            <p className="eyebrow">Who are we?</p>
            <h2>Kannada-first finance education for independent traders.</h2>
          </div>
          <div className="section-copy">
            <p>
              Trading Kannada is a finance education creator from Karnataka. The channel teaches trading in a simple,
              logical way so beginners can understand market structure, candlesticks, risk reward, and price action
              without language barriers.
            </p>
            <p>
              Learners can start with free YouTube lessons and continue with a structured day trading course for deeper
              concepts and guided learning.
            </p>
          </div>
        </section>

        <section className="section feature-band">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </section>

        <section id="videos" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Free YouTube learning</p>
              <h2>Popular lessons from the channel</h2>
            </div>
            <a href="https://www.youtube.com/c/TRADINGKANNADA" target="_blank" rel="noreferrer">
              Open channel
            </a>
          </div>

          <div className="video-grid">
            {videos.map((video) => (
              <a className="video-card" href={video.href} target="_blank" rel="noreferrer" key={video.href}>
                <img src={video.image} alt={video.alt} />
                <span>{video.category}</span>
                <h3>{video.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section id="course" className="section course-section">
          <div className="course-card">
            <div>
              <p className="eyebrow">Premium learning</p>
              <h2>Day Trading Course</h2>
              <p>
                A structured course for learners who want to go beyond basic YouTube lessons and understand advanced
                money-making concepts with discipline, strategy, and risk management.
              </p>
            </div>
            <ul>
              <li>Basic to advanced option trading in Kannada</li>
              <li>Price action and Bank Nifty focused examples</li>
              <li>Risk reward, stop-loss planning, and trade review</li>
              <li>Access through the Trading Kannada learning app</li>
            </ul>
            <div className="course-actions">
              <a className="button primary" href="https://www.tradingkannada.com/courses" target="_blank" rel="noreferrer">
                Explore Courses
              </a>
              <a className="button secondary" href="https://wa.me/918123827368" target="_blank" rel="noreferrer">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Start learning</p>
            <h2>Talk to Trading Kannada</h2>
            <p>For course details, app access, or learning guidance, connect directly through WhatsApp or email.</p>
          </div>
          <div className="contact-panel">
            <a href="tel:+918123827368">
              <span>Call / WhatsApp</span>
              <strong>8123827368</strong>
            </a>
            <a href="mailto:marketactionindia@gmail.com">
              <span>Email</span>
              <strong>marketactionindia@gmail.com</strong>
            </a>
            <a href="https://t.me/tradingkannadasharath" target="_blank" rel="noreferrer">
              <span>Telegram</span>
              <strong>@tradingkannadasharath</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Trading Kannada</p>
        <p>Educational content only. Trading involves market risk; learners should make independent decisions.</p>
      </footer>
    </>
  );
}
