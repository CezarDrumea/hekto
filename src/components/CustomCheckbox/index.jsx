import Icon from '../Icon';
import { Checkbox, CheckboxInput } from './styled';

const CustomCheckbox = () => {
  return (
    <div>
      <CheckboxInput type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>
        <Checkbox />
      </label>
    </div>
  );
};
export default CustomCheckbox;
