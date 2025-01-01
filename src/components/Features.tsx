"use client"
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black pb-10 text-white">
      <div className="container">
        <h1 className="text-center font-bold text-5xl tracking-tighter">Everything you need</h1>
        <p className="text-center mx-auto mt-5 text-xl text-white/70 max-w-xl">
          Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
        </p>
        <div className="mt-16 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          {features.map(({title, description}) => (
            <FeatureCard title={title} description={description} key={title}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
