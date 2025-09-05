import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Team from "./components/Team";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <HeroSection />
        <div id="features" className="features">
          <Features
            image="/public/images/icon-access-anywhere.svg"
            title="Access your files, anywhere"
            description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />
          <Features
            image="/public/images/icon-security.svg"
            title="Security you can trust"
            description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
          <Features
            image="/public/images/icon-collaboration.svg"
            title="Real-time collaboration"
            description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          />
          <Features
            image="/public/images/icon-any-file.svg"
            title="Store any type of file"
            description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          />
        </div>
        <Team />
      </main>
    </div>
  );
}

export default App;
