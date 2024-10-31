import React from "react";
import "./Tac.css";

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

const TacContent = () => {
  return (
    <>
      <section style={{ width: "100%", color: "#000" }}>
        <div className="tac_Content">
          <h2 className="font tac_mainHeading">
            Terms and Conditions
          </h2>
          <p className="tac_text mb-3">
            These Terms and Conditions (“Terms”) govern your use of the{" "}
            <strong className="font">Seleckt Staff</strong> recruitment platform
            (“the Service”). By accessing or using our website and mobile app,
            you agree to these Terms. If you do not agree, please do not use our
            Service.
          </p>
          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">1. Definitions</h4>

            <ul>
              <li className="font tac_list">
                {dot} <strong className="font">“Service”</strong> refers to the
                <strong className="font px-1 no-wrap">Seleckt Staff</strong> platform,
                including our website and mobile application.
              </li>
              <li className="font tac_list">
                {dot} <strong className="font">"User"</strong> refers to anyone
                who registers for or uses the Service, including employers and
                workers.
              </li>
              <li className="font tac_list">
                {dot} <strong className="font">"Employer"</strong> refers to a
                registered user seeking to post jobs and hire workers.
              </li>
              <li className="font tac_list">
                {dot} <strong className="font">"Worker"</strong> refers to a
                registered user seeking temporary or permanent employment
                opportunities.
              </li>
            </ul>
          </div>
          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">
              2. Acceptance of Terms
            </h4>

            <p className="tac_text">
              By using our Service, you confirm that you are at least 18 years
              old and have the legal capacity to enter into these Terms.
            </p>
          </div>
          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">3. User Accounts</h4>
            <h4 className="font tac_subHeading">3.1 Registration</h4>

            <p className="tac_text">
              To use certain features of our Service, you must create an account
              by providing accurate and complete information. You agree to keep
              your account information up-to-date.
            </p>

            <h4 className="font tac_subHeading">
              3.2 Account Security
            </h4>

            <p className="tac_text">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. Notify us immediately of any unauthorised use of your
              account.
            </p>

            <h4 className="font tac_subHeading">
              3.3 Account Termination
            </h4>

            <p className="tac_text">
              To use certain features of our Service, you must create an account
              by providing accurate and complete information. You agree to keep
              your account information up-to-date.
            </p>
          </div>
          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">4. Service Use</h4>

            <h4 className="font tac_subHeading">
              4.1 Responsibilities
            </h4>

            <p className="tac_text">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You will not:
            </p>

            <ul>
              <li className="tac_list">
                {dot} Submit false or misleading information.
              </li>
              <li className="tac_list">
                {dot} Harass, threaten, or defame any user.
              </li>
              <li className="tac_list">
                {dot} Interfere with or disrupt the Service or any server or
                network connected to the Service.
              </li>
              <li className="tac_list">
                {dot} Use automated means to access the Service without our
                express permission.
              </li>
            </ul>

            <h4 className="mt-4 font tac_subHeading">
              4.2 Job Postings and Applications
            </h4>

            <p className="tac_text">
              Employers are responsible for the accuracy and legality of job
              postings. Workers are responsible for the accuracy of their
              applications and profiles. We do not guarantee the availability of
              jobs or the suitability of candidates.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">5. Payment Terms</h4>

            <h4 className="font tac_subHeading">5.1 Fees</h4>

            <p className="tac_text">
              Some features of the Service may require payment. All fees are
              non-refundable unless otherwise stated.
            </p>

            <h4 className="font tac_subHeading">
              5.2 Payment Processing
            </h4>

            <p className="tac_text">
              Payments for services will be processed through our designated
              payment processors. By providing payment information, you
              authorise us to charge your chosen payment method.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">
              6. Intellectual Property
            </h4>

            <h4 className="font tac_subHeading">6.1 Ownership</h4>

            <p className="tac_text">
              All content, features, and functionality on the Service, including
              text, graphics, logos, and software, are owned by us or our
              licensors and are protected by intellectual property laws.
            </p>

            <h4 className="font tac_subHeading">
              6.2 Limited Licence
            </h4>

            <p className="tac_text">
              You are granted a limited, non-exclusive, non-transferable licence
              to access and use the Service for personal and non-commercial
              purposes.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">
              7. Disclaimer of Warranties
            </h4>

            <p className="tac_text">
              The Service is provided “as is” and “as available” without
              warranties of any kind, either express or implied. We do not
              guarantee that the Service will be uninterrupted, error-free, or
              free of viruses or other harmful components.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">
              8. Limitation of Liability
            </h4>

            <p className="tac_text">
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Service, even if we have been
              advised of the possibility of such damages.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">9. Indemnification</h4>

            <p className="tac_text">
              You agree to indemnify, defend, and hold harmless{" "}
              <strong className="font">Seleckt Staff</strong>, its affiliates,
              and their respective officers, directors, employees, and agents
              from any claims, damages, losses, liabilities, costs, or expenses
              (including reasonable attorneys' fees) arising from your use of
              the Service or your violation of these Terms.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">10. Governing Law</h4>

            <p className="tac_text">
              These Terms shall be governed by and construed in accordance with
              the laws of The United Kingdom, without regard to its conflict of
              law principles.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <h4 className="font tac_heading">11. Changes to Terms</h4>

            <p className="tac_text">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the updated Terms on the
              Service. Your continued use of the Service after such changes
              constitutes your acceptance of the new Terms.
            </p>

            <p className="tac_text">
              By using <strong className="font">Seleckt Staff</strong>, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TacContent;
