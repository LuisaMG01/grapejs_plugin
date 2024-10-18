import loadComponents from './components';
import loadBlocks from './blocks/index.js';  // Importar bloques
import en from './locale/en';

export default (editor, opts = {}) => {
  const options = {
    i18n: {},
    // default options
    ...opts,
  };

  // Cargar componentes
  loadComponents(editor, options);
  
  // Cargar bloques desde la carpeta organizada
  loadBlocks(editor, options);
  
  // Cargar archivos de i18n
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });

  editor.on('load', () =>
    editor.addComponents(
      `<div style="margin:100px; padding:25px;">
        Content loaded from the plugin
      </div>`,
      { at: 0 }
    )
  );
};
