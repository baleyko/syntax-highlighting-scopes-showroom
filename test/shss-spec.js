describe('Syntax Highlighting Scopes Showroom grammar', () => {
  let grammar = null;

  beforeEach(() =>
    grammar === null
      ? atom.packages
        .activatePackage('syntax-highlighting-scopes-showroom')
        .then(() => {
          grammar = atom.grammars.grammarForScopeName('source.shss');
        })
      : Promise.resolve()
  );

  it('parses the grammar', () => {
    expect(grammar).toBeTruthy();
    expect(grammar.scopeName).toBe('source.shss');
  });

  it('comment.line.double-slash', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-slash');
    expect(tokens[0]).toEqual({ value: 'comment.line.double-slash', scopes: ['source.shss', 'comment.line.double-slash'] });
  });

  it('comment.line.double-dash', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-dash');
    expect(tokens[0]).toEqual({ value: 'comment.line.double-dash', scopes: ['source.shss', 'comment.line.double-dash'] });
  });

  it('comment.line.number-sign', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.number-sign');
    expect(tokens[0]).toEqual({ value: 'comment.line.number-sign', scopes: ['source.shss', 'comment.line.number-sign'] });
  });

  it('comment.line.percentage', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.percentage');
    expect(tokens[0]).toEqual({ value: 'comment.line.percentage', scopes: ['source.shss', 'comment.line.percentage'] });
  });

  it('comment.line.shebang', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.shebang');
    expect(tokens[0]).toEqual({ value: 'comment.line.shebang', scopes: ['source.shss', 'comment.line.shebang'] });
  });

  it('comment.line', () => {
    const { tokens } = grammar.tokenizeLine('comment.line');
    expect(tokens[0]).toEqual({ value: 'comment.line', scopes: ['source.shss', 'comment.line'] });
  });

  it('comment.block.documentation', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.documentation');
    expect(tokens[0]).toEqual({ value: 'comment.block.documentation', scopes: ['source.shss', 'comment.block.documentation'] });
  });

  it('comment.block', () => {
    const { tokens } = grammar.tokenizeLine('comment.block');
    expect(tokens[0]).toEqual({ value: 'comment.block', scopes: ['source.shss', 'comment.block'] });
  });

  it('comment', () => {
    const { tokens } = grammar.tokenizeLine('comment');
    expect(tokens[0]).toEqual({ value: 'comment', scopes: ['source.shss', 'comment'] });
  });

  it('constant.numeric.integer.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.binary', scopes: ['source.shss', 'constant.numeric.integer.binary'] });
  });

  it('constant.numeric.integer.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.octal', scopes: ['source.shss', 'constant.numeric.integer.octal'] });
  });

  it('constant.numeric.integer.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.decimal', scopes: ['source.shss', 'constant.numeric.integer.decimal'] });
  });

  it('constant.numeric.integer.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.hexadecimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.hexadecimal', scopes: ['source.shss', 'constant.numeric.integer.hexadecimal'] });
  });

  it('constant.numeric.integer.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.other');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer.other', scopes: ['source.shss', 'constant.numeric.integer.other'] });
  });

  it('constant.numeric.integer', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer', scopes: ['source.shss', 'constant.numeric.integer'] });
  });

  it('constant.numeric.exponential', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.exponential');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.exponential', scopes: ['source.shss', 'constant.numeric.exponential'] });
  });

  it('constant.numeric.float.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.binary', scopes: ['source.shss', 'constant.numeric.float.binary'] });
  });

  it('constant.numeric.float.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.octal', scopes: ['source.shss', 'constant.numeric.float.octal'] });
  });

  it('constant.numeric.float.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.decimal', scopes: ['source.shss', 'constant.numeric.float.decimal'] });
  });

  it('constant.numeric.float.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.hexadecimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.hexadecimal', scopes: ['source.shss', 'constant.numeric.float.hexadecimal'] });
  });

  it('constant.numeric.float.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.other');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float.other', scopes: ['source.shss', 'constant.numeric.float.other'] });
  });

  it('constant.numeric.float', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float', scopes: ['source.shss', 'constant.numeric.float'] });
  });

  it('constant.numeric.complex.real', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.real');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex.real', scopes: ['source.shss', 'constant.numeric.complex.real'] });
  });

  it('constant.numeric.complex.imaginary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.imaginary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex.imaginary', scopes: ['source.shss', 'constant.numeric.complex.imaginary'] });
  });

  it('constant.numeric.complex', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex', scopes: ['source.shss', 'constant.numeric.complex'] });
  });

  it('constant.numeric.index', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.index');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.index', scopes: ['source.shss', 'constant.numeric.index'] });
  });

  it('constant.numeric.decimal.with-thousand-separators', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal.with-thousand-separators');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.decimal.with-thousand-separators', scopes: ['source.shss', 'constant.numeric.decimal.with-thousand-separators'] });
  });

  it('constant.numeric.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.decimal', scopes: ['source.shss', 'constant.numeric.decimal'] });
  });

  it('constant.numeric.hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.hex');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.hex', scopes: ['source.shss', 'constant.numeric.hex'] });
  });

  it('constant.numeric.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.binary');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.binary', scopes: ['source.shss', 'constant.numeric.binary'] });
  });

  it('constant.numeric.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.octal');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.octal', scopes: ['source.shss', 'constant.numeric.octal'] });
  });

  it('constant.numeric', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric');
    expect(tokens[0]).toEqual({ value: 'constant.numeric', scopes: ['source.shss', 'constant.numeric'] });
  });

  it('constant.language.pragma.module', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma.module');
    expect(tokens[0]).toEqual({ value: 'constant.language.pragma.module', scopes: ['source.shss', 'constant.language.pragma.module'] });
  });

  it('constant.language.pragma', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma');
    expect(tokens[0]).toEqual({ value: 'constant.language.pragma', scopes: ['source.shss', 'constant.language.pragma'] });
  });

  it('constant.language.boolean', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.boolean');
    expect(tokens[0]).toEqual({ value: 'constant.language.boolean', scopes: ['source.shss', 'constant.language.boolean'] });
  });

  it('constant.language', () => {
    const { tokens } = grammar.tokenizeLine('constant.language');
    expect(tokens[0]).toEqual({ value: 'constant.language', scopes: ['source.shss', 'constant.language'] });
  });

  it('constant.character.escape.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.octal');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.octal', scopes: ['source.shss', 'constant.character.escape.octal'] });
  });

  it('constant.character.escape.hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.hex');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.hex', scopes: ['source.shss', 'constant.character.escape.hex'] });
  });

  it('constant.character.escape.unicode', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.unicode', scopes: ['source.shss', 'constant.character.escape.unicode'] });
  });

  it('constant.character.escape.regex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.regex');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape.regex', scopes: ['source.shss', 'constant.character.escape.regex'] });
  });

  it('constant.character.escape', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape', scopes: ['source.shss', 'constant.character.escape'] });
  });

  it('constant.character', () => {
    const { tokens } = grammar.tokenizeLine('constant.character');
    expect(tokens[0]).toEqual({ value: 'constant.character', scopes: ['source.shss', 'constant.character'] });
  });

  it('constant.other.key', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.key');
    expect(tokens[0]).toEqual({ value: 'constant.other.key', scopes: ['source.shss', 'constant.other.key'] });
  });

  it('constant.other.bareword', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.bareword');
    expect(tokens[0]).toEqual({ value: 'constant.other.bareword', scopes: ['source.shss', 'constant.other.bareword'] });
  });

  it('constant.other.class', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.class');
    expect(tokens[0]).toEqual({ value: 'constant.other.class', scopes: ['source.shss', 'constant.other.class'] });
  });

  it('constant.other.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.placeholder');
    expect(tokens[0]).toEqual({ value: 'constant.other.placeholder', scopes: ['source.shss', 'constant.other.placeholder'] });
  });

  it('constant.other.version.literal', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version.literal');
    expect(tokens[0]).toEqual({ value: 'constant.other.version.literal', scopes: ['source.shss', 'constant.other.version.literal'] });
  });

  it('constant.other.version', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version');
    expect(tokens[0]).toEqual({ value: 'constant.other.version', scopes: ['source.shss', 'constant.other.version'] });
  });

  it('constant.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.other');
    expect(tokens[0]).toEqual({ value: 'constant.other', scopes: ['source.shss', 'constant.other'] });
  });

  it('constant', () => {
    const { tokens } = grammar.tokenizeLine('constant');
    expect(tokens[0]).toEqual({ value: 'constant', scopes: ['source.shss', 'constant'] });
  });

  it('entity.other.attribute-name', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name');
    expect(tokens[0]).toEqual({ value: 'entity.other.attribute-name', scopes: ['source.shss', 'entity.other.attribute-name'] });
  });

  it('entity.other.inherited-class', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class');
    expect(tokens[0]).toEqual({ value: 'entity.other.inherited-class', scopes: ['source.shss', 'entity.other.inherited-class'] });
  });

  it('entity.other', () => {
    const { tokens } = grammar.tokenizeLine('entity.other');
    expect(tokens[0]).toEqual({ value: 'entity.other', scopes: ['source.shss', 'entity.other'] });
  });

  it('entity.name.type.namespace', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.namespace');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.namespace', scopes: ['source.shss', 'entity.name.type.namespace'] });
  });

  it('entity.name.type.trait', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.trait');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.trait', scopes: ['source.shss', 'entity.name.type.trait'] });
  });

  it('entity.name.type.interface', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.interface');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.interface', scopes: ['source.shss', 'entity.name.type.interface'] });
  });

  it('entity.name.type.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.class', scopes: ['source.shss', 'entity.name.type.class'] });
  });

  it('entity.name.type.struct', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.struct');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.struct', scopes: ['source.shss', 'entity.name.type.struct'] });
  });

  it('entity.name.type.instance', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.instance');
    expect(tokens[0]).toEqual({ value: 'entity.name.type.instance', scopes: ['source.shss', 'entity.name.type.instance'] });
  });

  it('entity.name.type', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({ value: 'entity.name.type', scopes: ['source.shss', 'entity.name.type'] });
  });

  it('entity.name.class.forward-decl', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class.forward-decl');
    expect(tokens[0]).toEqual({ value: 'entity.name.class.forward-decl', scopes: ['source.shss', 'entity.name.class.forward-decl'] });
  });

  it('entity.name.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class');
    expect(tokens[0]).toEqual({ value: 'entity.name.class', scopes: ['source.shss', 'entity.name.class'] });
  });

  it('entity.name.struct', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.struct');
    expect(tokens[0]).toEqual({ value: 'entity.name.struct', scopes: ['source.shss', 'entity.name.struct'] });
  });

  it('entity.name.enum', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.enum');
    expect(tokens[0]).toEqual({ value: 'entity.name.enum', scopes: ['source.shss', 'entity.name.enum'] });
  });

  it('entity.name.union', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.union');
    expect(tokens[0]).toEqual({ value: 'entity.name.union', scopes: ['source.shss', 'entity.name.union'] });
  });

  it('entity.name.trait', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.trait');
    expect(tokens[0]).toEqual({ value: 'entity.name.trait', scopes: ['source.shss', 'entity.name.trait'] });
  });

  it('entity.name.interface', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.interface');
    expect(tokens[0]).toEqual({ value: 'entity.name.interface', scopes: ['source.shss', 'entity.name.interface'] });
  });

  it('entity.name.impl', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.impl');
    expect(tokens[0]).toEqual({ value: 'entity.name.impl', scopes: ['source.shss', 'entity.name.impl'] });
  });

  it('entity.name.type', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({ value: 'entity.name.type', scopes: ['source.shss', 'entity.name.type'] });
  });

  it('entity.name.function.constructor', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.constructor');
    expect(tokens[0]).toEqual({ value: 'entity.name.function.constructor', scopes: ['source.shss', 'entity.name.function.constructor'] });
  });

  it('entity.name.function.destructor', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.destructor');
    expect(tokens[0]).toEqual({ value: 'entity.name.function.destructor', scopes: ['source.shss', 'entity.name.function.destructor'] });
  });

  it('entity.name.function', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({ value: 'entity.name.function', scopes: ['source.shss', 'entity.name.function'] });
  });

  it('entity.name.goto-label', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.goto-label');
    expect(tokens[0]).toEqual({ value: 'entity.name.goto-label', scopes: ['source.shss', 'entity.name.goto-label'] });
  });

  it('entity.name.function', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({ value: 'entity.name.function', scopes: ['source.shss', 'entity.name.function'] });
  });

  it('entity.name.namespace', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.namespace');
    expect(tokens[0]).toEqual({ value: 'entity.name.namespace', scopes: ['source.shss', 'entity.name.namespace'] });
  });

  it('entity.name.constant', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.constant');
    expect(tokens[0]).toEqual({ value: 'entity.name.constant', scopes: ['source.shss', 'entity.name.constant'] });
  });

  it('entity.name.label', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.label');
    expect(tokens[0]).toEqual({ value: 'entity.name.label', scopes: ['source.shss', 'entity.name.label'] });
  });

  it('entity.name.section', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.section');
    expect(tokens[0]).toEqual({ value: 'entity.name.section', scopes: ['source.shss', 'entity.name.section'] });
  });

  it('entity.name.tag', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag');
    expect(tokens[0]).toEqual({ value: 'entity.name.tag', scopes: ['source.shss', 'entity.name.tag'] });
  });

  it('entity.name', () => {
    const { tokens } = grammar.tokenizeLine('entity.name');
    expect(tokens[0]).toEqual({ value: 'entity.name', scopes: ['source.shss', 'entity.name'] });
  });

  it('entity', () => {
    const { tokens } = grammar.tokenizeLine('entity');
    expect(tokens[0]).toEqual({ value: 'entity', scopes: ['source.shss', 'entity'] });
  });

  it('invalid.illegal.syntax.pragma', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax.pragma');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.syntax.pragma', scopes: ['source.shss', 'invalid.illegal.syntax.pragma'] });
  });

  it('invalid.illegal.syntax', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.syntax', scopes: ['source.shss', 'invalid.illegal.syntax'] });
  });

  it('invalid.illegal.trailing-whitespace', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.trailing-whitespace');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.trailing-whitespace', scopes: ['source.shss', 'invalid.illegal.trailing-whitespace'] });
  });

  it('invalid.illegal.stray-bracket-end', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-bracket-end');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.stray-bracket-end', scopes: ['source.shss', 'invalid.illegal.stray-bracket-end'] });
  });

  it('invalid.illegal.stray-semi-colon', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-semi-colon');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal.stray-semi-colon', scopes: ['source.shss', 'invalid.illegal.stray-semi-colon'] });
  });

  it('invalid.illegal', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal');
    expect(tokens[0]).toEqual({ value: 'invalid.illegal', scopes: ['source.shss', 'invalid.illegal'] });
  });

  it('invalid.deprecated', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated');
    expect(tokens[0]).toEqual({ value: 'invalid.deprecated', scopes: ['source.shss', 'invalid.deprecated'] });
  });

  it('invalid', () => {
    const { tokens } = grammar.tokenizeLine('invalid');
    expect(tokens[0]).toEqual({ value: 'invalid', scopes: ['source.shss', 'invalid'] });
  });

  it('markup.heading', () => {
    const { tokens } = grammar.tokenizeLine('markup.heading');
    expect(tokens[0]).toEqual({ value: 'markup.heading', scopes: ['source.shss', 'markup.heading'] });
  });

  it('markup.list.unnumbered', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.unnumbered');
    expect(tokens[0]).toEqual({ value: 'markup.list.unnumbered', scopes: ['source.shss', 'markup.list.unnumbered'] });
  });

  it('markup.list.numbered', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.numbered');
    expect(tokens[0]).toEqual({ value: 'markup.list.numbered', scopes: ['source.shss', 'markup.list.numbered'] });
  });

  it('markup.list', () => {
    const { tokens } = grammar.tokenizeLine('markup.list');
    expect(tokens[0]).toEqual({ value: 'markup.list', scopes: ['source.shss', 'markup.list'] });
  });

  it('markup.bold', () => {
    const { tokens } = grammar.tokenizeLine('markup.bold');
    expect(tokens[0]).toEqual({ value: 'markup.bold', scopes: ['source.shss', 'markup.bold'] });
  });

  it('markup.italic', () => {
    const { tokens } = grammar.tokenizeLine('markup.italic');
    expect(tokens[0]).toEqual({ value: 'markup.italic', scopes: ['source.shss', 'markup.italic'] });
  });

  it('markup.inserted', () => {
    const { tokens } = grammar.tokenizeLine('markup.inserted');
    expect(tokens[0]).toEqual({ value: 'markup.inserted', scopes: ['source.shss', 'markup.inserted'] });
  });

  it('markup.deleted', () => {
    const { tokens } = grammar.tokenizeLine('markup.deleted');
    expect(tokens[0]).toEqual({ value: 'markup.deleted', scopes: ['source.shss', 'markup.deleted'] });
  });

  it('markup.underline.link.hyperlink', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link.hyperlink');
    expect(tokens[0]).toEqual({ value: 'markup.underline.link.hyperlink', scopes: ['source.shss', 'markup.underline.link.hyperlink'] });
  });

  it('markup.underline.link', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link');
    expect(tokens[0]).toEqual({ value: 'markup.underline.link', scopes: ['source.shss', 'markup.underline.link'] });
  });

  it('markup.underline', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline');
    expect(tokens[0]).toEqual({ value: 'markup.underline', scopes: ['source.shss', 'markup.underline'] });
  });

  it('markup.quote', () => {
    const { tokens } = grammar.tokenizeLine('markup.quote');
    expect(tokens[0]).toEqual({ value: 'markup.quote', scopes: ['source.shss', 'markup.quote'] });
  });

  it('markup.raw.inline', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.inline');
    expect(tokens[0]).toEqual({ value: 'markup.raw.inline', scopes: ['source.shss', 'markup.raw.inline'] });
  });

  it('markup.raw.block', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.block');
    expect(tokens[0]).toEqual({ value: 'markup.raw.block', scopes: ['source.shss', 'markup.raw.block'] });
  });

  it('markup.raw', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw');
    expect(tokens[0]).toEqual({ value: 'markup.raw', scopes: ['source.shss', 'markup.raw'] });
  });

  it('markup.other', () => {
    const { tokens } = grammar.tokenizeLine('markup.other');
    expect(tokens[0]).toEqual({ value: 'markup.other', scopes: ['source.shss', 'markup.other'] });
  });

  it('markup', () => {
    const { tokens } = grammar.tokenizeLine('markup');
    expect(tokens[0]).toEqual({ value: 'markup', scopes: ['source.shss', 'markup'] });
  });

  it('meta.method-call.static', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call.static');
    expect(tokens[0]).toEqual({ value: 'meta.method-call.static', scopes: ['source.shss', 'meta.method-call.static'] });
  });

  it('meta.method-call', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call');
    expect(tokens[0]).toEqual({ value: 'meta.method-call', scopes: ['source.shss', 'meta.method-call'] });
  });

  it('meta.toc-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.toc-list');
    expect(tokens[0]).toEqual({ value: 'meta.toc-list', scopes: ['source.shss', 'meta.toc-list'] });
  });

  it('meta.class', () => {
    const { tokens } = grammar.tokenizeLine('meta.class');
    expect(tokens[0]).toEqual({ value: 'meta.class', scopes: ['source.shss', 'meta.class'] });
  });

  it('meta.struct', () => {
    const { tokens } = grammar.tokenizeLine('meta.struct');
    expect(tokens[0]).toEqual({ value: 'meta.struct', scopes: ['source.shss', 'meta.struct'] });
  });

  it('meta.enum', () => {
    const { tokens } = grammar.tokenizeLine('meta.enum');
    expect(tokens[0]).toEqual({ value: 'meta.enum', scopes: ['source.shss', 'meta.enum'] });
  });

  it('meta.union', () => {
    const { tokens } = grammar.tokenizeLine('meta.union');
    expect(tokens[0]).toEqual({ value: 'meta.union', scopes: ['source.shss', 'meta.union'] });
  });

  it('meta.trait', () => {
    const { tokens } = grammar.tokenizeLine('meta.trait');
    expect(tokens[0]).toEqual({ value: 'meta.trait', scopes: ['source.shss', 'meta.trait'] });
  });

  it('meta.interface', () => {
    const { tokens } = grammar.tokenizeLine('meta.interface');
    expect(tokens[0]).toEqual({ value: 'meta.interface', scopes: ['source.shss', 'meta.interface'] });
  });

  it('meta.impl', () => {
    const { tokens } = grammar.tokenizeLine('meta.impl');
    expect(tokens[0]).toEqual({ value: 'meta.impl', scopes: ['source.shss', 'meta.impl'] });
  });

  it('meta.type', () => {
    const { tokens } = grammar.tokenizeLine('meta.type');
    expect(tokens[0]).toEqual({ value: 'meta.type', scopes: ['source.shss', 'meta.type'] });
  });

  it('meta.string', () => {
    const { tokens } = grammar.tokenizeLine('meta.string');
    expect(tokens[0]).toEqual({ value: 'meta.string', scopes: ['source.shss', 'meta.string'] });
  });

  it('meta.path', () => {
    const { tokens } = grammar.tokenizeLine('meta.path');
    expect(tokens[0]).toEqual({ value: 'meta.path', scopes: ['source.shss', 'meta.path'] });
  });

  it('meta.function-call', () => {
    const { tokens } = grammar.tokenizeLine('meta.function-call');
    expect(tokens[0]).toEqual({ value: 'meta.function-call', scopes: ['source.shss', 'meta.function-call'] });
  });

  it('meta.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.block');
    expect(tokens[0]).toEqual({ value: 'meta.block', scopes: ['source.shss', 'meta.block'] });
  });

  it('meta.embedded', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded');
    expect(tokens[0]).toEqual({ value: 'meta.embedded', scopes: ['source.shss', 'meta.embedded'] });
  });

  it('meta.braces', () => {
    const { tokens } = grammar.tokenizeLine('meta.braces');
    expect(tokens[0]).toEqual({ value: 'meta.braces', scopes: ['source.shss', 'meta.braces'] });
  });

  it('meta.group', () => {
    const { tokens } = grammar.tokenizeLine('meta.group');
    expect(tokens[0]).toEqual({ value: 'meta.group', scopes: ['source.shss', 'meta.group'] });
  });

  it('meta.parens', () => {
    const { tokens } = grammar.tokenizeLine('meta.parens');
    expect(tokens[0]).toEqual({ value: 'meta.parens', scopes: ['source.shss', 'meta.parens'] });
  });

  it('meta.brackets', () => {
    const { tokens } = grammar.tokenizeLine('meta.brackets');
    expect(tokens[0]).toEqual({ value: 'meta.brackets', scopes: ['source.shss', 'meta.brackets'] });
  });

  it('meta.generic', () => {
    const { tokens } = grammar.tokenizeLine('meta.generic');
    expect(tokens[0]).toEqual({ value: 'meta.generic', scopes: ['source.shss', 'meta.generic'] });
  });

  it('meta.tag', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag');
    expect(tokens[0]).toEqual({ value: 'meta.tag', scopes: ['source.shss', 'meta.tag'] });
  });

  it('meta.leading-tabs', () => {
    const { tokens } = grammar.tokenizeLine('meta.leading-tabs');
    expect(tokens[0]).toEqual({ value: 'meta.leading-tabs', scopes: ['source.shss', 'meta.leading-tabs'] });
  });

  it('meta.odd-tab', () => {
    const { tokens } = grammar.tokenizeLine('meta.odd-tab');
    expect(tokens[0]).toEqual({ value: 'meta.odd-tab', scopes: ['source.shss', 'meta.odd-tab'] });
  });

  it('meta.even-tab', () => {
    const { tokens } = grammar.tokenizeLine('meta.even-tab');
    expect(tokens[0]).toEqual({ value: 'meta.even-tab', scopes: ['source.shss', 'meta.even-tab'] });
  });

  it('meta.paragraph', () => {
    const { tokens } = grammar.tokenizeLine('meta.paragraph');
    expect(tokens[0]).toEqual({ value: 'meta.paragraph', scopes: ['source.shss', 'meta.paragraph'] });
  });

  it('meta.diagnostics.pragma', () => {
    const { tokens } = grammar.tokenizeLine('meta.diagnostics.pragma');
    expect(tokens[0]).toEqual({ value: 'meta.diagnostics.pragma', scopes: ['source.shss', 'meta.diagnostics.pragma'] });
  });

  it('meta.function.parameters', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.function.parameters', scopes: ['source.shss', 'meta.function.parameters'] });
  });

  it('meta.function.parameters', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.function.parameters', scopes: ['source.shss', 'meta.function.parameters'] });
  });

  it('meta.function.return-type', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.return-type');
    expect(tokens[0]).toEqual({ value: 'meta.function.return-type', scopes: ['source.shss', 'meta.function.return-type'] });
  });

  it('meta.function.signature', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.signature');
    expect(tokens[0]).toEqual({ value: 'meta.function.signature', scopes: ['source.shss', 'meta.function.signature'] });
  });

  it('meta.function', () => {
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({ value: 'meta.function', scopes: ['source.shss', 'meta.function'] });
  });

  it('meta.namespace', () => {
    const { tokens } = grammar.tokenizeLine('meta.namespace');
    expect(tokens[0]).toEqual({ value: 'meta.namespace', scopes: ['source.shss', 'meta.namespace'] });
  });

  it('meta.preprocessor.pragma', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.pragma');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor.pragma', scopes: ['source.shss', 'meta.preprocessor.pragma'] });
  });

  it('meta.preprocessor.include', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.include');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor.include', scopes: ['source.shss', 'meta.preprocessor.include'] });
  });

  it('meta.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor', scopes: ['source.shss', 'meta.preprocessor'] });
  });

  it('meta.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('meta.interpolation');
    expect(tokens[0]).toEqual({ value: 'meta.interpolation', scopes: ['source.shss', 'meta.interpolation'] });
  });

  it('meta.annotation.identifier', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.identifier');
    expect(tokens[0]).toEqual({ value: 'meta.annotation.identifier', scopes: ['source.shss', 'meta.annotation.identifier'] });
  });

  it('meta.annotation.parameters', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.annotation.parameters', scopes: ['source.shss', 'meta.annotation.parameters'] });
  });

  it('meta.annotation', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation');
    expect(tokens[0]).toEqual({ value: 'meta.annotation', scopes: ['source.shss', 'meta.annotation'] });
  });

  it('meta', () => {
    const { tokens } = grammar.tokenizeLine('meta');
    expect(tokens[0]).toEqual({ value: 'meta', scopes: ['source.shss', 'meta'] });
  });

  it('punctuation.whitespace.comment.leading', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment.leading');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace.comment.leading', scopes: ['source.shss', 'punctuation.whitespace.comment.leading'] });
  });

  it('punctuation.whitespace.comment', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace.comment', scopes: ['source.shss', 'punctuation.whitespace.comment'] });
  });

  it('punctuation.whitespace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace');
    expect(tokens[0]).toEqual({ value: 'punctuation.whitespace', scopes: ['source.shss', 'punctuation.whitespace'] });
  });

  it('punctuation.terminator.semicolon', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.semicolon');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.semicolon', scopes: ['source.shss', 'punctuation.terminator.semicolon'] });
  });

  it('punctuation.terminator.statement', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.statement');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.statement', scopes: ['source.shss', 'punctuation.terminator.statement'] });
  });

  it('punctuation.terminator.expression', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.expression');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator.expression', scopes: ['source.shss', 'punctuation.terminator.expression'] });
  });

  it('punctuation.terminator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator', scopes: ['source.shss', 'punctuation.terminator'] });
  });

  it('punctuation.delimiter.decimal.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.delimiter.decimal.period');
    expect(tokens[0]).toEqual({ value: 'punctuation.delimiter.decimal.period', scopes: ['source.shss', 'punctuation.delimiter.decimal.period'] });
  });

  it('punctuation.separator.comma', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.comma');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.comma', scopes: ['source.shss', 'punctuation.separator.comma'] });
  });

  it('punctuation.separator.colon', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.colon');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.colon', scopes: ['source.shss', 'punctuation.separator.colon'] });
  });

  it('punctuation.separator.arrow', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.arrow');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.arrow', scopes: ['source.shss', 'punctuation.separator.arrow'] });
  });

  it('punctuation.separator.key-value', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.key-value');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.key-value', scopes: ['source.shss', 'punctuation.separator.key-value'] });
  });

  it('punctuation.separator.inheritance', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.inheritance');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.inheritance', scopes: ['source.shss', 'punctuation.separator.inheritance'] });
  });

  it('punctuation.separator.delimiter', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.delimiter');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.delimiter', scopes: ['source.shss', 'punctuation.separator.delimiter'] });
  });

  it('punctuation.separator.classes', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.classes');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.classes', scopes: ['source.shss', 'punctuation.separator.classes'] });
  });

  it('punctuation.separator.continuation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.continuation', scopes: ['source.shss', 'punctuation.separator.continuation'] });
  });

  it('punctuation.separator.decimal.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal.period');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.decimal.period', scopes: ['source.shss', 'punctuation.separator.decimal.period'] });
  });

  it('punctuation.separator.decimal', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.decimal', scopes: ['source.shss', 'punctuation.separator.decimal'] });
  });

  it('punctuation.separator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator', scopes: ['source.shss', 'punctuation.separator'] });
  });

  it('punctuation.accessor', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.accessor');
    expect(tokens[0]).toEqual({ value: 'punctuation.accessor', scopes: ['source.shss', 'punctuation.accessor'] });
  });

  it('punctuation.section.embedded.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded.begin', scopes: ['source.shss', 'punctuation.section.embedded.begin'] });
  });

  it('punctuation.section.embedded.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded.end', scopes: ['source.shss', 'punctuation.section.embedded.end'] });
  });

  it('punctuation.section.embedded', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.embedded', scopes: ['source.shss', 'punctuation.section.embedded'] });
  });

  it('punctuation.section.array.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array.begin', scopes: ['source.shss', 'punctuation.section.array.begin'] });
  });

  it('punctuation.section.array.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array.end', scopes: ['source.shss', 'punctuation.section.array.end'] });
  });

  it('punctuation.section.array', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.array', scopes: ['source.shss', 'punctuation.section.array'] });
  });

  it('punctuation.section.block.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.begin', scopes: ['source.shss', 'punctuation.section.block.begin'] });
  });

  it('punctuation.section.block.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.end', scopes: ['source.shss', 'punctuation.section.block.end'] });
  });

  it('punctuation.section.block', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block', scopes: ['source.shss', 'punctuation.section.block'] });
  });

  it('punctuation.section.braces.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces.begin', scopes: ['source.shss', 'punctuation.section.braces.begin'] });
  });

  it('punctuation.section.braces.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces.end', scopes: ['source.shss', 'punctuation.section.braces.end'] });
  });

  it('punctuation.section.braces', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.braces', scopes: ['source.shss', 'punctuation.section.braces'] });
  });

  it('punctuation.section.group.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group.begin', scopes: ['source.shss', 'punctuation.section.group.begin'] });
  });

  it('punctuation.section.group.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group.end', scopes: ['source.shss', 'punctuation.section.group.end'] });
  });

  it('punctuation.section.group', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.group', scopes: ['source.shss', 'punctuation.section.group'] });
  });

  it('punctuation.section.parens.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens.begin', scopes: ['source.shss', 'punctuation.section.parens.begin'] });
  });

  it('punctuation.section.parens.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens.end', scopes: ['source.shss', 'punctuation.section.parens.end'] });
  });

  it('punctuation.section.parens', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parens', scopes: ['source.shss', 'punctuation.section.parens'] });
  });

  it('punctuation.section.brackets.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets.begin', scopes: ['source.shss', 'punctuation.section.brackets.begin'] });
  });

  it('punctuation.section.brackets.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets.end', scopes: ['source.shss', 'punctuation.section.brackets.end'] });
  });

  it('punctuation.section.brackets', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brackets', scopes: ['source.shss', 'punctuation.section.brackets'] });
  });

  it('punctuation.section.interpolation.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.end', scopes: ['source.shss', 'punctuation.section.interpolation.end'] });
  });

  it('punctuation.section.interpolation.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.begin', scopes: ['source.shss', 'punctuation.section.interpolation.begin'] });
  });

  it('punctuation.section.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation', scopes: ['source.shss', 'punctuation.section.interpolation'] });
  });

  it('punctuation.section.brace.curly.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket.begin', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.begin'] });
  });

  it('punctuation.section.brace.curly.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket.end', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.end'] });
  });

  it('punctuation.section.brace.curly.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly.bracket', scopes: ['source.shss', 'punctuation.section.brace.curly.bracket'] });
  });

  it('punctuation.section.brace.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace.curly', scopes: ['source.shss', 'punctuation.section.brace.curly'] });
  });

  it('punctuation.section.brace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.brace', scopes: ['source.shss', 'punctuation.section.brace'] });
  });

  it('punctuation.section.square.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket.begin', scopes: ['source.shss', 'punctuation.section.square.bracket.begin'] });
  });

  it('punctuation.section.square.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket.end', scopes: ['source.shss', 'punctuation.section.square.bracket.end'] });
  });

  it('punctuation.section.square.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square.bracket', scopes: ['source.shss', 'punctuation.section.square.bracket'] });
  });

  it('punctuation.section.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.square', scopes: ['source.shss', 'punctuation.section.square'] });
  });

  it('punctuation.section.scope.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope.begin', scopes: ['source.shss', 'punctuation.section.scope.begin'] });
  });

  it('punctuation.section.scope.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope.end', scopes: ['source.shss', 'punctuation.section.scope.end'] });
  });

  it('punctuation.section.scope', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.scope', scopes: ['source.shss', 'punctuation.section.scope'] });
  });

  it('punctuation.section.parenthesis.round.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket.begin', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.begin'] });
  });

  it('punctuation.section.parenthesis.round.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket.end', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.end'] });
  });

  it('punctuation.section.parenthesis.round.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round.bracket', scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket'] });
  });

  it('punctuation.section.parenthesis.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis.round', scopes: ['source.shss', 'punctuation.section.parenthesis.round'] });
  });

  it('punctuation.section.parenthesis', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.parenthesis', scopes: ['source.shss', 'punctuation.section.parenthesis'] });
  });

  it('punctuation.section.signature.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin.bracket.curly', scopes: ['source.shss', 'punctuation.section.signature.begin.bracket.curly'] });
  });

  it('punctuation.section.signature.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin.bracket', scopes: ['source.shss', 'punctuation.section.signature.begin.bracket'] });
  });

  it('punctuation.section.signature.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature.begin', scopes: ['source.shss', 'punctuation.section.signature.begin'] });
  });

  it('punctuation.section.signature', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.signature', scopes: ['source.shss', 'punctuation.section.signature'] });
  });

  it('punctuation.section', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section');
    expect(tokens[0]).toEqual({ value: 'punctuation.section', scopes: ['source.shss', 'punctuation.section'] });
  });

  it('punctuation.definition.heredoc.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc.begin', scopes: ['source.shss', 'punctuation.definition.heredoc.begin'] });
  });

  it('punctuation.definition.heredoc.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc.end', scopes: ['source.shss', 'punctuation.definition.heredoc.end'] });
  });

  it('punctuation.definition.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.heredoc', scopes: ['source.shss', 'punctuation.definition.heredoc'] });
  });

  it('punctuation.definition.array.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.begin.bracket.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.array.begin.bracket.round', scopes: ['source.shss', 'punctuation.definition.array.begin.bracket.round'] });
  });

  it('punctuation.definition.array.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.end.bracket.round');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.array.end.bracket.round', scopes: ['source.shss', 'punctuation.definition.array.end.bracket.round'] });
  });

  it('punctuation.definition.constant', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.constant');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.constant', scopes: ['source.shss', 'punctuation.definition.constant'] });
  });

  it('punctuation.definition.arbitrary-repetition', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arbitrary-repetition');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.arbitrary-repetition', scopes: ['source.shss', 'punctuation.definition.arbitrary-repetition'] });
  });

  it('punctuation.definition.tag.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag.begin', scopes: ['source.shss', 'punctuation.definition.tag.begin'] });
  });

  it('punctuation.definition.tag.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag.end', scopes: ['source.shss', 'punctuation.definition.tag.end'] });
  });

  it('punctuation.definition.tag', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.tag', scopes: ['source.shss', 'punctuation.definition.tag'] });
  });

  it('punctuation.definition.string.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string.begin', scopes: ['source.shss', 'punctuation.definition.string.begin'] });
  });

  it('punctuation.definition.string.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string.end', scopes: ['source.shss', 'punctuation.definition.string.end'] });
  });

  it('punctuation.definition.string', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.string', scopes: ['source.shss', 'punctuation.definition.string'] });
  });

  it('punctuation.definition.comment.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment.begin', scopes: ['source.shss', 'punctuation.definition.comment.begin'] });
  });

  it('punctuation.definition.comment.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment.end', scopes: ['source.shss', 'punctuation.definition.comment.end'] });
  });

  it('punctuation.definition.comment', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment', scopes: ['source.shss', 'punctuation.definition.comment'] });
  });

  it('punctuation.definition.keyword.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword.begin', scopes: ['source.shss', 'punctuation.definition.keyword.begin'] });
  });

  it('punctuation.definition.keyword.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword.end', scopes: ['source.shss', 'punctuation.definition.keyword.end'] });
  });

  it('punctuation.definition.keyword', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword', scopes: ['source.shss', 'punctuation.definition.keyword'] });
  });

  it('punctuation.definition.annotation.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation.begin', scopes: ['source.shss', 'punctuation.definition.annotation.begin'] });
  });

  it('punctuation.definition.annotation.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation.end', scopes: ['source.shss', 'punctuation.definition.annotation.end'] });
  });

  it('punctuation.definition.annotation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation', scopes: ['source.shss', 'punctuation.definition.annotation'] });
  });

  it('punctuation.definition.generic.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic.begin', scopes: ['source.shss', 'punctuation.definition.generic.begin'] });
  });

  it('punctuation.definition.generic.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic.end', scopes: ['source.shss', 'punctuation.definition.generic.end'] });
  });

  it('punctuation.definition.generic', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.generic', scopes: ['source.shss', 'punctuation.definition.generic'] });
  });

  it('punctuation.definition.variable.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable.begin', scopes: ['source.shss', 'punctuation.definition.variable.begin'] });
  });

  it('punctuation.definition.variable.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable.end', scopes: ['source.shss', 'punctuation.definition.variable.end'] });
  });

  it('punctuation.definition.variable', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable', scopes: ['source.shss', 'punctuation.definition.variable'] });
  });

  it('punctuation.definition', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition', scopes: ['source.shss', 'punctuation.definition'] });
  });

  it('punctuation.unmatched.brace.curly.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket.begin', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.begin'] });
  });

  it('punctuation.unmatched.brace.curly.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket.end', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.end'] });
  });

  it('punctuation.unmatched.brace.curly.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly.bracket', scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket'] });
  });

  it('punctuation.unmatched.brace.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace.curly', scopes: ['source.shss', 'punctuation.unmatched.brace.curly'] });
  });

  it('punctuation.unmatched.brace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched.brace', scopes: ['source.shss', 'punctuation.unmatched.brace'] });
  });

  it('punctuation.unmatched', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched');
    expect(tokens[0]).toEqual({ value: 'punctuation.unmatched', scopes: ['source.shss', 'punctuation.unmatched'] });
  });

  it('punctuation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation');
    expect(tokens[0]).toEqual({ value: 'punctuation', scopes: ['source.shss', 'punctuation'] });
  });

  it('storage.modifier.extends', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.extends');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.extends', scopes: ['source.shss', 'storage.modifier.extends'] });
  });

  it('storage.modifier.static', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.static');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.static', scopes: ['source.shss', 'storage.modifier.static'] });
  });

  it('storage.modifier.final', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.final');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.final', scopes: ['source.shss', 'storage.modifier.final'] });
  });

  it('storage.modifier.abstract', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.abstract');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.abstract', scopes: ['source.shss', 'storage.modifier.abstract'] });
  });

  it('storage.modifier.public', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.public');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.public', scopes: ['source.shss', 'storage.modifier.public'] });
  });

  it('storage.modifier.private', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.private');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.private', scopes: ['source.shss', 'storage.modifier.private'] });
  });

  it('storage.modifier.protected', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.protected');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.protected', scopes: ['source.shss', 'storage.modifier.protected'] });
  });

  it('storage.modifier.reference', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.reference');
    expect(tokens[0]).toEqual({ value: 'storage.modifier.reference', scopes: ['source.shss', 'storage.modifier.reference'] });
  });

  it('storage.modifier', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier');
    expect(tokens[0]).toEqual({ value: 'storage.modifier', scopes: ['source.shss', 'storage.modifier'] });
  });

  it('storage.type.signature.method', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature.method');
    expect(tokens[0]).toEqual({ value: 'storage.type.signature.method', scopes: ['source.shss', 'storage.type.signature.method'] });
  });

  it('storage.type.signature', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature');
    expect(tokens[0]).toEqual({ value: 'storage.type.signature', scopes: ['source.shss', 'storage.type.signature'] });
  });

  it('storage.type.function', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.function');
    expect(tokens[0]).toEqual({ value: 'storage.type.function', scopes: ['source.shss', 'storage.type.function'] });
  });

  it('storage.type.class', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.class');
    expect(tokens[0]).toEqual({ value: 'storage.type.class', scopes: ['source.shss', 'storage.type.class'] });
  });

  it('storage.type.interface', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.interface');
    expect(tokens[0]).toEqual({ value: 'storage.type.interface', scopes: ['source.shss', 'storage.type.interface'] });
  });

  it('storage.type.int', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.int');
    expect(tokens[0]).toEqual({ value: 'storage.type.int', scopes: ['source.shss', 'storage.type.int'] });
  });

  it('storage.type.var', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.var');
    expect(tokens[0]).toEqual({ value: 'storage.type.var', scopes: ['source.shss', 'storage.type.var'] });
  });

  it('storage.type.struct', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.struct');
    expect(tokens[0]).toEqual({ value: 'storage.type.struct', scopes: ['source.shss', 'storage.type.struct'] });
  });

  it('storage.type.enum', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.enum');
    expect(tokens[0]).toEqual({ value: 'storage.type.enum', scopes: ['source.shss', 'storage.type.enum'] });
  });

  it('storage.type.union', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.union');
    expect(tokens[0]).toEqual({ value: 'storage.type.union', scopes: ['source.shss', 'storage.type.union'] });
  });

  it('storage.type.trait', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.trait');
    expect(tokens[0]).toEqual({ value: 'storage.type.trait', scopes: ['source.shss', 'storage.type.trait'] });
  });

  it('storage.type.impl', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.impl');
    expect(tokens[0]).toEqual({ value: 'storage.type.impl', scopes: ['source.shss', 'storage.type.impl'] });
  });

  it('storage.type', () => {
    const { tokens } = grammar.tokenizeLine('storage.type');
    expect(tokens[0]).toEqual({ value: 'storage.type', scopes: ['source.shss', 'storage.type'] });
  });

  it('storage', () => {
    const { tokens } = grammar.tokenizeLine('storage');
    expect(tokens[0]).toEqual({ value: 'storage', scopes: ['source.shss', 'storage'] });
  });

  it('keyword.declaration.function', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.function');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.function', scopes: ['source.shss', 'keyword.declaration.function'] });
  });

  it('keyword.declaration.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.class');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.class', scopes: ['source.shss', 'keyword.declaration.class'] });
  });

  it('keyword.declaration.struct', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.struct');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.struct', scopes: ['source.shss', 'keyword.declaration.struct'] });
  });

  it('keyword.declaration.enum', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.enum');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.enum', scopes: ['source.shss', 'keyword.declaration.enum'] });
  });

  it('keyword.declaration.union', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.union');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.union', scopes: ['source.shss', 'keyword.declaration.union'] });
  });

  it('keyword.declaration.trait', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.trait');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.trait', scopes: ['source.shss', 'keyword.declaration.trait'] });
  });

  it('keyword.declaration.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.interface', scopes: ['source.shss', 'keyword.declaration.interface'] });
  });

  it('keyword.declaration.impl', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.impl');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.impl', scopes: ['source.shss', 'keyword.declaration.impl'] });
  });

  it('keyword.declaration.type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.type');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration.type', scopes: ['source.shss', 'keyword.declaration.type'] });
  });

  it('keyword.declaration', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration', scopes: ['source.shss', 'keyword.declaration'] });
  });

  it('keyword.operator.ellipsis.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis.placeholder');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ellipsis.placeholder', scopes: ['source.shss', 'keyword.operator.ellipsis.placeholder'] });
  });

  it('keyword.operator.ellipsis', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ellipsis', scopes: ['source.shss', 'keyword.operator.ellipsis'] });
  });

  it('keyword.operator.readline', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.readline');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.readline', scopes: ['source.shss', 'keyword.operator.readline'] });
  });

  it('keyword.operator.filetest', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.filetest');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.filetest', scopes: ['source.shss', 'keyword.operator.filetest'] });
  });

  it('keyword.operator.comparison.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.comparison.stringwise', scopes: ['source.shss', 'keyword.operator.comparison.stringwise'] });
  });

  it('keyword.operator.comparison', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.comparison', scopes: ['source.shss', 'keyword.operator.comparison'] });
  });

  it('keyword.operator.pragma.flag', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma.flag');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.pragma.flag', scopes: ['source.shss', 'keyword.operator.pragma.flag'] });
  });

  it('keyword.operator.pragma', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.pragma', scopes: ['source.shss', 'keyword.operator.pragma'] });
  });

  it('keyword.operator.repetition', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.repetition');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.repetition', scopes: ['source.shss', 'keyword.operator.repetition'] });
  });

  it('keyword.operator.concatenation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.concatenation');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.concatenation', scopes: ['source.shss', 'keyword.operator.concatenation'] });
  });

  it('keyword.operator.range', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.range');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.range', scopes: ['source.shss', 'keyword.operator.range'] });
  });

  it('keyword.operator.assignement.compound.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound.bitwise', scopes: ['source.shss', 'keyword.operator.assignement.compound.bitwise'] });
  });

  it('keyword.operator.assignement.compound.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound.stringwise', scopes: ['source.shss', 'keyword.operator.assignement.compound.stringwise'] });
  });

  it('keyword.operator.assignement.compound', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.compound', scopes: ['source.shss', 'keyword.operator.assignement.compound'] });
  });

  it('keyword.operator.assignement.conditional', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.conditional');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement.conditional', scopes: ['source.shss', 'keyword.operator.assignement.conditional'] });
  });

  it('keyword.operator.assignement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignement', scopes: ['source.shss', 'keyword.operator.assignement'] });
  });

  it('keyword.operator.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.bitwise', scopes: ['source.shss', 'keyword.operator.bitwise'] });
  });

  it('keyword.operator.decrement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.decrement');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.decrement', scopes: ['source.shss', 'keyword.operator.decrement'] });
  });

  it('keyword.operator.increment', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.increment');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.increment', scopes: ['source.shss', 'keyword.operator.increment'] });
  });

  it('keyword.operator.logical.c-style', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.c-style');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical.c-style', scopes: ['source.shss', 'keyword.operator.logical.c-style'] });
  });

  it('keyword.operator.logical.defined-or', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.defined-or');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical.defined-or', scopes: ['source.shss', 'keyword.operator.logical.defined-or'] });
  });

  it('keyword.operator.logical', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical', scopes: ['source.shss', 'keyword.operator.logical'] });
  });

  it('keyword.operator.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.stringwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.stringwise', scopes: ['source.shss', 'keyword.operator.stringwise'] });
  });

  it('keyword.operator.arithmetic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.arithmetic', scopes: ['source.shss', 'keyword.operator.arithmetic'] });
  });

  it('keyword.operator.ternary', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ternary');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.ternary', scopes: ['source.shss', 'keyword.operator.ternary'] });
  });

  it('keyword.operator.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.heredoc');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.heredoc', scopes: ['source.shss', 'keyword.operator.heredoc'] });
  });

  it('keyword.operator.null-coalescing', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.null-coalescing');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.null-coalescing', scopes: ['source.shss', 'keyword.operator.null-coalescing'] });
  });

  it('keyword.operator.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.interface', scopes: ['source.shss', 'keyword.operator.interface'] });
  });

  it('keyword.operator.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.class');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.class', scopes: ['source.shss', 'keyword.operator.class'] });
  });

  it('keyword.operator.nullable-type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.nullable-type');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.nullable-type', scopes: ['source.shss', 'keyword.operator.nullable-type'] });
  });

  it('keyword.operator.assignment', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.assignment', scopes: ['source.shss', 'keyword.operator.assignment'] });
  });

  it('keyword.operator.arithmetic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.arithmetic', scopes: ['source.shss', 'keyword.operator.arithmetic'] });
  });

  it('keyword.operator.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.bitwise', scopes: ['source.shss', 'keyword.operator.bitwise'] });
  });

  it('keyword.operator.logical', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.logical', scopes: ['source.shss', 'keyword.operator.logical'] });
  });

  it('keyword.operator.word', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.word');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.word', scopes: ['source.shss', 'keyword.operator.word'] });
  });

  it('keyword.operator.regexp', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.regexp');
    expect(tokens[0]).toEqual({ value: 'keyword.operator.regexp', scopes: ['source.shss', 'keyword.operator.regexp'] });
  });

  it('keyword.operator', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator');
    expect(tokens[0]).toEqual({ value: 'keyword.operator', scopes: ['source.shss', 'keyword.operator'] });
  });

  it('keyword.control.directive.pragma', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.pragma');
    expect(tokens[0]).toEqual({ value: 'keyword.control.directive.pragma', scopes: ['source.shss', 'keyword.control.directive.pragma'] });
  });

  it('keyword.control.directive', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive');
    expect(tokens[0]).toEqual({ value: 'keyword.control.directive', scopes: ['source.shss', 'keyword.control.directive'] });
  });

  it('keyword.control.diagnostics', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.diagnostics');
    expect(tokens[0]).toEqual({ value: 'keyword.control.diagnostics', scopes: ['source.shss', 'keyword.control.diagnostics'] });
  });

  it('keyword.control.regexp-option', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.regexp-option');
    expect(tokens[0]).toEqual({ value: 'keyword.control.regexp-option', scopes: ['source.shss', 'keyword.control.regexp-option'] });
  });

  it('keyword.control.conditional', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.conditional');
    expect(tokens[0]).toEqual({ value: 'keyword.control.conditional', scopes: ['source.shss', 'keyword.control.conditional'] });
  });

  it('keyword.control.anchor', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.anchor');
    expect(tokens[0]).toEqual({ value: 'keyword.control.anchor', scopes: ['source.shss', 'keyword.control.anchor'] });
  });

  it('keyword.control.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.import');
    expect(tokens[0]).toEqual({ value: 'keyword.control.import', scopes: ['source.shss', 'keyword.control.import'] });
  });

  it('keyword.control.continue', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.continue');
    expect(tokens[0]).toEqual({ value: 'keyword.control.continue', scopes: ['source.shss', 'keyword.control.continue'] });
  });

  it('keyword.control.while', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.while');
    expect(tokens[0]).toEqual({ value: 'keyword.control.while', scopes: ['source.shss', 'keyword.control.while'] });
  });

  it('keyword.control.return', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.return');
    expect(tokens[0]).toEqual({ value: 'keyword.control.return', scopes: ['source.shss', 'keyword.control.return'] });
  });

  it('keyword.control', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control');
    expect(tokens[0]).toEqual({ value: 'keyword.control', scopes: ['source.shss', 'keyword.control'] });
  });

  it('keyword.other.namespace', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.namespace');
    expect(tokens[0]).toEqual({ value: 'keyword.other.namespace', scopes: ['source.shss', 'keyword.other.namespace'] });
  });

  it('keyword.other.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.class');
    expect(tokens[0]).toEqual({ value: 'keyword.other.class', scopes: ['source.shss', 'keyword.other.class'] });
  });

  it('keyword.other.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.interface');
    expect(tokens[0]).toEqual({ value: 'keyword.other.interface', scopes: ['source.shss', 'keyword.other.interface'] });
  });

  it('keyword.other.type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.type');
    expect(tokens[0]).toEqual({ value: 'keyword.other.type', scopes: ['source.shss', 'keyword.other.type'] });
  });

  it('keyword.other', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other');
    expect(tokens[0]).toEqual({ value: 'keyword.other', scopes: ['source.shss', 'keyword.other'] });
  });

  it('keyword', () => {
    const { tokens } = grammar.tokenizeLine('keyword');
    expect(tokens[0]).toEqual({ value: 'keyword', scopes: ['source.shss', 'keyword'] });
  });

  it('source.language-suffix.embedded', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix.embedded');
    expect(tokens[0]).toEqual({ value: 'source.language-suffix.embedded', scopes: ['source.shss', 'source.language-suffix.embedded'] });
  });

  it('source.language-suffix', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix');
    expect(tokens[0]).toEqual({ value: 'source.language-suffix', scopes: ['source.shss', 'source.language-suffix'] });
  });

  it('source', () => {
    const { tokens } = grammar.tokenizeLine('source');
    expect(tokens[0]).toEqual({ value: 'source', scopes: ['source.shss', 'source'] });
  });

  it('string.interpolated.qx-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-paren');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-paren', scopes: ['source.shss', 'string.interpolated.qx-paren'] });
  });

  it('string.interpolated.qx-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-brace');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-brace', scopes: ['source.shss', 'string.interpolated.qx-brace'] });
  });

  it('string.interpolated.qx-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-bracket');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-bracket', scopes: ['source.shss', 'string.interpolated.qx-bracket'] });
  });

  it('string.interpolated.qx-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.interpolated.qx-ltgt', scopes: ['source.shss', 'string.interpolated.qx-ltgt'] });
  });

  it('string.quoted.other.qq-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-ltgt', scopes: ['source.shss', 'string.quoted.other.qq-ltgt'] });
  });

  it('string.quoted.other.qq-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-paren');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-paren', scopes: ['source.shss', 'string.quoted.other.qq-paren'] });
  });

  it('string.quoted.other.qq-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-brace');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-brace', scopes: ['source.shss', 'string.quoted.other.qq-brace'] });
  });

  it('string.quoted.other.qq-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-bracket');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.qq-bracket', scopes: ['source.shss', 'string.quoted.other.qq-bracket'] });
  });

  it('string.quoted.other.q-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-paren');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-paren', scopes: ['source.shss', 'string.quoted.other.q-paren'] });
  });

  it('string.quoted.other.q-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-brace');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-brace', scopes: ['source.shss', 'string.quoted.other.q-brace'] });
  });

  it('string.quoted.other.q-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-bracket');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-bracket', scopes: ['source.shss', 'string.quoted.other.q-bracket'] });
  });

  it('string.quoted.other.q-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-ltgt');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other.q-ltgt', scopes: ['source.shss', 'string.quoted.other.q-ltgt'] });
  });

  it('string.quoted.other', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other', scopes: ['source.shss', 'string.quoted.other'] });
  });

  it('string.quoted.single', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single');
    expect(tokens[0]).toEqual({ value: 'string.quoted.single', scopes: ['source.shss', 'string.quoted.single'] });
  });

  it('string.quoted.double', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double');
    expect(tokens[0]).toEqual({ value: 'string.quoted.double', scopes: ['source.shss', 'string.quoted.double'] });
  });

  it('string.quoted.triple', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.triple');
    expect(tokens[0]).toEqual({ value: 'string.quoted.triple', scopes: ['source.shss', 'string.quoted.triple'] });
  });

  it('string.quoted.other', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({ value: 'string.quoted.other', scopes: ['source.shss', 'string.quoted.other'] });
  });

  it('string.quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted');
    expect(tokens[0]).toEqual({ value: 'string.quoted', scopes: ['source.shss', 'string.quoted'] });
  });

  it('string.unquoted.heredoc.backtick', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.backtick');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.backtick', scopes: ['source.shss', 'string.unquoted.heredoc.backtick'] });
  });

  it('string.unquoted.heredoc.quote', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.quote');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.quote', scopes: ['source.shss', 'string.unquoted.heredoc.quote'] });
  });

  it('string.unquoted.heredoc.doublequote', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.doublequote');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc.doublequote', scopes: ['source.shss', 'string.unquoted.heredoc.doublequote'] });
  });

  it('string.unquoted.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.heredoc', scopes: ['source.shss', 'string.unquoted.heredoc'] });
  });

  it('string.unquoted.program-block', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.program-block');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.program-block', scopes: ['source.shss', 'string.unquoted.program-block'] });
  });

  it('string.unquoted.index', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.index');
    expect(tokens[0]).toEqual({ value: 'string.unquoted.index', scopes: ['source.shss', 'string.unquoted.index'] });
  });

  it('string.unquoted', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted');
    expect(tokens[0]).toEqual({ value: 'string.unquoted', scopes: ['source.shss', 'string.unquoted'] });
  });

  it('string.regexp.replace.extended.simple_delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace.extended.simple_delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.replace.extended.simple_delimiter', scopes: ['source.shss', 'string.regexp.replace.extended.simple_delimiter'] });
  });

  it('string.regexp.format.nested_braces', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_braces');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_braces', scopes: ['source.shss', 'string.regexp.format.nested_braces'] });
  });

  it('string.regexp.format.nested_parens', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_parens');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_parens', scopes: ['source.shss', 'string.regexp.format.nested_parens'] });
  });

  it('string.regexp.format.single_quote', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.single_quote');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.single_quote', scopes: ['source.shss', 'string.regexp.format.single_quote'] });
  });

  it('string.regexp.format.simple_delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.simple_delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.simple_delimiter', scopes: ['source.shss', 'string.regexp.format.simple_delimiter'] });
  });

  it('string.regexp.format.nested_ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_ltgt');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format.nested_ltgt', scopes: ['source.shss', 'string.regexp.format.nested_ltgt'] });
  });

  it('string.regexp.format', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format');
    expect(tokens[0]).toEqual({ value: 'string.regexp.format', scopes: ['source.shss', 'string.regexp.format'] });
  });

  it('string.regexp.nested_ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_ltgt');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_ltgt', scopes: ['source.shss', 'string.regexp.nested_ltgt'] });
  });

  it('string.regexp.nested_parens', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_parens');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_parens', scopes: ['source.shss', 'string.regexp.nested_parens'] });
  });

  it('string.regexp.nested_braces', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_braces');
    expect(tokens[0]).toEqual({ value: 'string.regexp.nested_braces', scopes: ['source.shss', 'string.regexp.nested_braces'] });
  });

  it('string.regexp.find-m.simple-delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.simple-delimiter');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find-m.simple-delimiter', scopes: ['source.shss', 'string.regexp.find-m.simple-delimiter'] });
  });

  it('string.regexp.find-m.single-quote', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.single-quote');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find-m.single-quote', scopes: ['source.shss', 'string.regexp.find-m.single-quote'] });
  });

  it('string.regexp.find', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find');
    expect(tokens[0]).toEqual({ value: 'string.regexp.find', scopes: ['source.shss', 'string.regexp.find'] });
  });

  it('string.regexp.character-class', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.character-class');
    expect(tokens[0]).toEqual({ value: 'string.regexp.character-class', scopes: ['source.shss', 'string.regexp.character-class'] });
  });

  it('string.regexp.arbitrary-repetition', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.arbitrary-repetition');
    expect(tokens[0]).toEqual({ value: 'string.regexp.arbitrary-repetition', scopes: ['source.shss', 'string.regexp.arbitrary-repetition'] });
  });

  it('string.regexp.single-quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.single-quoted');
    expect(tokens[0]).toEqual({ value: 'string.regexp.single-quoted', scopes: ['source.shss', 'string.regexp.single-quoted'] });
  });

  it('string.regexp.double-quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.double-quoted');
    expect(tokens[0]).toEqual({ value: 'string.regexp.double-quoted', scopes: ['source.shss', 'string.regexp.double-quoted'] });
  });

  it('string.regexp.replace', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace');
    expect(tokens[0]).toEqual({ value: 'string.regexp.replace', scopes: ['source.shss', 'string.regexp.replace'] });
  });

  it('string.regexp', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp');
    expect(tokens[0]).toEqual({ value: 'string.regexp', scopes: ['source.shss', 'string.regexp'] });
  });

  it('string.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated');
    expect(tokens[0]).toEqual({ value: 'string.interpolated', scopes: ['source.shss', 'string.interpolated'] });
  });

  it('string.other', () => {
    const { tokens } = grammar.tokenizeLine('string.other');
    expect(tokens[0]).toEqual({ value: 'string.other', scopes: ['source.shss', 'string.other'] });
  });

  it('string', () => {
    const { tokens } = grammar.tokenizeLine('string');
    expect(tokens[0]).toEqual({ value: 'string', scopes: ['source.shss', 'string'] });
  });

  it('support.constant.ext', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.ext');
    expect(tokens[0]).toEqual({ value: 'support.constant.ext', scopes: ['source.shss', 'support.constant.ext'] });
  });

  it('support.constant', () => {
    const { tokens } = grammar.tokenizeLine('support.constant');
    expect(tokens[0]).toEqual({ value: 'support.constant', scopes: ['source.shss', 'support.constant'] });
  });

  it('support.function.magic', () => {
    const { tokens } = grammar.tokenizeLine('support.function.magic');
    expect(tokens[0]).toEqual({ value: 'support.function.magic', scopes: ['source.shss', 'support.function.magic'] });
  });

  it('support.function', () => {
    const { tokens } = grammar.tokenizeLine('support.function');
    expect(tokens[0]).toEqual({ value: 'support.function', scopes: ['source.shss', 'support.function'] });
  });

  it('support.module', () => {
    const { tokens } = grammar.tokenizeLine('support.module');
    expect(tokens[0]).toEqual({ value: 'support.module', scopes: ['source.shss', 'support.module'] });
  });

  it('support.type', () => {
    const { tokens } = grammar.tokenizeLine('support.type');
    expect(tokens[0]).toEqual({ value: 'support.type', scopes: ['source.shss', 'support.type'] });
  });

  it('support.class', () => {
    const { tokens } = grammar.tokenizeLine('support.class');
    expect(tokens[0]).toEqual({ value: 'support.class', scopes: ['source.shss', 'support.class'] });
  });

  it('support.variable', () => {
    const { tokens } = grammar.tokenizeLine('support.variable');
    expect(tokens[0]).toEqual({ value: 'support.variable', scopes: ['source.shss', 'support.variable'] });
  });

  it('support.struct', () => {
    const { tokens } = grammar.tokenizeLine('support.struct');
    expect(tokens[0]).toEqual({ value: 'support.struct', scopes: ['source.shss', 'support.struct'] });
  });

  it('support.other.namespace', () => {
    const { tokens } = grammar.tokenizeLine('support.other.namespace');
    expect(tokens[0]).toEqual({ value: 'support.other.namespace', scopes: ['source.shss', 'support.other.namespace'] });
  });

  it('support.other', () => {
    const { tokens } = grammar.tokenizeLine('support.other');
    expect(tokens[0]).toEqual({ value: 'support.other', scopes: ['source.shss', 'support.other'] });
  });

  it('support', () => {
    const { tokens } = grammar.tokenizeLine('support');
    expect(tokens[0]).toEqual({ value: 'support', scopes: ['source.shss', 'support'] });
  });

  it('text.html.basic', () => {
    const { tokens } = grammar.tokenizeLine('text.html.basic');
    expect(tokens[0]).toEqual({ value: 'text.html.basic', scopes: ['source.shss', 'text.html.basic'] });
  });

  it('text.html.markdown', () => {
    const { tokens } = grammar.tokenizeLine('text.html.markdown');
    expect(tokens[0]).toEqual({ value: 'text.html.markdown', scopes: ['source.shss', 'text.html.markdown'] });
  });

  it('text.html', () => {
    const { tokens } = grammar.tokenizeLine('text.html');
    expect(tokens[0]).toEqual({ value: 'text.html', scopes: ['source.shss', 'text.html'] });
  });

  it('text.xml', () => {
    const { tokens } = grammar.tokenizeLine('text.xml');
    expect(tokens[0]).toEqual({ value: 'text.xml', scopes: ['source.shss', 'text.xml'] });
  });

  it('text.plain', () => {
    const { tokens } = grammar.tokenizeLine('text.plain');
    expect(tokens[0]).toEqual({ value: 'text.plain', scopes: ['source.shss', 'text.plain'] });
  });

  it('text', () => {
    const { tokens } = grammar.tokenizeLine('text');
    expect(tokens[0]).toEqual({ value: 'text', scopes: ['source.shss', 'text'] });
  });

  it('variable.annotation', () => {
    const { tokens } = grammar.tokenizeLine('variable.annotation');
    expect(tokens[0]).toEqual({ value: 'variable.annotation', scopes: ['source.shss', 'variable.annotation'] });
  });

  it('variable.function', () => {
    const { tokens } = grammar.tokenizeLine('variable.function');
    expect(tokens[0]).toEqual({ value: 'variable.function', scopes: ['source.shss', 'variable.function'] });
  });

  it('variable.other.readwrite.list-separator', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.list-separator');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite.list-separator', scopes: ['source.shss', 'variable.other.readwrite.list-separator'] });
  });

  it('variable.other.regexp.last-paren-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.last-paren-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.last-paren-match', scopes: ['source.shss', 'variable.other.regexp.last-paren-match'] });
  });

  it('variable.other.regexp.post-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.post-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.post-match', scopes: ['source.shss', 'variable.other.regexp.post-match'] });
  });

  it('variable.other.regexp.pre-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.pre-match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.pre-match', scopes: ['source.shss', 'variable.other.regexp.pre-match'] });
  });

  it('variable.other.regexp.match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.match');
    expect(tokens[0]).toEqual({ value: 'variable.other.regexp.match', scopes: ['source.shss', 'variable.other.regexp.match'] });
  });

  it('variable.other.readwrite.global', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.global');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite.global', scopes: ['source.shss', 'variable.other.readwrite.global'] });
  });

  it('variable.other.readwrite', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite', scopes: ['source.shss', 'variable.other.readwrite'] });
  });

  it('variable.other.subpattern', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.subpattern');
    expect(tokens[0]).toEqual({ value: 'variable.other.subpattern', scopes: ['source.shss', 'variable.other.subpattern'] });
  });

  it('variable.other.predefined', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.predefined');
    expect(tokens[0]).toEqual({ value: 'variable.other.predefined', scopes: ['source.shss', 'variable.other.predefined'] });
  });

  it('variable.other.index', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.index');
    expect(tokens[0]).toEqual({ value: 'variable.other.index', scopes: ['source.shss', 'variable.other.index'] });
  });

  it('variable.other.global.safer', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global.safer');
    expect(tokens[0]).toEqual({ value: 'variable.other.global.safer', scopes: ['source.shss', 'variable.other.global.safer'] });
  });

  it('variable.other.global', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global');
    expect(tokens[0]).toEqual({ value: 'variable.other.global', scopes: ['source.shss', 'variable.other.global'] });
  });

  it('variable.other.member', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.member');
    expect(tokens[0]).toEqual({ value: 'variable.other.member', scopes: ['source.shss', 'variable.other.member'] });
  });

  it('variable.other.readwrite', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite', scopes: ['source.shss', 'variable.other.readwrite'] });
  });

  it('variable.other.constant', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.constant');
    expect(tokens[0]).toEqual({ value: 'variable.other.constant', scopes: ['source.shss', 'variable.other.constant'] });
  });

  it('variable.other.property', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.property');
    expect(tokens[0]).toEqual({ value: 'variable.other.property', scopes: ['source.shss', 'variable.other.property'] });
  });

  it('variable.other', () => {
    const { tokens } = grammar.tokenizeLine('variable.other');
    expect(tokens[0]).toEqual({ value: 'variable.other', scopes: ['source.shss', 'variable.other'] });
  });

  it('variable.language.namespace', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.namespace');
    expect(tokens[0]).toEqual({ value: 'variable.language.namespace', scopes: ['source.shss', 'variable.language.namespace'] });
  });

  it('variable.language.this', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.this');
    expect(tokens[0]).toEqual({ value: 'variable.language.this', scopes: ['source.shss', 'variable.language.this'] });
  });

  it('variable.language.super', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.super');
    expect(tokens[0]).toEqual({ value: 'variable.language.super', scopes: ['source.shss', 'variable.language.super'] });
  });

  it('variable.language.self', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.self');
    expect(tokens[0]).toEqual({ value: 'variable.language.self', scopes: ['source.shss', 'variable.language.self'] });
  });

  it('variable.language', () => {
    const { tokens } = grammar.tokenizeLine('variable.language');
    expect(tokens[0]).toEqual({ value: 'variable.language', scopes: ['source.shss', 'variable.language'] });
  });

  it('variable.parameter.function', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.function');
    expect(tokens[0]).toEqual({ value: 'variable.parameter.function', scopes: ['source.shss', 'variable.parameter.function'] });
  });

  it('variable.parameter', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter');
    expect(tokens[0]).toEqual({ value: 'variable.parameter', scopes: ['source.shss', 'variable.parameter'] });
  });

  it('variable', () => {
    const { tokens } = grammar.tokenizeLine('variable');
    expect(tokens[0]).toEqual({ value: 'variable', scopes: ['source.shss', 'variable'] });
  });

  it('wildcard.comment', () => {
    const { tokens } = grammar.tokenizeLine('wildcard.comment');
    expect(tokens[0]).toEqual({ value: 'wildcard.comment', scopes: ['source.shss', 'wildcard.comment'] });
  });
});
