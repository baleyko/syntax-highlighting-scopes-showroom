// const vscode = require('vscode');
// const assert = require('assert');
const fs = require('fs');
// const plist = require('plist');
// console.log(Object.keys(require('vscode-textmate')));
// const { Registry, parseRawGrammar, INITIAL } = require('vscode-textmate');
// const config = vscode.workspace.getConfiguration("Syntax Highlighting Scopes Showroom");

// const gr = fs.readFileSync(__dirname+'/../grammars/shss.json', 'utf8');
// const registry = new Registry({
//     loadGrammar: parseRawGrammar
// });

// const json = fs.readFileSync(__dirname+'/../grammars/shss.json', 'utf8');

// const x = parseRawGrammar(plist.build(json));

// const loadGrammar = () => {
//     return Promise.resolve(parseRawGrammar(fs.readFileSync(__dirname+'/../grammars/shss.json').toString(), __dirname+'/../grammars/shss.json'));
// };


const plist = require('plist');

// plist.parse(fs.readFileSync(__dirname+`/../grammars/shss.sublime-syntax`));

// console.log(fs.readFileSync(__dirname+`/../grammars/shss.sublime-syntax`, 'utf8'));
const YAML = require('yaml');

const { TestGrammar } = require('test-grammar');
// `grammars/shss.json`
new TestGrammar(JSON.stringify(YAML.parse(fs.readFileSync(__dirname+`/../grammars/shss.sublime-syntax`, 'utf8'))), { useSourceAsFile: true }, run => {
  run(
    'keyword.control',
    `keyword.control`,
    `keyword.control`
  );
});

// const { ITokenizeLineResult, Registry, StackElement } = require('vscode-textmate');

// const registry = new Registry();
// const grammar = registry.loadGrammarFromPathSync(__dirname+'/../grammars/shss.json');

// const lineResult = grammar.tokenizeLine('k', StackElement);
// console.log(Object.keys(lineResult));
// const registry = new Registry({
//     loadGrammar: (scopeName) => {
//         return parseRawGrammar(plist.build(json), '');
//     }
// });
/*
suite('Samle Test Suite', () => {
    // const registry = new Registry();
    // const grammar = registry.loadGrammar();
    // .then((grammar) => {
        // console.log(grammar);
        // console.log(JSON.stringify(grammar.tokenizeLine('k', INITIAL), null, '  '));
    // });
    // console.log(grammar.tokenizeLine);
    // const grammar = registry.loadGrammarFromPathSync('grammars/shss.json');
 
    // let lineResult = grammar.tokenizeLine(line, previousStack);
    // previousStack = lineResult.ruleStack;

    // vscode.window.showInformationMessage('Start all tests.');
    // vscode.languages.setLanguageConfiguration({wordPattern: 'shss'});
    // console.log(JSON.stringify(config.inspect('keyword.control'), null, '  '));
    // match('Syntax Highlighting Scopes Showroom', doc);
    // vscode.languages.getLanguages().then(console.log).catch(console.log);
    // console.log(JSON.stringify(Object.keys(vscode), null, '  '));
    // console.log(JSON.stringify(Object.keys(vscode.languages), null, '  '));
    test('Sample test', () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });
});*/
