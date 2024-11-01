import React from "react";
import "./AntiSlavery.css";

const dot = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 15 15"
  >
    <path
      fill="currentColor"
      d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
    />
  </svg>
);

const AntiSlaveryContent = () => {
  return (
    <>
      <section style={{ width: "100%" }}>
        <div className="anitSlavery_Content">
          <h2 className="font anitSlavery_mainHeading">
            Anti-Slavery and Human Trafficking Statement
          </h2>

          <p className="anitSlavery_text">
            At <strong className="font">Seleckt Staff</strong>, we are committed to <strong className="font">eradicating modern slavery, forced labour, and human trafficking</strong> within all areas of our business and partnerships. As a recruitment platform, we understand that the nature of recruitment brings unique risks, and we take our responsibility seriously to ensure the safety and well-being of all individuals involved in our services.
          </p>

          <p className="divider"></p>

          {/* Core Principles Section */}
          <div className="box">
            <h4 className="font anitSlavery_heading">2. Our Core Principles and Values</h4>
            <ul>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span style={{ height: '25px' }}>{dot}</span><p className="mb-0"><strong className="font">Respect for Human Rights:</strong> We believe in the fundamental right to work freely without coercion, exploitation, or abuse.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span>{dot}</span><p className="mb-0"><strong className="font">Ethical Recruitment Practices:</strong> We partner only with employers and suppliers who meet strict ethical standards.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start align-items-start">
                <span>{dot}</span><p className="mb-0"><strong className="font">Transparency and Accountability:</strong> All interactions with job seekers, employees, and partners are carried out with the highest level of transparency.</p>
              </li>
            </ul>
          </div>

          <p className="divider"></p>

          {/* Policies and Procedures Section */}
          <div className="box">
            <h4 className="font anitSlavery_heading">3. Policies and Procedures to Combat Modern Slavery</h4>
            <ul>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Supplier and Partner Audits:</strong> We conduct regular checks to ensure our suppliers and business clients adhere to anti-slavery practices. This includes a strict no-fee policy, ensuring candidates are not charged for finding employment.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Contractual Agreements:</strong> All contracts include clear clauses prohibiting any form of modern slavery or trafficking. Non-compliance may result in the immediate termination of business relationships.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Due Diligence Measures:</strong> We monitor high-risk industries and countries where recruitment could pose a heightened risk of forced labour, and we avoid partnerships that do not meet ethical standards.</p>
              </li>
            </ul>
          </div>

          <p className="divider"></p>

          {/* Ongoing Commitment Section */}
          <div className="box">
            <h4 className="font anitSlavery_heading">4. Ongoing Commitment to Awareness and Improvement</h4>
            <ul>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Training and Education:</strong> Our employees and partners receive <strong className="font">regular training</strong> to identify and report signs of forced labour or trafficking in recruitment processes.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Whistle-blower Protection:</strong> We provide secure and confidential channels for reporting unethical behaviour. Reports are treated with urgency, and whistle-blowers are protected from retaliation.</p>
              </li>
              <li className="font anitSlavery_list d-flex justify-content-start">
                <span> {dot}</span><p className="mb-0"><strong className="font">Continuous Improvement:</strong> We regularly review our processes and policies to enhance our ability to detect and prevent exploitation. This includes staying updated with evolving legislation, such as the <strong className="font">UK Modern Slavery Act 2015</strong>.</p>
              </li>
            </ul>
          </div>

          <p className="divider"></p>  

          {/* Impact and Goals Section */}
          <div className="box">
            <h4 className="font anitSlavery_heading">5. Our Impact and Goals for the Future</h4>
            <p className="anitSlavery_text">
              We aim to build a recruitment ecosystem that not only provides employment opportunities but also fosters <strong className="font">dignity and fair treatment for all workers</strong>. We are committed to the long-term goal of eliminating forced labour and trafficking from the labour market. Through ongoing collaboration with stakeholders, clients, and advocacy organisations, we strive to make a measurable impact in the fight against modern slavery.
            </p>
            <p className="anitSlavery_text">
              By choosing <strong className="font">Seleckt Staff</strong>, you are working with a company that prioritises <strong className="font">human rights, ethical employment, and social responsibility</strong>. We believe that <strong className="font">together, we can make the future of work fairer, safer, and free from exploitation.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AntiSlaveryContent;
