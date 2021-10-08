import {selector} from 'recoil';

const textSelector = selector({
  key: 'TEXT-SELECTOR',
  get: ({get}) => {
    return get('TEXT-STATE');
  },
});
export default textSelector;
