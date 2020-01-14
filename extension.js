module.exports = {
  activate() {
    if (typeof atom === 'undefined') {
      const vscode = require('vscode');

      vscode.commands.registerCommand(
        'syntax-highlighting-scopes-showroom:show-all',
        () =>
          vscode.commands.executeCommand(
            'vscode.open',
            vscode.Uri.parse(
              `${
                vscode.extensions.getExtension(
                  'baleiko.syntax-highlighting-scopes-showroom'
                ).extensionPath
              }/SyntaxScopes`
            )
          )
      );
    } else {
      atom.commands.add('atom-workspace', {
        'syntax-highlighting-scopes-showroom:show-all': () =>
          atom.workspace.open(
            `${
              atom.packages.getActivePackage(
                'syntax-highlighting-scopes-showroom'
              ).path
            }/SyntaxScopes`
          ),
      });
    }
  },
};
