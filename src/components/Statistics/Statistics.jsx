import { StatList, TotalFeed, PositiveFeed } from './Statistics.styled';
export default function Statistics({
  good,
  neutral,
  bad,
  feedback,
  total,
  positivePercentage,
}) {
  return (
    <StatList>
      <li>
        <p>👍🏻 Good: {good}</p>
      </li>
      <li>
        <p>👉🏻 Neutral: {neutral}</p>
      </li>
      <li>
        <p>👎🏻 Bad: {bad}</p>
      </li>
      <li>
        <TotalFeed>Total: {total(feedback)} </TotalFeed>
      </li>
      <li>
        <PositiveFeed>
          Positive feedbacks: &nbsp;
          {positivePercentage(good)}
        </PositiveFeed>
      </li>
    </StatList>
  );
}
