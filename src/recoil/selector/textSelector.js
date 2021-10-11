import {selector} from 'recoil';
import textState from '../atoms/textState';

const textSelector = selector({
  key: 'TEXT-SELECTOR',
  get: ({get}) => {
    return get(textState);
  },
});
export default textSelector;
