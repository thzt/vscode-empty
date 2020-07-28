import { ExtensionContext, window } from 'vscode';

const activate = (context: ExtensionContext) => {
  window.showInformationMessage('Hello World!');
};

export {
  activate,
};
