require.config({
  packages: [
    {
      name: 'codemirror',
      location: '../',
      main: 'lib/codemirror'
    }
  ]
});

export const writEditor = {
  template: require('./writEditor.html'),
  controller($log, $element) {
    require([
      'codemirror',
      './writ.mode',
      'codemirror/mode/markdown/markdown',
      'codemirror/lib/codemirror.css',
      './writ.theme.scss',
      'codemirror/addon/mode/overlay'
//      'codemirror/addon/hint/show-hint',
//      'codemirror/addon/hint/html-hint',
//      'codemirror/addon/mode/loadmode'
    ], (CodeMirror, writMode) => {
      writMode(CodeMirror);

      const editor = new CodeMirror($element[0], {
        mode: 'writ',
        lineNumbers: true,
        lineWrapping: true,
        theme: 'writ'
      });

      editor.setValue(require('raw-loader!./modeTest.md'));

      $log.log(editor);
    });
  }
};
