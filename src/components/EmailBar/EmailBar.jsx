import "./EmailBar.css";
import { useState } from "react";

const EmailBar = () => {
  const email = "joao.santos.2007sp@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div orientation="right" className="emailBar">
      <div className="emailBar__text">
        <button
          type="button"
          className="emailBar__link"
          onClick={copyEmail}
          aria-label={
            copied
              ? "Email copied to clipboard"
              : `Copy email address: ${email}`
          }
          title="Copy email address"
        >
          {copied ? "Copied!" : email}
        </button>
      </div>
    </div>
  );
};

export default EmailBar;
