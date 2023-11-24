import { useState } from 'react';
import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import NotificationMessage from '../NotificationMessage';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackObj = { good, neutral, bad };
  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = e => {
    const { name } = e.target;

    // setFeedback(prevState => ({ ...feedback, [name]: prevState[name] + 1 }));

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = good => {
    const total = countTotalFeedback(feedbackObj);
    return total ? `${Math.ceil((good / total) * 100)}%` : total;
  };

  const countTotalFeedback = feeds => {
    return Object.values(feeds).reduce((acc, feed) => acc + feed, 0);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          // options={Object.keys(feedback)}
          options={Object.keys(feedbackObj)}
          onLeaveFeedback={addFeedback}
          smiles={['😁', '😐', '😒']}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback(feedbackObj) ? (
          <NotificationMessage message=" There is no feedback! 🤷🏻‍♀️" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            feedback={feedbackObj}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
}
