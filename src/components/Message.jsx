// src/components/Message.js

import "/src/styles/Message.css";

const Message = () => {
  const quotes = [
    {
      image: "src/assets/quote-1.jpg", // Replace with your actual image URLs
      text: "Empowered women empower the world. Keep shining and believing in yourself.",
    },
    {
      image: "src/assets/quote-2.jpg",
      text: "You are capable of achieving anything you set your mind to.",
    },
    {
      image: "src/assets/quote-3.jpg",
      text: "The best way to predict the future is to create it.",
    },
    {
      image: "src/assets/quote-4.jpg",
      text: "Your journey is unique, and so is your power.",
    },
    {
      image: "src/assets/quote-5.jpg",
      text: "Believe in yourself and all that you are.",
    },
    {
      image: "src/assets/quote-6.jpg",
      text: "You are stronger than you think, braver than you believe.",
    }
  ];

  return (
    <div className="message-page">
    <div className="message-container">
      <h1>You Are Amazing!</h1>
      <div className="quote-blocks-container">
        {quotes.map((quote, index) => (
          <div className="quote-block" key={index}>
            <div className="quote-image-container">
              <img
                src={quote.image}
                alt={`Quote ${index + 1}`}
                className="quote-image"
              />
            </div>
            <div className="quote-text-container">
              <p className="quote-text">
                {quote.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Message;
