describe('Syntax Highlighting Scopes Showroom grammar', () => {
  let grammar = null;

  beforeEach(() =>
    atom.packages
      .activatePackage('syntax-highlighting-scopes-showroom')
      .then(() => {
        grammar = atom.grammars.grammarForScopeName('source.shss');
      })
  );

  it('parses the grammar', () => {
    expect(grammar).toBeTruthy();
    expect(grammar.scopeName).toBe('source.shss');
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-slash');
    expect(tokens[0]).toEqual({ value: 'comment.line.double-slash', scopes: ['source.shss', 'comment.line.double-slash'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-dash');
    expect(tokens[0]).toEqual({ value: 'comment.line.double-dash', scopes: ['source.shss', 'comment.line.double-dash'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.number-sign');
    expect(tokens[0]).toEqual({ value: 'comment.line.number-sign', scopes: ['source.shss', 'comment.line.number-sign'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.percentage');
    expect(tokens[0]).toEqual({ value: 'comment.line.percentage', scopes: ['source.shss', 'comment.line.percentage'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.shebang');
    expect(tokens[0]).toEqual({ value: 'comment.line.shebang', scopes: ['source.shss', 'comment.line.shebang'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.line');
    expect(tokens[0]).toEqual({ value: 'comment.line', scopes: ['source.shss', 'comment.line'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.documentation');
    expect(tokens[0]).toEqual({ value: 'comment.block.documentation', scopes: ['source.shss', 'comment.block.documentation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.block');
    expect(tokens[0]).toEqual({ value: 'comment.block', scopes: ['source.shss', 'comment.block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment');
    expect(tokens[0]).toEqual({ value: 'comment', scopes: ['source.shss', 'comment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.binary', scopes: ['source.shss', 'constant.numeric.integer.binary'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.octal', scopes: ['source.shss', 'constant.numeric.integer.octal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.decimal', scopes: ['source.shss', 'constant.numeric.integer.decimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.hexadecimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.hexadecimal', scopes: ['source.shss', 'constant.numeric.integer.hexadecimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.other');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.other', scopes: ['source.shss', 'constant.numeric.integer.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer', scopes: ['source.shss', 'constant.numeric.integer'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.exponential');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.exponential', scopes: ['source.shss', 'constant.numeric.exponential'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.binary', scopes: ['source.shss', 'constant.numeric.float.binary'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.octal', scopes: ['source.shss', 'constant.numeric.float.octal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.decimal', scopes: ['source.shss', 'constant.numeric.float.decimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.hexadecimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.hexadecimal', scopes: ['source.shss', 'constant.numeric.float.hexadecimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.other');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.other', scopes: ['source.shss', 'constant.numeric.float.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float', scopes: ['source.shss', 'constant.numeric.float'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.real');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex.real', scopes: ['source.shss', 'constant.numeric.complex.real'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.imaginary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex.imaginary', scopes: ['source.shss', 'constant.numeric.complex.imaginary'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex', scopes: ['source.shss', 'constant.numeric.complex'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.index');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.index', scopes: ['source.shss', 'constant.numeric.index'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal.with-thousand-separators');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.decimal.with-thousand-separators', scopes: ['source.shss', 'constant.numeric.decimal.with-thousand-separators'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.decimal', scopes: ['source.shss', 'constant.numeric.decimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.hex');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.hex', scopes: ['source.shss', 'constant.numeric.hex'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.binary', scopes: ['source.shss', 'constant.numeric.binary'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.octal', scopes: ['source.shss', 'constant.numeric.octal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric');
    expect(tokens[0]).toEqual({ value: 'constant.numeric', scopes: ['source.shss', 'constant.numeric'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma.module');
    expect(tokens[0]).toEqual({ value: 'constant.language.pragma.module', scopes: ['source.shss', 'constant.language.pragma.module'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma');
    expect(tokens[0]).toEqual({ value: 'constant.language.pragma', scopes: ['source.shss', 'constant.language.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.boolean');
    expect(tokens[0]).toEqual({ value: 'constant.language.boolean', scopes: ['source.shss', 'constant.language.boolean'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.language');
    expect(tokens[0]).toEqual({ value: 'constant.language', scopes: ['source.shss', 'constant.language'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.octal');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.octal', scopes: ['source.shss', 'constant.character.escape.octal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.hex');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.hex', scopes: ['source.shss', 'constant.character.escape.hex'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.unicode', scopes: ['source.shss', 'constant.character.escape.unicode'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.regex');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.regex', scopes: ['source.shss', 'constant.character.escape.regex'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape', scopes: ['source.shss', 'constant.character.escape'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character');
    expect(tokens[0]).toEqual({ value: 'constant.character', scopes: ['source.shss', 'constant.character'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.key');
    expect(tokens[0]).toEqual({ value: 'constant.other.key', scopes: ['source.shss', 'constant.other.key'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.bareword');
    expect(tokens[0]).toEqual({ value: 'constant.other.bareword', scopes: ['source.shss', 'constant.other.bareword'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.class');
    expect(tokens[0]).toEqual({ value: 'constant.other.class', scopes: ['source.shss', 'constant.other.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.placeholder');
    expect(tokens[0]).toEqual({ value: 'constant.other.placeholder', scopes: ['source.shss', 'constant.other.placeholder'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version.literal');
    expect(tokens[0]).toEqual({ value: 'constant.other.version.literal', scopes: ['source.shss', 'constant.other.version.literal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version');
    expect(tokens[0]).toEqual({ value: 'constant.other.version', scopes: ['source.shss', 'constant.other.version'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other');
    expect(tokens[0]).toEqual({ value: 'constant.other', scopes: ['source.shss', 'constant.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant');
    expect(tokens[0]).toEqual({ value: 'constant', scopes: ['source.shss', 'constant'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name');
    expect(tokens[0]).toEqual({ value: 'entity.other.attribute-name', scopes: ['source.shss', 'entity.other.attribute-name'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class');
    expect(tokens[0]).toEqual({ value: 'entity.other.inherited-class', scopes: ['source.shss', 'entity.other.inherited-class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.other');
    expect(tokens[0]).toEqual({ value: 'entity.other', scopes: ['source.shss', 'entity.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.namespace');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.namespace', scopes: ['source.shss', 'entity.name.type.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.trait');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.trait', scopes: ['source.shss', 'entity.name.type.trait'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.interface');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.interface', scopes: ['source.shss', 'entity.name.type.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.class', scopes: ['source.shss', 'entity.name.type.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.struct');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.struct', scopes: ['source.shss', 'entity.name.type.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.instance');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.instance', scopes: ['source.shss', 'entity.name.type.instance'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({ value: 'entity.name.type', scopes: ['source.shss', 'entity.name.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class.forward-decl');
    expect(tokens[0]).toEqual({ value: 'entity.name.class.forward-decl', scopes: ['source.shss', 'entity.name.class.forward-decl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class');
    expect(tokens[0]).toEqual({ value: 'entity.name.class', scopes: ['source.shss', 'entity.name.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.struct');
    expect(tokens[0]).toEqual({ value: 'entity.name.struct', scopes: ['source.shss', 'entity.name.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.enum');
    expect(tokens[0]).toEqual({ value: 'entity.name.enum', scopes: ['source.shss', 'entity.name.enum'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.union');
    expect(tokens[0]).toEqual({ value: 'entity.name.union', scopes: ['source.shss', 'entity.name.union'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.trait');
    expect(tokens[0]).toEqual({ value: 'entity.name.trait', scopes: ['source.shss', 'entity.name.trait'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.interface');
    expect(tokens[0]).toEqual({ value: 'entity.name.interface', scopes: ['source.shss', 'entity.name.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.impl');
    expect(tokens[0]).toEqual({ value: 'entity.name.impl', scopes: ['source.shss', 'entity.name.impl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({ value: 'entity.name.type', scopes: ['source.shss', 'entity.name.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.constructor');
    expect(tokens[0]).toEqual({ value: 'entity.name.function.constructor', scopes: ['source.shss', 'entity.name.function.constructor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.destructor');
    expect(tokens[0]).toEqual({ value: 'entity.name.function.destructor', scopes: ['source.shss', 'entity.name.function.destructor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({ value: 'entity.name.function', scopes: ['source.shss', 'entity.name.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.goto-label');
    expect(tokens[0]).toEqual({ value: 'entity.name.goto-label', scopes: ['source.shss', 'entity.name.goto-label'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({ value: 'entity.name.function', scopes: ['source.shss', 'entity.name.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.namespace');
    expect(tokens[0]).toEqual({ value: 'entity.name.namespace', scopes: ['source.shss', 'entity.name.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.constant');
    expect(tokens[0]).toEqual({ value: 'entity.name.constant', scopes: ['source.shss', 'entity.name.constant'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.label');
    expect(tokens[0]).toEqual({ value: 'entity.name.label', scopes: ['source.shss', 'entity.name.label'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.section');
    expect(tokens[0]).toEqual({ value: 'entity.name.section', scopes: ['source.shss', 'entity.name.section'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag');
    expect(tokens[0]).toEqual({ value: 'entity.name.tag', scopes: ['source.shss', 'entity.name.tag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name');
    expect(tokens[0]).toEqual({ value: 'entity.name', scopes: ['source.shss', 'entity.name'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity');
    expect(tokens[0]).toEqual({ value: 'entity', scopes: ['source.shss', 'entity'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax.pragma');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.syntax.pragma', scopes: ['source.shss', 'invalid.illegal.syntax.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.syntax', scopes: ['source.shss', 'invalid.illegal.syntax'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.trailing-whitespace');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.trailing-whitespace', scopes: ['source.shss', 'invalid.illegal.trailing-whitespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-bracket-end');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.stray-bracket-end', scopes: ['source.shss', 'invalid.illegal.stray-bracket-end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-semi-colon');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.stray-semi-colon', scopes: ['source.shss', 'invalid.illegal.stray-semi-colon'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal', scopes: ['source.shss', 'invalid.illegal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated');
    expect(tokens[0]).toEqual({ value: 'invalid.deprecated', scopes: ['source.shss', 'invalid.deprecated'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('invalid');
    expect(tokens[0]).toEqual({ value: 'invalid', scopes: ['source.shss', 'invalid'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.heading');
    expect(tokens[0]).toEqual({ value: 'markup.heading', scopes: ['source.shss', 'markup.heading'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.unnumbered');
    expect(tokens[0]).toEqual({ value: 'markup.list.unnumbered', scopes: ['source.shss', 'markup.list.unnumbered'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.numbered');
    expect(tokens[0]).toEqual({ value: 'markup.list.numbered', scopes: ['source.shss', 'markup.list.numbered'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.list');
    expect(tokens[0]).toEqual({ value: 'markup.list', scopes: ['source.shss', 'markup.list'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.bold');
    expect(tokens[0]).toEqual({ value: 'markup.bold', scopes: ['source.shss', 'markup.bold'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.italic');
    expect(tokens[0]).toEqual({ value: 'markup.italic', scopes: ['source.shss', 'markup.italic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.inserted');
    expect(tokens[0]).toEqual({ value: 'markup.inserted', scopes: ['source.shss', 'markup.inserted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.deleted');
    expect(tokens[0]).toEqual({ value: 'markup.deleted', scopes: ['source.shss', 'markup.deleted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link.hyperlink');
    expect(tokens[0]).toEqual({ value: 'markup.underline.link.hyperlink', scopes: ['source.shss', 'markup.underline.link.hyperlink'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link');
    expect(tokens[0]).toEqual({ value: 'markup.underline.link', scopes: ['source.shss', 'markup.underline.link'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline');
    expect(tokens[0]).toEqual({ value: 'markup.underline', scopes: ['source.shss', 'markup.underline'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.quote');
    expect(tokens[0]).toEqual({ value: 'markup.quote', scopes: ['source.shss', 'markup.quote'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.inline');
    expect(tokens[0]).toEqual({ value: 'markup.raw.inline', scopes: ['source.shss', 'markup.raw.inline'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.block');
    expect(tokens[0]).toEqual({ value: 'markup.raw.block', scopes: ['source.shss', 'markup.raw.block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw');
    expect(tokens[0]).toEqual({ value: 'markup.raw', scopes: ['source.shss', 'markup.raw'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.other');
    expect(tokens[0]).toEqual({ value: 'markup.other', scopes: ['source.shss', 'markup.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup');
    expect(tokens[0]).toEqual({ value: 'markup', scopes: ['source.shss', 'markup'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call.static');
    expect(tokens[0]).toEqual({ value: 'meta.method-call.static', scopes: ['source.shss', 'meta.method-call.static'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call');
    expect(tokens[0]).toEqual({ value: 'meta.method-call', scopes: ['source.shss', 'meta.method-call'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.toc-list');
    expect(tokens[0]).toEqual({ value: 'meta.toc-list', scopes: ['source.shss', 'meta.toc-list'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.class');
    expect(tokens[0]).toEqual({ value: 'meta.class', scopes: ['source.shss', 'meta.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.struct');
    expect(tokens[0]).toEqual({ value: 'meta.struct', scopes: ['source.shss', 'meta.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.enum');
    expect(tokens[0]).toEqual({ value: 'meta.enum', scopes: ['source.shss', 'meta.enum'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.union');
    expect(tokens[0]).toEqual({ value: 'meta.union', scopes: ['source.shss', 'meta.union'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.trait');
    expect(tokens[0]).toEqual({ value: 'meta.trait', scopes: ['source.shss', 'meta.trait'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.interface');
    expect(tokens[0]).toEqual({ value: 'meta.interface', scopes: ['source.shss', 'meta.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.impl');
    expect(tokens[0]).toEqual({ value: 'meta.impl', scopes: ['source.shss', 'meta.impl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.type');
    expect(tokens[0]).toEqual({ value: 'meta.type', scopes: ['source.shss', 'meta.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.string');
    expect(tokens[0]).toEqual({ value: 'meta.string', scopes: ['source.shss', 'meta.string'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.path');
    expect(tokens[0]).toEqual({ value: 'meta.path', scopes: ['source.shss', 'meta.path'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function-call');
    expect(tokens[0]).toEqual({ value: 'meta.function-call', scopes: ['source.shss', 'meta.function-call'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.block');
    expect(tokens[0]).toEqual({ value: 'meta.block', scopes: ['source.shss', 'meta.block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded');
    expect(tokens[0]).toEqual({ value: 'meta.embedded', scopes: ['source.shss', 'meta.embedded'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.braces');
    expect(tokens[0]).toEqual({ value: 'meta.braces', scopes: ['source.shss', 'meta.braces'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.group');
    expect(tokens[0]).toEqual({ value: 'meta.group', scopes: ['source.shss', 'meta.group'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.parens');
    expect(tokens[0]).toEqual({ value: 'meta.parens', scopes: ['source.shss', 'meta.parens'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.brackets');
    expect(tokens[0]).toEqual({ value: 'meta.brackets', scopes: ['source.shss', 'meta.brackets'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.generic');
    expect(tokens[0]).toEqual({ value: 'meta.generic', scopes: ['source.shss', 'meta.generic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag');
    expect(tokens[0]).toEqual({ value: 'meta.tag', scopes: ['source.shss', 'meta.tag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.leading-tabs');
    expect(tokens[0]).toEqual({ value: 'meta.leading-tabs', scopes: ['source.shss', 'meta.leading-tabs'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.odd-tab');
    expect(tokens[0]).toEqual({ value: 'meta.odd-tab', scopes: ['source.shss', 'meta.odd-tab'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.even-tab');
    expect(tokens[0]).toEqual({ value: 'meta.even-tab', scopes: ['source.shss', 'meta.even-tab'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.paragraph');
    expect(tokens[0]).toEqual({ value: 'meta.paragraph', scopes: ['source.shss', 'meta.paragraph'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.diagnostics.pragma');
    expect(tokens[0]).toEqual({ value: 'meta.diagnostics.pragma', scopes: ['source.shss', 'meta.diagnostics.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.function.parameters', scopes: ['source.shss', 'meta.function.parameters'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.function.parameters', scopes: ['source.shss', 'meta.function.parameters'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.return-type');
    expect(tokens[0]).toEqual({ value: 'meta.function.return-type', scopes: ['source.shss', 'meta.function.return-type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.signature');
    expect(tokens[0]).toEqual({ value: 'meta.function.signature', scopes: ['source.shss', 'meta.function.signature'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({ value: 'meta.function', scopes: ['source.shss', 'meta.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.namespace');
    expect(tokens[0]).toEqual({ value: 'meta.namespace', scopes: ['source.shss', 'meta.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.pragma');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor.pragma', scopes: ['source.shss', 'meta.preprocessor.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.include');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor.include', scopes: ['source.shss', 'meta.preprocessor.include'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor', scopes: ['source.shss', 'meta.preprocessor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.interpolation');
    expect(tokens[0]).toEqual({ value: 'meta.interpolation', scopes: ['source.shss', 'meta.interpolation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.identifier');
    expect(tokens[0]).toEqual({ value: 'meta.annotation.identifier', scopes: ['source.shss', 'meta.annotation.identifier'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.annotation.parameters', scopes: ['source.shss', 'meta.annotation.parameters'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation');
    expect(tokens[0]).toEqual({ value: 'meta.annotation', scopes: ['source.shss', 'meta.annotation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta');
    expect(tokens[0]).toEqual({ value: 'meta', scopes: ['source.shss', 'meta'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment.leading');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace.comment.leading', scopes: ['source.shss', 'punctuation.whitespace.comment.leading'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace.comment', scopes: ['source.shss', 'punctuation.whitespace.comment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace', scopes: ['source.shss', 'punctuation.whitespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.semicolon');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.semicolon', scopes: ['source.shss', 'punctuation.terminator.semicolon'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.statement');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.statement', scopes: ['source.shss', 'punctuation.terminator.statement'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.expression');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.expression', scopes: ['source.shss', 'punctuation.terminator.expression'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator', scopes: ['source.shss', 'punctuation.terminator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.delimiter.decimal.period');
    expect(tokens[0]).toEqual({ value: 'punctuation.delimiter.decimal.period', scopes: ['source.shss', 'punctuation.delimiter.decimal.period'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.comma');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.comma', scopes: ['source.shss', 'punctuation.separator.comma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.colon');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.colon', scopes: ['source.shss', 'punctuation.separator.colon'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.arrow');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.arrow', scopes: ['source.shss', 'punctuation.separator.arrow'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.key-value');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.key-value', scopes: ['source.shss', 'punctuation.separator.key-value'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.inheritance');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.inheritance', scopes: ['source.shss', 'punctuation.separator.inheritance'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.delimiter');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.delimiter', scopes: ['source.shss', 'punctuation.separator.delimiter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.classes');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.classes', scopes: ['source.shss', 'punctuation.separator.classes'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.continuation', scopes: ['source.shss', 'punctuation.separator.continuation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal.period');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.decimal.period', scopes: ['source.shss', 'punctuation.separator.decimal.period'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.decimal', scopes: ['source.shss', 'punctuation.separator.decimal'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator', scopes: ['source.shss', 'punctuation.separator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.accessor');
    expect(tokens[0]).toEqual({ value: 'punctuation.accessor', scopes: ['source.shss', 'punctuation.accessor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded.begin', scopes: ['source.shss', 'punctuation.section.embedded.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded.end', scopes: ['source.shss', 'punctuation.section.embedded.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded', scopes: ['source.shss', 'punctuation.section.embedded'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array.begin', scopes: ['source.shss', 'punctuation.section.array.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array.end', scopes: ['source.shss', 'punctuation.section.array.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array', scopes: ['source.shss', 'punctuation.section.array'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.begin', scopes: ['source.shss', 'punctuation.section.block.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.end', scopes: ['source.shss', 'punctuation.section.block.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block', scopes: ['source.shss', 'punctuation.section.block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces.begin', scopes: ['source.shss', 'punctuation.section.braces.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces.end', scopes: ['source.shss', 'punctuation.section.braces.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces', scopes: ['source.shss', 'punctuation.section.braces'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group.begin', scopes: ['source.shss', 'punctuation.section.group.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group.end', scopes: ['source.shss', 'punctuation.section.group.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group', scopes: ['source.shss', 'punctuation.section.group'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens.begin', scopes: ['source.shss', 'punctuation.section.parens.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens.end', scopes: ['source.shss', 'punctuation.section.parens.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens', scopes: ['source.shss', 'punctuation.section.parens'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets.begin', scopes: ['source.shss', 'punctuation.section.brackets.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets.end', scopes: ['source.shss', 'punctuation.section.brackets.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets', scopes: ['source.shss', 'punctuation.section.brackets'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.end', scopes: ['source.shss', 'punctuation.section.interpolation.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.begin', scopes: ['source.shss', 'punctuation.section.interpolation.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation', scopes: ['source.shss', 'punctuation.section.interpolation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket.begin', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket.end', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly', scopes: ['source.shss', 'punctuation.section.brace.curly'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace', scopes: ['source.shss', 'punctuation.section.brace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket.begin', scopes: ['source.shss', 'punctuation.section.square.bracket.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket.end', scopes: ['source.shss', 'punctuation.section.square.bracket.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket', scopes: ['source.shss', 'punctuation.section.square.bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square', scopes: ['source.shss', 'punctuation.section.square'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope.begin', scopes: ['source.shss', 'punctuation.section.scope.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope.end', scopes: ['source.shss', 'punctuation.section.scope.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope', scopes: ['source.shss', 'punctuation.section.scope'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket.begin', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket.end', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round', scopes: ['source.shss', 'punctuation.section.parenthesis.round'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis', scopes: ['source.shss', 'punctuation.section.parenthesis'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin.bracket.curly', scopes: ['source.shss', 'punctuation.section.signature.begin.bracket.curly'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin.bracket', scopes: ['source.shss', 'punctuation.section.signature.begin.bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin', scopes: ['source.shss', 'punctuation.section.signature.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature', scopes: ['source.shss', 'punctuation.section.signature'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section');
    expect(tokens[0]).toEqual({ value: 'punctuation.section', scopes: ['source.shss', 'punctuation.section'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc.begin', scopes: ['source.shss', 'punctuation.definition.heredoc.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc.end', scopes: ['source.shss', 'punctuation.definition.heredoc.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc', scopes: ['source.shss', 'punctuation.definition.heredoc'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.begin.bracket.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.array.begin.bracket.round', scopes: ['source.shss', 'punctuation.definition.array.begin.bracket.round'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.end.bracket.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.array.end.bracket.round', scopes: ['source.shss', 'punctuation.definition.array.end.bracket.round'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.constant');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.constant', scopes: ['source.shss', 'punctuation.definition.constant'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arbitrary-repetition');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.arbitrary-repetition', scopes: ['source.shss', 'punctuation.definition.arbitrary-repetition'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag.begin', scopes: ['source.shss', 'punctuation.definition.tag.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag.end', scopes: ['source.shss', 'punctuation.definition.tag.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag', scopes: ['source.shss', 'punctuation.definition.tag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string.begin', scopes: ['source.shss', 'punctuation.definition.string.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string.end', scopes: ['source.shss', 'punctuation.definition.string.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string', scopes: ['source.shss', 'punctuation.definition.string'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment.begin', scopes: ['source.shss', 'punctuation.definition.comment.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment.end', scopes: ['source.shss', 'punctuation.definition.comment.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment', scopes: ['source.shss', 'punctuation.definition.comment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword.begin', scopes: ['source.shss', 'punctuation.definition.keyword.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword.end', scopes: ['source.shss', 'punctuation.definition.keyword.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword', scopes: ['source.shss', 'punctuation.definition.keyword'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation.begin', scopes: ['source.shss', 'punctuation.definition.annotation.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation.end', scopes: ['source.shss', 'punctuation.definition.annotation.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation', scopes: ['source.shss', 'punctuation.definition.annotation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic.begin', scopes: ['source.shss', 'punctuation.definition.generic.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic.end', scopes: ['source.shss', 'punctuation.definition.generic.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic', scopes: ['source.shss', 'punctuation.definition.generic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable.begin', scopes: ['source.shss', 'punctuation.definition.variable.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable.end', scopes: ['source.shss', 'punctuation.definition.variable.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable', scopes: ['source.shss', 'punctuation.definition.variable'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition', scopes: ['source.shss', 'punctuation.definition'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket.begin', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket.end', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly', scopes: ['source.shss', 'punctuation.unmatched.brace.curly'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace', scopes: ['source.shss', 'punctuation.unmatched.brace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched', scopes: ['source.shss', 'punctuation.unmatched'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation');
    expect(tokens[0]).toEqual({ value: 'punctuation', scopes: ['source.shss', 'punctuation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.extends');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.extends', scopes: ['source.shss', 'storage.modifier.extends'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.static');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.static', scopes: ['source.shss', 'storage.modifier.static'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.final');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.final', scopes: ['source.shss', 'storage.modifier.final'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.abstract');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.abstract', scopes: ['source.shss', 'storage.modifier.abstract'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.public');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.public', scopes: ['source.shss', 'storage.modifier.public'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.private');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.private', scopes: ['source.shss', 'storage.modifier.private'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.protected');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.protected', scopes: ['source.shss', 'storage.modifier.protected'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.reference');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.reference', scopes: ['source.shss', 'storage.modifier.reference'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier');
    expect(tokens[0]).toEqual({ value: 'storage.modifier', scopes: ['source.shss', 'storage.modifier'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature.method');
    expect(tokens[0]).toEqual({ value: 'storage.type.signature.method', scopes: ['source.shss', 'storage.type.signature.method'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature');
    expect(tokens[0]).toEqual({ value: 'storage.type.signature', scopes: ['source.shss', 'storage.type.signature'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.function');
    expect(tokens[0]).toEqual({ value: 'storage.type.function', scopes: ['source.shss', 'storage.type.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.class');
    expect(tokens[0]).toEqual({ value: 'storage.type.class', scopes: ['source.shss', 'storage.type.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.interface');
    expect(tokens[0]).toEqual({ value: 'storage.type.interface', scopes: ['source.shss', 'storage.type.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.int');
    expect(tokens[0]).toEqual({ value: 'storage.type.int', scopes: ['source.shss', 'storage.type.int'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.var');
    expect(tokens[0]).toEqual({ value: 'storage.type.var', scopes: ['source.shss', 'storage.type.var'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.struct');
    expect(tokens[0]).toEqual({ value: 'storage.type.struct', scopes: ['source.shss', 'storage.type.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.enum');
    expect(tokens[0]).toEqual({ value: 'storage.type.enum', scopes: ['source.shss', 'storage.type.enum'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.union');
    expect(tokens[0]).toEqual({ value: 'storage.type.union', scopes: ['source.shss', 'storage.type.union'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.trait');
    expect(tokens[0]).toEqual({ value: 'storage.type.trait', scopes: ['source.shss', 'storage.type.trait'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.impl');
    expect(tokens[0]).toEqual({ value: 'storage.type.impl', scopes: ['source.shss', 'storage.type.impl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type');
    expect(tokens[0]).toEqual({ value: 'storage.type', scopes: ['source.shss', 'storage.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage');
    expect(tokens[0]).toEqual({ value: 'storage', scopes: ['source.shss', 'storage'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.function');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.function', scopes: ['source.shss', 'keyword.declaration.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.class');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.class', scopes: ['source.shss', 'keyword.declaration.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.struct');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.struct', scopes: ['source.shss', 'keyword.declaration.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.enum');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.enum', scopes: ['source.shss', 'keyword.declaration.enum'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.union');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.union', scopes: ['source.shss', 'keyword.declaration.union'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.trait');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.trait', scopes: ['source.shss', 'keyword.declaration.trait'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.interface', scopes: ['source.shss', 'keyword.declaration.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.impl');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.impl', scopes: ['source.shss', 'keyword.declaration.impl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.type');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.type', scopes: ['source.shss', 'keyword.declaration.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration', scopes: ['source.shss', 'keyword.declaration'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis.placeholder');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ellipsis.placeholder', scopes: ['source.shss', 'keyword.operator.ellipsis.placeholder'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ellipsis', scopes: ['source.shss', 'keyword.operator.ellipsis'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.readline');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.readline', scopes: ['source.shss', 'keyword.operator.readline'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.filetest');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.filetest', scopes: ['source.shss', 'keyword.operator.filetest'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.comparison.stringwise', scopes: ['source.shss', 'keyword.operator.comparison.stringwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.comparison', scopes: ['source.shss', 'keyword.operator.comparison'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma.flag');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.pragma.flag', scopes: ['source.shss', 'keyword.operator.pragma.flag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.pragma', scopes: ['source.shss', 'keyword.operator.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.repetition');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.repetition', scopes: ['source.shss', 'keyword.operator.repetition'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.concatenation');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.concatenation', scopes: ['source.shss', 'keyword.operator.concatenation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.range');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.range', scopes: ['source.shss', 'keyword.operator.range'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound.bitwise', scopes: ['source.shss', 'keyword.operator.assignement.compound.bitwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound.stringwise', scopes: ['source.shss', 'keyword.operator.assignement.compound.stringwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound', scopes: ['source.shss', 'keyword.operator.assignement.compound'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.conditional');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.conditional', scopes: ['source.shss', 'keyword.operator.assignement.conditional'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement', scopes: ['source.shss', 'keyword.operator.assignement'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.bitwise', scopes: ['source.shss', 'keyword.operator.bitwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.decrement');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.decrement', scopes: ['source.shss', 'keyword.operator.decrement'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.increment');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.increment', scopes: ['source.shss', 'keyword.operator.increment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.c-style');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical.c-style', scopes: ['source.shss', 'keyword.operator.logical.c-style'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.defined-or');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical.defined-or', scopes: ['source.shss', 'keyword.operator.logical.defined-or'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical', scopes: ['source.shss', 'keyword.operator.logical'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.stringwise', scopes: ['source.shss', 'keyword.operator.stringwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.arithmetic', scopes: ['source.shss', 'keyword.operator.arithmetic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ternary');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ternary', scopes: ['source.shss', 'keyword.operator.ternary'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.heredoc');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.heredoc', scopes: ['source.shss', 'keyword.operator.heredoc'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.null-coalescing');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.null-coalescing', scopes: ['source.shss', 'keyword.operator.null-coalescing'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.interface', scopes: ['source.shss', 'keyword.operator.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.class');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.class', scopes: ['source.shss', 'keyword.operator.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.nullable-type');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.nullable-type', scopes: ['source.shss', 'keyword.operator.nullable-type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignment', scopes: ['source.shss', 'keyword.operator.assignment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.arithmetic', scopes: ['source.shss', 'keyword.operator.arithmetic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.bitwise', scopes: ['source.shss', 'keyword.operator.bitwise'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical', scopes: ['source.shss', 'keyword.operator.logical'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.word');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.word', scopes: ['source.shss', 'keyword.operator.word'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.regexp');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.regexp', scopes: ['source.shss', 'keyword.operator.regexp'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator');
    expect(tokens[0]).toEqual({ value: 'keyword.operator', scopes: ['source.shss', 'keyword.operator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.pragma');
    expect(tokens[0]).toEqual({ value: 'keyword.control.directive.pragma', scopes: ['source.shss', 'keyword.control.directive.pragma'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive');
    expect(tokens[0]).toEqual({ value: 'keyword.control.directive', scopes: ['source.shss', 'keyword.control.directive'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.diagnostics');
    expect(tokens[0]).toEqual({ value: 'keyword.control.diagnostics', scopes: ['source.shss', 'keyword.control.diagnostics'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.regexp-option');
    expect(tokens[0]).toEqual({ value: 'keyword.control.regexp-option', scopes: ['source.shss', 'keyword.control.regexp-option'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.conditional');
    expect(tokens[0]).toEqual({ value: 'keyword.control.conditional', scopes: ['source.shss', 'keyword.control.conditional'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.anchor');
    expect(tokens[0]).toEqual({ value: 'keyword.control.anchor', scopes: ['source.shss', 'keyword.control.anchor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.import');
    expect(tokens[0]).toEqual({ value: 'keyword.control.import', scopes: ['source.shss', 'keyword.control.import'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.continue');
    expect(tokens[0]).toEqual({ value: 'keyword.control.continue', scopes: ['source.shss', 'keyword.control.continue'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.while');
    expect(tokens[0]).toEqual({ value: 'keyword.control.while', scopes: ['source.shss', 'keyword.control.while'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.return');
    expect(tokens[0]).toEqual({ value: 'keyword.control.return', scopes: ['source.shss', 'keyword.control.return'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control');
    expect(tokens[0]).toEqual({ value: 'keyword.control', scopes: ['source.shss', 'keyword.control'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.namespace');
    expect(tokens[0]).toEqual({ value: 'keyword.other.namespace', scopes: ['source.shss', 'keyword.other.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.class');
    expect(tokens[0]).toEqual({ value: 'keyword.other.class', scopes: ['source.shss', 'keyword.other.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.other.interface', scopes: ['source.shss', 'keyword.other.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.type');
    expect(tokens[0]).toEqual({ value: 'keyword.other.type', scopes: ['source.shss', 'keyword.other.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other');
    expect(tokens[0]).toEqual({ value: 'keyword.other', scopes: ['source.shss', 'keyword.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword');
    expect(tokens[0]).toEqual({ value: 'keyword', scopes: ['source.shss', 'keyword'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix.embedded');
    expect(tokens[0]).toEqual({ value: 'source.language-suffix.embedded', scopes: ['source.shss', 'source.language-suffix.embedded'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix');
    expect(tokens[0]).toEqual({ value: 'source.language-suffix', scopes: ['source.shss', 'source.language-suffix'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('source');
    expect(tokens[0]).toEqual({ value: 'source', scopes: ['source.shss', 'source'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-paren');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-paren', scopes: ['source.shss', 'string.interpolated.qx-paren'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-brace');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-brace', scopes: ['source.shss', 'string.interpolated.qx-brace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-bracket');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-bracket', scopes: ['source.shss', 'string.interpolated.qx-bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-ltgt', scopes: ['source.shss', 'string.interpolated.qx-ltgt'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-ltgt', scopes: ['source.shss', 'string.quoted.other.qq-ltgt'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-paren');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-paren', scopes: ['source.shss', 'string.quoted.other.qq-paren'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-brace');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-brace', scopes: ['source.shss', 'string.quoted.other.qq-brace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-bracket');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-bracket', scopes: ['source.shss', 'string.quoted.other.qq-bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-paren');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-paren', scopes: ['source.shss', 'string.quoted.other.q-paren'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-brace');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-brace', scopes: ['source.shss', 'string.quoted.other.q-brace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-bracket');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-bracket', scopes: ['source.shss', 'string.quoted.other.q-bracket'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-ltgt', scopes: ['source.shss', 'string.quoted.other.q-ltgt'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other', scopes: ['source.shss', 'string.quoted.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single');
    expect(tokens[0]).toEqual({ value: 'string.quoted.single', scopes: ['source.shss', 'string.quoted.single'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double');
    expect(tokens[0]).toEqual({ value: 'string.quoted.double', scopes: ['source.shss', 'string.quoted.double'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.triple');
    expect(tokens[0]).toEqual({ value: 'string.quoted.triple', scopes: ['source.shss', 'string.quoted.triple'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other', scopes: ['source.shss', 'string.quoted.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted');
    expect(tokens[0]).toEqual({ value: 'string.quoted', scopes: ['source.shss', 'string.quoted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.backtick');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.backtick', scopes: ['source.shss', 'string.unquoted.heredoc.backtick'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.quote');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.quote', scopes: ['source.shss', 'string.unquoted.heredoc.quote'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.doublequote');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.doublequote', scopes: ['source.shss', 'string.unquoted.heredoc.doublequote'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc', scopes: ['source.shss', 'string.unquoted.heredoc'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.program-block');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.program-block', scopes: ['source.shss', 'string.unquoted.program-block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.index');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.index', scopes: ['source.shss', 'string.unquoted.index'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted');
    expect(tokens[0]).toEqual({ value: 'string.unquoted', scopes: ['source.shss', 'string.unquoted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace.extended.simple_delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.replace.extended.simple_delimiter', scopes: ['source.shss', 'string.regexp.replace.extended.simple_delimiter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_braces');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_braces', scopes: ['source.shss', 'string.regexp.format.nested_braces'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_parens');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_parens', scopes: ['source.shss', 'string.regexp.format.nested_parens'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.single_quote');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.single_quote', scopes: ['source.shss', 'string.regexp.format.single_quote'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.simple_delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.simple_delimiter', scopes: ['source.shss', 'string.regexp.format.simple_delimiter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_ltgt');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_ltgt', scopes: ['source.shss', 'string.regexp.format.nested_ltgt'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format', scopes: ['source.shss', 'string.regexp.format'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_ltgt');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_ltgt', scopes: ['source.shss', 'string.regexp.nested_ltgt'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_parens');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_parens', scopes: ['source.shss', 'string.regexp.nested_parens'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_braces');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_braces', scopes: ['source.shss', 'string.regexp.nested_braces'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.simple-delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find-m.simple-delimiter', scopes: ['source.shss', 'string.regexp.find-m.simple-delimiter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.single-quote');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find-m.single-quote', scopes: ['source.shss', 'string.regexp.find-m.single-quote'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find', scopes: ['source.shss', 'string.regexp.find'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.character-class');
    expect(tokens[0]).toEqual({ value: 'string.regexp.character-class', scopes: ['source.shss', 'string.regexp.character-class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.arbitrary-repetition');
    expect(tokens[0]).toEqual({ value: 'string.regexp.arbitrary-repetition', scopes: ['source.shss', 'string.regexp.arbitrary-repetition'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.single-quoted');
    expect(tokens[0]).toEqual({ value: 'string.regexp.single-quoted', scopes: ['source.shss', 'string.regexp.single-quoted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.double-quoted');
    expect(tokens[0]).toEqual({ value: 'string.regexp.double-quoted', scopes: ['source.shss', 'string.regexp.double-quoted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace');
    expect(tokens[0]).toEqual({ value: 'string.regexp.replace', scopes: ['source.shss', 'string.regexp.replace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp');
    expect(tokens[0]).toEqual({ value: 'string.regexp', scopes: ['source.shss', 'string.regexp'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated');
    expect(tokens[0]).toEqual({ value: 'string.interpolated', scopes: ['source.shss', 'string.interpolated'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.other');
    expect(tokens[0]).toEqual({ value: 'string.other', scopes: ['source.shss', 'string.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string');
    expect(tokens[0]).toEqual({ value: 'string', scopes: ['source.shss', 'string'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.ext');
    expect(tokens[0]).toEqual({ value: 'support.constant.ext', scopes: ['source.shss', 'support.constant.ext'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.constant');
    expect(tokens[0]).toEqual({ value: 'support.constant', scopes: ['source.shss', 'support.constant'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.function.magic');
    expect(tokens[0]).toEqual({ value: 'support.function.magic', scopes: ['source.shss', 'support.function.magic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.function');
    expect(tokens[0]).toEqual({ value: 'support.function', scopes: ['source.shss', 'support.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.module');
    expect(tokens[0]).toEqual({ value: 'support.module', scopes: ['source.shss', 'support.module'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.type');
    expect(tokens[0]).toEqual({ value: 'support.type', scopes: ['source.shss', 'support.type'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.class');
    expect(tokens[0]).toEqual({ value: 'support.class', scopes: ['source.shss', 'support.class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.variable');
    expect(tokens[0]).toEqual({ value: 'support.variable', scopes: ['source.shss', 'support.variable'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.struct');
    expect(tokens[0]).toEqual({ value: 'support.struct', scopes: ['source.shss', 'support.struct'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.other.namespace');
    expect(tokens[0]).toEqual({ value: 'support.other.namespace', scopes: ['source.shss', 'support.other.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.other');
    expect(tokens[0]).toEqual({ value: 'support.other', scopes: ['source.shss', 'support.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support');
    expect(tokens[0]).toEqual({ value: 'support', scopes: ['source.shss', 'support'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text.html.basic');
    expect(tokens[0]).toEqual({ value: 'text.html.basic', scopes: ['source.shss', 'text.html.basic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text.html.markdown');
    expect(tokens[0]).toEqual({ value: 'text.html.markdown', scopes: ['source.shss', 'text.html.markdown'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text.html');
    expect(tokens[0]).toEqual({ value: 'text.html', scopes: ['source.shss', 'text.html'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text.xml');
    expect(tokens[0]).toEqual({ value: 'text.xml', scopes: ['source.shss', 'text.xml'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text.plain');
    expect(tokens[0]).toEqual({ value: 'text.plain', scopes: ['source.shss', 'text.plain'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('text');
    expect(tokens[0]).toEqual({ value: 'text', scopes: ['source.shss', 'text'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.annotation');
    expect(tokens[0]).toEqual({ value: 'variable.annotation', scopes: ['source.shss', 'variable.annotation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.function');
    expect(tokens[0]).toEqual({ value: 'variable.function', scopes: ['source.shss', 'variable.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.list-separator');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite.list-separator', scopes: ['source.shss', 'variable.other.readwrite.list-separator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.last-paren-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.last-paren-match', scopes: ['source.shss', 'variable.other.regexp.last-paren-match'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.post-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.post-match', scopes: ['source.shss', 'variable.other.regexp.post-match'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.pre-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.pre-match', scopes: ['source.shss', 'variable.other.regexp.pre-match'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.match', scopes: ['source.shss', 'variable.other.regexp.match'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.global');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite.global', scopes: ['source.shss', 'variable.other.readwrite.global'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite', scopes: ['source.shss', 'variable.other.readwrite'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.subpattern');
    expect(tokens[0]).toEqual({ value: 'variable.other.subpattern', scopes: ['source.shss', 'variable.other.subpattern'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.predefined');
    expect(tokens[0]).toEqual({ value: 'variable.other.predefined', scopes: ['source.shss', 'variable.other.predefined'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.index');
    expect(tokens[0]).toEqual({ value: 'variable.other.index', scopes: ['source.shss', 'variable.other.index'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global.safer');
    expect(tokens[0]).toEqual({ value: 'variable.other.global.safer', scopes: ['source.shss', 'variable.other.global.safer'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global');
    expect(tokens[0]).toEqual({ value: 'variable.other.global', scopes: ['source.shss', 'variable.other.global'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.member');
    expect(tokens[0]).toEqual({ value: 'variable.other.member', scopes: ['source.shss', 'variable.other.member'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite', scopes: ['source.shss', 'variable.other.readwrite'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.constant');
    expect(tokens[0]).toEqual({ value: 'variable.other.constant', scopes: ['source.shss', 'variable.other.constant'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.property');
    expect(tokens[0]).toEqual({ value: 'variable.other.property', scopes: ['source.shss', 'variable.other.property'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other');
    expect(tokens[0]).toEqual({ value: 'variable.other', scopes: ['source.shss', 'variable.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.namespace');
    expect(tokens[0]).toEqual({ value: 'variable.language.namespace', scopes: ['source.shss', 'variable.language.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.this');
    expect(tokens[0]).toEqual({ value: 'variable.language.this', scopes: ['source.shss', 'variable.language.this'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.super');
    expect(tokens[0]).toEqual({ value: 'variable.language.super', scopes: ['source.shss', 'variable.language.super'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.self');
    expect(tokens[0]).toEqual({ value: 'variable.language.self', scopes: ['source.shss', 'variable.language.self'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language');
    expect(tokens[0]).toEqual({ value: 'variable.language', scopes: ['source.shss', 'variable.language'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.function');
    expect(tokens[0]).toEqual({ value: 'variable.parameter.function', scopes: ['source.shss', 'variable.parameter.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter');
    expect(tokens[0]).toEqual({ value: 'variable.parameter', scopes: ['source.shss', 'variable.parameter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable');
    expect(tokens[0]).toEqual({ value: 'variable', scopes: ['source.shss', 'variable'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('wildcard.comment');
    expect(tokens[0]).toEqual({ value: 'wildcard.comment', scopes: ['source.shss', 'wildcard.comment'] });
  });
});
