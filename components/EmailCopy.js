"use client"; // This tells Next.js that this component is a client-side component

import React from "react";

const EmailCopy = ({ email }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard!");
    });
  };

  return (
    <p className="cursor-pointer" onClick={handleCopy}>
      {email}
    </p>
  );
};

export default EmailCopy;
