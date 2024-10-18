export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add('block3', {
      label: 'Block 3',
      category: 'Section 2',
      content: `<div class="block3" style="padding: 20px; background-color: #e74c3c;">
                  <p>Block 3 Content</p>
                </div>`,
    });
  };
  