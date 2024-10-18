export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add('block1', {
      label: 'Block 1',
      category: 'Section 1',
      content: `<div class="block1" style="padding: 20px; background-color: #3498db;">
                  <p>Block 1 Content</p>
                </div>`,
    });
  };
  