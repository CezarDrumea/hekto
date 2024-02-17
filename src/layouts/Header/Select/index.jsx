import * as S from './styled';

const Select = ({ options }) => {
  return (
    <S.Select>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </S.Select>
  );
};

export default Select;
