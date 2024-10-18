export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add('block2', {
      label: 'Block 2',
      category: 'Section 1',
      content: `<div class="block2" style="padding: 20px; background-color: #2ecc71;">
                  <p>Block 2 Content</p>
                </div>`,
    });
  };
  