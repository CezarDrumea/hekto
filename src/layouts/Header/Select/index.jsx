import { StyledSelect } from './styled';

const Select = ({ options }) => {
  return (
    <StyledSelect>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
