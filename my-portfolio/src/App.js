// Portfolio Website using React + Tailwind CSS

import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Sai Ganesh Grandhi</h1>
        <p className="text-sm">AI/ML & IAM | University of Windsor Graduate</p>
      </header>

      {/* About Me */}
      <section className="p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a passionate computer science graduate with experience in AI/ML and IAM (CyberArk, SSO, PAM). I love building intelligent systems and contributing to digital security solutions.
        </p>
      </section>

      {/* Projects */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>DharmaBot</strong>: A chatbot using LangChain & Buddhist teachings (Mistral, LLaMA-3, RAG).
          </li>
          <li>
            <strong>Eye Tracking ML</strong>: Trained deep learning models on VREED dataset for user authentication.
          </li>
          <li>
            <strong>IAM Automation Tool</strong>: Python-based tool for user access provisioning using Active Directory.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul>
          <li>
            <strong>University of Windsor</strong> — M.Sc. in Computer Science (2024)
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul>
          <li>
            <strong>IT Security Analyst</strong> at Healthcare Org — Focused on CyberArk, Centrify, and RBAC.
          </li>
          <li>
            Migrated over 1000 UNIX/Linux servers to domain-based authentication.
          </li>
        </ul>
      </section>

      {/* Publications */}
      <section className="p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
        <ul>
          <li>
            "Continuous Authentication in VR using Eye Tracking" — Under review (IEEE VR 2025)
          </li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="text-center p-6 bg-blue-800 text-white mt-8">
        <p>📧 ggrandhi98@gmail.com | 🔗 <a href="https://www.linkedin.com/in/saiganeshgrandhi/" className="underline">LinkedIn</a> | 🐙 <a href="https://github.com/gsg0618" className="underline">GitHub</a></p>
      </footer>
    </div>
  );
}
