import { useState } from 'react';
import { TextBodyS } from '../../assets/typography/TextBody';
import { SelectedOption, StyledOption, StyledSelect } from './styled';

const CustomOption = ({ children }) => {
  return (
    <StyledOption>
      <TextBodyS>{children}</TextBodyS>
    </StyledOption>
  );
};

const CustomSelect = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <StyledSelect>
      <SelectedOption>
        <TextBodyS>{options[0]}</TextBodyS>
      </SelectedOption>
    </StyledSelect>
  );
};
export default CustomSelect;
