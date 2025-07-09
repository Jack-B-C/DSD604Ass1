import React from 'react';
import '../style.css';
import { useState, useEffect } from "react"; 
import { maoriPlaceNamesData } from '../assets/maoriPlaceNames.js';

function Game() {
  // State variables for game logic and UI
  const [places, setPlaces] = useState([]); // All place data
  const [currentPlace, setCurrentPlace] = useState(null); // Current question
  const [userGuess, setUserGuess] = useState(""); // User's current guess
  const [feedback, setFeedback] = useState(""); // Feedback message
  const [attempts, setAttempts] = useState(0); // Number of attempts for current question
  const [hint, setHint] = useState(""); // Hint for the user
  const [showLink, setShowLink] = useState(false); // Show external links after answer
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // Incorrect guesses for current question
  const [history, setHistory] = useState([]); // History of previous questions
  const [showHistory, setShowHistory] = useState(false); // Toggle for showing history

  // Select a new random place and reset state for new question
  const pickRandomPlace = () => {
    // Only add to history if the question was answered (correct or revealed)
    if (
      currentPlace &&
      (feedback.startsWith("✅") || feedback.includes("correct answer")) &&
      !history.some(h => h.meaning === currentPlace.Meaning && h.placename === currentPlace.Placename)
    ) {
      setHistory(prev => [
        ...prev,
        {
          meaning: currentPlace.Meaning,
          placename: currentPlace.Placename,
          userAnswer: userGuess,
          correct: userGuess === currentPlace.Placename,
          incorrectAnswers: [...incorrectAnswers]
        }
      ]);
    }
    // Pick a new random place
    const randomIndex = Math.floor(Math.random() * places.length);
    setCurrentPlace(places[randomIndex]);
    setUserGuess("");
    setFeedback("");
    setAttempts(0);
    setHint("");
    setShowLink(false);
    setIncorrectAnswers([]);
  };

  // Load place data on mount
  useEffect(() => {
    setPlaces(maoriPlaceNamesData);
    const randomIndex = Math.floor(Math.random() * maoriPlaceNamesData.length);
    setCurrentPlace(maoriPlaceNamesData[randomIndex]);
  }, []);

  // Handle answer submission
  const handleSubmit = () => {
    if (!userGuess) return;
    if (userGuess === currentPlace.Placename) {
      setFeedback("✅ Correct!");
      setShowLink(true);
      setHint("");
      // History is now only updated in pickRandomPlace
    } else {
      setIncorrectAnswers(prev => [...prev, userGuess]);
      if (attempts === 0) {
        // Show only the letter/length hint while guessing
        setHint(`Hint: The answer has ${currentPlace.Placename.length} letters and starts with '${currentPlace.Placename[0]}'.`);
        setFeedback("❌ Incorrect! Try again with the hint below.");
        setAttempts(1);
      } else {
        setFeedback(`❌ Incorrect! The correct answer is \"${currentPlace.Placename}\".`);
        setHint("");
        setShowLink(true);
        // History is now only updated in pickRandomPlace
      }
    }
  };

  // Generate external links for more info
  const getExternalLink = () => {
    if (!currentPlace) return null;
    // Wikipedia and Google Maps links
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(currentPlace.Placename)}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentPlace.Placename)}`;
    return (
      <>
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer">Learn more on Wikipedia</a>
        <br />
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </>
    );
  };

  return (
    <div className="quiz-container">
      <h2>Guess the Māori name for:</h2>
      {currentPlace ? (
        <>
          <p><strong>{currentPlace.Meaning}</strong></p>
          {/* Dropdown for user to select their guess */}
          <select
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            disabled={feedback.startsWith("✅") || feedback.includes("correct answer")}
          >
            <option value="">-- Choose a Māori name --</option>
            {places.map((place, index) => (
              <option key={index} value={place.Placename}>{place.Placename}</option>
            ))}
          </select>
          <br /><br />
          {/* Submit and Next buttons */}
          <button onClick={handleSubmit} disabled={feedback.startsWith("✅") || feedback.includes("correct answer")}>Submit</button>
          <button onClick={pickRandomPlace}>Next Question</button>
          {/* Feedback and hint */}
          {feedback && <p>{feedback}</p>}
          {/* Show hint only if it exists and not after correct answer */}
          {hint && !(feedback.startsWith("✅") || feedback.includes("correct answer")) && (
            <p style={{ color: '#0077cc', whiteSpace: 'pre-line' }}>{hint}</p>
          )}
          {/* Show word breakdown (Components) after answer is revealed or correct */}
          {(feedback.startsWith("✅") || feedback.includes("correct answer")) && currentPlace.Components && (
            <p style={{ color: '#0077cc', whiteSpace: 'pre-line' }}>
              <strong>Word breakdown:</strong> {currentPlace.Components}
            </p>
          )}
          {/* External links after answer */}
          {showLink && <div style={{ marginTop: '1em' }}>{getExternalLink()}</div>}
          {/* List incorrect answers for current question */}
          {incorrectAnswers.length > 0 && (
            <div style={{marginTop: '1em'}}>
              <strong>Incorrect answers:</strong>
              <ul style={{color: '#c00', paddingLeft: '1.2em', textAlign: 'left'}}>
                {incorrectAnswers.map((ans, idx) => (
                  <li key={idx}>{ans}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Subtle history toggle at the bottom */}
          <div style={{marginTop: '2em', textAlign: 'center'}}>
            <button
              onClick={() => setShowHistory(h => !h)}
              style={{
                background: 'none',
                color: '#0077cc',
                border: 'none',
                textDecoration: 'underline',
                fontSize: '1em',
                cursor: 'pointer',
                padding: 0,
                margin: 0
              }}
            >
              {showHistory ? 'Hide History' : 'Show History'}
            </button>
          </div>
          {/* History panel */}
          {showHistory && (
            <div style={{textAlign: 'left', margin: '1em 0', maxHeight: '200px', overflowY: 'auto', background: '#f9f9f9', borderRadius: '8px', padding: '0.5em'}}>
              <strong>History:</strong>
              <ul style={{paddingLeft: '1.2em'}}>
                {history.length === 0 && <li>No questions answered yet.</li>}
                {history.map((item, idx) => (
                  <li key={idx} style={{marginBottom: '0.5em'}}>
                    <span style={{fontWeight: 'bold'}}>{item.meaning}</span> — <span style={{color: '#0077cc'}}>{item.placename}</span><br/>
                    Your answer: <span style={{color: item.correct ? 'green' : 'red'}}>{item.userAnswer}</span><br/>
                    {item.incorrectAnswers.length > 0 && (
                      <span>Incorrect guesses: {item.incorrectAnswers.join(', ')}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Game;
