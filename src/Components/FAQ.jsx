import React, { useState } from "react";

const questions = [
  {
    question: "Can I use two devices at the same time on one connection?",
    answer:
      "With 1 connection you can use multiple devices with multiple view, but in order to avoid buffering you must use only 1 connection at the same time.",
  },
  {
    question: "What kind of devices do you support?",
    answer:
      "We support all kind of devices such as:  Android Smart Phone, Android Boxes, PC, Smart TV.....",
  },
  {
    question: "How can I renew my subscription?",
    answer:
      "You can renew easily just choose package and buy with the same email used in the purchase to be renewed",
  },
  {
    question: "Sometimes when I watch my iptv keeps buffering?",
    answer:
      "Sometimes you may experience buffering due to low internet speed or high internet traffic . If you experience buffering press “pause” for 10-15 seconds and resume, most of the time that will eliminate or reduce the buffer.",
  },
];

function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div id="faq" className="faq-container">
      <div className="faq">
        <div className="faq-widget">
          <div className="maintitle">
            <h1>Frequently Asked Questions:</h1>
            <br />
          </div>
          <div className="faq-section">
            {questions.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <span>{selected === i ? "-" : "+"}</span>
                  <h2>{item.question}</h2>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
                <br />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
