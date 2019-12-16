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
    const { tokens } = grammar.tokenizeLine('comment.line');
    expect(tokens[0]).toEqual({ value: 'comment.line', scopes: ['source.shss', 'comment.line'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.block');
    expect(tokens[0]).toEqual({ value: 'comment.block', scopes: ['source.shss', 'comment.block'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.documentation');
    expect(tokens[0]).toEqual({ value: 'comment.block.documentation', scopes: ['source.shss', 'comment.block.documentation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.comment', scopes: ['source.shss', 'punctuation.definition.comment'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.toc-list');
    expect(tokens[0]).toEqual({ value: 'meta.toc-list', scopes: ['source.shss', 'meta.toc-list'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric');
    expect(tokens[0]).toEqual({ value: 'constant.numeric', scopes: ['source.shss', 'constant.numeric'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.integer', scopes: ['source.shss', 'constant.numeric.integer'] });
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
    const { tokens } = grammar.tokenizeLine('constant.numeric.float');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.float', scopes: ['source.shss', 'constant.numeric.float'] });
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
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex');
    expect(tokens[0]).toEqual({ value: 'constant.numeric.complex', scopes: ['source.shss', 'constant.numeric.complex'] });
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
    const { tokens } = grammar.tokenizeLine('constant.language');
    expect(tokens[0]).toEqual({ value: 'constant.language', scopes: ['source.shss', 'constant.language'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape');
    expect(tokens[0]).toEqual({ value: 'constant.character.escape', scopes: ['source.shss', 'constant.character.escape'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.placeholder');
    expect(tokens[0]).toEqual({ value: 'constant.other.placeholder', scopes: ['source.shss', 'constant.other.placeholder'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('constant.other');
    expect(tokens[0]).toEqual({ value: 'constant.other', scopes: ['source.shss', 'constant.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag');
    expect(tokens[0]).toEqual({ value: 'entity.name.tag', scopes: ['source.shss', 'entity.name.tag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name');
    expect(tokens[0]).toEqual({ value: 'entity.other.attribute-name', scopes: ['source.shss', 'entity.other.attribute-name'] });
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
    const { tokens } = grammar.tokenizeLine('entity.name.class.forward-decl');
    expect(tokens[0]).toEqual({ value: 'entity.name.class.forward-decl', scopes: ['source.shss', 'entity.name.class.forward-decl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class');
    expect(tokens[0]).toEqual({ value: 'entity.other.inherited-class', scopes: ['source.shss', 'entity.other.inherited-class'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({ value: 'entity.name.function', scopes: ['source.shss', 'entity.name.function'] });
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
    const { tokens } = grammar.tokenizeLine('entity.name');
    expect(tokens[0]).toEqual({ value: 'entity.name', scopes: ['source.shss', 'entity.name'] });
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
    const { tokens } = grammar.tokenizeLine('keyword.control');
    expect(tokens[0]).toEqual({ value: 'keyword.control', scopes: ['source.shss', 'keyword.control'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.conditional');
    expect(tokens[0]).toEqual({ value: 'keyword.control.conditional', scopes: ['source.shss', 'keyword.control.conditional'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.import');
    expect(tokens[0]).toEqual({ value: 'keyword.control.import', scopes: ['source.shss', 'keyword.control.import'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.keyword', scopes: ['source.shss', 'punctuation.definition.keyword'] });
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
    const { tokens } = grammar.tokenizeLine('keyword.operator');
    expect(tokens[0]).toEqual({ value: 'keyword.operator', scopes: ['source.shss', 'keyword.operator'] });
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
    const { tokens } = grammar.tokenizeLine('markup.bold');
    expect(tokens[0]).toEqual({ value: 'markup.bold', scopes: ['source.shss', 'markup.bold'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.italic');
    expect(tokens[0]).toEqual({ value: 'markup.italic', scopes: ['source.shss', 'markup.italic'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline');
    expect(tokens[0]).toEqual({ value: 'markup.underline', scopes: ['source.shss', 'markup.underline'] });
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
    const { tokens } = grammar.tokenizeLine('markup.underline.link');
    expect(tokens[0]).toEqual({ value: 'markup.underline.link', scopes: ['source.shss', 'markup.underline.link'] });
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
    const { tokens } = grammar.tokenizeLine('markup.other');
    expect(tokens[0]).toEqual({ value: 'markup.other', scopes: ['source.shss', 'markup.other'] });
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
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({ value: 'meta.function', scopes: ['source.shss', 'meta.function'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({ value: 'meta.function.parameters', scopes: ['source.shss', 'meta.function.parameters'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({ value: 'meta.function', scopes: ['source.shss', 'meta.function'] });
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
    const { tokens } = grammar.tokenizeLine('meta.namespace');
    expect(tokens[0]).toEqual({ value: 'meta.namespace', scopes: ['source.shss', 'meta.namespace'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor');
    expect(tokens[0]).toEqual({ value: 'meta.preprocessor', scopes: ['source.shss', 'meta.preprocessor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation');
    expect(tokens[0]).toEqual({ value: 'meta.annotation', scopes: ['source.shss', 'meta.annotation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation');
    expect(tokens[0]).toEqual({ value: 'meta.annotation', scopes: ['source.shss', 'meta.annotation'] });
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
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.annotation', scopes: ['source.shss', 'punctuation.definition.annotation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.path');
    expect(tokens[0]).toEqual({ value: 'meta.path', scopes: ['source.shss', 'meta.path'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.function');
    expect(tokens[0]).toEqual({ value: 'support.function', scopes: ['source.shss', 'support.function'] });
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
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.begin', scopes: ['source.shss', 'punctuation.section.block.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.block.end', scopes: ['source.shss', 'punctuation.section.block.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.braces');
    expect(tokens[0]).toEqual({ value: 'meta.braces', scopes: ['source.shss', 'meta.braces'] });
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
    const { tokens } = grammar.tokenizeLine('meta.group');
    expect(tokens[0]).toEqual({ value: 'meta.group', scopes: ['source.shss', 'meta.group'] });
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
    const { tokens } = grammar.tokenizeLine('meta.parens');
    expect(tokens[0]).toEqual({ value: 'meta.parens', scopes: ['source.shss', 'meta.parens'] });
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
    const { tokens } = grammar.tokenizeLine('meta.brackets');
    expect(tokens[0]).toEqual({ value: 'meta.brackets', scopes: ['source.shss', 'meta.brackets'] });
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
    const { tokens } = grammar.tokenizeLine('meta.generic');
    expect(tokens[0]).toEqual({ value: 'meta.generic', scopes: ['source.shss', 'meta.generic'] });
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
    const { tokens } = grammar.tokenizeLine('meta.tag');
    expect(tokens[0]).toEqual({ value: 'meta.tag', scopes: ['source.shss', 'meta.tag'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.paragraph');
    expect(tokens[0]).toEqual({ value: 'meta.paragraph', scopes: ['source.shss', 'meta.paragraph'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator', scopes: ['source.shss', 'punctuation.separator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator');
    expect(tokens[0]).toEqual({ value: 'punctuation.terminator', scopes: ['source.shss', 'punctuation.terminator'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation');
    expect(tokens[0]).toEqual({ value: 'punctuation.separator.continuation', scopes: ['source.shss', 'punctuation.separator.continuation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.accessor');
    expect(tokens[0]).toEqual({ value: 'punctuation.accessor', scopes: ['source.shss', 'punctuation.accessor'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration');
    expect(tokens[0]).toEqual({ value: 'keyword.declaration', scopes: ['source.shss', 'keyword.declaration'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier');
    expect(tokens[0]).toEqual({ value: 'storage.modifier', scopes: ['source.shss', 'storage.modifier'] });
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
    const { tokens } = grammar.tokenizeLine('storage.type');
    expect(tokens[0]).toEqual({ value: 'storage.type', scopes: ['source.shss', 'storage.type'] });
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
    const { tokens } = grammar.tokenizeLine('storage.type.interface');
    expect(tokens[0]).toEqual({ value: 'storage.type.interface', scopes: ['source.shss', 'storage.type.interface'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.impl');
    expect(tokens[0]).toEqual({ value: 'storage.type.impl', scopes: ['source.shss', 'storage.type.impl'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.ext');
    expect(tokens[0]).toEqual({ value: 'support.constant.ext', scopes: ['source.shss', 'support.constant.ext'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.string');
    expect(tokens[0]).toEqual({ value: 'meta.string', scopes: ['source.shss', 'meta.string'] });
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
    const { tokens } = grammar.tokenizeLine('string.unquoted');
    expect(tokens[0]).toEqual({ value: 'string.unquoted', scopes: ['source.shss', 'string.unquoted'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp');
    expect(tokens[0]).toEqual({ value: 'string.regexp', scopes: ['source.shss', 'string.regexp'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('string');
    expect(tokens[0]).toEqual({ value: 'string', scopes: ['source.shss', 'string'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('meta.interpolation');
    expect(tokens[0]).toEqual({ value: 'meta.interpolation', scopes: ['source.shss', 'meta.interpolation'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.begin');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.begin', scopes: ['source.shss', 'punctuation.section.interpolation.begin'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.end');
    expect(tokens[0]).toEqual({ value: 'punctuation.section.interpolation.end', scopes: ['source.shss', 'punctuation.section.interpolation.end'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix.embedded');
    expect(tokens[0]).toEqual({ value: 'source.language-suffix.embedded', scopes: ['source.shss', 'source.language-suffix.embedded'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('support.constant');
    expect(tokens[0]).toEqual({ value: 'support.constant', scopes: ['source.shss', 'support.constant'] });
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
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable');
    expect(tokens[0]).toEqual({ value: 'punctuation.definition.variable', scopes: ['source.shss', 'punctuation.definition.variable'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.constant');
    expect(tokens[0]).toEqual({ value: 'variable.other.constant', scopes: ['source.shss', 'variable.other.constant'] });
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
    const { tokens } = grammar.tokenizeLine('variable.other');
    expect(tokens[0]).toEqual({ value: 'variable.other', scopes: ['source.shss', 'variable.other'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({ value: 'variable.other.readwrite', scopes: ['source.shss', 'variable.other.readwrite'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.language');
    expect(tokens[0]).toEqual({ value: 'variable.language', scopes: ['source.shss', 'variable.language'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter');
    expect(tokens[0]).toEqual({ value: 'variable.parameter', scopes: ['source.shss', 'variable.parameter'] });
  });

  it('tokenizes block comments', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.member');
    expect(tokens[0]).toEqual({ value: 'variable.other.member', scopes: ['source.shss', 'variable.other.member'] });
  });
});
