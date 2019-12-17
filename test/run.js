const { downloadAndUnzipVSCode, runTests } = require('vscode-test');
const path = require('path');

(async () => {
    // await downloadAndUnzipVSCode('1.36.1');
    const extensionDevelopmentPath = path.resolve(__dirname, '/../');
    /**
     * Manually download VS Code 1.35.0 release for testing.
     */
    const vscodeExecutablePath = await downloadAndUnzipVSCode('1.35.0');
    await runTests({
        vscodeExecutablePath,
        extensionDevelopmentPath,
        __dirname,
        // path.resolve(__dirname, './suite'),
        // launchArgs: [testWorkspace]
    });
})();
