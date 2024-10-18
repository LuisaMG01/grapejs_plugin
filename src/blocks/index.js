import section1Blocks from './section1';
import section2Blocks from './section2';

export default (editor, opts = {}) => {
  section1Blocks(editor, opts);
  section2Blocks(editor, opts);
};
