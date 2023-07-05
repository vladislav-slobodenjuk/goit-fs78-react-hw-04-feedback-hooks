import { useState } from 'react';

import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import '../../index.css';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;

  const handleClick = ({ target: { name: option } }) => {
    // const option = e.target.name;
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good * 100) / (good + neutral + bad) || 0;
    return Math.round(positivePercentage * 100) / 100;
  };

  const totalFeedback = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={percentage}
          />
        )}
      </Section>
    </Container>
  );
  // }
};
