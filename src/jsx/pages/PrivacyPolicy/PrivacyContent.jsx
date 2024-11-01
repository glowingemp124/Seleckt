import React from "react";
import "./PrivacyPolicy.css";

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

const PrivacyContent = () => {
  return (
    <>
      <section style={{ width: "100%" }}>
        <div className="privacyPolicy_Content">
          <h2 className="font privacyPolicy_mainHeading">
            Website and App Use, Privacy, and Cookies Policy
          </h2>
          <p className="privacyPolicy_text">
            Welcome to <strong className="font">Seleckt Staff</strong>. This
            policy outlines the terms governing your use of our{" "}
            <strong className="font">website and mobile app</strong>, how we
            handle your
            <strong className="font">data</strong>, and how we use{" "}
            <strong className="font">cookies</strong> to enhance your
            experience. You agree to these terms and conditions by accessing or
            using our platform.
          </p>
          <p className="divider"></p>

          {/* 1. Website and App Use Policy */}
          <div className="box">
            <h4 className="font privacyPolicy_heading">
              1. Website and App Use Policy
            </h4>

            <p className="privacyPolicy_text">
              This section explains the rules for using our platform as an <strong className="font">employer</strong> or <strong className="font">worker</strong>.
            </p>

            <h4 className="font privacyPolicy_subHeading">
              1.1 User Eligibility
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} You must be <strong className="font">18 years or older</strong> to create an account.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Workers must provide valid <strong className="font">Right to Work documents</strong> during
                registration.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              1.2 Account Responsibilities
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} You are responsible for maintaining the confidentiality of
                your login credentials.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Notify us immediately if you suspect unauthorized use of
                your account.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Users must provide <strong className="font">accurate and up-to-date information</strong>
                during registration.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              1.3 Prohibited Activities
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} Submit false or misleading information.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Use the platform for unlawful purposes, including fraud or
                harassment.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Interfere with or disrupt the platform’s functionality.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Upload or distribute viruses or harmful code.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              1.4 Termination of Use
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} We reserve the right to suspend or terminate your account
                if you violate these terms or engage in activities that harm
                other users or the platform.
              </li>
            </ul>
          </div>
          <p className="divider"></p>

          {/* 2. Privacy Policy */}
          <div className="box">
            <h4 className="font privacyPolicy_heading">2. Privacy Policy</h4>

            <p className="privacyPolicy_text">
              This section explains how we collect, use, and protect your personal information in compliance with <strong className="font">GDPR</strong> and other relevant data protection laws.
            </p>

            <h4 className="font privacyPolicy_subHeading">
              2.1 Information We Collect
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Worker:</strong> Name, contact details, work experience,
                right-to-work documents, bank account information, and location
                data (for check-in/out).
              </li>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Employers:</strong> Company details, contact information, and job
                postings.
              </li>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Automatically Collected:</strong> Device information, IP address,
                and app usage analytics.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              2.2 How We Use Your Data
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} Match workers with suitable jobs and employers.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Facilitate <strong className="font">check-in/out</strong> and location-based attendance
                tracking.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Process payments to workers.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Provide <strong className="font">customer support</strong> and manage communication between
                users.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Improve the app's performance and user experience.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              2.3 Sharing Your Data
            </h4>
            <p className="privacyPolicy_text">
              We only share your information with:
            </p>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} We only share your information with employers or workers
                as needed to facilitate job matches.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Payment processors to handle transactions.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Service providers (e.g., hosting, analytics) who support
                our platform.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Legal authorities, if required by law.
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">2.4 Your Rights</h4>
            <p className="privacyPolicy_text">
              You have the right to:
            </p>

            <ul>
              <li className="font privacyPolicy_list">
                {dot} Access and update your personal information.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Request deletion of your data (subject to legal
                obligations).
              </li>
              <li className="font privacyPolicy_list">
                {dot} Object to certain types of data processing.
              </li>
              <li className="font privacyPolicy_list">
                {dot} Receive your data in a portable format.
              </li>
            </ul>
          </div>
          <p className="divider"></p>

          {/* 3. Cookies Policy */}
          <div className="box">
            <h4 className="font privacyPolicy_heading">3. Cookies Policy</h4>

            <p className="privacyPolicy_text">
              Our website and app use cookies to personalise your experience and analyse usage. Cookies are small files stored on your device that help us improve our services.
            </p>

            <h4 className="font privacyPolicy_subHeading">
              3.1 Types of Cookies We Use
            </h4>
            <ul>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Essential Cookies:</strong> Required for the platform to function
                correctly (e.g., login authentication).
              </li>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Performance Cookies:</strong> Collect data on how users interact
                with the platform to improve performance.
              </li>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Functionality Cookies:</strong> Remember user preferences to
                enhance the user experience.
              </li>
              <li className="font privacyPolicy_list">
                {dot} <strong className="font">Analytics Cookies:</strong> Track user behaviour for analytical
                purposes (e.g., Google Analytics).
              </li>
            </ul>

            <h4 className="font privacyPolicy_subHeading">
              3.2 Managing Cookies
            </h4>
            <p className="privacyPolicy_text">
              You can control cookies through your browser settings. However,
              disabling certain cookies may affect your ability to use some
              features of the platform.
            </p>
          </div>
          <p className="divider"></p>

          {/* 4. Data Security */}
          <div className="box">
            <h4 className="font privacyPolicy_heading">4. Data Security</h4>
            <p className="privacyPolicy_text">
              We implement technical and organisational measures to protect your
              data from unauthorised access, loss, or misuse. This includes
              <strong className="font">encryption, secure servers</strong>, and regular security audits.
            </p>
          </div>
          <p className="divider"></p>

          {/* 5. Changes to This Policy */}
          <div className="box">
            <h4 className="font privacyPolicy_heading">
              5. Changes to This Policy
            </h4>
            <p className="privacyPolicy_text">
              We may update this policy from time to time to reflect changes in
              our services or legal requirements. Users will be notified of any
              significant changes through the platform or via email. Please
              review this policy periodically.
            </p>
          </div>

          <p className="divider"></p>

          <div className="box">
            <p className="privacyPolicy_text">
              By using our website and app, you agree to this{" "}
              <strong className="font">Website and App Use, Privacy, and Cookies Policy</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
