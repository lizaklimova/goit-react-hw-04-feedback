import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';
import { OptionsList, OptionBtn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback, smiles }) {
  const bgColors = ['#b7e68a', '#9c9e98', '#e74c3c'];
  const shadowColors = ['#637f4a', '#64665f', '#c0392b'];

  return (
    <OptionsList>
      {options.map((el, i) => {
        return (
          <li key={el}>
            <OptionBtn
              type="button"
              name={el}
              onClick={onLeaveFeedback}
              style={{
                backgroundColor: bgColors[i],
                boxShadow: `${shadowColors[i]}  0px 7px 2px, #000 0px 8px 5px`,
              }}
            >
              {capitalizeFirstLetter(el)}
              &nbsp;
              {smiles[i]}
            </OptionBtn>
          </li>
        );
      })}
    </OptionsList>
  );
}
