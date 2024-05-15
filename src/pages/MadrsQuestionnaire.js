import React, { useState } from 'react';

export const MadrsQuestionnaire = () => {
  const [responses, setResponses] = useState(Array(10).fill(0)); // Array to store user responses
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  const handleResponseChange = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  const calculateTotalScore = () => {
    return responses.reduce((total, response) => total + response, 0);
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulate API call or calculation delay
    setTimeout(() => {
      setLoading(false);
      setScore(calculateTotalScore());
    }, 2000); // Simulating 2 seconds delay
  };

  const renderQuestion = (index, question, description, options) => {
    return (
      <div key={index} style={{ marginBottom: '30px', cursor: 'pointer' }} onClick={() => handleResponseChange(index, -1)}>
        <h3 style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>{question}</h3>
        <p style={{ marginBottom: '10px', fontSize: '1rem' }}>{description}</p>
        {options.map((option, i) => (
          <div key={i} style={{ marginBottom: '5px' }}>
            <input
              type="radio"
              id={`option${i}`}
              name={`question${index}`}
              value={i}
              onChange={() => handleResponseChange(index, i)}
              checked={responses[index] === i}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor={`option${i}`} style={{ fontSize: '0.9rem' }}>{option}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ overflow: 'auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <div style={{ width: '60%', margin: '0 auto' }} className="text-start">
        <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>MADRS Questionnaire</h2>
        {renderQuestion(0, '1. Apparent Sadness', 'Representing despondency, gloom and despair, (more than just ordinary transient low spirits) reflected in speech, facial expression, and posture. Rate by depth and inability to brighten up.', [
          'No sadness',
          'Looks dispirited but does brighten up without difficulty',
          'Appears sad and unhappy most of the time',
          'Looks miserable all the time. Extremely despondent'
        ])}
        {renderQuestion(1, '2. Reported Sadness', 'Representing reports of depressed mood, regardless of whether it is reflected in appearance or not. Includes low spirits, despondency or the feeling of being beyond help and without hope. Rate according to intensity, duration and the extent to which the mood is reported to be influenced by events.', [
          'Occasional sadness in keeping with the circumstances',
          'Sad or low but brightens up without difficulty',
          'Pervasive feelings of sadness or gloominess. The mood is still influenced by external circumstances',
          'Continuous or unvarying sadness, misery or despondency'
        ])}
        {renderQuestion(2, '3. Inner Tension', 'Representing feelings of ill-defined discomfort, edginess, inner turmoil, mental tension mounting to either panic, dread or anguish. Rate according to intensity, frequency, duration and the extent of reassurance called for.', [
          'Placid. Only fleeting inner tension',
          'Occasional feelings of edginess and ill-defined discomfort',
          'Continuous feelings of inner tension or intermittent panic which the patient can only master with some difficulty',
          'Unrelenting dread or anguish. Overwhelming panic'
        ])}
        {renderQuestion(3, '4. Reduced Sleep', 'Representing the experience of reduced duration or depth of sleep compared to the subject\'s own normal pattern when well.', [
          'Sleeps as usual',
          'Slight difficulty dropping off to sleep or slightly reduced, light or fitful sleep',
          'Sleep reduced or broken by at least two hours',
          'Less than two or three hours sleep'
        ])}
        {renderQuestion(4, '5. Reduced Appetite', 'Representing the feeling of a loss of appetite compared with when well. Rate by loss of desire for food or the need to force oneself to eat.', [
          'Normal or increased appetite',
          'Slightly reduced appetite',
          'No appetite. Food is tasteless',
          'Needs persuasion to eat at all'
        ])}
        {renderQuestion(5, '6. Concentration Difficulties', 'Representing difficulties in collecting one\'s thoughts mounting to incapacitating lack of concentration. Rate according to intensity, frequency, and degree of incapacity produced.', [
          'No difficulties in concentrating',
          'Occasional difficulties in collecting one\'s thoughts',
          'Difficulties in concentrating and sustaining thought which reduces ability to read or hold a conversation',
          'Unable to read or converse without great difficulty'
        ])}
        {renderQuestion(6, '7. Lassitude', 'Representing a difficulty getting started or slowness initiating and performing everyday activities.', [
          'Hardly any difficulty in getting started. No sluggishness',
          'Difficulties in starting activities',
          'Difficulties in starting simple routine activities which are carried out with effort',
          'Complete lassitude. Unable to do anything without help'
        ])}
        {renderQuestion(7, '8. Inability to Feel', 'Representing the subjective experience of reduced interest in the surroundings, or activities that normally give pleasure. The ability to react with adequate emotion to circumstances or people is reduced.', [
          'Normal interest in the surroundings and in other people',
          'Reduced ability to enjoy usual interests',
          'Loss of interest in the surroundings. Loss of feelings or friends and acquaintances',
          'The experience of being emotionally paralysed, inability to feel anger, grief or pleasure and a complete or even painful failure to feel for close relatives and friends'
        ])}
        {renderQuestion(8, '9. Pessimistic Thoughts', 'Representing thoughts of guilt, inferiority, self-reproach, sinfulness, remorse and ruin.', [
          'No pessimistic thoughts',
          'Fluctuating ideas of failure, self-reproach or self-depreciation',
          'Persistent self-accusations, or definite but still rational ideas of guilt or sin. Increasingly pessimistic about the future',
          'Delusions of ruin, remorse or unredeemable sin. Self-accusations which are absurd and unshakable'
        ])}
        {renderQuestion(9, '10. Suicidal Thoughts', 'Representing the feeling that life is not worth living, that a natural death would be welcome, suicidal thoughts, and preparations for suicide.', [
          'Enjoys life or takes it as it comes',
          'Weary of life. Only fleeting suicidal thoughts',
          'Probably better off dead. Suicidal thoughts are common, and suicide is considered as a possible solution, but without specific plans or intention',
          'Explicit plans for suicide when there is an opportunity. Active preparation for suicide'
        ])}
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }} onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {score !== null && (
          <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '5px', width: '200px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#4CAF50', height: '20px', width: `${(score / 30) * 100}%`, borderRadius: '5px' }}></div>
            <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>{`${score} / 30`}</p>
          </div>
        )}
      </div>
    </div>
  );
};


