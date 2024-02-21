import { useState } from 'react';
import { TextBodyS } from '../../assets/typography/TextBody';
import {
  SelectArrow,
  SelectedOption,
  StyledOption,
  StyledOptions,
  StyledSelect,
} from './styled';

const CustomOption = ({ children, onOpenOptions }) => {
  return (
    <StyledOption onClick={onOpenOptions(children)}>
      <TextBodyS>{children}</TextBodyS>
    </StyledOption>
  );
};

const CustomSelect = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSelect = () => setIsOpen(false);

  const handleToggleSelect = () => setIsOpen((isOpen) => !isOpen);

  const handleSelectOption = (option) => () => {
    handleToggleSelect();
    setSelected(option);
  };

  return (
    <StyledSelect onBlur={handleCloseSelect} tabIndex={1}>
      <SelectedOption onClick={handleToggleSelect}>
        <TextBodyS>{selected}</TextBodyS>
        <SelectArrow
          src='arrow-down'
          size='1rem'
          color='black'
          $rotate={isOpen}
        />
      </SelectedOption>
      {isOpen && (
        <StyledOptions>
          {options.map((option) => (
            <CustomOption key={option} onOpenOptions={handleSelectOption}>
              {option}
            </CustomOption>
          ))}
        </StyledOptions>
      )}
    </StyledSelect>
  );
};
export default CustomSelect;
