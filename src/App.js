import "./index.css";
import image12 from "./image 12.jpg";
import M1 from "./M1.png";
import M2 from "./M2.png";
import M3 from "./M3.png";
import M4 from "./M4.png";
import imagesvg from "./imagesvg.svg";
import memory from "./memory.svg";
import interruption from "./interruption.svg";
import conversational from "./conversational.svg";

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    let index = 0;
    const items = document.querySelectorAll(".salesCallItem");
    const changeText = () => {
      items.forEach((item) => item.classList.remove("visible"));
      items[index].classList.add("visible");
      index = (index + 1) % items.length;
    };
    const interval = setInterval(changeText, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="top-bar">
          <span>
            We are still in beta mode. The demo call is highly tuned for
            Toingg's help desk and when you make a call with us with Toingg you
            are agreeing all the T&C's by default.
          </span>
        </div>
        <div className="nav-bar">
          <h1 className="logo">Toingg</h1>
          <nav>
            <ul>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#documentation">Documentation</a>
              </li>
              <li>
                <a href="#community">Join our community</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section className="intro">
          <h2>Build AI Calling Agent that can do</h2>
          <div className="salesCall" id="ChangingText">
            <b>
              <span className="salesCallItem visible">Lead Generation</span>
              <span className="salesCallItem">Sales Call</span>
              <span className="salesCallItem">Recruitment</span>
              <span className="salesCallItem">B2B Data Collection</span>
              <span className="salesCallItem">Fund Raising</span>
              <span className="salesCallItem">Political Campaigning</span>
              <span className="salesCallItem">Appointment Booking</span>
              <span className="salesCallItem">Interview Scheduling</span>
              <span className="salesCallItem">Market Surveys</span>
              <span className="salesCallItem">Upselling & Cross-selling</span>
              <span className="salesCallItem">Payment Reminders</span>
              <span className="salesCallItem">
                Customer Feedback Collection
              </span>
              <span className="salesCallItem">Property Listing Handling</span>
              <span className="salesCallItem">Brand Promotion</span>
              <span className="salesCallItem">Resolve Customer Complaints</span>
              <span className="salesCallItem">EVERYTHING</span>
            </b>
          </div>
          <div className="buttons">
            <button className="cta-button primary">
              Build your own voice agent ‘Coming soon!’
            </button>
            <button className="cta-button secondary">Hear it in action</button>
          </div>
        </section>
        <section className="try-now">
          <h2>Try now</h2>
          <p>Get a call from Toingg</p>
          <form>
            <input type="text" placeholder="Name" />

            <input type="text" placeholder="Phone" />
            <select>
              <option>Choose your language</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
            <div>
              <button type="submit" className="call-button">
                📞
              </button>
            </div>
          </form>
        </section>
      </main>
      <section className="integration">
        <p>Automate your Agent with 5000+ integrations like</p>
        <div className="icons">
          <img src={M1} alt="" />
          <img src={M2} alt="" />
          <img src={M3} alt="" />
          <img src={M4} alt="" />
        </div>
      </section>
      <section className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <h1>Easy ways to Toingg</h1>
      <section className="easy-ways">
        <div className="gpt-store">
          <p>
            Just chat and Call with our Toingg GPT, you can make single as well
            as batch calls. Use the power of GPT, play with sentiment analysis
            of the call, you can even export call logs to CSV if you know how to
            use it.
          </p>
          <button className="see-more">See more</button>
        </div>
        <div className="video-container">
          <img src={image12} alt="image12"></img>
        </div>
      </section>

      <section className="easy-ways">
        <div className="gpt-store">
          <p>
            Just chat and Call with our Toingg GPT, you can make single as well
            as batch calls. Use the power of GPT, play with sentiment analysis
            of the call, you can even export call logs to CSV if you know how to
            use it.
          </p>
          <button className="see-more">See more</button>
        </div>
        <div className="video-container">
          <img src={image12} alt="image12"></img>
        </div>
      </section>

      <div className="Programh1">
        <h2>Program phone agents to automate any task</h2>
      </div>
      <section className="features">
        <div className="feature">
          <img src={conversational} alt="" />
          <h3>Ultra-Fast Response</h3>
          <p>
            Experience lightning-quick interactions with an impressive 500 ms
            response time, ensuring seamless conversations.
          </p>
        </div>
        <div className="feature">
          <img src={interruption} alt="" />
          <h3>Smart Interruption Management</h3>
          <p>
            Our system adeptly handles interruptions, ensuring smooth, natural
            dialogues just like human conversations
          </p>
        </div>
        <div className="feature">
          <img src={memory} alt="" />
          <h3>Advanced Memory Recall</h3>
          <p>
            Remembering context and details from earlier in the conversation,
            our AI provides a personalized and coherent interaction.
          </p>
        </div>
        <div className="feature">
          <img src={imagesvg} alt="" />
          <h3>Dynamic Conversational Flows</h3>
          <p>
            Navigate through complex conversations with ease, thanks to our AI's
            ability to understand and adapt to various conversational pathways.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9bb1f32f0ee6f4a90c4d0b4631b5e6f3e9d013bcf6bd1a004459f759cb2fe?apiKey=4f9ab024be65425d98b6f0dcbd459477&amp;"
            alt=""
          />
          <h3>Custom AI Solutions</h3>
          <p>
            Leverage our proprietary AI models tailored to your specific
            business needs for unparalleled efficiency and effectiveness.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f904e78a506d435ed42f76be30f6b2b24e29becc1de59f5022e87e30bcb3b5?apiKey=4f9ab024be65425d98b6f0dcbd459477&amp;"
            alt=""
          />
          <h3>Scalability at Your Fingertips</h3>
          <p>
            From one-on-one conversations to managing 10,000 concurrent calls,
            our platform scales effortlessly with your business.
          </p>
        </div>
      </section>

      <div className="call-elevation-container">
        <h1 className="call-elevation-title">
          Elevate Your Calls With AI Precision And Enterprise Power
        </h1>
        <div className="call-elevation-features">
          <div className="cell-feature">
            <img
              src="https://c.animaapp.com/CnZn5oX7/img/tune@2x.png"
              alt="Fine tuning"
              className="feature-image"
            />
            <h2 className="feature-title1">Fine tuning</h2>
            <p className="feature-description">
              Elevate Your Agent Interactions With Our Fine-tuning Technique,
              Not only LLM wights but Prompts and parameters too.
            </p>
          </div>
          <div className="cell-feature">
            <img
              src="https://c.animaapp.com/CnZn5oX7/img/tools@2x.png"
              alt="Custom tools"
              className="feature-image"
            />
            <h2 className="feature-title">Custom tools</h2>
            <p className="feature-description">
              Enhanced Agent Capabilities: Instantly access customer history,
              integrate databases, and connect to APIs during calls. Simplify
              tasks like scheduling and data handling, all while leveraging past
              call insights for smarter interactions.
            </p>
          </div>
          <div className="cell-feature">
            <img
              src="https://c.animaapp.com/CnZn5oX7/img/voice@2x.png"
              alt="Dedicated infrastructure"
              className="feature-image"
            />
            <h2 className="feature-title">Dedicated infrastructure</h2>
            <p className="feature-description">
              Experience unmatched scalability and reliability with our
              dedicated Kubernetes clusters, designed for high availability to
              support up to 10,000 concurrent calls. Enjoy exclusive server
              access, bypassing standard rate limits, complemented by our 24/7
              expert support.
            </p>
          </div>
        </div>
      </div>

      <div className="security-container">
        <div className="security-item">
          <img
            src="https://c.animaapp.com/coXYt0uv/img/security-shield@2x.png"
            alt="Security"
            id="shield"
            className="security-image"
          />
          <div className="security-content">
            <span className="security-title">Unwavering Safety & Security</span>
            <p className="security-description">
              With robust internal audits and stringent data governance, we
              champion the ethical use of AI, ensuring technology serves
              humanity's best interests. Our commitment sets the foundation for
              Advanced General Intelligence (AGI) with integrity.
            </p>
          </div>
        </div>
        <div className="security-item">
          <ul className="security-list">
            <li className="security-list-item">
              <img
                src="https://c.animaapp.com/coXYt0uv/img/scales@2x.png"
                id="rate"
                alt="Rate Limits"
                className="security-icon"
              />
              <span className="security-text">Call Monitoring</span>
            </li>
            <li className="security-list-item">
              <img
                src="https://c.animaapp.com/coXYt0uv/img/scales@2x.png"
                id="rate"
                alt="Rate Limits"
                className="security-icon"
              />
              <span className="security-text">Prompt Injection</span>
            </li>
            <li className="security-list-item">
              <img
                src="https://c.animaapp.com/coXYt0uv/img/scales@2x.png"
                id="rate"
                alt="Rate Limits"
                className="security-icon3"
              />
              <span className="security-text">Rate Limits</span>
            </li>
            <li className="security-list-item">
              <img
                src="https://c.animaapp.com/coXYt0uv/img/analyze@2x.png"
                id="audit"
                alt="Internal Hard Audits"
                className="security-icon"
              />
              <span className="security-text">Internal Hard Audits</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="faq-container">
        <div className="faq-inner">
          <h2 className="faq-title">Frequently asked questions</h2>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">What is Toingg?</h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                Why is Toingg better than others?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                Does Toingg support your existing database?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                How does Toingg ensure security?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                How does Toingg address Enterprise solutions?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                Does Toingg support your own proprietary LLM model?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">
                What is Toingg’s pricing model?
              </h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3 className="faq-question-text">How can I contact Toingg?</h3>
              <span className="faq-toggle">+</span>
            </div>
          </div>
        </div>
      </section>

      <div className="frame">
        <div className="rectangle"></div>
        <div
          className="text-wrapper"
          style={{ fontSize: "40px", fontWeight: 700 }}
        >
          TOINGG
        </div>
        <p className="div">
          We are here to grow your business
          <span style={{ color: "red" }}> ❤</span>
        </p>
        <div className="links">
          <a
            href="https://call.toingg.com/html/termsofservice.html"
            className="link"
          >
            Terms and conditions
          </a>
          <a
            href="https://call.toingg.com/html/privacypolicy.html"
            className="link"
          >
            Privacy policy
          </a>
          <a
            href="https://call.toingg.com/html/customerSupport.html"
            className="link"
          >
            Contact
          </a>
          <a href="https://call.toingg.com/docs/intro" className="link">
            API docs
          </a>
          <a
            href="https://call.toingg.com/html/cancellation.html"
            className="link"
          >
            Refund Policy
          </a>
        </div>
        <div
          className="botto-row"
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div className="copyright">
            Copyright © 2024 Toingg, All rights reserved.
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/toingg_ai?igsh=bTYyM2J4bG1iYW5j"
              className="social-icon"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="https://discord.gg/ghsS3z9N" className="social-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/Toingg"
              className="social-icon"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/Toingg_AI" className="social-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </a>
            <a href="http://www.youtube.com/@Toingg-AI" className="social-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
