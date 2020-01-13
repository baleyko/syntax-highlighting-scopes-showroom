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

  it('array', () => {
    const { tokens } = grammar.tokenizeLine('array');
    expect(tokens[0]).toEqual({
      value: 'array',
      scopes: ['source.shss', 'array'],
    });
  });

  it('bracket', () => {
    const { tokens } = grammar.tokenizeLine('bracket');
    expect(tokens[0]).toEqual({
      value: 'bracket',
      scopes: ['source.shss', 'bracket'],
    });
  });

  it('block.liquid', () => {
    const { tokens } = grammar.tokenizeLine('block.liquid');
    expect(tokens[0]).toEqual({
      value: 'block.liquid',
      scopes: ['source.shss', 'block.liquid'],
    });
  });

  it('block', () => {
    const { tokens } = grammar.tokenizeLine('block');
    expect(tokens[0]).toEqual({
      value: 'block',
      scopes: ['source.shss', 'block'],
    });
  });

  it('comment.line.double-slash', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-slash');
    expect(tokens[0]).toEqual({
      value: 'comment.line.double-slash',
      scopes: ['source.shss', 'comment.line.double-slash'],
    });
  });

  it('comment.line.double-dash.haddock', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-dash.haddock');
    expect(tokens[0]).toEqual({
      value: 'comment.line.double-dash.haddock',
      scopes: ['source.shss', 'comment.line.double-dash.haddock'],
    });
  });

  it('comment.line.double-dash', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.double-dash');
    expect(tokens[0]).toEqual({
      value: 'comment.line.double-dash',
      scopes: ['source.shss', 'comment.line.double-dash'],
    });
  });

  it('comment.line.number-sign', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.number-sign');
    expect(tokens[0]).toEqual({
      value: 'comment.line.number-sign',
      scopes: ['source.shss', 'comment.line.number-sign'],
    });
  });

  it('comment.line.percentage', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.percentage');
    expect(tokens[0]).toEqual({
      value: 'comment.line.percentage',
      scopes: ['source.shss', 'comment.line.percentage'],
    });
  });

  it('comment.line.shebang', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.shebang');
    expect(tokens[0]).toEqual({
      value: 'comment.line.shebang',
      scopes: ['source.shss', 'comment.line.shebang'],
    });
  });

  it('comment.line.type', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.type');
    expect(tokens[0]).toEqual({
      value: 'comment.line.type',
      scopes: ['source.shss', 'comment.line.type'],
    });
  });

  it('comment.line.string', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.string');
    expect(tokens[0]).toEqual({
      value: 'comment.line.string',
      scopes: ['source.shss', 'comment.line.string'],
    });
  });

  it('comment.line.shebang', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.shebang');
    expect(tokens[0]).toEqual({
      value: 'comment.line.shebang',
      scopes: ['source.shss', 'comment.line.shebang'],
    });
  });

  it('comment.line.banner', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.banner');
    expect(tokens[0]).toEqual({
      value: 'comment.line.banner',
      scopes: ['source.shss', 'comment.line.banner'],
    });
  });

  it('comment.line.punctuation', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.punctuation');
    expect(tokens[0]).toEqual({
      value: 'comment.line.punctuation',
      scopes: ['source.shss', 'comment.line.punctuation'],
    });
  });

  it('comment.line.percentage', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.percentage');
    expect(tokens[0]).toEqual({
      value: 'comment.line.percentage',
      scopes: ['source.shss', 'comment.line.percentage'],
    });
  });

  it('comment.line.parameter', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.parameter');
    expect(tokens[0]).toEqual({
      value: 'comment.line.parameter',
      scopes: ['source.shss', 'comment.line.parameter'],
    });
  });

  it('comment.line.number-sign', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.number-sign');
    expect(tokens[0]).toEqual({
      value: 'comment.line.number-sign',
      scopes: ['source.shss', 'comment.line.number-sign'],
    });
  });

  it('comment.line.keyword.punctuation', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.keyword.punctuation');
    expect(tokens[0]).toEqual({
      value: 'comment.line.keyword.punctuation',
      scopes: ['source.shss', 'comment.line.keyword.punctuation'],
    });
  });

  it('comment.line.keyword', () => {
    const { tokens } = grammar.tokenizeLine('comment.line.keyword');
    expect(tokens[0]).toEqual({
      value: 'comment.line.keyword',
      scopes: ['source.shss', 'comment.line.keyword'],
    });
  });

  it('comment.line', () => {
    const { tokens } = grammar.tokenizeLine('comment.line');
    expect(tokens[0]).toEqual({
      value: 'comment.line',
      scopes: ['source.shss', 'comment.line'],
    });
  });

  it('comment.documentation.string', () => {
    const { tokens } = grammar.tokenizeLine('comment.documentation.string');
    expect(tokens[0]).toEqual({
      value: 'comment.documentation.string',
      scopes: ['source.shss', 'comment.documentation.string'],
    });
  });

  it('comment.documentation.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('comment.documentation.heredoc');
    expect(tokens[0]).toEqual({
      value: 'comment.documentation.heredoc',
      scopes: ['source.shss', 'comment.documentation.heredoc'],
    });
  });

  it('comment.documentation.false', () => {
    const { tokens } = grammar.tokenizeLine('comment.documentation.false');
    expect(tokens[0]).toEqual({
      value: 'comment.documentation.false',
      scopes: ['source.shss', 'comment.documentation.false'],
    });
  });

  it('comment.block.doc', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.doc');
    expect(tokens[0]).toEqual({
      value: 'comment.block.doc',
      scopes: ['source.shss', 'comment.block.doc'],
    });
  });

  it('comment.block.html', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.html');
    expect(tokens[0]).toEqual({
      value: 'comment.block.html',
      scopes: ['source.shss', 'comment.block.html'],
    });
  });

  it('comment.block.haddock', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.haddock');
    expect(tokens[0]).toEqual({
      value: 'comment.block.haddock',
      scopes: ['source.shss', 'comment.block.haddock'],
    });
  });

  it('comment.block.empty', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.empty');
    expect(tokens[0]).toEqual({
      value: 'comment.block.empty',
      scopes: ['source.shss', 'comment.block.empty'],
    });
  });

  it('comment.block.documentation', () => {
    const { tokens } = grammar.tokenizeLine('comment.block.documentation');
    expect(tokens[0]).toEqual({
      value: 'comment.block.documentation',
      scopes: ['source.shss', 'comment.block.documentation'],
    });
  });

  it('comment.block', () => {
    const { tokens } = grammar.tokenizeLine('comment.block');
    expect(tokens[0]).toEqual({
      value: 'comment.block',
      scopes: ['source.shss', 'comment.block'],
    });
  });

  it('comment.block', () => {
    const { tokens } = grammar.tokenizeLine('comment.block');
    expect(tokens[0]).toEqual({
      value: 'comment.block',
      scopes: ['source.shss', 'comment.block'],
    });
  });

  it('comment', () => {
    const { tokens } = grammar.tokenizeLine('comment');
    expect(tokens[0]).toEqual({
      value: 'comment',
      scopes: ['source.shss', 'comment'],
    });
  });

  it('constant.numeric.hexfloat', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.hexfloat');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.hexfloat',
      scopes: ['source.shss', 'constant.numeric.hexfloat'],
    });
  });

  it('constant.numeric.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.hexadecimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.hexadecimal',
      scopes: ['source.shss', 'constant.numeric.hexadecimal'],
    });
  });

  it('constant.numeric.floating-point', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.floating-point');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.floating-point',
      scopes: ['source.shss', 'constant.numeric.floating-point'],
    });
  });

  it('constant.numeric.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.preprocessor',
      scopes: ['source.shss', 'constant.numeric.preprocessor'],
    });
  });

  it('constant.numeric.integer.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.octal',
      scopes: ['source.shss', 'constant.numeric.integer.octal'],
    });
  });

  it('constant.numeric.integer.long.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.long.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.long.octal',
      scopes: ['source.shss', 'constant.numeric.integer.long.octal'],
    });
  });

  it('constant.numeric.integer.long.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.long.hexadecimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.long.hexadecimal',
      scopes: ['source.shss', 'constant.numeric.integer.long.hexadecimal'],
    });
  });

  it('constant.numeric.integer.long.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.long.decimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.long.decimal',
      scopes: ['source.shss', 'constant.numeric.integer.long.decimal'],
    });
  });

  it('constant.numeric.integer.long.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.long.binary');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.long.binary',
      scopes: ['source.shss', 'constant.numeric.integer.long.binary'],
    });
  });

  it('constant.numeric.integer.long', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.long');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.long',
      scopes: ['source.shss', 'constant.numeric.integer.long'],
    });
  });

  it('constant.numeric.integer.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.hexadecimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.hexadecimal',
      scopes: ['source.shss', 'constant.numeric.integer.hexadecimal'],
    });
  });

  it('constant.numeric.integer.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.decimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.decimal',
      scopes: ['source.shss', 'constant.numeric.integer.decimal'],
    });
  });

  it('constant.numeric.integer.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.binary');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.binary',
      scopes: ['source.shss', 'constant.numeric.integer.binary'],
    });
  });

  it('constant.numeric.integer.base-9', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-9');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-9',
      scopes: ['source.shss', 'constant.numeric.integer.base-9'],
    });
  });

  it('constant.numeric.integer.base-7', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-7');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-7',
      scopes: ['source.shss', 'constant.numeric.integer.base-7'],
    });
  });

  it('constant.numeric.integer.base-6', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-6');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-6',
      scopes: ['source.shss', 'constant.numeric.integer.base-6'],
    });
  });

  it('constant.numeric.integer.base-5', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-5');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-5',
      scopes: ['source.shss', 'constant.numeric.integer.base-5'],
    });
  });

  it('constant.numeric.integer.base-4', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-4');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-4',
      scopes: ['source.shss', 'constant.numeric.integer.base-4'],
    });
  });

  it('constant.numeric.integer.base-36', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-36');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-36',
      scopes: ['source.shss', 'constant.numeric.integer.base-36'],
    });
  });

  it('constant.numeric.integer.base-35', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-35');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-35',
      scopes: ['source.shss', 'constant.numeric.integer.base-35'],
    });
  });

  it('constant.numeric.integer.base-34', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-34');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-34',
      scopes: ['source.shss', 'constant.numeric.integer.base-34'],
    });
  });

  it('constant.numeric.integer.base-33', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-33');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-33',
      scopes: ['source.shss', 'constant.numeric.integer.base-33'],
    });
  });

  it('constant.numeric.integer.base-32', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-32');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-32',
      scopes: ['source.shss', 'constant.numeric.integer.base-32'],
    });
  });

  it('constant.numeric.integer.base-31', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-31');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-31',
      scopes: ['source.shss', 'constant.numeric.integer.base-31'],
    });
  });

  it('constant.numeric.integer.base-30', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-30');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-30',
      scopes: ['source.shss', 'constant.numeric.integer.base-30'],
    });
  });

  it('constant.numeric.integer.base-3', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-3');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-3',
      scopes: ['source.shss', 'constant.numeric.integer.base-3'],
    });
  });

  it('constant.numeric.integer.base-29', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-29');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-29',
      scopes: ['source.shss', 'constant.numeric.integer.base-29'],
    });
  });

  it('constant.numeric.integer.base-28', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-28');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-28',
      scopes: ['source.shss', 'constant.numeric.integer.base-28'],
    });
  });

  it('constant.numeric.integer.base-27', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-27');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-27',
      scopes: ['source.shss', 'constant.numeric.integer.base-27'],
    });
  });

  it('constant.numeric.integer.base-26', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-26');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-26',
      scopes: ['source.shss', 'constant.numeric.integer.base-26'],
    });
  });

  it('constant.numeric.integer.base-25', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-25');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-25',
      scopes: ['source.shss', 'constant.numeric.integer.base-25'],
    });
  });

  it('constant.numeric.integer.base-24', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-24');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-24',
      scopes: ['source.shss', 'constant.numeric.integer.base-24'],
    });
  });

  it('constant.numeric.integer.base-23', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-23');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-23',
      scopes: ['source.shss', 'constant.numeric.integer.base-23'],
    });
  });

  it('constant.numeric.integer.base-22', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-22');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-22',
      scopes: ['source.shss', 'constant.numeric.integer.base-22'],
    });
  });

  it('constant.numeric.integer.base-21', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-21');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-21',
      scopes: ['source.shss', 'constant.numeric.integer.base-21'],
    });
  });

  it('constant.numeric.integer.base-20', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-20');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-20',
      scopes: ['source.shss', 'constant.numeric.integer.base-20'],
    });
  });

  it('constant.numeric.integer.base-19', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-19');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-19',
      scopes: ['source.shss', 'constant.numeric.integer.base-19'],
    });
  });

  it('constant.numeric.integer.base-18', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-18');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-18',
      scopes: ['source.shss', 'constant.numeric.integer.base-18'],
    });
  });

  it('constant.numeric.integer.base-17', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-17');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-17',
      scopes: ['source.shss', 'constant.numeric.integer.base-17'],
    });
  });

  it('constant.numeric.integer.base-15', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-15');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-15',
      scopes: ['source.shss', 'constant.numeric.integer.base-15'],
    });
  });

  it('constant.numeric.integer.base-14', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-14');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-14',
      scopes: ['source.shss', 'constant.numeric.integer.base-14'],
    });
  });

  it('constant.numeric.integer.base-13', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-13');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-13',
      scopes: ['source.shss', 'constant.numeric.integer.base-13'],
    });
  });

  it('constant.numeric.integer.base-12', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-12');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-12',
      scopes: ['source.shss', 'constant.numeric.integer.base-12'],
    });
  });

  it('constant.numeric.integer.base-11', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.base-11');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.base-11',
      scopes: ['source.shss', 'constant.numeric.integer.base-11'],
    });
  });

  it('constant.numeric.integer.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer.other');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer.other',
      scopes: ['source.shss', 'constant.numeric.integer.other'],
    });
  });

  it('constant.numeric.other.density', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.other.density');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.other.density',
      scopes: ['source.shss', 'constant.numeric.other.density'],
    });
  });

  it('constant.numeric.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.other');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.other',
      scopes: ['source.shss', 'constant.numeric.other'],
    });
  });

  it('constant.numeric.integer', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.integer');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.integer',
      scopes: ['source.shss', 'constant.numeric.integer'],
    });
  });

  it('constant.numeric.exponential', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.exponential');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.exponential',
      scopes: ['source.shss', 'constant.numeric.exponential'],
    });
  });

  it('constant.numeric.float.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.binary');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float.binary',
      scopes: ['source.shss', 'constant.numeric.float.binary'],
    });
  });

  it('constant.numeric.float.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float.octal',
      scopes: ['source.shss', 'constant.numeric.float.octal'],
    });
  });

  it('constant.numeric.float.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.decimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float.decimal',
      scopes: ['source.shss', 'constant.numeric.float.decimal'],
    });
  });

  it('constant.numeric.float.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.hexadecimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float.hexadecimal',
      scopes: ['source.shss', 'constant.numeric.float.hexadecimal'],
    });
  });

  it('constant.numeric.float.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float.other');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float.other',
      scopes: ['source.shss', 'constant.numeric.float.other'],
    });
  });

  it('constant.numeric.float', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.float');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.float',
      scopes: ['source.shss', 'constant.numeric.float'],
    });
  });

  it('constant.numeric.complex.real', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.real');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.complex.real',
      scopes: ['source.shss', 'constant.numeric.complex.real'],
    });
  });

  it('constant.numeric.complex.imaginary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex.imaginary');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.complex.imaginary',
      scopes: ['source.shss', 'constant.numeric.complex.imaginary'],
    });
  });

  it('constant.numeric.complex', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.complex');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.complex',
      scopes: ['source.shss', 'constant.numeric.complex'],
    });
  });

  it('constant.numeric.index', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.index');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.index',
      scopes: ['source.shss', 'constant.numeric.index'],
    });
  });

  it('constant.numeric.decimal.with-thousand-separators', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal.with-thousand-separators');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.decimal.with-thousand-separators',
      scopes: ['source.shss', 'constant.numeric.decimal.with-thousand-separators'],
    });
  });

  it('constant.numeric.decimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.decimal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.decimal',
      scopes: ['source.shss', 'constant.numeric.decimal'],
    });
  });

  it('constant.numeric.hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.hex');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.hex',
      scopes: ['source.shss', 'constant.numeric.hex'],
    });
  });

  it('constant.numeric.binary', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.binary');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.binary',
      scopes: ['source.shss', 'constant.numeric.binary'],
    });
  });

  it('constant.numeric.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric.octal',
      scopes: ['source.shss', 'constant.numeric.octal'],
    });
  });

  it('constant.numeric', () => {
    const { tokens } = grammar.tokenizeLine('constant.numeric');
    expect(tokens[0]).toEqual({
      value: 'constant.numeric',
      scopes: ['source.shss', 'constant.numeric'],
    });
  });

  it('constant.language.pragma.module', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma.module');
    expect(tokens[0]).toEqual({
      value: 'constant.language.pragma.module',
      scopes: ['source.shss', 'constant.language.pragma.module'],
    });
  });

  it('constant.language.pragma', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.pragma');
    expect(tokens[0]).toEqual({
      value: 'constant.language.pragma',
      scopes: ['source.shss', 'constant.language.pragma'],
    });
  });

  it('constant.language.boolean', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.boolean');
    expect(tokens[0]).toEqual({
      value: 'constant.language.boolean',
      scopes: ['source.shss', 'constant.language.boolean'],
    });
  });

  it('constant.language.unit.promoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.unit.promoted');
    expect(tokens[0]).toEqual({
      value: 'constant.language.unit.promoted',
      scopes: ['source.shss', 'constant.language.unit.promoted'],
    });
  });

  it('constant.language.unit', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.unit');
    expect(tokens[0]).toEqual({
      value: 'constant.language.unit',
      scopes: ['source.shss', 'constant.language.unit'],
    });
  });

  it('constant.language.nil', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.nil');
    expect(tokens[0]).toEqual({
      value: 'constant.language.nil',
      scopes: ['source.shss', 'constant.language.nil'],
    });
  });

  it('constant.language.empty-list.promoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.empty-list.promoted');
    expect(tokens[0]).toEqual({
      value: 'constant.language.empty-list.promoted',
      scopes: ['source.shss', 'constant.language.empty-list.promoted'],
    });
  });

  it('constant.language.empty-list', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.empty-list');
    expect(tokens[0]).toEqual({
      value: 'constant.language.empty-list',
      scopes: ['source.shss', 'constant.language.empty-list'],
    });
  });

  it('constant.language.boolean', () => {
    const { tokens } = grammar.tokenizeLine('constant.language.boolean');
    expect(tokens[0]).toEqual({
      value: 'constant.language.boolean',
      scopes: ['source.shss', 'constant.language.boolean'],
    });
  });

  it('constant.language', () => {
    const { tokens } = grammar.tokenizeLine('constant.language');
    expect(tokens[0]).toEqual({
      value: 'constant.language',
      scopes: ['source.shss', 'constant.language'],
    });
  });

  it('constant.character.entity.html', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.entity.html');
    expect(tokens[0]).toEqual({
      value: 'constant.character.entity.html',
      scopes: ['source.shss', 'constant.character.entity.html'],
    });
  });

  it('constant.character.escape.vertical-tab', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.vertical-tab');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.vertical-tab',
      scopes: ['source.shss', 'constant.character.escape.vertical-tab'],
    });
  });

  it('constant.character.escape.unicode.name', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode.name');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.unicode.name',
      scopes: ['source.shss', 'constant.character.escape.unicode.name'],
    });
  });

  it('constant.character.escape.unicode.32-bit-hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode.32-bit-hex');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.unicode.32-bit-hex',
      scopes: ['source.shss', 'constant.character.escape.unicode.32-bit-hex'],
    });
  });

  it('constant.character.escape.unicode.16-bit-hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode.16-bit-hex');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.unicode.16-bit-hex',
      scopes: ['source.shss', 'constant.character.escape.unicode.16-bit-hex'],
    });
  });

  it('constant.character.escape.unicode', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.unicode',
      scopes: ['source.shss', 'constant.character.escape.unicode'],
    });
  });

  it('constant.character.escape.tab', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.tab');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.tab',
      scopes: ['source.shss', 'constant.character.escape.tab'],
    });
  });

  it('constant.character.escape.single-quote', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.single-quote');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.single-quote',
      scopes: ['source.shss', 'constant.character.escape.single-quote'],
    });
  });

  it('constant.character.escape.return', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.return');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.return',
      scopes: ['source.shss', 'constant.character.escape.return'],
    });
  });

  it('constant.character.escape.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.octal',
      scopes: ['source.shss', 'constant.character.escape.octal'],
    });
  });

  it('constant.character.escape.newline', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.newline');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.newline',
      scopes: ['source.shss', 'constant.character.escape.newline'],
    });
  });

  it('constant.character.escape.linefeed', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.linefeed');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.linefeed',
      scopes: ['source.shss', 'constant.character.escape.linefeed'],
    });
  });

  it('constant.character.escape.line-continuation', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.line-continuation');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.line-continuation',
      scopes: ['source.shss', 'constant.character.escape.line-continuation'],
    });
  });

  it('constant.character.escape.hexadecimal', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.hexadecimal');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.hexadecimal',
      scopes: ['source.shss', 'constant.character.escape.hexadecimal'],
    });
  });

  it('constant.character.escape.formfeed', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.formfeed');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.formfeed',
      scopes: ['source.shss', 'constant.character.escape.formfeed'],
    });
  });

  it('constant.character.escape.double-quote', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.double-quote');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.double-quote',
      scopes: ['source.shss', 'constant.character.escape.double-quote'],
    });
  });

  it('constant.character.escape.curly-bracket', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.curly-bracket');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.curly-bracket',
      scopes: ['source.shss', 'constant.character.escape.curly-bracket'],
    });
  });

  it('constant.character.escape.control', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.control');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.control',
      scopes: ['source.shss', 'constant.character.escape.control'],
    });
  });

  it('constant.character.escape.codepoint', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.codepoint');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.codepoint',
      scopes: ['source.shss', 'constant.character.escape.codepoint'],
    });
  });

  it('constant.character.escape.bell', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.bell');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.bell',
      scopes: ['source.shss', 'constant.character.escape.bell'],
    });
  });

  it('constant.character.escape.backspace', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.backspace');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.backspace',
      scopes: ['source.shss', 'constant.character.escape.backspace'],
    });
  });

  it('constant.character.escape.backlash', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.backlash');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.backlash',
      scopes: ['source.shss', 'constant.character.escape.backlash'],
    });
  });

  it('constant.character.escape.octal', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.octal');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.octal',
      scopes: ['source.shss', 'constant.character.escape.octal'],
    });
  });

  it('constant.character.escape.hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.hex');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.hex',
      scopes: ['source.shss', 'constant.character.escape.hex'],
    });
  });

  it('constant.character.escape.unicode', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.unicode');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.unicode',
      scopes: ['source.shss', 'constant.character.escape.unicode'],
    });
  });

  it('constant.character.escape.regex', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape.regex');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape.regex',
      scopes: ['source.shss', 'constant.character.escape.regex'],
    });
  });

  it('constant.character.escape', () => {
    const { tokens } = grammar.tokenizeLine('constant.character.escape');
    expect(tokens[0]).toEqual({
      value: 'constant.character.escape',
      scopes: ['source.shss', 'constant.character.escape'],
    });
  });

  it('constant.character', () => {
    const { tokens } = grammar.tokenizeLine('constant.character');
    expect(tokens[0]).toEqual({
      value: 'constant.character',
      scopes: ['source.shss', 'constant.character'],
    });
  });

  it('constant.other.variable.mac-classic', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.variable.mac-classic');
    expect(tokens[0]).toEqual({
      value: 'constant.other.variable.mac-classic',
      scopes: ['source.shss', 'constant.other.variable.mac-classic'],
    });
  });

  it('constant.other.unicode-range', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.unicode-range');
    expect(tokens[0]).toEqual({
      value: 'constant.other.unicode-range',
      scopes: ['source.shss', 'constant.other.unicode-range'],
    });
  });

  it('constant.other.symbol.unquoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.unquoted');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.unquoted',
      scopes: ['source.shss', 'constant.other.symbol.unquoted'],
    });
  });

  it('constant.other.symbol.single-quoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.single-quoted');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.single-quoted',
      scopes: ['source.shss', 'constant.other.symbol.single-quoted'],
    });
  });

  it('constant.other.symbol.quoted.single', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.quoted.single');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.quoted.single',
      scopes: ['source.shss', 'constant.other.symbol.quoted.single'],
    });
  });

  it('constant.other.symbol.quoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.quoted');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.quoted',
      scopes: ['source.shss', 'constant.other.symbol.quoted'],
    });
  });

  it('constant.other.symbol.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.interpolated');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.interpolated',
      scopes: ['source.shss', 'constant.other.symbol.interpolated'],
    });
  });

  it('constant.other.symbol.hashkey.parameter.function', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.hashkey.parameter.function');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.hashkey.parameter.function',
      scopes: ['source.shss', 'constant.other.symbol.hashkey.parameter.function'],
    });
  });

  it('constant.other.symbol.hashkey.parameter', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.hashkey.parameter');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.hashkey.parameter',
      scopes: ['source.shss', 'constant.other.symbol.hashkey.parameter'],
    });
  });

  it('constant.other.symbol.hashkey', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.hashkey');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.hashkey',
      scopes: ['source.shss', 'constant.other.symbol.hashkey'],
    });
  });

  it('constant.other.symbol.hashkey', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.hashkey');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.hashkey',
      scopes: ['source.shss', 'constant.other.symbol.hashkey'],
    });
  });

  it('constant.other.symbol.escape', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.escape');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.escape',
      scopes: ['source.shss', 'constant.other.symbol.escape'],
    });
  });

  it('constant.other.symbol.double-quoted', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol.double-quoted');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol.double-quoted',
      scopes: ['source.shss', 'constant.other.symbol.double-quoted'],
    });
  });

  it('constant.other.symbol', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.symbol');
    expect(tokens[0]).toEqual({
      value: 'constant.other.symbol',
      scopes: ['source.shss', 'constant.other.symbol'],
    });
  });

  it('constant.other.rune', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.rune');
    expect(tokens[0]).toEqual({
      value: 'constant.other.rune',
      scopes: ['source.shss', 'constant.other.rune'],
    });
  });

  it('constant.other.property', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.property');
    expect(tokens[0]).toEqual({
      value: 'constant.other.property',
      scopes: ['source.shss', 'constant.other.property'],
    });
  });

  it('constant.other.object.property', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.object.property');
    expect(tokens[0]).toEqual({
      value: 'constant.other.object.property',
      scopes: ['source.shss', 'constant.other.object.property'],
    });
  });

  it('constant.other.object', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.object');
    expect(tokens[0]).toEqual({
      value: 'constant.other.object',
      scopes: ['source.shss', 'constant.other.object'],
    });
  });

  it('constant.other.inline-data.html', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.inline-data.html');
    expect(tokens[0]).toEqual({
      value: 'constant.other.inline-data.html',
      scopes: ['source.shss', 'constant.other.inline-data.html'],
    });
  });

  it('constant.other.inline-data', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.inline-data');
    expect(tokens[0]).toEqual({
      value: 'constant.other.inline-data',
      scopes: ['source.shss', 'constant.other.inline-data'],
    });
  });

  it('constant.other.enum', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.enum');
    expect(tokens[0]).toEqual({
      value: 'constant.other.enum',
      scopes: ['source.shss', 'constant.other.enum'],
    });
  });

  it('constant.other.color.rgb-value.hex', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.color.rgb-value.hex');
    expect(tokens[0]).toEqual({
      value: 'constant.other.color.rgb-value.hex',
      scopes: ['source.shss', 'constant.other.color.rgb-value.hex'],
    });
  });

  it('constant.other.color.rgb-value', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.color.rgb-value');
    expect(tokens[0]).toEqual({
      value: 'constant.other.color.rgb-value',
      scopes: ['source.shss', 'constant.other.color.rgb-value'],
    });
  });

  it('constant.other.color', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.color');
    expect(tokens[0]).toEqual({
      value: 'constant.other.color',
      scopes: ['source.shss', 'constant.other.color'],
    });
  });

  it('constant.other.key', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.key');
    expect(tokens[0]).toEqual({
      value: 'constant.other.key',
      scopes: ['source.shss', 'constant.other.key'],
    });
  });

  it('constant.other.bareword', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.bareword');
    expect(tokens[0]).toEqual({
      value: 'constant.other.bareword',
      scopes: ['source.shss', 'constant.other.bareword'],
    });
  });

  it('constant.other.class', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.class');
    expect(tokens[0]).toEqual({
      value: 'constant.other.class',
      scopes: ['source.shss', 'constant.other.class'],
    });
  });

  it('constant.other.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.placeholder');
    expect(tokens[0]).toEqual({
      value: 'constant.other.placeholder',
      scopes: ['source.shss', 'constant.other.placeholder'],
    });
  });

  it('constant.other.version.literal', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version.literal');
    expect(tokens[0]).toEqual({
      value: 'constant.other.version.literal',
      scopes: ['source.shss', 'constant.other.version.literal'],
    });
  });

  it('constant.other.version', () => {
    const { tokens } = grammar.tokenizeLine('constant.other.version');
    expect(tokens[0]).toEqual({
      value: 'constant.other.version',
      scopes: ['source.shss', 'constant.other.version'],
    });
  });

  it('constant.other', () => {
    const { tokens } = grammar.tokenizeLine('constant.other');
    expect(tokens[0]).toEqual({
      value: 'constant.other',
      scopes: ['source.shss', 'constant.other'],
    });
  });

  it('constant', () => {
    const { tokens } = grammar.tokenizeLine('constant');
    expect(tokens[0]).toEqual({
      value: 'constant',
      scopes: ['source.shss', 'constant'],
    });
  });

  it('entity.other.namespace-prefix', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.namespace-prefix');
    expect(tokens[0]).toEqual({
      value: 'entity.other.namespace-prefix',
      scopes: ['source.shss', 'entity.other.namespace-prefix'],
    });
  });

  it('entity.other.keyframe-offset.percentage', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.keyframe-offset.percentage');
    expect(tokens[0]).toEqual({
      value: 'entity.other.keyframe-offset.percentage',
      scopes: ['source.shss', 'entity.other.keyframe-offset.percentage'],
    });
  });

  it('entity.other.keyframe-offset', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.keyframe-offset');
    expect(tokens[0]).toEqual({
      value: 'entity.other.keyframe-offset',
      scopes: ['source.shss', 'entity.other.keyframe-offset'],
    });
  });

  it('entity.other.inherited-class.prelude', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class.prelude');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class.prelude',
      scopes: ['source.shss', 'entity.other.inherited-class.prelude'],
    });
  });

  it('entity.other.inherited-class.module.third', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class.module.third');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class.module.third',
      scopes: ['source.shss', 'entity.other.inherited-class.module.third'],
    });
  });

  it('entity.other.inherited-class.module.second', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class.module.second');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class.module.second',
      scopes: ['source.shss', 'entity.other.inherited-class.module.second'],
    });
  });

  it('entity.other.inherited-class.module.first', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class.module.first');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class.module.first',
      scopes: ['source.shss', 'entity.other.inherited-class.module.first'],
    });
  });

  it('entity.other.inherited-class.module', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class.module');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class.module',
      scopes: ['source.shss', 'entity.other.inherited-class.module'],
    });
  });

  it('entity.other.inherited-class', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class',
      scopes: ['source.shss', 'entity.other.inherited-class'],
    });
  });

  it('entity.other.attribute-name.style.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.style.html');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.style.html',
      scopes: ['source.shss', 'entity.other.attribute-name.style.html'],
    });
  });

  it('entity.other.attribute-name.pseudo-element', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.pseudo-element');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.pseudo-element',
      scopes: ['source.shss', 'entity.other.attribute-name.pseudo-element'],
    });
  });

  it('entity.other.attribute-name.pseudo-class', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.pseudo-class');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.pseudo-class',
      scopes: ['source.shss', 'entity.other.attribute-name.pseudo-class'],
    });
  });

  it('entity.other.attribute-name.pragma.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.pragma.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.pragma.preprocessor',
      scopes: ['source.shss', 'entity.other.attribute-name.pragma.preprocessor'],
    });
  });

  it('entity.other.attribute-name.pragma', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.pragma');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.pragma',
      scopes: ['source.shss', 'entity.other.attribute-name.pragma'],
    });
  });

  it('entity.other.attribute-name.id.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.id.html');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.id.html',
      scopes: ['source.shss', 'entity.other.attribute-name.id.html'],
    });
  });

  it('entity.other.attribute-name.id', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.id');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.id',
      scopes: ['source.shss', 'entity.other.attribute-name.id'],
    });
  });

  it('entity.other.attribute-name.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.html');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.html',
      scopes: ['source.shss', 'entity.other.attribute-name.html'],
    });
  });

  it('entity.other.attribute-name.class.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.class.html');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.class.html',
      scopes: ['source.shss', 'entity.other.attribute-name.class.html'],
    });
  });

  it('entity.other.attribute-name.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name.class');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name.class',
      scopes: ['source.shss', 'entity.other.attribute-name.class'],
    });
  });

  it('entity.other.attribute-name', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.attribute-name');
    expect(tokens[0]).toEqual({
      value: 'entity.other.attribute-name',
      scopes: ['source.shss', 'entity.other.attribute-name'],
    });
  });

  it('entity.other.inherited-class', () => {
    const { tokens } = grammar.tokenizeLine('entity.other.inherited-class');
    expect(tokens[0]).toEqual({
      value: 'entity.other.inherited-class',
      scopes: ['source.shss', 'entity.other.inherited-class'],
    });
  });

  it('entity.other', () => {
    const { tokens } = grammar.tokenizeLine('entity.other');
    expect(tokens[0]).toEqual({
      value: 'entity.other',
      scopes: ['source.shss', 'entity.other'],
    });
  });

  it('entity.name.package', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.package');
    expect(tokens[0]).toEqual({
      value: 'entity.name.package',
      scopes: ['source.shss', 'entity.name.package'],
    });
  });

  it('entity.name.import', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.import');
    expect(tokens[0]).toEqual({
      value: 'entity.name.import',
      scopes: ['source.shss', 'entity.name.import'],
    });
  });

  it('entity.name.type.promoted', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.promoted');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.promoted',
      scopes: ['source.shss', 'entity.name.type.promoted'],
    });
  });

  it('entity.name.type.module', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.module');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.module',
      scopes: ['source.shss', 'entity.name.type.module'],
    });
  });

  it('entity.name.type.inherited', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.inherited');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.inherited',
      scopes: ['source.shss', 'entity.name.type.inherited'],
    });
  });

  it('entity.name.type.enum', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.enum');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.enum',
      scopes: ['source.shss', 'entity.name.type.enum'],
    });
  });

  it('entity.name.type.namespace', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.namespace');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.namespace',
      scopes: ['source.shss', 'entity.name.type.namespace'],
    });
  });

  it('entity.name.type.class.record.definition', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.record.definition');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.record.definition',
      scopes: ['source.shss', 'entity.name.type.class.record.definition'],
    });
  });

  it('entity.name.type.class.record', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.record');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.record',
      scopes: ['source.shss', 'entity.name.type.class.record'],
    });
  });

  it('entity.name.type.class.module.definition', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.module.definition');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.module.definition',
      scopes: ['source.shss', 'entity.name.type.class.module.definition'],
    });
  });

  it('entity.name.type.class.module', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.module');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.module',
      scopes: ['source.shss', 'entity.name.type.class.module'],
    });
  });

  it('entity.name.type.class.behaviour.definition', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.behaviour.definition');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.behaviour.definition',
      scopes: ['source.shss', 'entity.name.type.class.behaviour.definition'],
    });
  });

  it('entity.name.type.class.behaviour', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class.behaviour');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class.behaviour',
      scopes: ['source.shss', 'entity.name.type.class.behaviour'],
    });
  });

  it('entity.name.type.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class',
      scopes: ['source.shss', 'entity.name.type.class'],
    });
  });

  it('entity.name.type.trait', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.trait');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.trait',
      scopes: ['source.shss', 'entity.name.type.trait'],
    });
  });

  it('entity.name.type.interface', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.interface');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.interface',
      scopes: ['source.shss', 'entity.name.type.interface'],
    });
  });

  it('entity.name.type.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.class');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.class',
      scopes: ['source.shss', 'entity.name.type.class'],
    });
  });

  it('entity.name.type.struct', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.struct');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.struct',
      scopes: ['source.shss', 'entity.name.type.struct'],
    });
  });

  it('entity.name.type.instance', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type.instance');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type.instance',
      scopes: ['source.shss', 'entity.name.type.instance'],
    });
  });

  it('entity.name.type', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type',
      scopes: ['source.shss', 'entity.name.type'],
    });
  });

  it('entity.name.class.forward-decl', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class.forward-decl');
    expect(tokens[0]).toEqual({
      value: 'entity.name.class.forward-decl',
      scopes: ['source.shss', 'entity.name.class.forward-decl'],
    });
  });

  it('entity.name.class', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.class');
    expect(tokens[0]).toEqual({
      value: 'entity.name.class',
      scopes: ['source.shss', 'entity.name.class'],
    });
  });

  it('entity.name.struct', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.struct');
    expect(tokens[0]).toEqual({
      value: 'entity.name.struct',
      scopes: ['source.shss', 'entity.name.struct'],
    });
  });

  it('entity.name.enum', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.enum');
    expect(tokens[0]).toEqual({
      value: 'entity.name.enum',
      scopes: ['source.shss', 'entity.name.enum'],
    });
  });

  it('entity.name.union', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.union');
    expect(tokens[0]).toEqual({
      value: 'entity.name.union',
      scopes: ['source.shss', 'entity.name.union'],
    });
  });

  it('entity.name.trait', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.trait');
    expect(tokens[0]).toEqual({
      value: 'entity.name.trait',
      scopes: ['source.shss', 'entity.name.trait'],
    });
  });

  it('entity.name.interface', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.interface');
    expect(tokens[0]).toEqual({
      value: 'entity.name.interface',
      scopes: ['source.shss', 'entity.name.interface'],
    });
  });

  it('entity.name.impl', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.impl');
    expect(tokens[0]).toEqual({
      value: 'entity.name.impl',
      scopes: ['source.shss', 'entity.name.impl'],
    });
  });

  it('entity.name.type', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.type');
    expect(tokens[0]).toEqual({
      value: 'entity.name.type',
      scopes: ['source.shss', 'entity.name.type'],
    });
  });

  it('entity.name.function.scope', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.scope');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.scope',
      scopes: ['source.shss', 'entity.name.function.scope'],
    });
  });

  it('entity.name.function.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.preprocessor',
      scopes: ['source.shss', 'entity.name.function.preprocessor'],
    });
  });

  it('entity.name.function.operator', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.operator');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.operator',
      scopes: ['source.shss', 'entity.name.function.operator'],
    });
  });

  it('entity.name.function.namespace-prefix', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.namespace-prefix');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.namespace-prefix',
      scopes: ['source.shss', 'entity.name.function.namespace-prefix'],
    });
  });

  it('entity.name.function.macro', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.macro');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.macro',
      scopes: ['source.shss', 'entity.name.function.macro'],
    });
  });

  it('entity.name.function.macro.definition', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.macro.definition');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.macro.definition',
      scopes: ['source.shss', 'entity.name.function.macro.definition'],
    });
  });

  it('entity.name.function.guard', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.guard');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.guard',
      scopes: ['source.shss', 'entity.name.function.guard'],
    });
  });

  it('entity.name.function.definition', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.definition');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.definition',
      scopes: ['source.shss', 'entity.name.function.definition'],
    });
  });

  it('entity.name.function.constructor', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.constructor');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.constructor',
      scopes: ['source.shss', 'entity.name.function.constructor'],
    });
  });

  it('entity.name.function.destructor', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function.destructor');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function.destructor',
      scopes: ['source.shss', 'entity.name.function.destructor'],
    });
  });

  it('entity.name.function', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function',
      scopes: ['source.shss', 'entity.name.function'],
    });
  });

  it('entity.name.goto-label', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.goto-label');
    expect(tokens[0]).toEqual({
      value: 'entity.name.goto-label',
      scopes: ['source.shss', 'entity.name.goto-label'],
    });
  });

  it('entity.name.function', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.function');
    expect(tokens[0]).toEqual({
      value: 'entity.name.function',
      scopes: ['source.shss', 'entity.name.function'],
    });
  });

  it('entity.name.namespace', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.namespace');
    expect(tokens[0]).toEqual({
      value: 'entity.name.namespace',
      scopes: ['source.shss', 'entity.name.namespace'],
    });
  });

  it('entity.name.constant', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.constant');
    expect(tokens[0]).toEqual({
      value: 'entity.name.constant',
      scopes: ['source.shss', 'entity.name.constant'],
    });
  });

  it('entity.name.entity.other.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.entity.other.html');
    expect(tokens[0]).toEqual({
      value: 'entity.name.entity.other.html',
      scopes: ['source.shss', 'entity.name.entity.other.html'],
    });
  });

  it('entity.name.entity.other', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.entity.other');
    expect(tokens[0]).toEqual({
      value: 'entity.name.entity.other',
      scopes: ['source.shss', 'entity.name.entity.other'],
    });
  });

  it('entity.name.entity', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.entity');
    expect(tokens[0]).toEqual({
      value: 'entity.name.entity',
      scopes: ['source.shss', 'entity.name.entity'],
    });
  });

  it('entity.name.label', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.label');
    expect(tokens[0]).toEqual({
      value: 'entity.name.label',
      scopes: ['source.shss', 'entity.name.label'],
    });
  });

  it('entity.name.section', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.section');
    expect(tokens[0]).toEqual({
      value: 'entity.name.section',
      scopes: ['source.shss', 'entity.name.section'],
    });
  });

  it('entity.name.tag.wildcard', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.wildcard');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.wildcard',
      scopes: ['source.shss', 'entity.name.tag.wildcard'],
    });
  });

  it('entity.name.tag.style.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.style.html');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.style.html',
      scopes: ['source.shss', 'entity.name.tag.style.html'],
    });
  });

  it('entity.name.tag.style', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.style');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.style',
      scopes: ['source.shss', 'entity.name.tag.style'],
    });
  });

  it('entity.name.tag.script.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.script.html');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.script.html',
      scopes: ['source.shss', 'entity.name.tag.script.html'],
    });
  });

  it('entity.name.tag.script', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.script');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.script',
      scopes: ['source.shss', 'entity.name.tag.script'],
    });
  });

  it('entity.name.tag.other.html', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.other.html');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.other.html',
      scopes: ['source.shss', 'entity.name.tag.other.html'],
    });
  });

  it('entity.name.tag.other', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.other');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.other',
      scopes: ['source.shss', 'entity.name.tag.other'],
    });
  });

  it('entity.name.tag.inline', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.inline');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.inline',
      scopes: ['source.shss', 'entity.name.tag.inline'],
    });
  });

  it('entity.name.tag.block', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.block');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.block',
      scopes: ['source.shss', 'entity.name.tag.block'],
    });
  });

  it('entity.name.tag.custom', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag.custom');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag.custom',
      scopes: ['source.shss', 'entity.name.tag.custom'],
    });
  });

  it('entity.name.tag', () => {
    const { tokens } = grammar.tokenizeLine('entity.name.tag');
    expect(tokens[0]).toEqual({
      value: 'entity.name.tag',
      scopes: ['source.shss', 'entity.name.tag'],
    });
  });

  it('entity.name', () => {
    const { tokens } = grammar.tokenizeLine('entity.name');
    expect(tokens[0]).toEqual({
      value: 'entity.name',
      scopes: ['source.shss', 'entity.name'],
    });
  });

  it('entity.alias.import', () => {
    const { tokens } = grammar.tokenizeLine('entity.alias.import');
    expect(tokens[0]).toEqual({
      value: 'entity.alias.import',
      scopes: ['source.shss', 'entity.alias.import'],
    });
  });

  it('entity.alias', () => {
    const { tokens } = grammar.tokenizeLine('entity.alias');
    expect(tokens[0]).toEqual({
      value: 'entity.alias',
      scopes: ['source.shss', 'entity.alias'],
    });
  });

  it('entity', () => {
    const { tokens } = grammar.tokenizeLine('entity');
    expect(tokens[0]).toEqual({
      value: 'entity',
      scopes: ['source.shss', 'entity'],
    });
  });

  it('identifier', () => {
    const { tokens } = grammar.tokenizeLine('identifier');
    expect(tokens[0]).toEqual({
      value: 'identifier',
      scopes: ['source.shss', 'identifier'],
    });
  });

  it('invalid.deprecated.package_name_not_lowercase', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.package_name_not_lowercase');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.package_name_not_lowercase',
      scopes: ['source.shss', 'invalid.deprecated.package_name_not_lowercase'],
    });
  });

  it('invalid.deprecated.operator', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.operator');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.operator',
      scopes: ['source.shss', 'invalid.deprecated.operator'],
    });
  });

  it('invalid.deprecated.gradient.function', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.gradient.function');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.gradient.function',
      scopes: ['source.shss', 'invalid.deprecated.gradient.function'],
    });
  });

  it('invalid.deprecated.gradient', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.gradient');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.gradient',
      scopes: ['source.shss', 'invalid.deprecated.gradient'],
    });
  });

  it('invalid.deprecated.function', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.function');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.function',
      scopes: ['source.shss', 'invalid.deprecated.function'],
    });
  });

  it('invalid.deprecated.constant.media', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.constant.media');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.constant.media',
      scopes: ['source.shss', 'invalid.deprecated.constant.media'],
    });
  });

  it('invalid.deprecated.constant', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.constant');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.constant',
      scopes: ['source.shss', 'invalid.deprecated.constant'],
    });
  });

  it('invalid.deprecated.combinator', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.combinator');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.combinator',
      scopes: ['source.shss', 'invalid.deprecated.combinator'],
    });
  });

  it('invalid.deprecated.color.system', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.color.system');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.color.system',
      scopes: ['source.shss', 'invalid.deprecated.color.system'],
    });
  });

  it('invalid.deprecated.color', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated.color');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated.color',
      scopes: ['source.shss', 'invalid.deprecated.color'],
    });
  });

  it('invalid.deprecated', () => {
    const { tokens } = grammar.tokenizeLine('invalid.deprecated');
    expect(tokens[0]).toEqual({
      value: 'invalid.deprecated',
      scopes: ['source.shss', 'invalid.deprecated'],
    });
  });

  it('invalid.illegal.you-forgot-semicolon', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.you-forgot-semicolon');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.you-forgot-semicolon',
      scopes: ['source.shss', 'invalid.illegal.you-forgot-semicolon'],
    });
  });

  it('invalid.illegal.whitespace.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.whitespace.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.whitespace.charset',
      scopes: ['source.shss', 'invalid.illegal.whitespace.charset'],
    });
  });

  it('invalid.illegal.whitespace', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.whitespace');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.whitespace',
      scopes: ['source.shss', 'invalid.illegal.whitespace'],
    });
  });

  it('invalid.illegal.unknown-rune', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unknown-rune');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unknown-rune',
      scopes: ['source.shss', 'invalid.illegal.unknown-rune'],
    });
  });

  it('invalid.illegal.unknown-escape', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unknown-escape');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unknown-escape',
      scopes: ['source.shss', 'invalid.illegal.unknown-escape'],
    });
  });

  it('invalid.illegal.unexpected-characters.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unexpected-characters.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unexpected-characters.charset',
      scopes: ['source.shss', 'invalid.illegal.unexpected-characters.charset'],
    });
  });

  it('invalid.illegal.unexpected-characters', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unexpected-characters');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unexpected-characters',
      scopes: ['source.shss', 'invalid.illegal.unexpected-characters'],
    });
  });

  it('invalid.illegal.unexpected-text', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unexpected-text');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unexpected-text',
      scopes: ['source.shss', 'invalid.illegal.unexpected-text'],
    });
  });

  it('invalid.illegal.unclosed.string', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unclosed.string');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unclosed.string',
      scopes: ['source.shss', 'invalid.illegal.unclosed.string'],
    });
  });

  it('invalid.illegal.unclosed-string.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unclosed-string.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unclosed-string.charset',
      scopes: ['source.shss', 'invalid.illegal.unclosed-string.charset'],
    });
  });

  it('invalid.illegal.unclosed-string', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.unclosed-string');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.unclosed-string',
      scopes: ['source.shss', 'invalid.illegal.unclosed-string'],
    });
  });

  it('invalid.illegal.string', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.string');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.string',
      scopes: ['source.shss', 'invalid.illegal.string'],
    });
  });

  it('invalid.illegal.stray-comment-end', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-comment-end');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.stray-comment-end',
      scopes: ['source.shss', 'invalid.illegal.stray-comment-end'],
    });
  });

  it('invalid.illegal.stray', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.stray',
      scopes: ['source.shss', 'invalid.illegal.stray'],
    });
  });

  it('invalid.illegal.slice', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.slice');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.slice',
      scopes: ['source.shss', 'invalid.illegal.slice'],
    });
  });

  it('invalid.illegal.send-channel', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.send-channel');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.send-channel',
      scopes: ['source.shss', 'invalid.illegal.send-channel'],
    });
  });

  it('invalid.illegal.receive-channel', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.receive-channel');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.receive-channel',
      scopes: ['source.shss', 'invalid.illegal.receive-channel'],
    });
  });

  it('invalid.illegal.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.placeholder');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.placeholder',
      scopes: ['source.shss', 'invalid.illegal.placeholder'],
    });
  });

  it('invalid.illegal.numeric', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.numeric');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.numeric',
      scopes: ['source.shss', 'invalid.illegal.numeric'],
    });
  });

  it('invalid.illegal.not-lowercase.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.not-lowercase.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.not-lowercase.charset',
      scopes: ['source.shss', 'invalid.illegal.not-lowercase.charset'],
    });
  });

  it('invalid.illegal.not-lowercase', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.not-lowercase');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.not-lowercase',
      scopes: ['source.shss', 'invalid.illegal.not-lowercase'],
    });
  });

  it('invalid.illegal.not-double-quoted.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.not-double-quoted.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.not-double-quoted.charset',
      scopes: ['source.shss', 'invalid.illegal.not-double-quoted.charset'],
    });
  });

  it('invalid.illegal.not-double-quoted', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.not-double-quoted');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.not-double-quoted',
      scopes: ['source.shss', 'invalid.illegal.not-double-quoted'],
    });
  });

  it('invalid.illegal.no-whitespace.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.no-whitespace.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.no-whitespace.charset',
      scopes: ['source.shss', 'invalid.illegal.no-whitespace.charset'],
    });
  });

  it('invalid.illegal.no-whitespace', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.no-whitespace');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.no-whitespace',
      scopes: ['source.shss', 'invalid.illegal.no-whitespace'],
    });
  });

  it('invalid.illegal.name', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.name');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.name',
      scopes: ['source.shss', 'invalid.illegal.name'],
    });
  });

  it('invalid.illegal.macro-name', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.macro-name');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.macro-name',
      scopes: ['source.shss', 'invalid.illegal.macro-name'],
    });
  });

  it('invalid.illegal.leading-whitespace.charset', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.leading-whitespace.charset');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.leading-whitespace.charset',
      scopes: ['source.shss', 'invalid.illegal.leading-whitespace.charset'],
    });
  });

  it('invalid.illegal.leading-whitespace', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.leading-whitespace');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.leading-whitespace',
      scopes: ['source.shss', 'invalid.illegal.leading-whitespace'],
    });
  });

  it('invalid.illegal.integer', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.integer');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.integer',
      scopes: ['source.shss', 'invalid.illegal.integer'],
    });
  });

  it('invalid.illegal.incomplete.html', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.incomplete.html');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.incomplete.html',
      scopes: ['source.shss', 'invalid.illegal.incomplete.html'],
    });
  });

  it('invalid.illegal.incomplete', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.incomplete');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.incomplete',
      scopes: ['source.shss', 'invalid.illegal.incomplete'],
    });
  });

  it('invalid.illegal.identifier', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.identifier');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.identifier',
      scopes: ['source.shss', 'invalid.illegal.identifier'],
    });
  });

  it('invalid.illegal.delimiter-too-long', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.delimiter-too-long');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.delimiter-too-long',
      scopes: ['source.shss', 'invalid.illegal.delimiter-too-long'],
    });
  });

  it('invalid.illegal.constant.character.escape', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.constant.character.escape');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.constant.character.escape',
      scopes: ['source.shss', 'invalid.illegal.constant.character.escape'],
    });
  });

  it('invalid.illegal.constant.character', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.constant.character');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.constant.character',
      scopes: ['source.shss', 'invalid.illegal.constant.character'],
    });
  });

  it('invalid.illegal.constant', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.constant');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.constant',
      scopes: ['source.shss', 'invalid.illegal.constant'],
    });
  });

  it('invalid.illegal.comma', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.comma');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.comma',
      scopes: ['source.shss', 'invalid.illegal.comma'],
    });
  });

  it('invalid.illegal.closing-curly-bracket', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.closing-curly-bracket');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.closing-curly-bracket',
      scopes: ['source.shss', 'invalid.illegal.closing-curly-bracket'],
    });
  });

  it('invalid.illegal.character_not_allowed_here', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.character_not_allowed_here');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.character_not_allowed_here',
      scopes: ['source.shss', 'invalid.illegal.character_not_allowed_here'],
    });
  });

  it('invalid.illegal.character', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.character');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.character',
      scopes: ['source.shss', 'invalid.illegal.character'],
    });
  });

  it('invalid.illegal.character-out-of-range', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.character-out-of-range');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.character-out-of-range',
      scopes: ['source.shss', 'invalid.illegal.character-out-of-range'],
    });
  });

  it('invalid.illegal.character-not-allowed-here', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.character-not-allowed-here');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.character-not-allowed-here',
      scopes: ['source.shss', 'invalid.illegal.character-not-allowed-here'],
    });
  });

  it('invalid.illegal.bad-identifier', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.bad-identifier');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.bad-identifier',
      scopes: ['source.shss', 'invalid.illegal.bad-identifier'],
    });
  });

  it('invalid.illegal.bad-ampersand.html', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.bad-ampersand.html');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.bad-ampersand.html',
      scopes: ['source.shss', 'invalid.illegal.bad-ampersand.html'],
    });
  });

  it('invalid.illegal.bad-ampersand', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.bad-ampersand');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.bad-ampersand',
      scopes: ['source.shss', 'invalid.illegal.bad-ampersand'],
    });
  });

  it('invalid.illegal.backslash', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.backslash');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.backslash',
      scopes: ['source.shss', 'invalid.illegal.backslash'],
    });
  });

  it('invalid.illegal.atom', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.atom');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.atom',
      scopes: ['source.shss', 'invalid.illegal.atom'],
    });
  });

  it('invalid.illegal.syntax.pragma', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax.pragma');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.syntax.pragma',
      scopes: ['source.shss', 'invalid.illegal.syntax.pragma'],
    });
  });

  it('invalid.illegal.syntax', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.syntax');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.syntax',
      scopes: ['source.shss', 'invalid.illegal.syntax'],
    });
  });

  it('invalid.illegal.trailing-whitespace', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.trailing-whitespace');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.trailing-whitespace',
      scopes: ['source.shss', 'invalid.illegal.trailing-whitespace'],
    });
  });

  it('invalid.illegal.stray-bracket-end', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-bracket-end');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.stray-bracket-end',
      scopes: ['source.shss', 'invalid.illegal.stray-bracket-end'],
    });
  });

  it('invalid.illegal.stray-semi-colon', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal.stray-semi-colon');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal.stray-semi-colon',
      scopes: ['source.shss', 'invalid.illegal.stray-semi-colon'],
    });
  });

  it('invalid.illegal', () => {
    const { tokens } = grammar.tokenizeLine('invalid.illegal');
    expect(tokens[0]).toEqual({
      value: 'invalid.illegal',
      scopes: ['source.shss', 'invalid.illegal'],
    });
  });

  it('invalid', () => {
    const { tokens } = grammar.tokenizeLine('invalid');
    expect(tokens[0]).toEqual({
      value: 'invalid',
      scopes: ['source.shss', 'invalid'],
    });
  });

  it('keyword.module', () => {
    const { tokens } = grammar.tokenizeLine('keyword.module');
    expect(tokens[0]).toEqual({
      value: 'keyword.module',
      scopes: ['source.shss', 'keyword.module'],
    });
  });

  it('keyword.map', () => {
    const { tokens } = grammar.tokenizeLine('keyword.map');
    expect(tokens[0]).toEqual({
      value: 'keyword.map',
      scopes: ['source.shss', 'keyword.map'],
    });
  });

  it('keyword.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.interface');
    expect(tokens[0]).toEqual({
      value: 'keyword.interface',
      scopes: ['source.shss', 'keyword.interface'],
    });
  });

  it('keyword.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.import');
    expect(tokens[0]).toEqual({
      value: 'keyword.import',
      scopes: ['source.shss', 'keyword.import'],
    });
  });

  it('keyword.function', () => {
    const { tokens } = grammar.tokenizeLine('keyword.function');
    expect(tokens[0]).toEqual({
      value: 'keyword.function',
      scopes: ['source.shss', 'keyword.function'],
    });
  });

  it('keyword.expressions-and-types', () => {
    const { tokens } = grammar.tokenizeLine('keyword.expressions-and-types');
    expect(tokens[0]).toEqual({
      value: 'keyword.expressions-and-types',
      scopes: ['source.shss', 'keyword.expressions-and-types'],
    });
  });

  it('keyword.var', () => {
    const { tokens } = grammar.tokenizeLine('keyword.var');
    expect(tokens[0]).toEqual({
      value: 'keyword.var',
      scopes: ['source.shss', 'keyword.var'],
    });
  });

  it('keyword.type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.type');
    expect(tokens[0]).toEqual({
      value: 'keyword.type',
      scopes: ['source.shss', 'keyword.type'],
    });
  });

  it('keyword.struct', () => {
    const { tokens } = grammar.tokenizeLine('keyword.struct');
    expect(tokens[0]).toEqual({
      value: 'keyword.struct',
      scopes: ['source.shss', 'keyword.struct'],
    });
  });

  it('keyword.reserved', () => {
    const { tokens } = grammar.tokenizeLine('keyword.reserved');
    expect(tokens[0]).toEqual({
      value: 'keyword.reserved',
      scopes: ['source.shss', 'keyword.reserved'],
    });
  });

  it('keyword.package', () => {
    const { tokens } = grammar.tokenizeLine('keyword.package');
    expect(tokens[0]).toEqual({
      value: 'keyword.package',
      scopes: ['source.shss', 'keyword.package'],
    });
  });

  it('keyword.const', () => {
    const { tokens } = grammar.tokenizeLine('keyword.const');
    expect(tokens[0]).toEqual({
      value: 'keyword.const',
      scopes: ['source.shss', 'keyword.const'],
    });
  });

  it('keyword.channel', () => {
    const { tokens } = grammar.tokenizeLine('keyword.channel');
    expect(tokens[0]).toEqual({
      value: 'keyword.channel',
      scopes: ['source.shss', 'keyword.channel'],
    });
  });

  it('keyword.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('keyword.bracket.begin');
    expect(tokens[0]).toEqual({
      value: 'keyword.bracket.begin',
      scopes: ['source.shss', 'keyword.bracket.begin'],
    });
  });

  it('keyword.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('keyword.bracket.end');
    expect(tokens[0]).toEqual({
      value: 'keyword.bracket.end',
      scopes: ['source.shss', 'keyword.bracket.end'],
    });
  });

  it('keyword.bracket', () => {
    const { tokens } = grammar.tokenizeLine('keyword.bracket');
    expect(tokens[0]).toEqual({
      value: 'keyword.bracket',
      scopes: ['source.shss', 'keyword.bracket'],
    });
  });

  it('keyword.operator.wildcard', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.wildcard');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.wildcard',
      scopes: ['source.shss', 'keyword.operator.wildcard'],
    });
  });

  it('keyword.operator.update', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.update');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.update',
      scopes: ['source.shss', 'keyword.operator.update'],
    });
  });

  it('keyword.operator.unpacking.arguments', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.unpacking.arguments');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.unpacking.arguments',
      scopes: ['source.shss', 'keyword.operator.unpacking.arguments'],
    });
  });

  it('keyword.operator.unpacking', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.unpacking');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.unpacking',
      scopes: ['source.shss', 'keyword.operator.unpacking'],
    });
  });

  it('keyword.operator.transposed-variable', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.transposed-variable');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.transposed-variable',
      scopes: ['source.shss', 'keyword.operator.transposed-variable'],
    });
  });

  it('keyword.operator.transposed-parens', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.transposed-parens');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.transposed-parens',
      scopes: ['source.shss', 'keyword.operator.transposed-parens'],
    });
  });

  it('keyword.operator.transposed-matrix', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.transposed-matrix');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.transposed-matrix',
      scopes: ['source.shss', 'keyword.operator.transposed-matrix'],
    });
  });

  it('keyword.operator.transposed-func', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.transposed-func');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.transposed-func',
      scopes: ['source.shss', 'keyword.operator.transposed-func'],
    });
  });

  it('keyword.operator.textual', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.textual');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.textual',
      scopes: ['source.shss', 'keyword.operator.textual'],
    });
  });

  it('keyword.operator.symbolic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.symbolic');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.symbolic',
      scopes: ['source.shss', 'keyword.operator.symbolic'],
    });
  });

  it('keyword.operator.sizeof', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.sizeof');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.sizeof',
      scopes: ['source.shss', 'keyword.operator.sizeof'],
    });
  });

  it('keyword.operator.shift', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.shift');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.shift',
      scopes: ['source.shss', 'keyword.operator.shift'],
    });
  });

  it('keyword.operator.shape', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.shape');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.shape',
      scopes: ['source.shss', 'keyword.operator.shape'],
    });
  });

  it('keyword.operator.relation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.relation');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.relation',
      scopes: ['source.shss', 'keyword.operator.relation'],
    });
  });

  it('keyword.operator.record.end', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.record.end');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.record.end',
      scopes: ['source.shss', 'keyword.operator.record.end'],
    });
  });

  it('keyword.operator.record.begin', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.record.begin');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.record.begin',
      scopes: ['source.shss', 'keyword.operator.record.begin'],
    });
  });

  it('keyword.operator.record', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.record');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.record',
      scopes: ['source.shss', 'keyword.operator.record'],
    });
  });

  it('keyword.operator.promoted', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.promoted');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.promoted',
      scopes: ['source.shss', 'keyword.operator.promoted'],
    });
  });

  it('keyword.operator.pattern', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pattern');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.pattern',
      scopes: ['source.shss', 'keyword.operator.pattern'],
    });
  });

  it('keyword.operator.other', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.other');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.other',
      scopes: ['source.shss', 'keyword.operator.other'],
    });
  });

  it('keyword.operator.macro', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.macro');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.macro',
      scopes: ['source.shss', 'keyword.operator.macro'],
    });
  });

  it('keyword.operator.isa', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.isa');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.isa',
      scopes: ['source.shss', 'keyword.operator.isa'],
    });
  });

  it('keyword.operator.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.interpolation');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.interpolation',
      scopes: ['source.shss', 'keyword.operator.interpolation'],
    });
  });

  it('keyword.operator.instanceof', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.instanceof');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.instanceof',
      scopes: ['source.shss', 'keyword.operator.instanceof'],
    });
  });

  it('keyword.operator.increment-decrement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.increment-decrement');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.increment-decrement',
      scopes: ['source.shss', 'keyword.operator.increment-decrement'],
    });
  });

  it('keyword.operator.gradient', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.gradient');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.gradient',
      scopes: ['source.shss', 'keyword.operator.gradient'],
    });
  });

  it('keyword.operator.function.infix', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.function.infix');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.function.infix',
      scopes: ['source.shss', 'keyword.operator.function.infix'],
    });
  });

  it('keyword.operator.function', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.function');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.function',
      scopes: ['source.shss', 'keyword.operator.function'],
    });
  });

  it('keyword.operator.function-annotation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.function-annotation');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.function-annotation',
      scopes: ['source.shss', 'keyword.operator.function-annotation'],
    });
  });

  it('keyword.operator.dots', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.dots');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.dots',
      scopes: ['source.shss', 'keyword.operator.dots'],
    });
  });

  it('keyword.operator.combinator', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.combinator');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.combinator',
      scopes: ['source.shss', 'keyword.operator.combinator'],
    });
  });

  it('keyword.operator.channel', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.channel');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.channel',
      scopes: ['source.shss', 'keyword.operator.channel'],
    });
  });

  it('keyword.operator.cast', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.cast');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.cast',
      scopes: ['source.shss', 'keyword.operator.cast'],
    });
  });

  it('keyword.operator.boolean', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.boolean');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.boolean',
      scopes: ['source.shss', 'keyword.operator.boolean'],
    });
  });

  it('keyword.operator.assert.expression-separator', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assert.expression-separator');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assert.expression-separator',
      scopes: ['source.shss', 'keyword.operator.assert.expression-separator'],
    });
  });

  it('keyword.operator.assert', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assert');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assert',
      scopes: ['source.shss', 'keyword.operator.assert'],
    });
  });

  it('keyword.operator.arrow', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arrow');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.arrow',
      scopes: ['source.shss', 'keyword.operator.arrow'],
    });
  });

  it('keyword.operator.address', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.address');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.address',
      scopes: ['source.shss', 'keyword.operator.address'],
    });
  });

  it('keyword.declaration.function', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.function');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.function',
      scopes: ['source.shss', 'keyword.declaration.function'],
    });
  });

  it('keyword.declaration.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.class');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.class',
      scopes: ['source.shss', 'keyword.declaration.class'],
    });
  });

  it('keyword.declaration.struct', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.struct');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.struct',
      scopes: ['source.shss', 'keyword.declaration.struct'],
    });
  });

  it('keyword.declaration.enum', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.enum');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.enum',
      scopes: ['source.shss', 'keyword.declaration.enum'],
    });
  });

  it('keyword.declaration.union', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.union');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.union',
      scopes: ['source.shss', 'keyword.declaration.union'],
    });
  });

  it('keyword.declaration.trait', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.trait');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.trait',
      scopes: ['source.shss', 'keyword.declaration.trait'],
    });
  });

  it('keyword.declaration.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.interface');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.interface',
      scopes: ['source.shss', 'keyword.declaration.interface'],
    });
  });

  it('keyword.declaration.impl', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.impl');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.impl',
      scopes: ['source.shss', 'keyword.declaration.impl'],
    });
  });

  it('keyword.declaration.type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration.type');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration.type',
      scopes: ['source.shss', 'keyword.declaration.type'],
    });
  });

  it('keyword.declaration', () => {
    const { tokens } = grammar.tokenizeLine('keyword.declaration');
    expect(tokens[0]).toEqual({
      value: 'keyword.declaration',
      scopes: ['source.shss', 'keyword.declaration'],
    });
  });

  it('keyword.operator.ellipsis.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis.placeholder');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.ellipsis.placeholder',
      scopes: ['source.shss', 'keyword.operator.ellipsis.placeholder'],
    });
  });

  it('keyword.operator.ellipsis', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ellipsis');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.ellipsis',
      scopes: ['source.shss', 'keyword.operator.ellipsis'],
    });
  });

  it('keyword.operator.readline', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.readline');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.readline',
      scopes: ['source.shss', 'keyword.operator.readline'],
    });
  });

  it('keyword.operator.filetest', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.filetest');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.filetest',
      scopes: ['source.shss', 'keyword.operator.filetest'],
    });
  });

  it('keyword.operator.comparison.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison.stringwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.comparison.stringwise',
      scopes: ['source.shss', 'keyword.operator.comparison.stringwise'],
    });
  });

  it('keyword.operator.comparison', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.comparison');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.comparison',
      scopes: ['source.shss', 'keyword.operator.comparison'],
    });
  });

  it('keyword.operator.pragma.flag', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma.flag');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.pragma.flag',
      scopes: ['source.shss', 'keyword.operator.pragma.flag'],
    });
  });

  it('keyword.operator.pragma', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.pragma');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.pragma',
      scopes: ['source.shss', 'keyword.operator.pragma'],
    });
  });

  it('keyword.operator.repetition', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.repetition');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.repetition',
      scopes: ['source.shss', 'keyword.operator.repetition'],
    });
  });

  it('keyword.operator.concatenation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.concatenation');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.concatenation',
      scopes: ['source.shss', 'keyword.operator.concatenation'],
    });
  });

  it('keyword.operator.range', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.range');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.range',
      scopes: ['source.shss', 'keyword.operator.range'],
    });
  });

  it('keyword.operator.assignement.compound.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignement.compound.bitwise',
      scopes: ['source.shss', 'keyword.operator.assignement.compound.bitwise'],
    });
  });

  it('keyword.operator.assignement.compound.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound.stringwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignement.compound.stringwise',
      scopes: ['source.shss', 'keyword.operator.assignement.compound.stringwise'],
    });
  });

  it('keyword.operator.assignement.compound', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.compound');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignement.compound',
      scopes: ['source.shss', 'keyword.operator.assignement.compound'],
    });
  });

  it('keyword.operator.assignement.conditional', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement.conditional');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignement.conditional',
      scopes: ['source.shss', 'keyword.operator.assignement.conditional'],
    });
  });

  it('keyword.operator.assignement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignement');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignement',
      scopes: ['source.shss', 'keyword.operator.assignement'],
    });
  });

  it('keyword.operator.bitwise.shift', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise.shift');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.bitwise.shift',
      scopes: ['source.shss', 'keyword.operator.bitwise.shift'],
    });
  });

  it('keyword.operator.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.bitwise',
      scopes: ['source.shss', 'keyword.operator.bitwise'],
    });
  });

  it('keyword.operator.decrement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.decrement');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.decrement',
      scopes: ['source.shss', 'keyword.operator.decrement'],
    });
  });

  it('keyword.operator.increment', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.increment');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.increment',
      scopes: ['source.shss', 'keyword.operator.increment'],
    });
  });

  it('keyword.operator.logical.c-style', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.c-style');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical.c-style',
      scopes: ['source.shss', 'keyword.operator.logical.c-style'],
    });
  });

  it('keyword.operator.logical.defined-or', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.defined-or');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical.defined-or',
      scopes: ['source.shss', 'keyword.operator.logical.defined-or'],
    });
  });

  it('keyword.operator.logical.feature', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.feature');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical.feature',
      scopes: ['source.shss', 'keyword.operator.logical.feature'],
    });
  });

  it('keyword.operator.logical.and.media', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.and.media');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical.and.media',
      scopes: ['source.shss', 'keyword.operator.logical.and.media'],
    });
  });

  it('keyword.operator.logical.and', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical.and');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical.and',
      scopes: ['source.shss', 'keyword.operator.logical.and'],
    });
  });

  it('keyword.operator.logical', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical',
      scopes: ['source.shss', 'keyword.operator.logical'],
    });
  });

  it('keyword.operator.stringwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.stringwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.stringwise',
      scopes: ['source.shss', 'keyword.operator.stringwise'],
    });
  });

  it('keyword.operator.arithmetic.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.arithmetic.bitwise',
      scopes: ['source.shss', 'keyword.operator.arithmetic.bitwise'],
    });
  });

  it('keyword.operator.arithmetic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.arithmetic',
      scopes: ['source.shss', 'keyword.operator.arithmetic'],
    });
  });

  it('keyword.operator.ternary', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.ternary');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.ternary',
      scopes: ['source.shss', 'keyword.operator.ternary'],
    });
  });

  it('keyword.operator.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.heredoc');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.heredoc',
      scopes: ['source.shss', 'keyword.operator.heredoc'],
    });
  });

  it('keyword.operator.null-coalescing', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.null-coalescing');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.null-coalescing',
      scopes: ['source.shss', 'keyword.operator.null-coalescing'],
    });
  });

  it('keyword.operator.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.interface');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.interface',
      scopes: ['source.shss', 'keyword.operator.interface'],
    });
  });

  it('keyword.operator.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.class');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.class',
      scopes: ['source.shss', 'keyword.operator.class'],
    });
  });

  it('keyword.operator.nullable-type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.nullable-type');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.nullable-type',
      scopes: ['source.shss', 'keyword.operator.nullable-type'],
    });
  });

  it('keyword.operator.assignment.compound.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment.compound.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment.compound.bitwise',
      scopes: ['source.shss', 'keyword.operator.assignment.compound.bitwise'],
    });
  });

  it('keyword.operator.assignment.compound', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment.compound');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment.compound',
      scopes: ['source.shss', 'keyword.operator.assignment.compound'],
    });
  });

  it('keyword.operator.assignment.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment.bitwise',
      scopes: ['source.shss', 'keyword.operator.assignment.bitwise'],
    });
  });

  it('keyword.operator.assignment.augmented', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment.augmented');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment.augmented',
      scopes: ['source.shss', 'keyword.operator.assignment.augmented'],
    });
  });

  it('keyword.operator.assignment.arithmetic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment.arithmetic');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment.arithmetic',
      scopes: ['source.shss', 'keyword.operator.assignment.arithmetic'],
    });
  });

  it('keyword.operator.assignment', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.assignment');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.assignment',
      scopes: ['source.shss', 'keyword.operator.assignment'],
    });
  });

  it('keyword.operator.arithmetic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.arithmetic');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.arithmetic',
      scopes: ['source.shss', 'keyword.operator.arithmetic'],
    });
  });

  it('keyword.operator.bitwise', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.bitwise');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.bitwise',
      scopes: ['source.shss', 'keyword.operator.bitwise'],
    });
  });

  it('keyword.operator.logical', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.logical');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.logical',
      scopes: ['source.shss', 'keyword.operator.logical'],
    });
  });

  it('keyword.operator.word', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.word');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.word',
      scopes: ['source.shss', 'keyword.operator.word'],
    });
  });

  it('keyword.operator.regexp', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator.regexp');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator.regexp',
      scopes: ['source.shss', 'keyword.operator.regexp'],
    });
  });

  it('keyword.operator', () => {
    const { tokens } = grammar.tokenizeLine('keyword.operator');
    expect(tokens[0]).toEqual({
      value: 'keyword.operator',
      scopes: ['source.shss', 'keyword.operator'],
    });
  });

  it('keyword.controls', () => {
    const { tokens } = grammar.tokenizeLine('keyword.controls');
    expect(tokens[0]).toEqual({
      value: 'keyword.controls',
      scopes: ['source.shss', 'keyword.controls'],
    });
  });

  it('keyword.control.at-rule.viewport', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.viewport');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.viewport',
      scopes: ['source.shss', 'keyword.control.at-rule.viewport'],
    });
  });

  it('keyword.control.at-rule.supports', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.supports');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.supports',
      scopes: ['source.shss', 'keyword.control.at-rule.supports'],
    });
  });

  it('keyword.control.at-rule.page', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.page');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.page',
      scopes: ['source.shss', 'keyword.control.at-rule.page'],
    });
  });

  it('keyword.control.at-rule.namespace', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.namespace');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.namespace',
      scopes: ['source.shss', 'keyword.control.at-rule.namespace'],
    });
  });

  it('keyword.control.at-rule.media', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.media');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.media',
      scopes: ['source.shss', 'keyword.control.at-rule.media'],
    });
  });

  it('keyword.control.at-rule.keyframes', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.keyframes');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.keyframes',
      scopes: ['source.shss', 'keyword.control.at-rule.keyframes'],
    });
  });

  it('keyword.control.at-rule.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.import');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.import',
      scopes: ['source.shss', 'keyword.control.at-rule.import'],
    });
  });

  it('keyword.control.at-rule.font-feature-values', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.font-feature-values');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.font-feature-values',
      scopes: ['source.shss', 'keyword.control.at-rule.font-feature-values'],
    });
  });

  it('keyword.control.at-rule.font-face', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.font-face');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.font-face',
      scopes: ['source.shss', 'keyword.control.at-rule.font-face'],
    });
  });

  it('keyword.control.at-rule.document', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.document');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.document',
      scopes: ['source.shss', 'keyword.control.at-rule.document'],
    });
  });

  it('keyword.control.at-rule', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule',
      scopes: ['source.shss', 'keyword.control.at-rule'],
    });
  });

  it('keyword.control.at-rule.counter-style', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.counter-style');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.counter-style',
      scopes: ['source.shss', 'keyword.control.at-rule.counter-style'],
    });
  });

  it('keyword.control.at-rule.charset', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule.charset');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule.charset',
      scopes: ['source.shss', 'keyword.control.at-rule.charset'],
    });
  });

  it('keyword.control.at-rule', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.at-rule');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.at-rule',
      scopes: ['source.shss', 'keyword.control.at-rule'],
    });
  });

  it('keyword.control.directive.undef', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.undef');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.undef',
      scopes: ['source.shss', 'keyword.control.directive.undef'],
    });
  });

  it('keyword.control.directive.pragma.pragma-mark', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.pragma.pragma-mark');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.pragma.pragma-mark',
      scopes: ['source.shss', 'keyword.control.directive.pragma.pragma-mark'],
    });
  });

  it('keyword.control.directive.pragma', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.pragma');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.pragma',
      scopes: ['source.shss', 'keyword.control.directive.pragma'],
    });
  });

  it('keyword.control.directive.module', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.module');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.module',
      scopes: ['source.shss', 'keyword.control.directive.module'],
    });
  });

  it('keyword.control.directive.line', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.line');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.line',
      scopes: ['source.shss', 'keyword.control.directive.line'],
    });
  });

  it('keyword.control.directive.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.import');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.import',
      scopes: ['source.shss', 'keyword.control.directive.import'],
    });
  });

  it('keyword.control.directive.ifndef', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.ifndef');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.ifndef',
      scopes: ['source.shss', 'keyword.control.directive.ifndef'],
    });
  });

  it('keyword.control.directive.ifdef', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.ifdef');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.ifdef',
      scopes: ['source.shss', 'keyword.control.directive.ifdef'],
    });
  });

  it('keyword.control.directive.export', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.export');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.export',
      scopes: ['source.shss', 'keyword.control.directive.export'],
    });
  });

  it('keyword.control.directive.diagnostic', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.diagnostic');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.diagnostic',
      scopes: ['source.shss', 'keyword.control.directive.diagnostic'],
    });
  });

  it('keyword.control.directive.define', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.define');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.define',
      scopes: ['source.shss', 'keyword.control.directive.define'],
    });
  });

  it('keyword.control.directive.conditional', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.conditional');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.conditional',
      scopes: ['source.shss', 'keyword.control.directive.conditional'],
    });
  });

  it('keyword.control.directive.behaviour', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.behaviour');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.behaviour',
      scopes: ['source.shss', 'keyword.control.directive.behaviour'],
    });
  });

  it('keyword.control.directive.pragma', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive.pragma');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive.pragma',
      scopes: ['source.shss', 'keyword.control.directive.pragma'],
    });
  });

  it('keyword.control.directive', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.directive');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.directive',
      scopes: ['source.shss', 'keyword.control.directive'],
    });
  });

  it('keyword.control.diagnostics', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.diagnostics');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.diagnostics',
      scopes: ['source.shss', 'keyword.control.diagnostics'],
    });
  });

  it('keyword.control.regexp-option', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.regexp-option');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.regexp-option',
      scopes: ['source.shss', 'keyword.control.regexp-option'],
    });
  });

  it('keyword.control.conditional', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.conditional');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.conditional',
      scopes: ['source.shss', 'keyword.control.conditional'],
    });
  });

  it('keyword.control.anchor', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.anchor');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.anchor',
      scopes: ['source.shss', 'keyword.control.anchor'],
    });
  });

  it('keyword.control.import.from', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.import.from');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.import.from',
      scopes: ['source.shss', 'keyword.control.import.from'],
    });
  });

  it('keyword.control.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.import');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.import',
      scopes: ['source.shss', 'keyword.control.import'],
    });
  });

  it('keyword.control.continue', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.continue');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.continue',
      scopes: ['source.shss', 'keyword.control.continue'],
    });
  });

  it('keyword.control.while', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.while');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.while',
      scopes: ['source.shss', 'keyword.control.while'],
    });
  });

  it('keyword.control.return', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.return');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.return',
      scopes: ['source.shss', 'keyword.control.return'],
    });
  });

  it('keyword.control.try', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.try');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.try',
      scopes: ['source.shss', 'keyword.control.try'],
    });
  });

  it('keyword.control.throw', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.throw');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.throw',
      scopes: ['source.shss', 'keyword.control.throw'],
    });
  });

  it('keyword.control.ternary', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.ternary');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.ternary',
      scopes: ['source.shss', 'keyword.control.ternary'],
    });
  });

  it('keyword.control.statement', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.statement');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.statement',
      scopes: ['source.shss', 'keyword.control.statement'],
    });
  });

  it('keyword.control.start-block', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.start-block');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.start-block',
      scopes: ['source.shss', 'keyword.control.start-block'],
    });
  });

  it('keyword.control.repeat', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.repeat');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.repeat',
      scopes: ['source.shss', 'keyword.control.repeat'],
    });
  });

  it('keyword.control.receive', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.receive');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.receive',
      scopes: ['source.shss', 'keyword.control.receive'],
    });
  });

  it('keyword.control.query', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.query');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.query',
      scopes: ['source.shss', 'keyword.control.query'],
    });
  });

  it('keyword.control.pseudo-method', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.pseudo-method');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.pseudo-method',
      scopes: ['source.shss', 'keyword.control.pseudo-method'],
    });
  });

  it('keyword.control.new', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.new');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.new',
      scopes: ['source.shss', 'keyword.control.new'],
    });
  });

  it('keyword.control.module', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.module');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.module',
      scopes: ['source.shss', 'keyword.control.module'],
    });
  });

  it('keyword.control.if', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.if');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.if',
      scopes: ['source.shss', 'keyword.control.if'],
    });
  });

  it('keyword.control.fun', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.fun');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.fun',
      scopes: ['source.shss', 'keyword.control.fun'],
    });
  });

  it('keyword.control.finally', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.finally');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.finally',
      scopes: ['source.shss', 'keyword.control.finally'],
    });
  });

  it('keyword.control.exception', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.exception');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.exception',
      scopes: ['source.shss', 'keyword.control.exception'],
    });
  });

  it('keyword.control.def', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.def');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.def',
      scopes: ['source.shss', 'keyword.control.def'],
    });
  });

  it('keyword.control.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.class');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.class',
      scopes: ['source.shss', 'keyword.control.class'],
    });
  });

  it('keyword.control.catch', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.catch');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.catch',
      scopes: ['source.shss', 'keyword.control.catch'],
    });
  });

  it('keyword.control.case', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.case');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.case',
      scopes: ['source.shss', 'keyword.control.case'],
    });
  });

  it('keyword.control.begin', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control.begin');
    expect(tokens[0]).toEqual({
      value: 'keyword.control.begin',
      scopes: ['source.shss', 'keyword.control.begin'],
    });
  });

  it('keyword.control', () => {
    const { tokens } = grammar.tokenizeLine('keyword.control');
    expect(tokens[0]).toEqual({
      value: 'keyword.control',
      scopes: ['source.shss', 'keyword.control'],
    });
  });

  it('keyword.others', () => {
    const { tokens } = grammar.tokenizeLine('keyword.others');
    expect(tokens[0]).toEqual({
      value: 'keyword.others',
      scopes: ['source.shss', 'keyword.others'],
    });
  });

  it('keyword.other.unit.percentage', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.unit.percentage');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.unit.percentage',
      scopes: ['source.shss', 'keyword.other.unit.percentage'],
    });
  });

  it('keyword.other.special-method', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.special-method');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.special-method',
      scopes: ['source.shss', 'keyword.other.special-method'],
    });
  });

  it('keyword.other.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.preprocessor',
      scopes: ['source.shss', 'keyword.other.preprocessor'],
    });
  });

  it('keyword.other.package', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.package');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.package',
      scopes: ['source.shss', 'keyword.other.package'],
    });
  });

  it('keyword.other.important', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.important');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.important',
      scopes: ['source.shss', 'keyword.other.important'],
    });
  });

  it('keyword.other.import', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.import');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.import',
      scopes: ['source.shss', 'keyword.other.import'],
    });
  });

  it('keyword.other.forall', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.forall');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.forall',
      scopes: ['source.shss', 'keyword.other.forall'],
    });
  });

  it('keyword.other.double-colon', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.double-colon');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.double-colon',
      scopes: ['source.shss', 'keyword.other.double-colon'],
    });
  });

  it('keyword.other.documentation.doc', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.documentation.doc');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.documentation.doc',
      scopes: ['source.shss', 'keyword.other.documentation.doc'],
    });
  });

  it('keyword.other.documentation', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.documentation');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.documentation',
      scopes: ['source.shss', 'keyword.other.documentation'],
    });
  });

  it('keyword.other.data', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.data');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.data',
      scopes: ['source.shss', 'keyword.other.data'],
    });
  });

  it('keyword.other.big-arrow', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.big-arrow');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.big-arrow',
      scopes: ['source.shss', 'keyword.other.big-arrow'],
    });
  });

  it('keyword.other.arrow', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.arrow');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.arrow',
      scopes: ['source.shss', 'keyword.other.arrow'],
    });
  });

  it('keyword.other.namespace', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.namespace');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.namespace',
      scopes: ['source.shss', 'keyword.other.namespace'],
    });
  });

  it('keyword.other.class', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.class');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.class',
      scopes: ['source.shss', 'keyword.other.class'],
    });
  });

  it('keyword.other.interface', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.interface');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.interface',
      scopes: ['source.shss', 'keyword.other.interface'],
    });
  });

  it('keyword.other.type', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other.type');
    expect(tokens[0]).toEqual({
      value: 'keyword.other.type',
      scopes: ['source.shss', 'keyword.other.type'],
    });
  });

  it('keyword.other', () => {
    const { tokens } = grammar.tokenizeLine('keyword.other');
    expect(tokens[0]).toEqual({
      value: 'keyword.other',
      scopes: ['source.shss', 'keyword.other'],
    });
  });

  it('keyword', () => {
    const { tokens } = grammar.tokenizeLine('keyword');
    expect(tokens[0]).toEqual({
      value: 'keyword',
      scopes: ['source.shss', 'keyword'],
    });
  });

  it('markup.other.escape.newline.end', () => {
    const { tokens } = grammar.tokenizeLine('markup.other.escape.newline.end');
    expect(tokens[0]).toEqual({
      value: 'markup.other.escape.newline.end',
      scopes: ['source.shss', 'markup.other.escape.newline.end'],
    });
  });

  it('markup.other.escape.newline.begin', () => {
    const { tokens } = grammar.tokenizeLine('markup.other.escape.newline.begin');
    expect(tokens[0]).toEqual({
      value: 'markup.other.escape.newline.begin',
      scopes: ['source.shss', 'markup.other.escape.newline.begin'],
    });
  });

  it('markup.other.escape.newline', () => {
    const { tokens } = grammar.tokenizeLine('markup.other.escape.newline');
    expect(tokens[0]).toEqual({
      value: 'markup.other.escape.newline',
      scopes: ['source.shss', 'markup.other.escape.newline'],
    });
  });

  it('markup.other.escape', () => {
    const { tokens } = grammar.tokenizeLine('markup.other.escape');
    expect(tokens[0]).toEqual({
      value: 'markup.other.escape',
      scopes: ['source.shss', 'markup.other.escape'],
    });
  });

  it('markup.other', () => {
    const { tokens } = grammar.tokenizeLine('markup.other');
    expect(tokens[0]).toEqual({
      value: 'markup.other',
      scopes: ['source.shss', 'markup.other'],
    });
  });

  it('markup.heading', () => {
    const { tokens } = grammar.tokenizeLine('markup.heading');
    expect(tokens[0]).toEqual({
      value: 'markup.heading',
      scopes: ['source.shss', 'markup.heading'],
    });
  });

  it('markup.list.unnumbered', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.unnumbered');
    expect(tokens[0]).toEqual({
      value: 'markup.list.unnumbered',
      scopes: ['source.shss', 'markup.list.unnumbered'],
    });
  });

  it('markup.list.numbered', () => {
    const { tokens } = grammar.tokenizeLine('markup.list.numbered');
    expect(tokens[0]).toEqual({
      value: 'markup.list.numbered',
      scopes: ['source.shss', 'markup.list.numbered'],
    });
  });

  it('markup.list', () => {
    const { tokens } = grammar.tokenizeLine('markup.list');
    expect(tokens[0]).toEqual({
      value: 'markup.list',
      scopes: ['source.shss', 'markup.list'],
    });
  });

  it('markup.bold', () => {
    const { tokens } = grammar.tokenizeLine('markup.bold');
    expect(tokens[0]).toEqual({
      value: 'markup.bold',
      scopes: ['source.shss', 'markup.bold'],
    });
  });

  it('markup.italic', () => {
    const { tokens } = grammar.tokenizeLine('markup.italic');
    expect(tokens[0]).toEqual({
      value: 'markup.italic',
      scopes: ['source.shss', 'markup.italic'],
    });
  });

  it('markup.inserted', () => {
    const { tokens } = grammar.tokenizeLine('markup.inserted');
    expect(tokens[0]).toEqual({
      value: 'markup.inserted',
      scopes: ['source.shss', 'markup.inserted'],
    });
  });

  it('markup.deleted', () => {
    const { tokens } = grammar.tokenizeLine('markup.deleted');
    expect(tokens[0]).toEqual({
      value: 'markup.deleted',
      scopes: ['source.shss', 'markup.deleted'],
    });
  });

  it('markup.underline.link.hyperlink', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link.hyperlink');
    expect(tokens[0]).toEqual({
      value: 'markup.underline.link.hyperlink',
      scopes: ['source.shss', 'markup.underline.link.hyperlink'],
    });
  });

  it('markup.underline.link.radar', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link.radar');
    expect(tokens[0]).toEqual({
      value: 'markup.underline.link.radar',
      scopes: ['source.shss', 'markup.underline.link.radar'],
    });
  });

  it('markup.underline.link', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline.link');
    expect(tokens[0]).toEqual({
      value: 'markup.underline.link',
      scopes: ['source.shss', 'markup.underline.link'],
    });
  });

  it('markup.underline', () => {
    const { tokens } = grammar.tokenizeLine('markup.underline');
    expect(tokens[0]).toEqual({
      value: 'markup.underline',
      scopes: ['source.shss', 'markup.underline'],
    });
  });

  it('markup.quote', () => {
    const { tokens } = grammar.tokenizeLine('markup.quote');
    expect(tokens[0]).toEqual({
      value: 'markup.quote',
      scopes: ['source.shss', 'markup.quote'],
    });
  });

  it('markup.raw.inline', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.inline');
    expect(tokens[0]).toEqual({
      value: 'markup.raw.inline',
      scopes: ['source.shss', 'markup.raw.inline'],
    });
  });

  it('markup.raw.block', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw.block');
    expect(tokens[0]).toEqual({
      value: 'markup.raw.block',
      scopes: ['source.shss', 'markup.raw.block'],
    });
  });

  it('markup.raw', () => {
    const { tokens } = grammar.tokenizeLine('markup.raw');
    expect(tokens[0]).toEqual({
      value: 'markup.raw',
      scopes: ['source.shss', 'markup.raw'],
    });
  });

  it('markup.other', () => {
    const { tokens } = grammar.tokenizeLine('markup.other');
    expect(tokens[0]).toEqual({
      value: 'markup.other',
      scopes: ['source.shss', 'markup.other'],
    });
  });

  it('markup', () => {
    const { tokens } = grammar.tokenizeLine('markup');
    expect(tokens[0]).toEqual({
      value: 'markup',
      scopes: ['source.shss', 'markup'],
    });
  });

  it('meta.at-rule.viewport', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.viewport');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.viewport',
      scopes: ['source.shss', 'meta.at-rule.viewport'],
    });
  });

  it('meta.at-rule.supports.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.supports.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.supports.header',
      scopes: ['source.shss', 'meta.at-rule.supports.header'],
    });
  });

  it('meta.at-rule.supports.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.supports.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.supports.body',
      scopes: ['source.shss', 'meta.at-rule.supports.body'],
    });
  });

  it('meta.at-rule.supports', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.supports');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.supports',
      scopes: ['source.shss', 'meta.at-rule.supports'],
    });
  });

  it('meta.at-rule.page', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.page');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.page',
      scopes: ['source.shss', 'meta.at-rule.page'],
    });
  });

  it('meta.at-rule.namespace', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.namespace');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.namespace',
      scopes: ['source.shss', 'meta.at-rule.namespace'],
    });
  });

  it('meta.at-rule.media.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.media.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.media.header',
      scopes: ['source.shss', 'meta.at-rule.media.header'],
    });
  });

  it('meta.at-rule.media.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.media.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.media.body',
      scopes: ['source.shss', 'meta.at-rule.media.body'],
    });
  });

  it('meta.at-rule.media', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.media');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.media',
      scopes: ['source.shss', 'meta.at-rule.media'],
    });
  });

  it('meta.at-rule.keyframes.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.keyframes.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.keyframes.header',
      scopes: ['source.shss', 'meta.at-rule.keyframes.header'],
    });
  });

  it('meta.at-rule.keyframes.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.keyframes.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.keyframes.body',
      scopes: ['source.shss', 'meta.at-rule.keyframes.body'],
    });
  });

  it('meta.at-rule.import', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.import');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.import',
      scopes: ['source.shss', 'meta.at-rule.import'],
    });
  });

  it('meta.at-rule.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.header',
      scopes: ['source.shss', 'meta.at-rule.header'],
    });
  });

  it('meta.at-rule.font-features', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.font-features');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.font-features',
      scopes: ['source.shss', 'meta.at-rule.font-features'],
    });
  });

  it('meta.at-rule.font-face', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.font-face');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.font-face',
      scopes: ['source.shss', 'meta.at-rule.font-face'],
    });
  });

  it('meta.at-rule.document.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.document.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.document.header',
      scopes: ['source.shss', 'meta.at-rule.document.header'],
    });
  });

  it('meta.at-rule.document.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.document.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.document.body',
      scopes: ['source.shss', 'meta.at-rule.document.body'],
    });
  });

  it('meta.at-rule.document', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.document');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.document',
      scopes: ['source.shss', 'meta.at-rule.document'],
    });
  });

  it('meta.at-rule.counter-style.header', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.counter-style.header');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.counter-style.header',
      scopes: ['source.shss', 'meta.at-rule.counter-style.header'],
    });
  });

  it('meta.at-rule.counter-style.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.counter-style.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.counter-style.body',
      scopes: ['source.shss', 'meta.at-rule.counter-style.body'],
    });
  });

  it('meta.at-rule.counter-style', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.counter-style');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.counter-style',
      scopes: ['source.shss', 'meta.at-rule.counter-style'],
    });
  });

  it('meta.at-rule.charset', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.charset');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.charset',
      scopes: ['source.shss', 'meta.at-rule.charset'],
    });
  });

  it('meta.at-rule.body', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule.body');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule.body',
      scopes: ['source.shss', 'meta.at-rule.body'],
    });
  });

  it('meta.at-rule', () => {
    const { tokens } = grammar.tokenizeLine('meta.at-rule');
    expect(tokens[0]).toEqual({
      value: 'meta.at-rule',
      scopes: ['source.shss', 'meta.at-rule'],
    });
  });

  it('meta.attribute-without-value.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-without-value.html');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-without-value.html',
      scopes: ['source.shss', 'meta.attribute-without-value.html'],
    });
  });

  it('meta.attribute-with-value.style.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.style.html');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.style.html',
      scopes: ['source.shss', 'meta.attribute-with-value.style.html'],
    });
  });

  it('meta.attribute-with-value.style', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.style');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.style',
      scopes: ['source.shss', 'meta.attribute-with-value.style'],
    });
  });

  it('meta.attribute-with-value.id.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.id.html');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.id.html',
      scopes: ['source.shss', 'meta.attribute-with-value.id.html'],
    });
  });

  it('meta.attribute-with-value.id', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.id');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.id',
      scopes: ['source.shss', 'meta.attribute-with-value.id'],
    });
  });

  it('meta.attribute-with-value.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.html');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.html',
      scopes: ['source.shss', 'meta.attribute-with-value.html'],
    });
  });

  it('meta.attribute-with-value.class.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.class.html');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.class.html',
      scopes: ['source.shss', 'meta.attribute-with-value.class.html'],
    });
  });

  it('meta.attribute-with-value.class', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value.class');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value.class',
      scopes: ['source.shss', 'meta.attribute-with-value.class'],
    });
  });

  it('meta.attribute-with-value', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-with-value');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-with-value',
      scopes: ['source.shss', 'meta.attribute-with-value'],
    });
  });

  it('meta.attribute-selector', () => {
    const { tokens } = grammar.tokenizeLine('meta.attribute-selector');
    expect(tokens[0]).toEqual({
      value: 'meta.attribute-selector',
      scopes: ['source.shss', 'meta.attribute-selector'],
    });
  });

  it('meta.definition.variable.local', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.variable.local');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.variable.local',
      scopes: ['source.shss', 'meta.definition.variable.local'],
    });
  });

  it('meta.definition.variable', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.variable');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.variable',
      scopes: ['source.shss', 'meta.definition.variable'],
    });
  });

  it('meta.definition.class.inherited.classes', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.class.inherited.classes');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.class.inherited.classes',
      scopes: ['source.shss', 'meta.definition.class.inherited.classes'],
    });
  });

  it('meta.definition.class.inherited', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.class.inherited');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.class.inherited',
      scopes: ['source.shss', 'meta.definition.class.inherited'],
    });
  });

  it('meta.definition.class.implemented.interfaces', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.class.implemented.interfaces');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.class.implemented.interfaces',
      scopes: ['source.shss', 'meta.definition.class.implemented.interfaces'],
    });
  });

  it('meta.definition.class.implemented', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.class.implemented');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.class.implemented',
      scopes: ['source.shss', 'meta.definition.class.implemented'],
    });
  });

  it('meta.definition.class', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition.class');
    expect(tokens[0]).toEqual({
      value: 'meta.definition.class',
      scopes: ['source.shss', 'meta.definition.class'],
    });
  });

  it('meta.definition', () => {
    const { tokens } = grammar.tokenizeLine('meta.definition');
    expect(tokens[0]).toEqual({
      value: 'meta.definition',
      scopes: ['source.shss', 'meta.definition'],
    });
  });

  it('meta.declaration.type.data.record.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.type.data.record.block');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.type.data.record.block',
      scopes: ['source.shss', 'meta.declaration.type.data.record.block'],
    });
  });

  it('meta.declaration.type.data.record', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.type.data.record');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.type.data.record',
      scopes: ['source.shss', 'meta.declaration.type.data.record'],
    });
  });

  it('meta.declaration.type.data', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.type.data');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.type.data',
      scopes: ['source.shss', 'meta.declaration.type.data'],
    });
  });

  it('meta.declaration.type.type', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.type.type');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.type.type',
      scopes: ['source.shss', 'meta.declaration.type.type'],
    });
  });

  it('meta.declaration.type', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.type');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.type',
      scopes: ['source.shss', 'meta.declaration.type'],
    });
  });

  it('meta.declaration.module', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.module');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.module',
      scopes: ['source.shss', 'meta.declaration.module'],
    });
  });

  it('meta.declaration.instance.deriving', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.instance.deriving');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.instance.deriving',
      scopes: ['source.shss', 'meta.declaration.instance.deriving'],
    });
  });

  it('meta.declaration.instance', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.instance');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.instance',
      scopes: ['source.shss', 'meta.declaration.instance'],
    });
  });

  it('meta.declaration.exports', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.exports');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.exports',
      scopes: ['source.shss', 'meta.declaration.exports'],
    });
  });

  it('meta.declaration.class', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.class');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.class',
      scopes: ['source.shss', 'meta.declaration.class'],
    });
  });

  it('meta.declaration.assertion', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.assertion');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.assertion',
      scopes: ['source.shss', 'meta.declaration.assertion'],
    });
  });

  it('meta.declaration.annotation', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration.annotation');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration.annotation',
      scopes: ['source.shss', 'meta.declaration.annotation'],
    });
  });

  it('meta.declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.declaration',
      scopes: ['source.shss', 'meta.declaration'],
    });
  });

  it('meta.ctor.type-declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.ctor.type-declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.ctor.type-declaration',
      scopes: ['source.shss', 'meta.ctor.type-declaration'],
    });
  });

  it('meta.ctor', () => {
    const { tokens } = grammar.tokenizeLine('meta.ctor');
    expect(tokens[0]).toEqual({
      value: 'meta.ctor',
      scopes: ['source.shss', 'meta.ctor'],
    });
  });

  it('meta.angle-brackets', () => {
    const { tokens } = grammar.tokenizeLine('meta.angle-brackets');
    expect(tokens[0]).toEqual({
      value: 'meta.angle-brackets',
      scopes: ['source.shss', 'meta.angle-brackets'],
    });
  });

  it('meta.deriving.strategy', () => {
    const { tokens } = grammar.tokenizeLine('meta.deriving.strategy');
    expect(tokens[0]).toEqual({
      value: 'meta.deriving.strategy',
      scopes: ['source.shss', 'meta.deriving.strategy'],
    });
  });

  it('meta.deriving', () => {
    const { tokens } = grammar.tokenizeLine('meta.deriving');
    expect(tokens[0]).toEqual({
      value: 'meta.deriving',
      scopes: ['source.shss', 'meta.deriving'],
    });
  });

  it('meta.directive.define', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.define');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.define',
      scopes: ['source.shss', 'meta.directive.define'],
    });
  });

  it('meta.directive.behaviour', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.behaviour');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.behaviour',
      scopes: ['source.shss', 'meta.directive.behaviour'],
    });
  });

  it('meta.directive.undef', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.undef');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.undef',
      scopes: ['source.shss', 'meta.directive.undef'],
    });
  });

  it('meta.directive.record', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.record');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.record',
      scopes: ['source.shss', 'meta.directive.record'],
    });
  });

  it('meta.directive.module', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.module');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.module',
      scopes: ['source.shss', 'meta.directive.module'],
    });
  });

  it('meta.directive.import', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.import');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.import',
      scopes: ['source.shss', 'meta.directive.import'],
    });
  });

  it('meta.directive.ifndef', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.ifndef');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.ifndef',
      scopes: ['source.shss', 'meta.directive.ifndef'],
    });
  });

  it('meta.directive.ifdef', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.ifdef');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.ifdef',
      scopes: ['source.shss', 'meta.directive.ifdef'],
    });
  });

  it('meta.directive.export', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive.export');
    expect(tokens[0]).toEqual({
      value: 'meta.directive.export',
      scopes: ['source.shss', 'meta.directive.export'],
    });
  });

  it('meta.directive', () => {
    const { tokens } = grammar.tokenizeLine('meta.directive');
    expect(tokens[0]).toEqual({
      value: 'meta.directive',
      scopes: ['source.shss', 'meta.directive'],
    });
  });

  it('meta.method-call.static', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call.static');
    expect(tokens[0]).toEqual({
      value: 'meta.method-call.static',
      scopes: ['source.shss', 'meta.method-call.static'],
    });
  });

  it('meta.method-call', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call');
    expect(tokens[0]).toEqual({
      value: 'meta.method-call',
      scopes: ['source.shss', 'meta.method-call'],
    });
  });

  it('meta.toc-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.toc-list');
    expect(tokens[0]).toEqual({
      value: 'meta.toc-list',
      scopes: ['source.shss', 'meta.toc-list'],
    });
  });

  it('meta.class-struct-block', () => {
    const { tokens } = grammar.tokenizeLine('meta.class-struct-block');
    expect(tokens[0]).toEqual({
      value: 'meta.class-struct-block',
      scopes: ['source.shss', 'meta.class-struct-block'],
    });
  });

  it('meta.class.old-style', () => {
    const { tokens } = grammar.tokenizeLine('meta.class.old-style');
    expect(tokens[0]).toEqual({
      value: 'meta.class.old-style',
      scopes: ['source.shss', 'meta.class.old-style'],
    });
  });

  it('meta.class.identifier', () => {
    const { tokens } = grammar.tokenizeLine('meta.class.identifier');
    expect(tokens[0]).toEqual({
      value: 'meta.class.identifier',
      scopes: ['source.shss', 'meta.class.identifier'],
    });
  });

  it('meta.class', () => {
    const { tokens } = grammar.tokenizeLine('meta.class');
    expect(tokens[0]).toEqual({
      value: 'meta.class',
      scopes: ['source.shss', 'meta.class'],
    });
  });

  it('meta.struct', () => {
    const { tokens } = grammar.tokenizeLine('meta.struct');
    expect(tokens[0]).toEqual({
      value: 'meta.struct',
      scopes: ['source.shss', 'meta.struct'],
    });
  });

  it('meta.enum', () => {
    const { tokens } = grammar.tokenizeLine('meta.enum');
    expect(tokens[0]).toEqual({
      value: 'meta.enum',
      scopes: ['source.shss', 'meta.enum'],
    });
  });

  it('meta.union', () => {
    const { tokens } = grammar.tokenizeLine('meta.union');
    expect(tokens[0]).toEqual({
      value: 'meta.union',
      scopes: ['source.shss', 'meta.union'],
    });
  });

  it('meta.trait', () => {
    const { tokens } = grammar.tokenizeLine('meta.trait');
    expect(tokens[0]).toEqual({
      value: 'meta.trait',
      scopes: ['source.shss', 'meta.trait'],
    });
  });

  it('meta.interface', () => {
    const { tokens } = grammar.tokenizeLine('meta.interface');
    expect(tokens[0]).toEqual({
      value: 'meta.interface',
      scopes: ['source.shss', 'meta.interface'],
    });
  });

  it('meta.import', () => {
    const { tokens } = grammar.tokenizeLine('meta.import');
    expect(tokens[0]).toEqual({
      value: 'meta.import',
      scopes: ['source.shss', 'meta.import'],
    });
  });

  it('meta.impl', () => {
    const { tokens } = grammar.tokenizeLine('meta.impl');
    expect(tokens[0]).toEqual({
      value: 'meta.impl',
      scopes: ['source.shss', 'meta.impl'],
    });
  });

  it('meta.type', () => {
    const { tokens } = grammar.tokenizeLine('meta.type');
    expect(tokens[0]).toEqual({
      value: 'meta.type',
      scopes: ['source.shss', 'meta.type'],
    });
  });

  it('meta.string', () => {
    const { tokens } = grammar.tokenizeLine('meta.string');
    expect(tokens[0]).toEqual({
      value: 'meta.string',
      scopes: ['source.shss', 'meta.string'],
    });
  });

  it('meta.path', () => {
    const { tokens } = grammar.tokenizeLine('meta.path');
    expect(tokens[0]).toEqual({
      value: 'meta.path',
      scopes: ['source.shss', 'meta.path'],
    });
  });

  it('meta.function-call', () => {
    const { tokens } = grammar.tokenizeLine('meta.function-call');
    expect(tokens[0]).toEqual({
      value: 'meta.function-call',
      scopes: ['source.shss', 'meta.function-call'],
    });
  });

  it('meta.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.block');
    expect(tokens[0]).toEqual({
      value: 'meta.block',
      scopes: ['source.shss', 'meta.block'],
    });
  });

  it('meta.catch', () => {
    const { tokens } = grammar.tokenizeLine('meta.catch');
    expect(tokens[0]).toEqual({
      value: 'meta.catch',
      scopes: ['source.shss', 'meta.catch'],
    });
  });

  it('meta.embedded.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded.block');
    expect(tokens[0]).toEqual({
      value: 'meta.embedded.block',
      scopes: ['source.shss', 'meta.embedded.block'],
    });
  });

  it('meta.embedded.sql', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded.sql');
    expect(tokens[0]).toEqual({
      value: 'meta.embedded.sql',
      scopes: ['source.shss', 'meta.embedded.sql'],
    });
  });

  it('meta.embedded.line', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded.line');
    expect(tokens[0]).toEqual({
      value: 'meta.embedded.line',
      scopes: ['source.shss', 'meta.embedded.line'],
    });
  });

  it('meta.embedded.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded.block');
    expect(tokens[0]).toEqual({
      value: 'meta.embedded.block',
      scopes: ['source.shss', 'meta.embedded.block'],
    });
  });

  it('meta.embedded', () => {
    const { tokens } = grammar.tokenizeLine('meta.embedded');
    expect(tokens[0]).toEqual({
      value: 'meta.embedded',
      scopes: ['source.shss', 'meta.embedded'],
    });
  });

  it('meta.function', () => {
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({
      value: 'meta.function',
      scopes: ['source.shss', 'meta.function'],
    });
  });

  it('meta.braces', () => {
    const { tokens } = grammar.tokenizeLine('meta.braces');
    expect(tokens[0]).toEqual({
      value: 'meta.braces',
      scopes: ['source.shss', 'meta.braces'],
    });
  });

  it('meta.group', () => {
    const { tokens } = grammar.tokenizeLine('meta.group');
    expect(tokens[0]).toEqual({
      value: 'meta.group',
      scopes: ['source.shss', 'meta.group'],
    });
  });

  it('meta.parens', () => {
    const { tokens } = grammar.tokenizeLine('meta.parens');
    expect(tokens[0]).toEqual({
      value: 'meta.parens',
      scopes: ['source.shss', 'meta.parens'],
    });
  });

  it('meta.brackets', () => {
    const { tokens } = grammar.tokenizeLine('meta.brackets');
    expect(tokens[0]).toEqual({
      value: 'meta.brackets',
      scopes: ['source.shss', 'meta.brackets'],
    });
  });

  it('meta.generic', () => {
    const { tokens } = grammar.tokenizeLine('meta.generic');
    expect(tokens[0]).toEqual({
      value: 'meta.generic',
      scopes: ['source.shss', 'meta.generic'],
    });
  });

  it('meta.via', () => {
    const { tokens } = grammar.tokenizeLine('meta.via');
    expect(tokens[0]).toEqual({
      value: 'meta.via',
      scopes: ['source.shss', 'meta.via'],
    });
  });

  it('meta.using-namespace-declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.using-namespace-declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.using-namespace-declaration',
      scopes: ['source.shss', 'meta.using-namespace-declaration'],
    });
  });

  it('meta.type-signature', () => {
    const { tokens } = grammar.tokenizeLine('meta.type-signature');
    expect(tokens[0]).toEqual({
      value: 'meta.type-signature',
      scopes: ['source.shss', 'meta.type-signature'],
    });
  });

  it('meta.try.resources', () => {
    const { tokens } = grammar.tokenizeLine('meta.try.resources');
    expect(tokens[0]).toEqual({
      value: 'meta.try.resources',
      scopes: ['source.shss', 'meta.try.resources'],
    });
  });

  it('meta.try', () => {
    const { tokens } = grammar.tokenizeLine('meta.try');
    expect(tokens[0]).toEqual({
      value: 'meta.try',
      scopes: ['source.shss', 'meta.try'],
    });
  });

  it('meta.throwables', () => {
    const { tokens } = grammar.tokenizeLine('meta.throwables');
    expect(tokens[0]).toEqual({
      value: 'meta.throwables',
      scopes: ['source.shss', 'meta.throwables'],
    });
  });

  it('meta.syntaxstart-block', () => {
    const { tokens } = grammar.tokenizeLine('meta.syntaxstart-block');
    expect(tokens[0]).toEqual({
      value: 'meta.syntaxstart-block',
      scopes: ['source.shss', 'meta.syntaxstart-block'],
    });
  });

  it('meta.structure.tuple', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.tuple');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.tuple',
      scopes: ['source.shss', 'meta.structure.tuple'],
    });
  });

  it('meta.structure.record', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.record');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.record',
      scopes: ['source.shss', 'meta.structure.record'],
    });
  });

  it('meta.structure.list', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.list');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.list',
      scopes: ['source.shss', 'meta.structure.list'],
    });
  });

  it('meta.structure.list.function', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.list.function');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.list.function',
      scopes: ['source.shss', 'meta.structure.list.function'],
    });
  });

  it('meta.structure.dictionary', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.dictionary');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.dictionary',
      scopes: ['source.shss', 'meta.structure.dictionary'],
    });
  });

  it('meta.structure.binary', () => {
    const { tokens } = grammar.tokenizeLine('meta.structure.binary');
    expect(tokens[0]).toEqual({
      value: 'meta.structure.binary',
      scopes: ['source.shss', 'meta.structure.binary'],
    });
  });

  it('meta.selector', () => {
    const { tokens } = grammar.tokenizeLine('meta.selector');
    expect(tokens[0]).toEqual({
      value: 'meta.selector',
      scopes: ['source.shss', 'meta.selector'],
    });
  });

  it('meta.section', () => {
    const { tokens } = grammar.tokenizeLine('meta.section');
    expect(tokens[0]).toEqual({
      value: 'meta.section',
      scopes: ['source.shss', 'meta.section'],
    });
  });

  it('meta.require', () => {
    const { tokens } = grammar.tokenizeLine('meta.require');
    expect(tokens[0]).toEqual({
      value: 'meta.require',
      scopes: ['source.shss', 'meta.require'],
    });
  });

  it('meta.record-usage', () => {
    const { tokens } = grammar.tokenizeLine('meta.record-usage');
    expect(tokens[0]).toEqual({
      value: 'meta.record-usage',
      scopes: ['source.shss', 'meta.record-usage'],
    });
  });

  it('meta.record-field.type-declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.record-field.type-declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.record-field.type-declaration',
      scopes: ['source.shss', 'meta.record-field.type-declaration'],
    });
  });

  it('meta.record-field', () => {
    const { tokens } = grammar.tokenizeLine('meta.record-field');
    expect(tokens[0]).toEqual({
      value: 'meta.record-field',
      scopes: ['source.shss', 'meta.record-field'],
    });
  });

  it('meta.ratio', () => {
    const { tokens } = grammar.tokenizeLine('meta.ratio');
    expect(tokens[0]).toEqual({
      value: 'meta.ratio',
      scopes: ['source.shss', 'meta.ratio'],
    });
  });

  it('meta.property-name', () => {
    const { tokens } = grammar.tokenizeLine('meta.property-name');
    expect(tokens[0]).toEqual({
      value: 'meta.property-name',
      scopes: ['source.shss', 'meta.property-name'],
    });
  });

  it('meta.property-list.font-feature', () => {
    const { tokens } = grammar.tokenizeLine('meta.property-list.font-feature');
    expect(tokens[0]).toEqual({
      value: 'meta.property-list.font-feature',
      scopes: ['source.shss', 'meta.property-list.font-feature'],
    });
  });

  it('meta.property-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.property-list');
    expect(tokens[0]).toEqual({
      value: 'meta.property-list',
      scopes: ['source.shss', 'meta.property-list'],
    });
  });

  it('meta.preprocessor.pragma', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.pragma');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.pragma',
      scopes: ['source.shss', 'meta.preprocessor.pragma'],
    });
  });

  it('meta.preprocessor.macro', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.macro');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.macro',
      scopes: ['source.shss', 'meta.preprocessor.macro'],
    });
  });

  it('meta.preprocessor.include', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.include');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.include',
      scopes: ['source.shss', 'meta.preprocessor.include'],
    });
  });

  it('meta.preprocessor.diagnostic', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.diagnostic');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.diagnostic',
      scopes: ['source.shss', 'meta.preprocessor.diagnostic'],
    });
  });

  it('meta.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor',
      scopes: ['source.shss', 'meta.preprocessor'],
    });
  });

  it('meta.package', () => {
    const { tokens } = grammar.tokenizeLine('meta.package');
    expect(tokens[0]).toEqual({
      value: 'meta.package',
      scopes: ['source.shss', 'meta.package'],
    });
  });

  it('meta.other.constructor-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.other.constructor-list');
    expect(tokens[0]).toEqual({
      value: 'meta.other.constructor-list',
      scopes: ['source.shss', 'meta.other.constructor-list'],
    });
  });

  it('meta.other', () => {
    const { tokens } = grammar.tokenizeLine('meta.other');
    expect(tokens[0]).toEqual({
      value: 'meta.other',
      scopes: ['source.shss', 'meta.other'],
    });
  });

  it('meta.namespace-block', () => {
    const { tokens } = grammar.tokenizeLine('meta.namespace-block');
    expect(tokens[0]).toEqual({
      value: 'meta.namespace-block',
      scopes: ['source.shss', 'meta.namespace-block'],
    });
  });

  it('meta.multiline.type-declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.multiline.type-declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.multiline.type-declaration',
      scopes: ['source.shss', 'meta.multiline.type-declaration'],
    });
  });

  it('meta.multiline', () => {
    const { tokens } = grammar.tokenizeLine('meta.multiline');
    expect(tokens[0]).toEqual({
      value: 'meta.multiline',
      scopes: ['source.shss', 'meta.multiline'],
    });
  });

  it('meta.module', () => {
    const { tokens } = grammar.tokenizeLine('meta.module');
    expect(tokens[0]).toEqual({
      value: 'meta.module',
      scopes: ['source.shss', 'meta.module'],
    });
  });

  it('meta.method.return-type', () => {
    const { tokens } = grammar.tokenizeLine('meta.method.return-type');
    expect(tokens[0]).toEqual({
      value: 'meta.method.return-type',
      scopes: ['source.shss', 'meta.method.return-type'],
    });
  });

  it('meta.method.identifier', () => {
    const { tokens } = grammar.tokenizeLine('meta.method.identifier');
    expect(tokens[0]).toEqual({
      value: 'meta.method.identifier',
      scopes: ['source.shss', 'meta.method.identifier'],
    });
  });

  it('meta.method', () => {
    const { tokens } = grammar.tokenizeLine('meta.method');
    expect(tokens[0]).toEqual({
      value: 'meta.method',
      scopes: ['source.shss', 'meta.method'],
    });
  });

  it('meta.method-call', () => {
    const { tokens } = grammar.tokenizeLine('meta.method-call');
    expect(tokens[0]).toEqual({
      value: 'meta.method-call',
      scopes: ['source.shss', 'meta.method-call'],
    });
  });

  it('meta.macro-usage', () => {
    const { tokens } = grammar.tokenizeLine('meta.macro-usage');
    expect(tokens[0]).toEqual({
      value: 'meta.macro-usage',
      scopes: ['source.shss', 'meta.macro-usage'],
    });
  });

  it('meta.item-access', () => {
    const { tokens } = grammar.tokenizeLine('meta.item-access');
    expect(tokens[0]).toEqual({
      value: 'meta.item-access',
      scopes: ['source.shss', 'meta.item-access'],
    });
  });

  it('meta.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('meta.interpolation');
    expect(tokens[0]).toEqual({
      value: 'meta.interpolation',
      scopes: ['source.shss', 'meta.interpolation'],
    });
  });

  it('meta.inner-class', () => {
    const { tokens } = grammar.tokenizeLine('meta.inner-class');
    expect(tokens[0]).toEqual({
      value: 'meta.inner-class',
      scopes: ['source.shss', 'meta.inner-class'],
    });
  });

  it('meta.initialization', () => {
    const { tokens } = grammar.tokenizeLine('meta.initialization');
    expect(tokens[0]).toEqual({
      value: 'meta.initialization',
      scopes: ['source.shss', 'meta.initialization'],
    });
  });

  it('meta.foreign', () => {
    const { tokens } = grammar.tokenizeLine('meta.foreign');
    expect(tokens[0]).toEqual({
      value: 'meta.foreign',
      scopes: ['source.shss', 'meta.foreign'],
    });
  });

  it('meta.finally', () => {
    const { tokens } = grammar.tokenizeLine('meta.finally');
    expect(tokens[0]).toEqual({
      value: 'meta.finally',
      scopes: ['source.shss', 'meta.finally'],
    });
  });

  it('meta.feature-query', () => {
    const { tokens } = grammar.tokenizeLine('meta.feature-query');
    expect(tokens[0]).toEqual({
      value: 'meta.feature-query',
      scopes: ['source.shss', 'meta.feature-query'],
    });
  });

  it('meta.extern-block', () => {
    const { tokens } = grammar.tokenizeLine('meta.extern-block');
    expect(tokens[0]).toEqual({
      value: 'meta.extern-block',
      scopes: ['source.shss', 'meta.extern-block'],
    });
  });

  it('meta.expression.try', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.try');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.try',
      scopes: ['source.shss', 'meta.expression.try'],
    });
  });

  it('meta.expression.receive', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.receive');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.receive',
      scopes: ['source.shss', 'meta.expression.receive'],
    });
  });

  it('meta.expression.query', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.query');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.query',
      scopes: ['source.shss', 'meta.expression.query'],
    });
  });

  it('meta.expression.parenthesized', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.parenthesized');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.parenthesized',
      scopes: ['source.shss', 'meta.expression.parenthesized'],
    });
  });

  it('meta.expression.if', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.if');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.if',
      scopes: ['source.shss', 'meta.expression.if'],
    });
  });

  it('meta.expression.fun', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.fun');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.fun',
      scopes: ['source.shss', 'meta.expression.fun'],
    });
  });

  it('meta.expression.case', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.case');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.case',
      scopes: ['source.shss', 'meta.expression.case'],
    });
  });

  it('meta.expression.begin', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression.begin');
    expect(tokens[0]).toEqual({
      value: 'meta.expression.begin',
      scopes: ['source.shss', 'meta.expression.begin'],
    });
  });

  it('meta.expression', () => {
    const { tokens } = grammar.tokenizeLine('meta.expression');
    expect(tokens[0]).toEqual({
      value: 'meta.expression',
      scopes: ['source.shss', 'meta.expression'],
    });
  });

  it('meta.environment-variable', () => {
    const { tokens } = grammar.tokenizeLine('meta.environment-variable');
    expect(tokens[0]).toEqual({
      value: 'meta.environment-variable',
      scopes: ['source.shss', 'meta.environment-variable'],
    });
  });

  it('meta.enum', () => {
    const { tokens } = grammar.tokenizeLine('meta.enum');
    expect(tokens[0]).toEqual({
      value: 'meta.enum',
      scopes: ['source.shss', 'meta.enum'],
    });
  });

  it('meta.encoding', () => {
    const { tokens } = grammar.tokenizeLine('meta.encoding');
    expect(tokens[0]).toEqual({
      value: 'meta.encoding',
      scopes: ['source.shss', 'meta.encoding'],
    });
  });

  it('meta.empty-tuple', () => {
    const { tokens } = grammar.tokenizeLine('meta.empty-tuple');
    expect(tokens[0]).toEqual({
      value: 'meta.empty-tuple',
      scopes: ['source.shss', 'meta.empty-tuple'],
    });
  });

  it('meta.empty-string.double', () => {
    const { tokens } = grammar.tokenizeLine('meta.empty-string.double');
    expect(tokens[0]).toEqual({
      value: 'meta.empty-string.double',
      scopes: ['source.shss', 'meta.empty-string.double'],
    });
  });

  it('meta.empty-string', () => {
    const { tokens } = grammar.tokenizeLine('meta.empty-string');
    expect(tokens[0]).toEqual({
      value: 'meta.empty-string',
      scopes: ['source.shss', 'meta.empty-string'],
    });
  });

  it('meta.empty-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.empty-list');
    expect(tokens[0]).toEqual({
      value: 'meta.empty-list',
      scopes: ['source.shss', 'meta.empty-list'],
    });
  });

  it('meta.empty-dictionary', () => {
    const { tokens } = grammar.tokenizeLine('meta.empty-dictionary');
    expect(tokens[0]).toEqual({
      value: 'meta.empty-dictionary',
      scopes: ['source.shss', 'meta.empty-dictionary'],
    });
  });

  it('meta.tag.style.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.style.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.style.html',
      scopes: ['source.shss', 'meta.tag.style.html'],
    });
  });

  it('meta.tag.style', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.style');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.style',
      scopes: ['source.shss', 'meta.tag.style'],
    });
  });

  it('meta.tag.structure', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.structure');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.structure',
      scopes: ['source.shss', 'meta.tag.structure'],
    });
  });

  it('meta.tag.sgml.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.sgml.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.sgml.html',
      scopes: ['source.shss', 'meta.tag.sgml.html'],
    });
  });

  it('meta.tag.sgml.doctype.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.sgml.doctype.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.sgml.doctype.html',
      scopes: ['source.shss', 'meta.tag.sgml.doctype.html'],
    });
  });

  it('meta.tag.sgml.doctype', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.sgml.doctype');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.sgml.doctype',
      scopes: ['source.shss', 'meta.tag.sgml.doctype'],
    });
  });

  it('meta.tag.sgml', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.sgml');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.sgml',
      scopes: ['source.shss', 'meta.tag.sgml'],
    });
  });

  it('meta.tag.script.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.script.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.script.html',
      scopes: ['source.shss', 'meta.tag.script.html'],
    });
  });

  it('meta.tag.script', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.script');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.script',
      scopes: ['source.shss', 'meta.tag.script'],
    });
  });

  it('meta.tag.preprocessor.xml.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.preprocessor.xml.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.preprocessor.xml.html',
      scopes: ['source.shss', 'meta.tag.preprocessor.xml.html'],
    });
  });

  it('meta.tag.preprocessor.xml', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.preprocessor.xml');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.preprocessor.xml',
      scopes: ['source.shss', 'meta.tag.preprocessor.xml'],
    });
  });

  it('meta.tag.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.preprocessor',
      scopes: ['source.shss', 'meta.tag.preprocessor'],
    });
  });

  it('meta.tag.other.html', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.other.html');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.other.html',
      scopes: ['source.shss', 'meta.tag.other.html'],
    });
  });

  it('meta.tag.other', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.other');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.other',
      scopes: ['source.shss', 'meta.tag.other'],
    });
  });

  it('meta.tag.inline', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.inline');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.inline',
      scopes: ['source.shss', 'meta.tag.inline'],
    });
  });

  it('meta.tag.block', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag.block');
    expect(tokens[0]).toEqual({
      value: 'meta.tag.block',
      scopes: ['source.shss', 'meta.tag.block'],
    });
  });

  it('meta.tag', () => {
    const { tokens } = grammar.tokenizeLine('meta.tag');
    expect(tokens[0]).toEqual({
      value: 'meta.tag',
      scopes: ['source.shss', 'meta.tag'],
    });
  });

  it('meta.leading-tabs', () => {
    const { tokens } = grammar.tokenizeLine('meta.leading-tabs');
    expect(tokens[0]).toEqual({
      value: 'meta.leading-tabs',
      scopes: ['source.shss', 'meta.leading-tabs'],
    });
  });

  it('meta.odd-tab', () => {
    const { tokens } = grammar.tokenizeLine('meta.odd-tab');
    expect(tokens[0]).toEqual({
      value: 'meta.odd-tab',
      scopes: ['source.shss', 'meta.odd-tab'],
    });
  });

  it('meta.even-tab', () => {
    const { tokens } = grammar.tokenizeLine('meta.even-tab');
    expect(tokens[0]).toEqual({
      value: 'meta.even-tab',
      scopes: ['source.shss', 'meta.even-tab'],
    });
  });

  it('meta.paragraph', () => {
    const { tokens } = grammar.tokenizeLine('meta.paragraph');
    expect(tokens[0]).toEqual({
      value: 'meta.paragraph',
      scopes: ['source.shss', 'meta.paragraph'],
    });
  });

  it('meta.diagnostics.pragma', () => {
    const { tokens } = grammar.tokenizeLine('meta.diagnostics.pragma');
    expect(tokens[0]).toEqual({
      value: 'meta.diagnostics.pragma',
      scopes: ['source.shss', 'meta.diagnostics.pragma'],
    });
  });

  it('meta.function.variable', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.variable');
    expect(tokens[0]).toEqual({
      value: 'meta.function.variable',
      scopes: ['source.shss', 'meta.function.variable'],
    });
  });

  it('meta.function.url', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.url');
    expect(tokens[0]).toEqual({
      value: 'meta.function.url',
      scopes: ['source.shss', 'meta.function.url'],
    });
  });

  it('meta.function.type-declaration', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.type-declaration');
    expect(tokens[0]).toEqual({
      value: 'meta.function.type-declaration',
      scopes: ['source.shss', 'meta.function.type-declaration'],
    });
  });

  it('meta.function.timing-function', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.timing-function');
    expect(tokens[0]).toEqual({
      value: 'meta.function.timing-function',
      scopes: ['source.shss', 'meta.function.timing-function'],
    });
  });

  it('meta.function.shape', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.shape');
    expect(tokens[0]).toEqual({
      value: 'meta.function.shape',
      scopes: ['source.shss', 'meta.function.shape'],
    });
  });

  it('meta.function.misc', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.misc');
    expect(tokens[0]).toEqual({
      value: 'meta.function.misc',
      scopes: ['source.shss', 'meta.function.misc'],
    });
  });

  it('meta.function.method.without-arguments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.method.without-arguments');
    expect(tokens[0]).toEqual({
      value: 'meta.function.method.without-arguments',
      scopes: ['source.shss', 'meta.function.method.without-arguments'],
    });
  });

  it('meta.function.method.with-arguments', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.method.with-arguments');
    expect(tokens[0]).toEqual({
      value: 'meta.function.method.with-arguments',
      scopes: ['source.shss', 'meta.function.method.with-arguments'],
    });
  });

  it('meta.function.method', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.method');
    expect(tokens[0]).toEqual({
      value: 'meta.function.method',
      scopes: ['source.shss', 'meta.function.method'],
    });
  });

  it('meta.function.inline', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.inline');
    expect(tokens[0]).toEqual({
      value: 'meta.function.inline',
      scopes: ['source.shss', 'meta.function.inline'],
    });
  });

  it('meta.function.gradient.invalid.deprecated.gradient', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.gradient.invalid.deprecated.gradient');
    expect(tokens[0]).toEqual({
      value: 'meta.function.gradient.invalid.deprecated.gradient',
      scopes: ['source.shss', 'meta.function.gradient.invalid.deprecated.gradient'],
    });
  });

  it('meta.function.gradient.invalid.deprecated', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.gradient.invalid.deprecated');
    expect(tokens[0]).toEqual({
      value: 'meta.function.gradient.invalid.deprecated',
      scopes: ['source.shss', 'meta.function.gradient.invalid.deprecated'],
    });
  });

  it('meta.function.gradient.invalid', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.gradient.invalid');
    expect(tokens[0]).toEqual({
      value: 'meta.function.gradient.invalid',
      scopes: ['source.shss', 'meta.function.gradient.invalid'],
    });
  });

  it('meta.function.gradient', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.gradient');
    expect(tokens[0]).toEqual({
      value: 'meta.function.gradient',
      scopes: ['source.shss', 'meta.function.gradient'],
    });
  });

  it('meta.function.document-rule', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.document-rule');
    expect(tokens[0]).toEqual({
      value: 'meta.function.document-rule',
      scopes: ['source.shss', 'meta.function.document-rule'],
    });
  });

  it('meta.function.destructor.prototype', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.destructor.prototype');
    expect(tokens[0]).toEqual({
      value: 'meta.function.destructor.prototype',
      scopes: ['source.shss', 'meta.function.destructor.prototype'],
    });
  });

  it('meta.function.destructor', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.destructor');
    expect(tokens[0]).toEqual({
      value: 'meta.function.destructor',
      scopes: ['source.shss', 'meta.function.destructor'],
    });
  });

  it('meta.function.decorator', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.decorator');
    expect(tokens[0]).toEqual({
      value: 'meta.function.decorator',
      scopes: ['source.shss', 'meta.function.decorator'],
    });
  });

  it('meta.function.constructor.initializer-list', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.constructor.initializer-list');
    expect(tokens[0]).toEqual({
      value: 'meta.function.constructor.initializer-list',
      scopes: ['source.shss', 'meta.function.constructor.initializer-list'],
    });
  });

  it('meta.function.constructor', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.constructor');
    expect(tokens[0]).toEqual({
      value: 'meta.function.constructor',
      scopes: ['source.shss', 'meta.function.constructor'],
    });
  });

  it('meta.function.color', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.color');
    expect(tokens[0]).toEqual({
      value: 'meta.function.color',
      scopes: ['source.shss', 'meta.function.color'],
    });
  });

  it('meta.function.calc', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.calc');
    expect(tokens[0]).toEqual({
      value: 'meta.function.calc',
      scopes: ['source.shss', 'meta.function.calc'],
    });
  });

  it('meta.function.parameters', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.parameters');
    expect(tokens[0]).toEqual({
      value: 'meta.function.parameters',
      scopes: ['source.shss', 'meta.function.parameters'],
    });
  });

  it('meta.function.return-type', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.return-type');
    expect(tokens[0]).toEqual({
      value: 'meta.function.return-type',
      scopes: ['source.shss', 'meta.function.return-type'],
    });
  });

  it('meta.function.signature', () => {
    const { tokens } = grammar.tokenizeLine('meta.function.signature');
    expect(tokens[0]).toEqual({
      value: 'meta.function.signature',
      scopes: ['source.shss', 'meta.function.signature'],
    });
  });

  it('meta.function', () => {
    const { tokens } = grammar.tokenizeLine('meta.function');
    expect(tokens[0]).toEqual({
      value: 'meta.function',
      scopes: ['source.shss', 'meta.function'],
    });
  });

  it('meta.namespace', () => {
    const { tokens } = grammar.tokenizeLine('meta.namespace');
    expect(tokens[0]).toEqual({
      value: 'meta.namespace',
      scopes: ['source.shss', 'meta.namespace'],
    });
  });

  it('meta.preprocessor.pragma', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.pragma');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.pragma',
      scopes: ['source.shss', 'meta.preprocessor.pragma'],
    });
  });

  it('meta.preprocessor.include', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor.include');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor.include',
      scopes: ['source.shss', 'meta.preprocessor.include'],
    });
  });

  it('meta.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('meta.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'meta.preprocessor',
      scopes: ['source.shss', 'meta.preprocessor'],
    });
  });

  it('meta.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('meta.interpolation');
    expect(tokens[0]).toEqual({
      value: 'meta.interpolation',
      scopes: ['source.shss', 'meta.interpolation'],
    });
  });

  it('meta.annotation.identifier', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.identifier');
    expect(tokens[0]).toEqual({
      value: 'meta.annotation.identifier',
      scopes: ['source.shss', 'meta.annotation.identifier'],
    });
  });

  it('meta.annotation.parameters', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation.parameters');
    expect(tokens[0]).toEqual({
      value: 'meta.annotation.parameters',
      scopes: ['source.shss', 'meta.annotation.parameters'],
    });
  });

  it('meta.annotation', () => {
    const { tokens } = grammar.tokenizeLine('meta.annotation');
    expect(tokens[0]).toEqual({
      value: 'meta.annotation',
      scopes: ['source.shss', 'meta.annotation'],
    });
  });

  it('meta', () => {
    const { tokens } = grammar.tokenizeLine('meta');
    expect(tokens[0]).toEqual({
      value: 'meta',
      scopes: ['source.shss', 'meta'],
    });
  });

  it('parameter.variable.function', () => {
    const { tokens } = grammar.tokenizeLine('parameter.variable.function');
    expect(tokens[0]).toEqual({
      value: 'parameter.variable.function',
      scopes: ['source.shss', 'parameter.variable.function'],
    });
  });

  it('parameter.variable', () => {
    const { tokens } = grammar.tokenizeLine('parameter.variable');
    expect(tokens[0]).toEqual({
      value: 'parameter.variable',
      scopes: ['source.shss', 'parameter.variable'],
    });
  });

  it('parameter', () => {
    const { tokens } = grammar.tokenizeLine('parameter');
    expect(tokens[0]).toEqual({
      value: 'parameter',
      scopes: ['source.shss', 'parameter'],
    });
  });

  it('punctuation.bracket.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.bracket.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.bracket.square',
      scopes: ['source.shss', 'punctuation.bracket.square'],
    });
  });

  it('punctuation.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.bracket.round',
      scopes: ['source.shss', 'punctuation.bracket.round'],
    });
  });

  it('punctuation.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.bracket.curly',
      scopes: ['source.shss', 'punctuation.bracket.curly'],
    });
  });

  it('punctuation.bracket.angle', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.bracket.angle');
    expect(tokens[0]).toEqual({
      value: 'punctuation.bracket.angle',
      scopes: ['source.shss', 'punctuation.bracket.angle'],
    });
  });

  it('punctuation.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.bracket',
      scopes: ['source.shss', 'punctuation.bracket'],
    });
  });

  it('punctuation.whitespace.comment.leading', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment.leading');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace.comment.leading',
      scopes: ['source.shss', 'punctuation.whitespace.comment.leading'],
    });
  });

  it('punctuation.whitespace.comment', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.comment');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace.comment',
      scopes: ['source.shss', 'punctuation.whitespace.comment'],
    });
  });

  it('punctuation.whitespace.support.function.leading', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.support.function.leading');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace.support.function.leading',
      scopes: ['source.shss', 'punctuation.whitespace.support.function.leading'],
    });
  });

  it('punctuation.whitespace.support.function', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.support.function');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace.support.function',
      scopes: ['source.shss', 'punctuation.whitespace.support.function'],
    });
  });

  it('punctuation.whitespace.support', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace.support');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace.support',
      scopes: ['source.shss', 'punctuation.whitespace.support'],
    });
  });

  it('punctuation.whitespace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.whitespace');
    expect(tokens[0]).toEqual({
      value: 'punctuation.whitespace',
      scopes: ['source.shss', 'punctuation.whitespace'],
    });
  });

  it('punctuation.vararg-ellipses', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.vararg-ellipses');
    expect(tokens[0]).toEqual({
      value: 'punctuation.vararg-ellipses',
      scopes: ['source.shss', 'punctuation.vararg-ellipses'],
    });
  });

  it('punctuation.terminator.semicolon', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.semicolon');
    expect(tokens[0]).toEqual({
      value: 'punctuation.terminator.semicolon',
      scopes: ['source.shss', 'punctuation.terminator.semicolon'],
    });
  });

  it('punctuation.terminator.statement', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.statement');
    expect(tokens[0]).toEqual({
      value: 'punctuation.terminator.statement',
      scopes: ['source.shss', 'punctuation.terminator.statement'],
    });
  });

  it('punctuation.terminator.expression', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.expression');
    expect(tokens[0]).toEqual({
      value: 'punctuation.terminator.expression',
      scopes: ['source.shss', 'punctuation.terminator.expression'],
    });
  });

  it('punctuation.terminator.rule', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator.rule');
    expect(tokens[0]).toEqual({
      value: 'punctuation.terminator.rule',
      scopes: ['source.shss', 'punctuation.terminator.rule'],
    });
  });

  it('punctuation.terminator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.terminator');
    expect(tokens[0]).toEqual({
      value: 'punctuation.terminator',
      scopes: ['source.shss', 'punctuation.terminator'],
    });
  });

  it('punctuation.delimiter.decimal.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.delimiter.decimal.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.delimiter.decimal.period',
      scopes: ['source.shss', 'punctuation.delimiter.decimal.period'],
    });
  });

  it('punctuation.delimiter.decimal', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.delimiter.decimal');
    expect(tokens[0]).toEqual({
      value: 'punctuation.delimiter.decimal',
      scopes: ['source.shss', 'punctuation.delimiter.decimal'],
    });
  });

  it('punctuation.delimiter', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.delimiter');
    expect(tokens[0]).toEqual({
      value: 'punctuation.delimiter',
      scopes: ['source.shss', 'punctuation.delimiter'],
    });
  });

  it('punctuation.separator.comma', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.comma');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.comma',
      scopes: ['source.shss', 'punctuation.separator.comma'],
    });
  });

  it('punctuation.separator.colon', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.colon');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.colon',
      scopes: ['source.shss', 'punctuation.separator.colon'],
    });
  });

  it('punctuation.separator.arrow', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.arrow');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.arrow',
      scopes: ['source.shss', 'punctuation.separator.arrow'],
    });
  });

  it('punctuation.separator.key-value', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.key-value');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.key-value',
      scopes: ['source.shss', 'punctuation.separator.key-value'],
    });
  });

  it('punctuation.separator.inheritance', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.inheritance');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.inheritance',
      scopes: ['source.shss', 'punctuation.separator.inheritance'],
    });
  });

  it('punctuation.separator.delimiter', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.delimiter');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.delimiter',
      scopes: ['source.shss', 'punctuation.separator.delimiter'],
    });
  });

  it('punctuation.separator.classes', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.classes');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.classes',
      scopes: ['source.shss', 'punctuation.separator.classes'],
    });
  });

  it('punctuation.separator.continuation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.continuation',
      scopes: ['source.shss', 'punctuation.separator.continuation'],
    });
  });

  it('punctuation.separator.decimal.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.decimal.period',
      scopes: ['source.shss', 'punctuation.separator.decimal.period'],
    });
  });

  it('punctuation.separator.decimal', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.decimal');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.decimal',
      scopes: ['source.shss', 'punctuation.separator.decimal'],
    });
  });

  it('punctuation.separator.variable', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.variable');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.variable',
      scopes: ['source.shss', 'punctuation.separator.variable'],
    });
  });

  it('punctuation.separator.valuepair.dictionary', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.valuepair.dictionary');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.valuepair.dictionary',
      scopes: ['source.shss', 'punctuation.separator.valuepair.dictionary'],
    });
  });

  it('punctuation.separator.valuepair', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.valuepair');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.valuepair',
      scopes: ['source.shss', 'punctuation.separator.valuepair'],
    });
  });

  it('punctuation.separator.value-type', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.value-type');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.value-type',
      scopes: ['source.shss', 'punctuation.separator.value-type'],
    });
  });

  it('punctuation.separator.value-size', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.value-size');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.value-size',
      scopes: ['source.shss', 'punctuation.separator.value-size'],
    });
  });

  it('punctuation.separator.types', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.types');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.types',
      scopes: ['source.shss', 'punctuation.separator.types'],
    });
  });

  it('punctuation.separator.type-specifiers', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.type-specifiers');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.type-specifiers',
      scopes: ['source.shss', 'punctuation.separator.type-specifiers'],
    });
  });

  it('punctuation.separator.tuple', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.tuple');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.tuple',
      scopes: ['source.shss', 'punctuation.separator.tuple'],
    });
  });

  it('punctuation.separator.statement', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.statement');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.statement',
      scopes: ['source.shss', 'punctuation.separator.statement'],
    });
  });

  it('punctuation.separator.record-field', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.record-field');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.record-field',
      scopes: ['source.shss', 'punctuation.separator.record-field'],
    });
  });

  it('punctuation.separator.property.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.property.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.property.period',
      scopes: ['source.shss', 'punctuation.separator.property.period'],
    });
  });

  it('punctuation.separator.property', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.property');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.property',
      scopes: ['source.shss', 'punctuation.separator.property'],
    });
  });

  it('punctuation.separator.pointer-access', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.pointer-access');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.pointer-access',
      scopes: ['source.shss', 'punctuation.separator.pointer-access'],
    });
  });

  it('punctuation.separator.placeholder-parts', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.placeholder-parts');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.placeholder-parts',
      scopes: ['source.shss', 'punctuation.separator.placeholder-parts'],
    });
  });

  it('punctuation.separator.pipe', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.pipe');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.pipe',
      scopes: ['source.shss', 'punctuation.separator.pipe'],
    });
  });

  it('punctuation.separator.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.period',
      scopes: ['source.shss', 'punctuation.separator.period'],
    });
  });

  it('punctuation.separator.parameters', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.parameters');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.parameters',
      scopes: ['source.shss', 'punctuation.separator.parameters'],
    });
  });

  it('punctuation.separator.other', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.other');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.other',
      scopes: ['source.shss', 'punctuation.separator.other'],
    });
  });

  it('punctuation.separator.object', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.object');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.object',
      scopes: ['source.shss', 'punctuation.separator.object'],
    });
  });

  it('punctuation.separator.namespace.access', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.namespace.access');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.namespace.access',
      scopes: ['source.shss', 'punctuation.separator.namespace.access'],
    });
  });

  it('punctuation.separator.namespace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.namespace');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.namespace',
      scopes: ['source.shss', 'punctuation.separator.namespace'],
    });
  });

  it('punctuation.separator.module-function', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.module-function');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.module-function',
      scopes: ['source.shss', 'punctuation.separator.module-function'],
    });
  });

  it('punctuation.separator.method.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.method.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.method.period',
      scopes: ['source.shss', 'punctuation.separator.method.period'],
    });
  });

  it('punctuation.separator.method', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.method');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.method',
      scopes: ['source.shss', 'punctuation.separator.method'],
    });
  });

  it('punctuation.separator.list.comma', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.list.comma');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.list.comma',
      scopes: ['source.shss', 'punctuation.separator.list.comma'],
    });
  });

  it('punctuation.separator.list', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.list');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.list',
      scopes: ['source.shss', 'punctuation.separator.list'],
    });
  });

  it('punctuation.separator.key-value', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.key-value');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.key-value',
      scopes: ['source.shss', 'punctuation.separator.key-value'],
    });
  });

  it('punctuation.separator.integer-float', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.integer-float');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.integer-float',
      scopes: ['source.shss', 'punctuation.separator.integer-float'],
    });
  });

  it('punctuation.separator.inheritance', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.inheritance');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.inheritance',
      scopes: ['source.shss', 'punctuation.separator.inheritance'],
    });
  });

  it('punctuation.separator.guards', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.guards');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.guards',
      scopes: ['source.shss', 'punctuation.separator.guards'],
    });
  });

  it('punctuation.separator.function-punctuation-head-body', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.function-punctuation-head-body');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.function-punctuation-head-body',
      scopes: ['source.shss', 'punctuation.separator.function-punctuation-head-body'],
    });
  });

  it('punctuation.separator.function-arity', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.function-arity');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.function-arity',
      scopes: ['source.shss', 'punctuation.separator.function-arity'],
    });
  });

  it('punctuation.separator.expressions', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.expressions');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.expressions',
      scopes: ['source.shss', 'punctuation.separator.expressions'],
    });
  });

  it('punctuation.separator.dot-access', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.dot-access');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.dot-access',
      scopes: ['source.shss', 'punctuation.separator.dot-access'],
    });
  });

  it('punctuation.separator.dictionary', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.dictionary');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.dictionary',
      scopes: ['source.shss', 'punctuation.separator.dictionary'],
    });
  });

  it('punctuation.separator.delimiter', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.delimiter');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.delimiter',
      scopes: ['source.shss', 'punctuation.separator.delimiter'],
    });
  });

  it('punctuation.separator.define', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.define');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.define',
      scopes: ['source.shss', 'punctuation.separator.define'],
    });
  });

  it('punctuation.separator.dash.unicode-range', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.dash.unicode-range');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.dash.unicode-range',
      scopes: ['source.shss', 'punctuation.separator.dash.unicode-range'],
    });
  });

  it('punctuation.separator.dash', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.dash');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.dash',
      scopes: ['source.shss', 'punctuation.separator.dash'],
    });
  });

  it('punctuation.separator.continuation.line', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation.line');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.continuation.line',
      scopes: ['source.shss', 'punctuation.separator.continuation.line'],
    });
  });

  it('punctuation.separator.continuation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.continuation');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.continuation',
      scopes: ['source.shss', 'punctuation.separator.continuation'],
    });
  });

  it('punctuation.separator.comma', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.comma');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.comma',
      scopes: ['source.shss', 'punctuation.separator.comma'],
    });
  });

  it('punctuation.separator.clauses', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.clauses');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.clauses',
      scopes: ['source.shss', 'punctuation.separator.clauses'],
    });
  });

  it('punctuation.separator.clause-head-body', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.clause-head-body');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.clause-head-body',
      scopes: ['source.shss', 'punctuation.separator.clause-head-body'],
    });
  });

  it('punctuation.separator.class.record', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.class.record');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.class.record',
      scopes: ['source.shss', 'punctuation.separator.class.record'],
    });
  });

  it('punctuation.separator.class', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.class');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.class',
      scopes: ['source.shss', 'punctuation.separator.class'],
    });
  });

  it('punctuation.separator.binary', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.binary');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.binary',
      scopes: ['source.shss', 'punctuation.separator.binary'],
    });
  });

  it('punctuation.separator.arguments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator.arguments');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator.arguments',
      scopes: ['source.shss', 'punctuation.separator.arguments'],
    });
  });

  it('punctuation.separator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.separator');
    expect(tokens[0]).toEqual({
      value: 'punctuation.separator',
      scopes: ['source.shss', 'punctuation.separator'],
    });
  });

  it('punctuation.accessor', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.accessor');
    expect(tokens[0]).toEqual({
      value: 'punctuation.accessor',
      scopes: ['source.shss', 'punctuation.accessor'],
    });
  });

  it('punctuation.section.try.resources.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.resources.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.resources.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.section.try.resources.begin.bracket.round'],
    });
  });

  it('punctuation.section.try.resources.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.resources.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.resources.begin.bracket',
      scopes: ['source.shss', 'punctuation.section.try.resources.begin.bracket'],
    });
  });

  it('punctuation.section.try.resources.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.resources.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.resources.begin',
      scopes: ['source.shss', 'punctuation.section.try.resources.begin'],
    });
  });

  it('punctuation.section.try.resources', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.resources');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.resources',
      scopes: ['source.shss', 'punctuation.section.try.resources'],
    });
  });

  it('punctuation.section.try.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.try.begin.bracket.curly'],
    });
  });

  it('punctuation.section.try.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.begin.bracket',
      scopes: ['source.shss', 'punctuation.section.try.begin.bracket'],
    });
  });

  it('punctuation.section.try.begin.', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try.begin.');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try.begin.',
      scopes: ['source.shss', 'punctuation.section.try.begin.'],
    });
  });

  it('punctuation.section.try', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.try');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.try',
      scopes: ['source.shss', 'punctuation.section.try'],
    });
  });

  it('punctuation.section.symbol.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.symbol.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.symbol.begin',
      scopes: ['source.shss', 'punctuation.section.symbol.begin'],
    });
  });

  it('punctuation.section.supports.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.supports.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.supports.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.supports.begin.bracket.curly'],
    });
  });

  it('punctuation.section.supports.end.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.supports.end.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.supports.end.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.supports.end.bracket.curly'],
    });
  });

  it('punctuation.section.scope.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope.end',
      scopes: ['source.shss', 'punctuation.section.scope.end'],
    });
  });

  it('punctuation.section.scope.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope.begin',
      scopes: ['source.shss', 'punctuation.section.scope.begin'],
    });
  });

  it('punctuation.section.scope', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope',
      scopes: ['source.shss', 'punctuation.section.scope'],
    });
  });

  it('punctuation.section.regexp', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.regexp');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.regexp',
      scopes: ['source.shss', 'punctuation.section.regexp'],
    });
  });

  it('punctuation.section.regexp.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.regexp.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.regexp.begin',
      scopes: ['source.shss', 'punctuation.section.regexp.begin'],
    });
  });

  it('punctuation.section.property-list.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.property-list.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.property-list.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.property-list.begin.bracket.curly'],
    });
  });

  it('punctuation.section.parens.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parens.end.bracket.round',
      scopes: ['source.shss', 'punctuation.section.parens.end.bracket.round'],
    });
  });

  it('punctuation.section.parens.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parens.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.section.parens.begin.bracket.round'],
    });
  });

  it('punctuation.section.parameters.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parameters.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parameters.end.bracket.round',
      scopes: ['source.shss', 'punctuation.section.parameters.end.bracket.round'],
    });
  });

  it('punctuation.section.parameters.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parameters.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parameters.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.section.parameters.begin.bracket.round'],
    });
  });

  it('punctuation.section.module.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.module.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.module.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.module.begin.bracket.curly'],
    });
  });

  it('punctuation.section.method.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.method.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.method.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.method.begin.bracket.curly'],
    });
  });

  it('punctuation.section.media.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.media.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.media.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.media.begin.bracket.curly'],
    });
  });

  it('punctuation.section.list.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.list.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.list.begin',
      scopes: ['source.shss', 'punctuation.section.list.begin'],
    });
  });

  it('punctuation.section.keyframes.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.keyframes.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.keyframes.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.keyframes.begin.bracket.curly'],
    });
  });

  it('punctuation.section.inner-class.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.inner-class.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.inner-class.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.inner-class.begin.bracket.curly'],
    });
  });

  it('punctuation.section.function', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.function');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.function',
      scopes: ['source.shss', 'punctuation.section.function'],
    });
  });

  it('punctuation.section.function.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.function.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.function.end.bracket.round',
      scopes: ['source.shss', 'punctuation.section.function.end.bracket.round'],
    });
  });

  it('punctuation.section.function.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.function.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.function.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.section.function.begin.bracket.round'],
    });
  });

  it('punctuation.section.finally.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.finally.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.finally.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.finally.begin.bracket.curly'],
    });
  });

  it('punctuation.section.expression.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.expression.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.expression.begin',
      scopes: ['source.shss', 'punctuation.section.expression.begin'],
    });
  });

  it('punctuation.section.enum.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.enum.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.enum.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.enum.begin.bracket.curly'],
    });
  });

  it('punctuation.section.document.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.document.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.document.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.document.begin.bracket.curly'],
    });
  });

  it('punctuation.section.directive.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.directive.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.directive.begin',
      scopes: ['source.shss', 'punctuation.section.directive.begin'],
    });
  });

  it('punctuation.section.class.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.class.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.class.begin',
      scopes: ['source.shss', 'punctuation.section.class.begin'],
    });
  });

  it('punctuation.section.class.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.class.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.class.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.class.begin.bracket.curly'],
    });
  });

  it('punctuation.section.catch.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.catch.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.catch.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.catch.begin.bracket.curly'],
    });
  });

  it('punctuation.section.block.end.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.end.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.block.end.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.block.end.bracket.curly'],
    });
  });

  it('punctuation.section.block.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.block.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.block.begin.bracket.curly'],
    });
  });

  it('punctuation.section.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.begin.bracket.curly'],
    });
  });

  it('punctuation.section.array.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array.end',
      scopes: ['source.shss', 'punctuation.section.array.end'],
    });
  });

  it('punctuation.section.array', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array',
      scopes: ['source.shss', 'punctuation.section.array'],
    });
  });

  it('punctuation.section.array.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array.begin',
      scopes: ['source.shss', 'punctuation.section.array.begin'],
    });
  });

  it('punctuation.section.arguments.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.end.bracket.round',
      scopes: ['source.shss', 'punctuation.section.arguments.end.bracket.round'],
    });
  });

  it('punctuation.section.arguments.end.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.end.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.end.bracket',
      scopes: ['source.shss', 'punctuation.section.arguments.end.bracket'],
    });
  });

  it('punctuation.section.arguments.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.end',
      scopes: ['source.shss', 'punctuation.section.arguments.end'],
    });
  });

  it('punctuation.section.arguments.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.section.arguments.begin.bracket.round'],
    });
  });

  it('punctuation.section.arguments.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.begin.bracket',
      scopes: ['source.shss', 'punctuation.section.arguments.begin.bracket'],
    });
  });

  it('punctuation.section.arguments.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments.begin',
      scopes: ['source.shss', 'punctuation.section.arguments.begin'],
    });
  });

  it('punctuation.section.arguments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.arguments');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.arguments',
      scopes: ['source.shss', 'punctuation.section.arguments'],
    });
  });

  it('punctuation.section.embedded.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.embedded.begin',
      scopes: ['source.shss', 'punctuation.section.embedded.begin'],
    });
  });

  it('punctuation.section.embedded.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.embedded.end',
      scopes: ['source.shss', 'punctuation.section.embedded.end'],
    });
  });

  it('punctuation.section.embedded', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.embedded');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.embedded',
      scopes: ['source.shss', 'punctuation.section.embedded'],
    });
  });

  it('punctuation.section.array.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array.begin',
      scopes: ['source.shss', 'punctuation.section.array.begin'],
    });
  });

  it('punctuation.section.array.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array.end',
      scopes: ['source.shss', 'punctuation.section.array.end'],
    });
  });

  it('punctuation.section.array', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.array');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.array',
      scopes: ['source.shss', 'punctuation.section.array'],
    });
  });

  it('punctuation.section.block.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.block.begin',
      scopes: ['source.shss', 'punctuation.section.block.begin'],
    });
  });

  it('punctuation.section.block.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.block.end',
      scopes: ['source.shss', 'punctuation.section.block.end'],
    });
  });

  it('punctuation.section.block', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.block');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.block',
      scopes: ['source.shss', 'punctuation.section.block'],
    });
  });

  it('punctuation.section.braces.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.braces.begin',
      scopes: ['source.shss', 'punctuation.section.braces.begin'],
    });
  });

  it('punctuation.section.braces.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.braces.end',
      scopes: ['source.shss', 'punctuation.section.braces.end'],
    });
  });

  it('punctuation.section.braces', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.braces');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.braces',
      scopes: ['source.shss', 'punctuation.section.braces'],
    });
  });

  it('punctuation.section.group.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.group.begin',
      scopes: ['source.shss', 'punctuation.section.group.begin'],
    });
  });

  it('punctuation.section.group.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.group.end',
      scopes: ['source.shss', 'punctuation.section.group.end'],
    });
  });

  it('punctuation.section.group', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.group');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.group',
      scopes: ['source.shss', 'punctuation.section.group'],
    });
  });

  it('punctuation.section.parens.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parens.begin',
      scopes: ['source.shss', 'punctuation.section.parens.begin'],
    });
  });

  it('punctuation.section.parens.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parens.end',
      scopes: ['source.shss', 'punctuation.section.parens.end'],
    });
  });

  it('punctuation.section.parens', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parens');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parens',
      scopes: ['source.shss', 'punctuation.section.parens'],
    });
  });

  it('punctuation.section.brackets.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brackets.begin',
      scopes: ['source.shss', 'punctuation.section.brackets.begin'],
    });
  });

  it('punctuation.section.brackets.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brackets.end',
      scopes: ['source.shss', 'punctuation.section.brackets.end'],
    });
  });

  it('punctuation.section.brackets', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brackets');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brackets',
      scopes: ['source.shss', 'punctuation.section.brackets'],
    });
  });

  it('punctuation.section.interpolation.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.interpolation.end',
      scopes: ['source.shss', 'punctuation.section.interpolation.end'],
    });
  });

  it('punctuation.section.interpolation.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.interpolation.begin',
      scopes: ['source.shss', 'punctuation.section.interpolation.begin'],
    });
  });

  it('punctuation.section.interpolation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.interpolation');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.interpolation',
      scopes: ['source.shss', 'punctuation.section.interpolation'],
    });
  });

  it('punctuation.section.brace.curly.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brace.curly.bracket.begin',
      scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.begin'],
    });
  });

  it('punctuation.section.brace.curly.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brace.curly.bracket.end',
      scopes: ['source.shss', 'punctuation.section.brace.curly.bracket.end'],
    });
  });

  it('punctuation.section.brace.curly.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brace.curly.bracket',
      scopes: ['source.shss', 'punctuation.section.brace.curly.bracket'],
    });
  });

  it('punctuation.section.brace.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brace.curly',
      scopes: ['source.shss', 'punctuation.section.brace.curly'],
    });
  });

  it('punctuation.section.brace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.brace');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.brace',
      scopes: ['source.shss', 'punctuation.section.brace'],
    });
  });

  it('punctuation.section.square.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.square.bracket.begin',
      scopes: ['source.shss', 'punctuation.section.square.bracket.begin'],
    });
  });

  it('punctuation.section.square.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.square.bracket.end',
      scopes: ['source.shss', 'punctuation.section.square.bracket.end'],
    });
  });

  it('punctuation.section.square.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.square.bracket',
      scopes: ['source.shss', 'punctuation.section.square.bracket'],
    });
  });

  it('punctuation.section.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.square',
      scopes: ['source.shss', 'punctuation.section.square'],
    });
  });

  it('punctuation.section.scope.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope.begin',
      scopes: ['source.shss', 'punctuation.section.scope.begin'],
    });
  });

  it('punctuation.section.scope.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope.end',
      scopes: ['source.shss', 'punctuation.section.scope.end'],
    });
  });

  it('punctuation.section.scope', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.scope');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.scope',
      scopes: ['source.shss', 'punctuation.section.scope'],
    });
  });

  it('punctuation.section.parenthesis.round.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parenthesis.round.bracket.begin',
      scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.begin'],
    });
  });

  it('punctuation.section.parenthesis.round.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parenthesis.round.bracket.end',
      scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket.end'],
    });
  });

  it('punctuation.section.parenthesis.round.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parenthesis.round.bracket',
      scopes: ['source.shss', 'punctuation.section.parenthesis.round.bracket'],
    });
  });

  it('punctuation.section.parenthesis.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parenthesis.round',
      scopes: ['source.shss', 'punctuation.section.parenthesis.round'],
    });
  });

  it('punctuation.section.parenthesis', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.parenthesis');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.parenthesis',
      scopes: ['source.shss', 'punctuation.section.parenthesis'],
    });
  });

  it('punctuation.section.signature.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.signature.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.section.signature.begin.bracket.curly'],
    });
  });

  it('punctuation.section.signature.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.signature.begin.bracket',
      scopes: ['source.shss', 'punctuation.section.signature.begin.bracket'],
    });
  });

  it('punctuation.section.signature.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.signature.begin',
      scopes: ['source.shss', 'punctuation.section.signature.begin'],
    });
  });

  it('punctuation.section.signature', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section.signature');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section.signature',
      scopes: ['source.shss', 'punctuation.section.signature'],
    });
  });

  it('punctuation.section', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.section');
    expect(tokens[0]).toEqual({
      value: 'punctuation.section',
      scopes: ['source.shss', 'punctuation.section'],
    });
  });

  it('punctuation.other.period', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.other.period');
    expect(tokens[0]).toEqual({
      value: 'punctuation.other.period',
      scopes: ['source.shss', 'punctuation.other.period'],
    });
  });

  it('punctuation.other.comma', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.other.comma');
    expect(tokens[0]).toEqual({
      value: 'punctuation.other.comma',
      scopes: ['source.shss', 'punctuation.other.comma'],
    });
  });

  it('punctuation.other.colon', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.other.colon');
    expect(tokens[0]).toEqual({
      value: 'punctuation.other.colon',
      scopes: ['source.shss', 'punctuation.other.colon'],
    });
  });

  it('punctuation.definition.variables.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variables.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.variables.end.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.variables.end.bracket.round'],
    });
  });

  it('punctuation.definition.variables.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variables.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.variables.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.variables.begin.bracket.round'],
    });
  });

  it('punctuation.definition.tuple.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tuple.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tuple.begin',
      scopes: ['source.shss', 'punctuation.definition.tuple.begin'],
    });
  });

  it('punctuation.definition.tag.html', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.html');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tag.html',
      scopes: ['source.shss', 'punctuation.definition.tag.html'],
    });
  });

  it('punctuation.definition.tag.begin.html', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.begin.html');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tag.begin.html',
      scopes: ['source.shss', 'punctuation.definition.tag.begin.html'],
    });
  });

  it('punctuation.definition.symbol.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.symbol.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.symbol.begin',
      scopes: ['source.shss', 'punctuation.definition.symbol.begin'],
    });
  });

  it('punctuation.definition.string.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string.end',
      scopes: ['source.shss', 'punctuation.definition.string.end'],
    });
  });

  it('punctuation.definition.string.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string.begin',
      scopes: ['source.shss', 'punctuation.definition.string.begin'],
    });
  });

  it('punctuation.definition.string.begin.html', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.begin.html');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string.begin.html',
      scopes: ['source.shss', 'punctuation.definition.string.begin.html'],
    });
  });

  it('punctuation.definition.scope', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.scope');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.scope',
      scopes: ['source.shss', 'punctuation.definition.scope'],
    });
  });

  it('punctuation.definition.quasiquotes.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.quasiquotes.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.quasiquotes.end',
      scopes: ['source.shss', 'punctuation.definition.quasiquotes.end'],
    });
  });

  it('punctuation.definition.quasiquotes.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.quasiquotes.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.quasiquotes.begin',
      scopes: ['source.shss', 'punctuation.definition.quasiquotes.begin'],
    });
  });

  it('punctuation.definition.placeholder', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.placeholder');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.placeholder',
      scopes: ['source.shss', 'punctuation.definition.placeholder'],
    });
  });

  it('punctuation.definition.parameters.varargs', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters.varargs');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters.varargs',
      scopes: ['source.shss', 'punctuation.definition.parameters.varargs'],
    });
  });

  it('punctuation.definition.parameters', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters',
      scopes: ['source.shss', 'punctuation.definition.parameters'],
    });
  });

  it('punctuation.definition.parameters.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters.end',
      scopes: ['source.shss', 'punctuation.definition.parameters.end'],
    });
  });

  it('punctuation.definition.parameters.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters.end.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.parameters.end.bracket.round'],
    });
  });

  it('punctuation.definition.parameters.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters.begin',
      scopes: ['source.shss', 'punctuation.definition.parameters.begin'],
    });
  });

  it('punctuation.definition.parameters.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.parameters.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.parameters.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.parameters.begin.bracket.round'],
    });
  });

  it('punctuation.definition.list.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.list.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.list.end',
      scopes: ['source.shss', 'punctuation.definition.list.end'],
    });
  });

  it('punctuation.definition.list.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.list.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.list.begin',
      scopes: ['source.shss', 'punctuation.definition.list.begin'],
    });
  });

  it('punctuation.definition.list', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.list');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.list',
      scopes: ['source.shss', 'punctuation.definition.list'],
    });
  });

  it('punctuation.definition.keyword', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.keyword',
      scopes: ['source.shss', 'punctuation.definition.keyword'],
    });
  });

  it('punctuation.definition.interpolation.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.interpolation.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.interpolation.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.definition.interpolation.begin.bracket.curly'],
    });
  });

  it('punctuation.definition.inheritance.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.inheritance.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.inheritance.end',
      scopes: ['source.shss', 'punctuation.definition.inheritance.end'],
    });
  });

  it('punctuation.definition.inheritance.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.inheritance.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.inheritance.begin',
      scopes: ['source.shss', 'punctuation.definition.inheritance.begin'],
    });
  });

  it('punctuation.definition.imports.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.imports.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.imports.end.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.imports.end.bracket.round'],
    });
  });

  it('punctuation.definition.imports.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.imports.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.imports.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.imports.begin.bracket.round'],
    });
  });

  it('punctuation.definition.escape', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.escape');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.escape',
      scopes: ['source.shss', 'punctuation.definition.escape'],
    });
  });

  it('punctuation.definition.entity.end.html', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity.end.html');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity.end.html',
      scopes: ['source.shss', 'punctuation.definition.entity.end.html'],
    });
  });

  it('punctuation.definition.entity.begin.html', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity.begin.html');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity.begin.html',
      scopes: ['source.shss', 'punctuation.definition.entity.begin.html'],
    });
  });

  it('punctuation.definition.entity.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity.end',
      scopes: ['source.shss', 'punctuation.definition.entity.end'],
    });
  });

  it('punctuation.definition.entity.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity.begin',
      scopes: ['source.shss', 'punctuation.definition.entity.begin'],
    });
  });

  it('punctuation.definition.entity', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity',
      scopes: ['source.shss', 'punctuation.definition.entity'],
    });
  });

  it('punctuation.definition.entity.begin.bracket.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.entity.begin.bracket.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.entity.begin.bracket.square',
      scopes: ['source.shss', 'punctuation.definition.entity.begin.bracket.square'],
    });
  });

  it('punctuation.definition.end.bracket.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.end.bracket.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.end.bracket.square',
      scopes: ['source.shss', 'punctuation.definition.end.bracket.square'],
    });
  });

  it('punctuation.definition.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.end.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.end.bracket.round'],
    });
  });

  it('punctuation.definition.end.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.end.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.end.bracket.curly',
      scopes: ['source.shss', 'punctuation.definition.end.bracket.curly'],
    });
  });

  it('punctuation.definition.end.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.end.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.end.bracket',
      scopes: ['source.shss', 'punctuation.definition.end.bracket'],
    });
  });

  it('punctuation.definition.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.end',
      scopes: ['source.shss', 'punctuation.definition.end'],
    });
  });

  it('punctuation.definition.dictionary.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.dictionary.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.dictionary.begin',
      scopes: ['source.shss', 'punctuation.definition.dictionary.begin'],
    });
  });

  it('punctuation.definition.directive', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.directive');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.directive',
      scopes: ['source.shss', 'punctuation.definition.directive'],
    });
  });

  it('punctuation.definition.decorator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.decorator');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.decorator',
      scopes: ['source.shss', 'punctuation.definition.decorator'],
    });
  });

  it('punctuation.definition.constant.hashkey', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.constant.hashkey');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.constant.hashkey',
      scopes: ['source.shss', 'punctuation.definition.constant.hashkey'],
    });
  });

  it('punctuation.definition.constant', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.constant');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.constant',
      scopes: ['source.shss', 'punctuation.definition.constant'],
    });
  });

  it('punctuation.definition.condition.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.condition.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.condition.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.condition.begin.bracket.round'],
    });
  });

  it('punctuation.definition.comment.block.start', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.block.start');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.block.start',
      scopes: ['source.shss', 'punctuation.definition.comment.block.start'],
    });
  });

  it('punctuation.definition.comment.block.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.block.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.block.end',
      scopes: ['source.shss', 'punctuation.definition.comment.block.end'],
    });
  });

  it('punctuation.definition.comment.block', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.block');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.block',
      scopes: ['source.shss', 'punctuation.definition.comment.block'],
    });
  });

  it('punctuation.definition.comment.haddock', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.haddock');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.haddock',
      scopes: ['source.shss', 'punctuation.definition.comment.haddock'],
    });
  });

  it('punctuation.definition.comment.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.end',
      scopes: ['source.shss', 'punctuation.definition.comment.end'],
    });
  });

  it('punctuation.definition.comment.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment.begin',
      scopes: ['source.shss', 'punctuation.definition.comment.begin'],
    });
  });

  it('punctuation.definition.comment', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.comment');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.comment',
      scopes: ['source.shss', 'punctuation.definition.comment'],
    });
  });

  it('punctuation.definition.class.record.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.class.record.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.class.record.end',
      scopes: ['source.shss', 'punctuation.definition.class.record.end'],
    });
  });

  it('punctuation.definition.character', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.character');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.character',
      scopes: ['source.shss', 'punctuation.definition.character'],
    });
  });

  it('punctuation.definition.character-class', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.character-class');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.character-class',
      scopes: ['source.shss', 'punctuation.definition.character-class'],
    });
  });

  it('punctuation.definition.bracket.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.bracket.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.bracket.square',
      scopes: ['source.shss', 'punctuation.definition.bracket.square'],
    });
  });

  it('punctuation.definition.binary.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.binary.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.binary.begin',
      scopes: ['source.shss', 'punctuation.definition.binary.begin'],
    });
  });

  it('punctuation.definition.begin.bracket.square', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.begin.bracket.square');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.begin.bracket.square',
      scopes: ['source.shss', 'punctuation.definition.begin.bracket.square'],
    });
  });

  it('punctuation.definition.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.begin.bracket.round'],
    });
  });

  it('punctuation.definition.begin.bracket.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.begin.bracket.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.begin.bracket.curly',
      scopes: ['source.shss', 'punctuation.definition.begin.bracket.curly'],
    });
  });

  it('punctuation.definition.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.begin.bracket',
      scopes: ['source.shss', 'punctuation.definition.begin.bracket'],
    });
  });

  it('punctuation.definition.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.begin',
      scopes: ['source.shss', 'punctuation.definition.begin'],
    });
  });

  it('punctuation.definition.arguments.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arguments.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arguments.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.arguments.begin.bracket.round'],
    });
  });

  it('punctuation.definition.arguments.begin.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arguments.begin.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arguments.begin.bracket',
      scopes: ['source.shss', 'punctuation.definition.arguments.begin.bracket'],
    });
  });

  it('punctuation.definition.arguments.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arguments.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arguments.begin',
      scopes: ['source.shss', 'punctuation.definition.arguments.begin'],
    });
  });

  it('punctuation.definition.arguments', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arguments');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arguments',
      scopes: ['source.shss', 'punctuation.definition.arguments'],
    });
  });

  it('punctuation.definition.arbitrary-repitition', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arbitrary-repitition');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arbitrary-repitition',
      scopes: ['source.shss', 'punctuation.definition.arbitrary-repitition'],
    });
  });

  it('punctuation.definition.annotation.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.annotation.begin',
      scopes: ['source.shss', 'punctuation.definition.annotation.begin'],
    });
  });

  it('punctuation.definition.annotation.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.annotation.end',
      scopes: ['source.shss', 'punctuation.definition.annotation.end'],
    });
  });

  it('punctuation.definition.annotation-arguments.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation-arguments.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.annotation-arguments.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.annotation-arguments.begin.bracket.round'],
    });
  });

  it('punctuation.definition.annotation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.annotation');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.annotation',
      scopes: ['source.shss', 'punctuation.definition.annotation'],
    });
  });

  it('punctuation.definition.heredoc.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.heredoc.begin',
      scopes: ['source.shss', 'punctuation.definition.heredoc.begin'],
    });
  });

  it('punctuation.definition.heredoc.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.heredoc.end',
      scopes: ['source.shss', 'punctuation.definition.heredoc.end'],
    });
  });

  it('punctuation.definition.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.heredoc');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.heredoc',
      scopes: ['source.shss', 'punctuation.definition.heredoc'],
    });
  });

  it('punctuation.definition.array.begin.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.begin.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.array.begin.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.array.begin.bracket.round'],
    });
  });

  it('punctuation.definition.array.end.bracket.round', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.array.end.bracket.round');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.array.end.bracket.round',
      scopes: ['source.shss', 'punctuation.definition.array.end.bracket.round'],
    });
  });

  it('punctuation.definition.constant', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.constant');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.constant',
      scopes: ['source.shss', 'punctuation.definition.constant'],
    });
  });

  it('punctuation.definition.arbitrary-repetition', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.arbitrary-repetition');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.arbitrary-repetition',
      scopes: ['source.shss', 'punctuation.definition.arbitrary-repetition'],
    });
  });

  it('punctuation.definition.tag.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tag.begin',
      scopes: ['source.shss', 'punctuation.definition.tag.begin'],
    });
  });

  it('punctuation.definition.tag.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tag.end',
      scopes: ['source.shss', 'punctuation.definition.tag.end'],
    });
  });

  it('punctuation.definition.tag', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.tag');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.tag',
      scopes: ['source.shss', 'punctuation.definition.tag'],
    });
  });

  it('punctuation.definition.string.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string.begin',
      scopes: ['source.shss', 'punctuation.definition.string.begin'],
    });
  });

  it('punctuation.definition.string.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string.end',
      scopes: ['source.shss', 'punctuation.definition.string.end'],
    });
  });

  it('punctuation.definition.string', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.string');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.string',
      scopes: ['source.shss', 'punctuation.definition.string'],
    });
  });

  it('punctuation.definition.keyword.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.keyword.begin',
      scopes: ['source.shss', 'punctuation.definition.keyword.begin'],
    });
  });

  it('punctuation.definition.keyword.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.keyword.end',
      scopes: ['source.shss', 'punctuation.definition.keyword.end'],
    });
  });

  it('punctuation.definition.keyword', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.keyword');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.keyword',
      scopes: ['source.shss', 'punctuation.definition.keyword'],
    });
  });

  it('punctuation.definition.generic.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.generic.begin',
      scopes: ['source.shss', 'punctuation.definition.generic.begin'],
    });
  });

  it('punctuation.definition.generic.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.generic.end',
      scopes: ['source.shss', 'punctuation.definition.generic.end'],
    });
  });

  it('punctuation.definition.generic', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.generic');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.generic',
      scopes: ['source.shss', 'punctuation.definition.generic'],
    });
  });

  it('punctuation.definition.variable.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.variable.begin',
      scopes: ['source.shss', 'punctuation.definition.variable.begin'],
    });
  });

  it('punctuation.definition.variable.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.variable.end',
      scopes: ['source.shss', 'punctuation.definition.variable.end'],
    });
  });

  it('punctuation.definition.variable', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition.variable');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition.variable',
      scopes: ['source.shss', 'punctuation.definition.variable'],
    });
  });

  it('punctuation.definition', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.definition');
    expect(tokens[0]).toEqual({
      value: 'punctuation.definition',
      scopes: ['source.shss', 'punctuation.definition'],
    });
  });

  it('punctuation.catch.separator', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.catch.separator');
    expect(tokens[0]).toEqual({
      value: 'punctuation.catch.separator',
      scopes: ['source.shss', 'punctuation.catch.separator'],
    });
  });

  it('punctuation.unmatched.brace.curly.bracket.begin', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.begin');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched.brace.curly.bracket.begin',
      scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.begin'],
    });
  });

  it('punctuation.unmatched.brace.curly.bracket.end', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket.end');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched.brace.curly.bracket.end',
      scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket.end'],
    });
  });

  it('punctuation.unmatched.brace.curly.bracket', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly.bracket');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched.brace.curly.bracket',
      scopes: ['source.shss', 'punctuation.unmatched.brace.curly.bracket'],
    });
  });

  it('punctuation.unmatched.brace.curly', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace.curly');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched.brace.curly',
      scopes: ['source.shss', 'punctuation.unmatched.brace.curly'],
    });
  });

  it('punctuation.unmatched.brace', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched.brace');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched.brace',
      scopes: ['source.shss', 'punctuation.unmatched.brace'],
    });
  });

  it('punctuation.unmatched', () => {
    const { tokens } = grammar.tokenizeLine('punctuation.unmatched');
    expect(tokens[0]).toEqual({
      value: 'punctuation.unmatched',
      scopes: ['source.shss', 'punctuation.unmatched'],
    });
  });

  it('punctuation', () => {
    const { tokens } = grammar.tokenizeLine('punctuation');
    expect(tokens[0]).toEqual({
      value: 'punctuation',
      scopes: ['source.shss', 'punctuation'],
    });
  });

  it('storage.modifier.variable', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.variable');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.variable',
      scopes: ['source.shss', 'storage.modifier.variable'],
    });
  });

  it('storage.modifier.unit', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.unit');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.unit',
      scopes: ['source.shss', 'storage.modifier.unit'],
    });
  });

  it('storage.modifier.signedness', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.signedness');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.signedness',
      scopes: ['source.shss', 'storage.modifier.signedness'],
    });
  });

  it('storage.modifier.nonlocal', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.nonlocal');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.nonlocal',
      scopes: ['source.shss', 'storage.modifier.nonlocal'],
    });
  });

  it('storage.modifier.ignore-case', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.ignore-case');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.ignore-case',
      scopes: ['source.shss', 'storage.modifier.ignore-case'],
    });
  });

  it('storage.modifier.global', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.global');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.global',
      scopes: ['source.shss', 'storage.modifier.global'],
    });
  });

  it('storage.modifier.endianness', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.endianness');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.endianness',
      scopes: ['source.shss', 'storage.modifier.endianness'],
    });
  });

  it('storage.modifier.async', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.async');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.async',
      scopes: ['source.shss', 'storage.modifier.async'],
    });
  });

  it('storage.modifier.extends', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.extends');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.extends',
      scopes: ['source.shss', 'storage.modifier.extends'],
    });
  });

  it('storage.modifier.static', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.static');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.static',
      scopes: ['source.shss', 'storage.modifier.static'],
    });
  });

  it('storage.modifier.final', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.final');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.final',
      scopes: ['source.shss', 'storage.modifier.final'],
    });
  });

  it('storage.modifier.abstract', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.abstract');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.abstract',
      scopes: ['source.shss', 'storage.modifier.abstract'],
    });
  });

  it('storage.modifier.public', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.public');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.public',
      scopes: ['source.shss', 'storage.modifier.public'],
    });
  });

  it('storage.modifier.private', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.private');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.private',
      scopes: ['source.shss', 'storage.modifier.private'],
    });
  });

  it('storage.modifier.protected', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.protected');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.protected',
      scopes: ['source.shss', 'storage.modifier.protected'],
    });
  });

  it('storage.modifier.reference', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier.reference');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier.reference',
      scopes: ['source.shss', 'storage.modifier.reference'],
    });
  });

  it('storage.modifier', () => {
    const { tokens } = grammar.tokenizeLine('storage.modifier');
    expect(tokens[0]).toEqual({
      value: 'storage.modifier',
      scopes: ['source.shss', 'storage.modifier'],
    });
  });

  it('storage.type.variable', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.variable');
    expect(tokens[0]).toEqual({
      value: 'storage.type.variable',
      scopes: ['source.shss', 'storage.type.variable'],
    });
  });

  it('storage.type.uintptr', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.uintptr');
    expect(tokens[0]).toEqual({
      value: 'storage.type.uintptr',
      scopes: ['source.shss', 'storage.type.uintptr'],
    });
  });

  it('storage.type.template', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.template');
    expect(tokens[0]).toEqual({
      value: 'storage.type.template',
      scopes: ['source.shss', 'storage.type.template'],
    });
  });

  it('storage.type.string', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.string');
    expect(tokens[0]).toEqual({
      value: 'storage.type.string',
      scopes: ['source.shss', 'storage.type.string'],
    });
  });

  it('storage.type.rune', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.rune');
    expect(tokens[0]).toEqual({
      value: 'storage.type.rune',
      scopes: ['source.shss', 'storage.type.rune'],
    });
  });

  it('storage.type.primitive', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.primitive');
    expect(tokens[0]).toEqual({
      value: 'storage.type.primitive',
      scopes: ['source.shss', 'storage.type.primitive'],
    });
  });

  it('storage.type.primitive.array', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.primitive.array');
    expect(tokens[0]).toEqual({
      value: 'storage.type.primitive.array',
      scopes: ['source.shss', 'storage.type.primitive.array'],
    });
  });

  it('storage.type.object.array', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.object.array');
    expect(tokens[0]).toEqual({
      value: 'storage.type.object.array',
      scopes: ['source.shss', 'storage.type.object.array'],
    });
  });

  it('storage.type.numeric', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.numeric');
    expect(tokens[0]).toEqual({
      value: 'storage.type.numeric',
      scopes: ['source.shss', 'storage.type.numeric'],
    });
  });

  it('storage.type.modifier', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.modifier');
    expect(tokens[0]).toEqual({
      value: 'storage.type.modifier',
      scopes: ['source.shss', 'storage.type.modifier'],
    });
  });

  it('storage.type.local', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.local');
    expect(tokens[0]).toEqual({
      value: 'storage.type.local',
      scopes: ['source.shss', 'storage.type.local'],
    });
  });

  it('storage.type.generic.wildcard', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.generic.wildcard');
    expect(tokens[0]).toEqual({
      value: 'storage.type.generic.wildcard',
      scopes: ['source.shss', 'storage.type.generic.wildcard'],
    });
  });

  it('storage.type.generic', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.generic');
    expect(tokens[0]).toEqual({
      value: 'storage.type.generic',
      scopes: ['source.shss', 'storage.type.generic'],
    });
  });

  it('storage.type.error', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.error');
    expect(tokens[0]).toEqual({
      value: 'storage.type.error',
      scopes: ['source.shss', 'storage.type.error'],
    });
  });

  it('storage.type.byte', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.byte');
    expect(tokens[0]).toEqual({
      value: 'storage.type.byte',
      scopes: ['source.shss', 'storage.type.byte'],
    });
  });

  it('storage.type.boolean', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.boolean');
    expect(tokens[0]).toEqual({
      value: 'storage.type.boolean',
      scopes: ['source.shss', 'storage.type.boolean'],
    });
  });

  it('storage.type.annotation', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.annotation');
    expect(tokens[0]).toEqual({
      value: 'storage.type.annotation',
      scopes: ['source.shss', 'storage.type.annotation'],
    });
  });

  it('storage.type.signature.method', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature.method');
    expect(tokens[0]).toEqual({
      value: 'storage.type.signature.method',
      scopes: ['source.shss', 'storage.type.signature.method'],
    });
  });

  it('storage.type.signature', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.signature');
    expect(tokens[0]).toEqual({
      value: 'storage.type.signature',
      scopes: ['source.shss', 'storage.type.signature'],
    });
  });

  it('storage.type.function.inline', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.function.inline');
    expect(tokens[0]).toEqual({
      value: 'storage.type.function.inline',
      scopes: ['source.shss', 'storage.type.function.inline'],
    });
  });

  it('storage.type.function.arrow', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.function.arrow');
    expect(tokens[0]).toEqual({
      value: 'storage.type.function.arrow',
      scopes: ['source.shss', 'storage.type.function.arrow'],
    });
  });

  it('storage.type.function', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.function');
    expect(tokens[0]).toEqual({
      value: 'storage.type.function',
      scopes: ['source.shss', 'storage.type.function'],
    });
  });

  it('storage.type.class.radar', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.class.radar');
    expect(tokens[0]).toEqual({
      value: 'storage.type.class.radar',
      scopes: ['source.shss', 'storage.type.class.radar'],
    });
  });

  it('storage.type.class', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.class');
    expect(tokens[0]).toEqual({
      value: 'storage.type.class',
      scopes: ['source.shss', 'storage.type.class'],
    });
  });

  it('storage.type.interface', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.interface');
    expect(tokens[0]).toEqual({
      value: 'storage.type.interface',
      scopes: ['source.shss', 'storage.type.interface'],
    });
  });

  it('storage.type.int', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.int');
    expect(tokens[0]).toEqual({
      value: 'storage.type.int',
      scopes: ['source.shss', 'storage.type.int'],
    });
  });

  it('storage.type.var', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.var');
    expect(tokens[0]).toEqual({
      value: 'storage.type.var',
      scopes: ['source.shss', 'storage.type.var'],
    });
  });

  it('storage.type.struct', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.struct');
    expect(tokens[0]).toEqual({
      value: 'storage.type.struct',
      scopes: ['source.shss', 'storage.type.struct'],
    });
  });

  it('storage.type.enum', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.enum');
    expect(tokens[0]).toEqual({
      value: 'storage.type.enum',
      scopes: ['source.shss', 'storage.type.enum'],
    });
  });

  it('storage.type.union', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.union');
    expect(tokens[0]).toEqual({
      value: 'storage.type.union',
      scopes: ['source.shss', 'storage.type.union'],
    });
  });

  it('storage.type.trait', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.trait');
    expect(tokens[0]).toEqual({
      value: 'storage.type.trait',
      scopes: ['source.shss', 'storage.type.trait'],
    });
  });

  it('storage.type.impl', () => {
    const { tokens } = grammar.tokenizeLine('storage.type.impl');
    expect(tokens[0]).toEqual({
      value: 'storage.type.impl',
      scopes: ['source.shss', 'storage.type.impl'],
    });
  });

  it('storage.type', () => {
    const { tokens } = grammar.tokenizeLine('storage.type');
    expect(tokens[0]).toEqual({
      value: 'storage.type',
      scopes: ['source.shss', 'storage.type'],
    });
  });

  it('storage', () => {
    const { tokens } = grammar.tokenizeLine('storage');
    expect(tokens[0]).toEqual({
      value: 'storage',
      scopes: ['source.shss', 'storage'],
    });
  });

  it('source.language-suffix.embedded', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix.embedded');
    expect(tokens[0]).toEqual({
      value: 'source.language-suffix.embedded',
      scopes: ['source.shss', 'source.language-suffix.embedded'],
    });
  });

  it('source.language-suffix', () => {
    const { tokens } = grammar.tokenizeLine('source.language-suffix');
    expect(tokens[0]).toEqual({
      value: 'source.language-suffix',
      scopes: ['source.shss', 'source.language-suffix'],
    });
  });

  it('source', () => {
    const { tokens } = grammar.tokenizeLine('source');
    expect(tokens[0]).toEqual({
      value: 'source',
      scopes: ['source.shss', 'source'],
    });
  });

  it('string.quoted.backtick', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.backtick');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.backtick',
      scopes: ['source.shss', 'string.quoted.backtick'],
    });
  });

  it('string.quoted.symbol', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.symbol');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.symbol',
      scopes: ['source.shss', 'string.quoted.symbol'],
    });
  });

  it('string.quoted.single.single-line.unicode', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.unicode');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.unicode',
      scopes: ['source.shss', 'string.quoted.single.single-line.unicode'],
    });
  });

  it('string.quoted.single.single-line.unicode-raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.unicode-raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.unicode-raw',
      scopes: ['source.shss', 'string.quoted.single.single-line.unicode-raw'],
    });
  });

  it('string.quoted.single.single-line.unicode-raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.unicode-raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.unicode-raw-regex',
      scopes: ['source.shss', 'string.quoted.single.single-line.unicode-raw-regex'],
    });
  });

  it('string.quoted.single.single-line.sql', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.sql');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.sql',
      scopes: ['source.shss', 'string.quoted.single.single-line.sql'],
    });
  });

  it('string.quoted.single.single-line.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.raw',
      scopes: ['source.shss', 'string.quoted.single.single-line.raw'],
    });
  });

  it('string.quoted.single.single-line.raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.raw-regex',
      scopes: ['source.shss', 'string.quoted.single.single-line.raw-regex'],
    });
  });

  it('string.quoted.single.single-line.raw-format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.raw-format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.raw-format',
      scopes: ['source.shss', 'string.quoted.single.single-line.raw-format'],
    });
  });

  it('string.quoted.single.single-line.raw-binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.raw-binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.raw-binary',
      scopes: ['source.shss', 'string.quoted.single.single-line.raw-binary'],
    });
  });

  it('string.quoted.single.single-line', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line',
      scopes: ['source.shss', 'string.quoted.single.single-line'],
    });
  });

  it('string.quoted.single.single-line.format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.format',
      scopes: ['source.shss', 'string.quoted.single.single-line.format'],
    });
  });

  it('string.quoted.single.single-line.binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.single-line.binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.single-line.binary',
      scopes: ['source.shss', 'string.quoted.single.single-line.binary'],
    });
  });

  it('string.quoted.single', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single',
      scopes: ['source.shss', 'string.quoted.single'],
    });
  });

  it('string.quoted.single.html', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.html');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.html',
      scopes: ['source.shss', 'string.quoted.single.html'],
    });
  });

  it('string.quoted.single.block.unicode', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.unicode');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.unicode',
      scopes: ['source.shss', 'string.quoted.single.block.unicode'],
    });
  });

  it('string.quoted.single.block.unicode-raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.unicode-raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.unicode-raw',
      scopes: ['source.shss', 'string.quoted.single.block.unicode-raw'],
    });
  });

  it('string.quoted.single.block.unicode-raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.unicode-raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.unicode-raw-regex',
      scopes: ['source.shss', 'string.quoted.single.block.unicode-raw-regex'],
    });
  });

  it('string.quoted.single.block.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.raw',
      scopes: ['source.shss', 'string.quoted.single.block.raw'],
    });
  });

  it('string.quoted.single.block.raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.raw-regex',
      scopes: ['source.shss', 'string.quoted.single.block.raw-regex'],
    });
  });

  it('string.quoted.single.block.raw-format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.raw-format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.raw-format',
      scopes: ['source.shss', 'string.quoted.single.block.raw-format'],
    });
  });

  it('string.quoted.single.block.raw-binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.raw-binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.raw-binary',
      scopes: ['source.shss', 'string.quoted.single.block.raw-binary'],
    });
  });

  it('string.quoted.single.block', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block',
      scopes: ['source.shss', 'string.quoted.single.block'],
    });
  });

  it('string.quoted.single.block.format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.format',
      scopes: ['source.shss', 'string.quoted.single.block.format'],
    });
  });

  it('string.quoted.single.block.binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single.block.binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single.block.binary',
      scopes: ['source.shss', 'string.quoted.single.block.binary'],
    });
  });

  it('string.quoted.rune', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.rune');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.rune',
      scopes: ['source.shss', 'string.quoted.rune'],
    });
  });

  it('string.quoted.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.raw',
      scopes: ['source.shss', 'string.quoted.raw'],
    });
  });

  it('string.quoted.other.multiline', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.multiline');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.multiline',
      scopes: ['source.shss', 'string.quoted.other.multiline'],
    });
  });

  it('string.quoted.other.lt-gt.include', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.lt-gt.include');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.lt-gt.include',
      scopes: ['source.shss', 'string.quoted.other.lt-gt.include'],
    });
  });

  it('string.quoted.other.lt-gt', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.lt-gt');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.lt-gt',
      scopes: ['source.shss', 'string.quoted.other.lt-gt'],
    });
  });

  it('string.quoted.other.literal', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.literal');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.literal',
      scopes: ['source.shss', 'string.quoted.other.literal'],
    });
  });

  it('string.quoted.other.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.interpolated');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.interpolated',
      scopes: ['source.shss', 'string.quoted.other.interpolated'],
    });
  });

  it('string.quoted.double.single-line.unicode', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.unicode');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.unicode',
      scopes: ['source.shss', 'string.quoted.double.single-line.unicode'],
    });
  });

  it('string.quoted.double.single-line.unicode-raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.unicode-raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.unicode-raw',
      scopes: ['source.shss', 'string.quoted.double.single-line.unicode-raw'],
    });
  });

  it('string.quoted.double.single-line.unicode-raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.unicode-raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.unicode-raw-regex',
      scopes: ['source.shss', 'string.quoted.double.single-line.unicode-raw-regex'],
    });
  });

  it('string.quoted.double.single-line.sql', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.sql');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.sql',
      scopes: ['source.shss', 'string.quoted.double.single-line.sql'],
    });
  });

  it('string.quoted.double.single-line.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.raw',
      scopes: ['source.shss', 'string.quoted.double.single-line.raw'],
    });
  });

  it('string.quoted.double.single-line.raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.raw-regex',
      scopes: ['source.shss', 'string.quoted.double.single-line.raw-regex'],
    });
  });

  it('string.quoted.double.single-line.raw-format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.raw-format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.raw-format',
      scopes: ['source.shss', 'string.quoted.double.single-line.raw-format'],
    });
  });

  it('string.quoted.double.single-line.raw-binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.raw-binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.raw-binary',
      scopes: ['source.shss', 'string.quoted.double.single-line.raw-binary'],
    });
  });

  it('string.quoted.double.single-line', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line',
      scopes: ['source.shss', 'string.quoted.double.single-line'],
    });
  });

  it('string.quoted.double.single-line.format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.format',
      scopes: ['source.shss', 'string.quoted.double.single-line.format'],
    });
  });

  it('string.quoted.double.single-line.binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.single-line.binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.single-line.binary',
      scopes: ['source.shss', 'string.quoted.double.single-line.binary'],
    });
  });

  it('string.quoted.double.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.raw',
      scopes: ['source.shss', 'string.quoted.double.raw'],
    });
  });

  it('string.quoted.double.literal', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.literal');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.literal',
      scopes: ['source.shss', 'string.quoted.double.literal'],
    });
  });

  it('string.quoted.double.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.interpolated');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.interpolated',
      scopes: ['source.shss', 'string.quoted.double.interpolated'],
    });
  });

  it('string.quoted.double.include', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.include');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.include',
      scopes: ['source.shss', 'string.quoted.double.include'],
    });
  });

  it('string.quoted.double.html', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.html');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.html',
      scopes: ['source.shss', 'string.quoted.double.html'],
    });
  });

  it('string.quoted.double.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.heredoc');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.heredoc',
      scopes: ['source.shss', 'string.quoted.double.heredoc'],
    });
  });

  it('string.quoted.double.doctype.identifiers-and-DTDs.html', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.doctype.identifiers-and-DTDs.html');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.doctype.identifiers-and-DTDs.html',
      scopes: ['source.shss', 'string.quoted.double.doctype.identifiers-and-DTDs.html'],
    });
  });

  it('string.quoted.double.block.unicode', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.unicode');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.unicode',
      scopes: ['source.shss', 'string.quoted.double.block.unicode'],
    });
  });

  it('string.quoted.double.block.unicode-raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.unicode-raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.unicode-raw',
      scopes: ['source.shss', 'string.quoted.double.block.unicode-raw'],
    });
  });

  it('string.quoted.double.block.unicode-raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.unicode-raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.unicode-raw-regex',
      scopes: ['source.shss', 'string.quoted.double.block.unicode-raw-regex'],
    });
  });

  it('string.quoted.double.block.raw', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.raw');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.raw',
      scopes: ['source.shss', 'string.quoted.double.block.raw'],
    });
  });

  it('string.quoted.double.block.raw-regex', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.raw-regex');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.raw-regex',
      scopes: ['source.shss', 'string.quoted.double.block.raw-regex'],
    });
  });

  it('string.quoted.double.block.raw-format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.raw-format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.raw-format',
      scopes: ['source.shss', 'string.quoted.double.block.raw-format'],
    });
  });

  it('string.quoted.double.block.raw-binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.raw-binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.raw-binary',
      scopes: ['source.shss', 'string.quoted.double.block.raw-binary'],
    });
  });

  it('string.quoted.double.block', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block',
      scopes: ['source.shss', 'string.quoted.double.block'],
    });
  });

  it('string.quoted.double.block.format', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.format');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.format',
      scopes: ['source.shss', 'string.quoted.double.block.format'],
    });
  });

  it('string.quoted.double.block.binary', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double.block.binary');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double.block.binary',
      scopes: ['source.shss', 'string.quoted.double.block.binary'],
    });
  });

  it('string.quoted.double', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.double');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.double',
      scopes: ['source.shss', 'string.quoted.double'],
    });
  });

  it('string.quoted.custom-double', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.custom-double');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.custom-double',
      scopes: ['source.shss', 'string.quoted.custom-double'],
    });
  });

  it('string.quoted.other.qq-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-ltgt');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.qq-ltgt',
      scopes: ['source.shss', 'string.quoted.other.qq-ltgt'],
    });
  });

  it('string.quoted.other.qq-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-paren');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.qq-paren',
      scopes: ['source.shss', 'string.quoted.other.qq-paren'],
    });
  });

  it('string.quoted.other.qq-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-brace');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.qq-brace',
      scopes: ['source.shss', 'string.quoted.other.qq-brace'],
    });
  });

  it('string.quoted.other.qq-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.qq-bracket');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.qq-bracket',
      scopes: ['source.shss', 'string.quoted.other.qq-bracket'],
    });
  });

  it('string.quoted.other.q-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-paren');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.q-paren',
      scopes: ['source.shss', 'string.quoted.other.q-paren'],
    });
  });

  it('string.quoted.other.q-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-brace');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.q-brace',
      scopes: ['source.shss', 'string.quoted.other.q-brace'],
    });
  });

  it('string.quoted.other.q-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-bracket');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.q-bracket',
      scopes: ['source.shss', 'string.quoted.other.q-bracket'],
    });
  });

  it('string.quoted.other.q-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other.q-ltgt');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other.q-ltgt',
      scopes: ['source.shss', 'string.quoted.other.q-ltgt'],
    });
  });

  it('string.quoted.other', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other',
      scopes: ['source.shss', 'string.quoted.other'],
    });
  });

  it('string.quoted.single', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.single');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.single',
      scopes: ['source.shss', 'string.quoted.single'],
    });
  });

  it('string.quoted.triple', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.triple');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.triple',
      scopes: ['source.shss', 'string.quoted.triple'],
    });
  });

  it('string.quoted.other', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted.other');
    expect(tokens[0]).toEqual({
      value: 'string.quoted.other',
      scopes: ['source.shss', 'string.quoted.other'],
    });
  });

  it('string.quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.quoted');
    expect(tokens[0]).toEqual({
      value: 'string.quoted',
      scopes: ['source.shss', 'string.quoted'],
    });
  });

  it('string.unquoted.html', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.html');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.html',
      scopes: ['source.shss', 'string.unquoted.html'],
    });
  });

  it('string.unquoted.attribute-value', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.attribute-value');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.attribute-value',
      scopes: ['source.shss', 'string.unquoted.attribute-value'],
    });
  });

  it('string.unquoted.heredoc.backtick', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.backtick');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.heredoc.backtick',
      scopes: ['source.shss', 'string.unquoted.heredoc.backtick'],
    });
  });

  it('string.unquoted.heredoc.quote', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.quote');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.heredoc.quote',
      scopes: ['source.shss', 'string.unquoted.heredoc.quote'],
    });
  });

  it('string.unquoted.heredoc.doublequote', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc.doublequote');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.heredoc.doublequote',
      scopes: ['source.shss', 'string.unquoted.heredoc.doublequote'],
    });
  });

  it('string.unquoted.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.heredoc');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.heredoc',
      scopes: ['source.shss', 'string.unquoted.heredoc'],
    });
  });

  it('string.unquoted.program-block', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.program-block');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.program-block',
      scopes: ['source.shss', 'string.unquoted.program-block'],
    });
  });

  it('string.unquoted.index', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted.index');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted.index',
      scopes: ['source.shss', 'string.unquoted.index'],
    });
  });

  it('string.unquoted', () => {
    const { tokens } = grammar.tokenizeLine('string.unquoted');
    expect(tokens[0]).toEqual({
      value: 'string.unquoted',
      scopes: ['source.shss', 'string.unquoted'],
    });
  });

  it('string.regexp.literal', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.literal');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.literal',
      scopes: ['source.shss', 'string.regexp.literal'],
    });
  });

  it('string.regexp.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.interpolated');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.interpolated',
      scopes: ['source.shss', 'string.regexp.interpolated'],
    });
  });

  it('string.regexp.group', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.group');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.group',
      scopes: ['source.shss', 'string.regexp.group'],
    });
  });

  it('string.regexp.replace.extended.simple_delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace.extended.simple_delimiter');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.replace.extended.simple_delimiter',
      scopes: ['source.shss', 'string.regexp.replace.extended.simple_delimiter'],
    });
  });

  it('string.regexp.format.nested_braces', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_braces');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format.nested_braces',
      scopes: ['source.shss', 'string.regexp.format.nested_braces'],
    });
  });

  it('string.regexp.format.nested_parens', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_parens');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format.nested_parens',
      scopes: ['source.shss', 'string.regexp.format.nested_parens'],
    });
  });

  it('string.regexp.format.single_quote', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.single_quote');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format.single_quote',
      scopes: ['source.shss', 'string.regexp.format.single_quote'],
    });
  });

  it('string.regexp.format.simple_delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.simple_delimiter');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format.simple_delimiter',
      scopes: ['source.shss', 'string.regexp.format.simple_delimiter'],
    });
  });

  it('string.regexp.format.nested_ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format.nested_ltgt');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format.nested_ltgt',
      scopes: ['source.shss', 'string.regexp.format.nested_ltgt'],
    });
  });

  it('string.regexp.format', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.format');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.format',
      scopes: ['source.shss', 'string.regexp.format'],
    });
  });

  it('string.regexp.nested_ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_ltgt');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.nested_ltgt',
      scopes: ['source.shss', 'string.regexp.nested_ltgt'],
    });
  });

  it('string.regexp.nested_parens', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_parens');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.nested_parens',
      scopes: ['source.shss', 'string.regexp.nested_parens'],
    });
  });

  it('string.regexp.nested_braces', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.nested_braces');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.nested_braces',
      scopes: ['source.shss', 'string.regexp.nested_braces'],
    });
  });

  it('string.regexp.find-m.simple-delimiter', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.simple-delimiter');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.find-m.simple-delimiter',
      scopes: ['source.shss', 'string.regexp.find-m.simple-delimiter'],
    });
  });

  it('string.regexp.find-m.single-quote', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find-m.single-quote');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.find-m.single-quote',
      scopes: ['source.shss', 'string.regexp.find-m.single-quote'],
    });
  });

  it('string.regexp.find', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.find');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.find',
      scopes: ['source.shss', 'string.regexp.find'],
    });
  });

  it('string.regexp.character-class', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.character-class');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.character-class',
      scopes: ['source.shss', 'string.regexp.character-class'],
    });
  });

  it('string.regexp.arbitrary-repitition', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.arbitrary-repitition');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.arbitrary-repitition',
      scopes: ['source.shss', 'string.regexp.arbitrary-repitition'],
    });
  });

  it('string.regexp.arbitrary-repetition', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.arbitrary-repetition');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.arbitrary-repetition',
      scopes: ['source.shss', 'string.regexp.arbitrary-repetition'],
    });
  });

  it('string.regexp.single-quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.single-quoted');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.single-quoted',
      scopes: ['source.shss', 'string.regexp.single-quoted'],
    });
  });

  it('string.regexp.double-quoted', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.double-quoted');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.double-quoted',
      scopes: ['source.shss', 'string.regexp.double-quoted'],
    });
  });

  it('string.regexp.replace', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp.replace');
    expect(tokens[0]).toEqual({
      value: 'string.regexp.replace',
      scopes: ['source.shss', 'string.regexp.replace'],
    });
  });

  it('string.regexp', () => {
    const { tokens } = grammar.tokenizeLine('string.regexp');
    expect(tokens[0]).toEqual({
      value: 'string.regexp',
      scopes: ['source.shss', 'string.regexp'],
    });
  });

  it('string.interpolated.qx-paren', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-paren');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated.qx-paren',
      scopes: ['source.shss', 'string.interpolated.qx-paren'],
    });
  });

  it('string.interpolated.qx-brace', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-brace');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated.qx-brace',
      scopes: ['source.shss', 'string.interpolated.qx-brace'],
    });
  });

  it('string.interpolated.qx-bracket', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-bracket');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated.qx-bracket',
      scopes: ['source.shss', 'string.interpolated.qx-bracket'],
    });
  });

  it('string.interpolated.qx-ltgt', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.qx-ltgt');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated.qx-ltgt',
      scopes: ['source.shss', 'string.interpolated.qx-ltgt'],
    });
  });

  it('string.interpolated.regexp', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated.regexp');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated.regexp',
      scopes: ['source.shss', 'string.interpolated.regexp'],
    });
  });

  it('string.interpolated', () => {
    const { tokens } = grammar.tokenizeLine('string.interpolated');
    expect(tokens[0]).toEqual({
      value: 'string.interpolated',
      scopes: ['source.shss', 'string.interpolated'],
    });
  });

  it('string.other', () => {
    const { tokens } = grammar.tokenizeLine('string.other');
    expect(tokens[0]).toEqual({
      value: 'string.other',
      scopes: ['source.shss', 'string.other'],
    });
  });

  it('string', () => {
    const { tokens } = grammar.tokenizeLine('string');
    expect(tokens[0]).toEqual({
      value: 'string',
      scopes: ['source.shss', 'string'],
    });
  });

  it('sourceembedded', () => {
    const { tokens } = grammar.tokenizeLine('sourceembedded');
    expect(tokens[0]).toEqual({
      value: 'sourceembedded',
      scopes: ['source.shss', 'sourceembedded'],
    });
  });

  it('sourceembedded.source', () => {
    const { tokens } = grammar.tokenizeLine('sourceembedded.source');
    expect(tokens[0]).toEqual({
      value: 'sourceembedded.source',
      scopes: ['source.shss', 'sourceembedded.source'],
    });
  });

  it('sourcestyle', () => {
    const { tokens } = grammar.tokenizeLine('sourcestyle');
    expect(tokens[0]).toEqual({
      value: 'sourcestyle',
      scopes: ['source.shss', 'sourcestyle'],
    });
  });

  it('support.constant.vendored.property-value', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.vendored.property-value');
    expect(tokens[0]).toEqual({
      value: 'support.constant.vendored.property-value',
      scopes: ['source.shss', 'support.constant.vendored.property-value'],
    });
  });

  it('support.constant.vendored', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.vendored');
    expect(tokens[0]).toEqual({
      value: 'support.constant.vendored',
      scopes: ['source.shss', 'support.constant.vendored'],
    });
  });

  it('support.constant.text-direction', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.text-direction');
    expect(tokens[0]).toEqual({
      value: 'support.constant.text-direction',
      scopes: ['source.shss', 'support.constant.text-direction'],
    });
  });

  it('support.constant.step-direction', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.step-direction');
    expect(tokens[0]).toEqual({
      value: 'support.constant.step-direction',
      scopes: ['source.shss', 'support.constant.step-direction'],
    });
  });

  it('support.constant.property-value.list-style-type', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.property-value.list-style-type');
    expect(tokens[0]).toEqual({
      value: 'support.constant.property-value.list-style-type',
      scopes: ['source.shss', 'support.constant.property-value.list-style-type'],
    });
  });

  it('support.constant.property-value', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.property-value');
    expect(tokens[0]).toEqual({
      value: 'support.constant.property-value',
      scopes: ['source.shss', 'support.constant.property-value'],
    });
  });

  it('support.constant.parity', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.parity');
    expect(tokens[0]).toEqual({
      value: 'support.constant.parity',
      scopes: ['source.shss', 'support.constant.parity'],
    });
  });

  it('support.constant.media', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.media');
    expect(tokens[0]).toEqual({
      value: 'support.constant.media',
      scopes: ['source.shss', 'support.constant.media'],
    });
  });

  it('support.constant.mac-classic', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.mac-classic');
    expect(tokens[0]).toEqual({
      value: 'support.constant.mac-classic',
      scopes: ['source.shss', 'support.constant.mac-classic'],
    });
  });

  it('support.constant.language-range', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.language-range');
    expect(tokens[0]).toEqual({
      value: 'support.constant.language-range',
      scopes: ['source.shss', 'support.constant.language-range'],
    });
  });

  it('support.constant.font-name', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.font-name');
    expect(tokens[0]).toEqual({
      value: 'support.constant.font-name',
      scopes: ['source.shss', 'support.constant.font-name'],
    });
  });

  it('support.constant.color.w3c-standard-color-name', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.color.w3c-standard-color-name');
    expect(tokens[0]).toEqual({
      value: 'support.constant.color.w3c-standard-color-name',
      scopes: ['source.shss', 'support.constant.color.w3c-standard-color-name'],
    });
  });

  it('support.constant.color.w3c-extended-color-name', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.color.w3c-extended-color-name');
    expect(tokens[0]).toEqual({
      value: 'support.constant.color.w3c-extended-color-name',
      scopes: ['source.shss', 'support.constant.color.w3c-extended-color-name'],
    });
  });

  it('support.constant.color.current', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.color.current');
    expect(tokens[0]).toEqual({
      value: 'support.constant.color.current',
      scopes: ['source.shss', 'support.constant.color.current'],
    });
  });

  it('support.constant.color', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.color');
    expect(tokens[0]).toEqual({
      value: 'support.constant.color',
      scopes: ['source.shss', 'support.constant.color'],
    });
  });

  it('support.constant.ext', () => {
    const { tokens } = grammar.tokenizeLine('support.constant.ext');
    expect(tokens[0]).toEqual({
      value: 'support.constant.ext',
      scopes: ['source.shss', 'support.constant.ext'],
    });
  });

  it('support.constant', () => {
    const { tokens } = grammar.tokenizeLine('support.constant');
    expect(tokens[0]).toEqual({
      value: 'support.constant',
      scopes: ['source.shss', 'support.constant'],
    });
  });

  it('support.function.variable.quoted.single.heredoc', () => {
    const { tokens } = grammar.tokenizeLine('support.function.variable.quoted.single.heredoc');
    expect(tokens[0]).toEqual({
      value: 'support.function.variable.quoted.single.heredoc',
      scopes: ['source.shss', 'support.function.variable.quoted.single.heredoc'],
    });
  });

  it('support.function.variable.quoted.single', () => {
    const { tokens } = grammar.tokenizeLine('support.function.variable.quoted.single');
    expect(tokens[0]).toEqual({
      value: 'support.function.variable.quoted.single',
      scopes: ['source.shss', 'support.function.variable.quoted.single'],
    });
  });

  it('support.function.variable.quoted', () => {
    const { tokens } = grammar.tokenizeLine('support.function.variable.quoted');
    expect(tokens[0]).toEqual({
      value: 'support.function.variable.quoted',
      scopes: ['source.shss', 'support.function.variable.quoted'],
    });
  });

  it('support.function.variable', () => {
    const { tokens } = grammar.tokenizeLine('support.function.variable');
    expect(tokens[0]).toEqual({
      value: 'support.function.variable',
      scopes: ['source.shss', 'support.function.variable'],
    });
  });

  it('support.function.url', () => {
    const { tokens } = grammar.tokenizeLine('support.function.url');
    expect(tokens[0]).toEqual({
      value: 'support.function.url',
      scopes: ['source.shss', 'support.function.url'],
    });
  });

  it('support.function.transform', () => {
    const { tokens } = grammar.tokenizeLine('support.function.transform');
    expect(tokens[0]).toEqual({
      value: 'support.function.transform',
      scopes: ['source.shss', 'support.function.transform'],
    });
  });

  it('support.function.timing-function', () => {
    const { tokens } = grammar.tokenizeLine('support.function.timing-function');
    expect(tokens[0]).toEqual({
      value: 'support.function.timing-function',
      scopes: ['source.shss', 'support.function.timing-function'],
    });
  });

  it('support.function.shape', () => {
    const { tokens } = grammar.tokenizeLine('support.function.shape');
    expect(tokens[0]).toEqual({
      value: 'support.function.shape',
      scopes: ['source.shss', 'support.function.shape'],
    });
  });

  it('support.function.prelude', () => {
    const { tokens } = grammar.tokenizeLine('support.function.prelude');
    expect(tokens[0]).toEqual({
      value: 'support.function.prelude',
      scopes: ['source.shss', 'support.function.prelude'],
    });
  });

  it('support.function.misc', () => {
    const { tokens } = grammar.tokenizeLine('support.function.misc');
    expect(tokens[0]).toEqual({
      value: 'support.function.misc',
      scopes: ['source.shss', 'support.function.misc'],
    });
  });

  it('support.function.macro', () => {
    const { tokens } = grammar.tokenizeLine('support.function.macro');
    expect(tokens[0]).toEqual({
      value: 'support.function.macro',
      scopes: ['source.shss', 'support.function.macro'],
    });
  });

  it('support.function.library', () => {
    const { tokens } = grammar.tokenizeLine('support.function.library');
    expect(tokens[0]).toEqual({
      value: 'support.function.library',
      scopes: ['source.shss', 'support.function.library'],
    });
  });

  it('support.function.kernel', () => {
    const { tokens } = grammar.tokenizeLine('support.function.kernel');
    expect(tokens[0]).toEqual({
      value: 'support.function.kernel',
      scopes: ['source.shss', 'support.function.kernel'],
    });
  });

  it('support.function.gradient', () => {
    const { tokens } = grammar.tokenizeLine('support.function.gradient');
    expect(tokens[0]).toEqual({
      value: 'support.function.gradient',
      scopes: ['source.shss', 'support.function.gradient'],
    });
  });

  it('support.function.document-rule', () => {
    const { tokens } = grammar.tokenizeLine('support.function.document-rule');
    expect(tokens[0]).toEqual({
      value: 'support.function.document-rule',
      scopes: ['source.shss', 'support.function.document-rule'],
    });
  });

  it('support.function.calc', () => {
    const { tokens } = grammar.tokenizeLine('support.function.calc');
    expect(tokens[0]).toEqual({
      value: 'support.function.calc',
      scopes: ['source.shss', 'support.function.calc'],
    });
  });

  it('support.function.builtin', () => {
    const { tokens } = grammar.tokenizeLine('support.function.builtin');
    expect(tokens[0]).toEqual({
      value: 'support.function.builtin',
      scopes: ['source.shss', 'support.function.builtin'],
    });
  });

  it('support.function.built-in.smarty', () => {
    const { tokens } = grammar.tokenizeLine('support.function.built-in.smarty');
    expect(tokens[0]).toEqual({
      value: 'support.function.built-in.smarty',
      scopes: ['source.shss', 'support.function.built-in.smarty'],
    });
  });

  it('support.function.any-method', () => {
    const { tokens } = grammar.tokenizeLine('support.function.any-method');
    expect(tokens[0]).toEqual({
      value: 'support.function.any-method',
      scopes: ['source.shss', 'support.function.any-method'],
    });
  });

  it('support.function.C99', () => {
    const { tokens } = grammar.tokenizeLine('support.function.C99');
    expect(tokens[0]).toEqual({
      value: 'support.function.C99',
      scopes: ['source.shss', 'support.function.C99'],
    });
  });

  it('support.function.magic', () => {
    const { tokens } = grammar.tokenizeLine('support.function.magic');
    expect(tokens[0]).toEqual({
      value: 'support.function.magic',
      scopes: ['source.shss', 'support.function.magic'],
    });
  });

  it('support.function', () => {
    const { tokens } = grammar.tokenizeLine('support.function');
    expect(tokens[0]).toEqual({
      value: 'support.function',
      scopes: ['source.shss', 'support.function'],
    });
  });

  it('support.operator.prelude', () => {
    const { tokens } = grammar.tokenizeLine('support.operator.prelude');
    expect(tokens[0]).toEqual({
      value: 'support.operator.prelude',
      scopes: ['source.shss', 'support.operator.prelude'],
    });
  });

  it('support.operator', () => {
    const { tokens } = grammar.tokenizeLine('support.operator');
    expect(tokens[0]).toEqual({
      value: 'support.operator',
      scopes: ['source.shss', 'support.operator'],
    });
  });

  it('support.module', () => {
    const { tokens } = grammar.tokenizeLine('support.module');
    expect(tokens[0]).toEqual({
      value: 'support.module',
      scopes: ['source.shss', 'support.module'],
    });
  });

  it('support.tag.prelude', () => {
    const { tokens } = grammar.tokenizeLine('support.tag.prelude');
    expect(tokens[0]).toEqual({
      value: 'support.tag.prelude',
      scopes: ['source.shss', 'support.tag.prelude'],
    });
  });

  it('support.tag', () => {
    const { tokens } = grammar.tokenizeLine('support.tag');
    expect(tokens[0]).toEqual({
      value: 'support.tag',
      scopes: ['source.shss', 'support.tag'],
    });
  });

  it('support.type.vendored.property-name.media', () => {
    const { tokens } = grammar.tokenizeLine('support.type.vendored.property-name.media');
    expect(tokens[0]).toEqual({
      value: 'support.type.vendored.property-name.media',
      scopes: ['source.shss', 'support.type.vendored.property-name.media'],
    });
  });

  it('support.type.vendored.property-name', () => {
    const { tokens } = grammar.tokenizeLine('support.type.vendored.property-name');
    expect(tokens[0]).toEqual({
      value: 'support.type.vendored.property-name',
      scopes: ['source.shss', 'support.type.vendored.property-name'],
    });
  });

  it('support.type.vendored', () => {
    const { tokens } = grammar.tokenizeLine('support.type.vendored');
    expect(tokens[0]).toEqual({
      value: 'support.type.vendored',
      scopes: ['source.shss', 'support.type.vendored'],
    });
  });

  it('support.type.sys-types', () => {
    const { tokens } = grammar.tokenizeLine('support.type.sys-types');
    expect(tokens[0]).toEqual({
      value: 'support.type.sys-types',
      scopes: ['source.shss', 'support.type.sys-types'],
    });
  });

  it('support.type.stdint', () => {
    const { tokens } = grammar.tokenizeLine('support.type.stdint');
    expect(tokens[0]).toEqual({
      value: 'support.type.stdint',
      scopes: ['source.shss', 'support.type.stdint'],
    });
  });

  it('support.type.pthread', () => {
    const { tokens } = grammar.tokenizeLine('support.type.pthread');
    expect(tokens[0]).toEqual({
      value: 'support.type.pthread',
      scopes: ['source.shss', 'support.type.pthread'],
    });
  });

  it('support.type.property-name.media', () => {
    const { tokens } = grammar.tokenizeLine('support.type.property-name.media');
    expect(tokens[0]).toEqual({
      value: 'support.type.property-name.media',
      scopes: ['source.shss', 'support.type.property-name.media'],
    });
  });

  it('support.type.property-name', () => {
    const { tokens } = grammar.tokenizeLine('support.type.property-name');
    expect(tokens[0]).toEqual({
      value: 'support.type.property-name',
      scopes: ['source.shss', 'support.type.property-name'],
    });
  });

  it('support.type.posix-reserved', () => {
    const { tokens } = grammar.tokenizeLine('support.type.posix-reserved');
    expect(tokens[0]).toEqual({
      value: 'support.type.posix-reserved',
      scopes: ['source.shss', 'support.type.posix-reserved'],
    });
  });

  it('support.type.mac-classic', () => {
    const { tokens } = grammar.tokenizeLine('support.type.mac-classic');
    expect(tokens[0]).toEqual({
      value: 'support.type.mac-classic',
      scopes: ['source.shss', 'support.type.mac-classic'],
    });
  });

  it('support.type.exception', () => {
    const { tokens } = grammar.tokenizeLine('support.type.exception');
    expect(tokens[0]).toEqual({
      value: 'support.type.exception',
      scopes: ['source.shss', 'support.type.exception'],
    });
  });

  it('support.type', () => {
    const { tokens } = grammar.tokenizeLine('support.type');
    expect(tokens[0]).toEqual({
      value: 'support.type',
      scopes: ['source.shss', 'support.type'],
    });
  });

  it('support.class.prelude', () => {
    const { tokens } = grammar.tokenizeLine('support.class.prelude');
    expect(tokens[0]).toEqual({
      value: 'support.class.prelude',
      scopes: ['source.shss', 'support.class.prelude'],
    });
  });

  it('support.class', () => {
    const { tokens } = grammar.tokenizeLine('support.class');
    expect(tokens[0]).toEqual({
      value: 'support.class',
      scopes: ['source.shss', 'support.class'],
    });
  });

  it('support.variable.magic', () => {
    const { tokens } = grammar.tokenizeLine('support.variable.magic');
    expect(tokens[0]).toEqual({
      value: 'support.variable.magic',
      scopes: ['source.shss', 'support.variable.magic'],
    });
  });

  it('support.variable', () => {
    const { tokens } = grammar.tokenizeLine('support.variable');
    expect(tokens[0]).toEqual({
      value: 'support.variable',
      scopes: ['source.shss', 'support.variable'],
    });
  });

  it('support.struct', () => {
    const { tokens } = grammar.tokenizeLine('support.struct');
    expect(tokens[0]).toEqual({
      value: 'support.struct',
      scopes: ['source.shss', 'support.struct'],
    });
  });

  it('support.other.module', () => {
    const { tokens } = grammar.tokenizeLine('support.other.module');
    expect(tokens[0]).toEqual({
      value: 'support.other.module',
      scopes: ['source.shss', 'support.other.module'],
    });
  });

  it('support.other.namespace', () => {
    const { tokens } = grammar.tokenizeLine('support.other.namespace');
    expect(tokens[0]).toEqual({
      value: 'support.other.namespace',
      scopes: ['source.shss', 'support.other.namespace'],
    });
  });

  it('support.other', () => {
    const { tokens } = grammar.tokenizeLine('support.other');
    expect(tokens[0]).toEqual({
      value: 'support.other',
      scopes: ['source.shss', 'support.other'],
    });
  });

  it('support', () => {
    const { tokens } = grammar.tokenizeLine('support');
    expect(tokens[0]).toEqual({
      value: 'support',
      scopes: ['source.shss', 'support'],
    });
  });

  it('text.html.embedded', () => {
    const { tokens } = grammar.tokenizeLine('text.html.embedded');
    expect(tokens[0]).toEqual({
      value: 'text.html.embedded',
      scopes: ['source.shss', 'text.html.embedded'],
    });
  });

  it('text.html.basic', () => {
    const { tokens } = grammar.tokenizeLine('text.html.basic');
    expect(tokens[0]).toEqual({
      value: 'text.html.basic',
      scopes: ['source.shss', 'text.html.basic'],
    });
  });

  it('text.html.markdown', () => {
    const { tokens } = grammar.tokenizeLine('text.html.markdown');
    expect(tokens[0]).toEqual({
      value: 'text.html.markdown',
      scopes: ['source.shss', 'text.html.markdown'],
    });
  });

  it('text.html', () => {
    const { tokens } = grammar.tokenizeLine('text.html');
    expect(tokens[0]).toEqual({
      value: 'text.html',
      scopes: ['source.shss', 'text.html'],
    });
  });

  it('text.xml', () => {
    const { tokens } = grammar.tokenizeLine('text.xml');
    expect(tokens[0]).toEqual({
      value: 'text.xml',
      scopes: ['source.shss', 'text.xml'],
    });
  });

  it('text.plain', () => {
    const { tokens } = grammar.tokenizeLine('text.plain');
    expect(tokens[0]).toEqual({
      value: 'text.plain',
      scopes: ['source.shss', 'text.plain'],
    });
  });

  it('text.embedded.html', () => {
    const { tokens } = grammar.tokenizeLine('text.embedded.html');
    expect(tokens[0]).toEqual({
      value: 'text.embedded.html',
      scopes: ['source.shss', 'text.embedded.html'],
    });
  });

  it('text.embedded', () => {
    const { tokens } = grammar.tokenizeLine('text.embedded');
    expect(tokens[0]).toEqual({
      value: 'text.embedded',
      scopes: ['source.shss', 'text.embedded'],
    });
  });

  it('text', () => {
    const { tokens } = grammar.tokenizeLine('text');
    expect(tokens[0]).toEqual({
      value: 'text',
      scopes: ['source.shss', 'text'],
    });
  });

  it('unused.comment', () => {
    const { tokens } = grammar.tokenizeLine('unused.comment');
    expect(tokens[0]).toEqual({
      value: 'unused.comment',
      scopes: ['source.shss', 'unused.comment'],
    });
  });

  it('unused', () => {
    const { tokens } = grammar.tokenizeLine('unused');
    expect(tokens[0]).toEqual({
      value: 'unused',
      scopes: ['source.shss', 'unused'],
    });
  });

  it('variable.annotation', () => {
    const { tokens } = grammar.tokenizeLine('variable.annotation');
    expect(tokens[0]).toEqual({
      value: 'variable.annotation',
      scopes: ['source.shss', 'variable.annotation'],
    });
  });

  it('variable.function', () => {
    const { tokens } = grammar.tokenizeLine('variable.function');
    expect(tokens[0]).toEqual({
      value: 'variable.function',
      scopes: ['source.shss', 'variable.function'],
    });
  });

  it('variable.other.regexp.last-paren-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.last-paren-match');
    expect(tokens[0]).toEqual({
      value: 'variable.other.regexp.last-paren-match',
      scopes: ['source.shss', 'variable.other.regexp.last-paren-match'],
    });
  });

  it('variable.other.regexp.post-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.post-match');
    expect(tokens[0]).toEqual({
      value: 'variable.other.regexp.post-match',
      scopes: ['source.shss', 'variable.other.regexp.post-match'],
    });
  });

  it('variable.other.regexp.pre-match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.pre-match');
    expect(tokens[0]).toEqual({
      value: 'variable.other.regexp.pre-match',
      scopes: ['source.shss', 'variable.other.regexp.pre-match'],
    });
  });

  it('variable.other.regexp.match', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.regexp.match');
    expect(tokens[0]).toEqual({
      value: 'variable.other.regexp.match',
      scopes: ['source.shss', 'variable.other.regexp.match'],
    });
  });

  it('variable.other.readwrite.static.mac-classic', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.static.mac-classic');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.static.mac-classic',
      scopes: ['source.shss', 'variable.other.readwrite.static.mac-classic'],
    });
  });

  it('variable.other.readwrite.static', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.static');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.static',
      scopes: ['source.shss', 'variable.other.readwrite.static'],
    });
  });

  it('variable.other.readwrite.module', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.module');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.module',
      scopes: ['source.shss', 'variable.other.readwrite.module'],
    });
  });

  it('variable.other.readwrite.member', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.member');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.member',
      scopes: ['source.shss', 'variable.other.readwrite.member'],
    });
  });

  it('variable.other.readwrite.instance', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.instance');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.instance',
      scopes: ['source.shss', 'variable.other.readwrite.instance'],
    });
  });

  it('variable.other.readwrite.global.pre-defined', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.global.pre-defined');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.global.pre-defined',
      scopes: ['source.shss', 'variable.other.readwrite.global.pre-defined'],
    });
  });

  it('variable.other.readwrite.global.mac-classic', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.global.mac-classic');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.global.mac-classic',
      scopes: ['source.shss', 'variable.other.readwrite.global.mac-classic'],
    });
  });

  it('variable.other.readwrite.global', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.global');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.global',
      scopes: ['source.shss', 'variable.other.readwrite.global'],
    });
  });

  it('variable.other.readwrite.class', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.class');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.class',
      scopes: ['source.shss', 'variable.other.readwrite.class'],
    });
  });

  it('variable.other.readwrite.list-separator', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite.list-separator');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite.list-separator',
      scopes: ['source.shss', 'variable.other.readwrite.list-separator'],
    });
  });

  it('variable.other.readwrite', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.readwrite');
    expect(tokens[0]).toEqual({
      value: 'variable.other.readwrite',
      scopes: ['source.shss', 'variable.other.readwrite'],
    });
  });

  it('variable.other.subpattern', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.subpattern');
    expect(tokens[0]).toEqual({
      value: 'variable.other.subpattern',
      scopes: ['source.shss', 'variable.other.subpattern'],
    });
  });

  it('variable.other.predefined', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.predefined');
    expect(tokens[0]).toEqual({
      value: 'variable.other.predefined',
      scopes: ['source.shss', 'variable.other.predefined'],
    });
  });

  it('variable.other.index', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.index');
    expect(tokens[0]).toEqual({
      value: 'variable.other.index',
      scopes: ['source.shss', 'variable.other.index'],
    });
  });

  it('variable.other.global.safer', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global.safer');
    expect(tokens[0]).toEqual({
      value: 'variable.other.global.safer',
      scopes: ['source.shss', 'variable.other.global.safer'],
    });
  });

  it('variable.other.global', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.global');
    expect(tokens[0]).toEqual({
      value: 'variable.other.global',
      scopes: ['source.shss', 'variable.other.global'],
    });
  });

  it('variable.other.member', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.member');
    expect(tokens[0]).toEqual({
      value: 'variable.other.member',
      scopes: ['source.shss', 'variable.other.member'],
    });
  });

  it('variable.other.property', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.property');
    expect(tokens[0]).toEqual({
      value: 'variable.other.property',
      scopes: ['source.shss', 'variable.other.property'],
    });
  });

  it('variable.other.positional', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.positional');
    expect(tokens[0]).toEqual({
      value: 'variable.other.positional',
      scopes: ['source.shss', 'variable.other.positional'],
    });
  });

  it('variable.other.object.property', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.object.property');
    expect(tokens[0]).toEqual({
      value: 'variable.other.object.property',
      scopes: ['source.shss', 'variable.other.object.property'],
    });
  });

  it('variable.other.object', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.object');
    expect(tokens[0]).toEqual({
      value: 'variable.other.object',
      scopes: ['source.shss', 'variable.other.object'],
    });
  });

  it('variable.other.member', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.member');
    expect(tokens[0]).toEqual({
      value: 'variable.other.member',
      scopes: ['source.shss', 'variable.other.member'],
    });
  });

  it('variable.other.generic-type', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.generic-type');
    expect(tokens[0]).toEqual({
      value: 'variable.other.generic-type',
      scopes: ['source.shss', 'variable.other.generic-type'],
    });
  });

  it('variable.other.field', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.field');
    expect(tokens[0]).toEqual({
      value: 'variable.other.field',
      scopes: ['source.shss', 'variable.other.field'],
    });
  });

  it('variable.other.definition', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.definition');
    expect(tokens[0]).toEqual({
      value: 'variable.other.definition',
      scopes: ['source.shss', 'variable.other.definition'],
    });
  });

  it('variable.other.declaration', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.declaration');
    expect(tokens[0]).toEqual({
      value: 'variable.other.declaration',
      scopes: ['source.shss', 'variable.other.declaration'],
    });
  });

  it('variable.other.constant', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.constant');
    expect(tokens[0]).toEqual({
      value: 'variable.other.constant',
      scopes: ['source.shss', 'variable.other.constant'],
    });
  });

  it('variable.other.block', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.block');
    expect(tokens[0]).toEqual({
      value: 'variable.other.block',
      scopes: ['source.shss', 'variable.other.block'],
    });
  });

  it('variable.other.assignment', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.assignment');
    expect(tokens[0]).toEqual({
      value: 'variable.other.assignment',
      scopes: ['source.shss', 'variable.other.assignment'],
    });
  });

  it('variable.other.anonymous', () => {
    const { tokens } = grammar.tokenizeLine('variable.other.anonymous');
    expect(tokens[0]).toEqual({
      value: 'variable.other.anonymous',
      scopes: ['source.shss', 'variable.other.anonymous'],
    });
  });

  it('variable.other', () => {
    const { tokens } = grammar.tokenizeLine('variable.other');
    expect(tokens[0]).toEqual({
      value: 'variable.other',
      scopes: ['source.shss', 'variable.other'],
    });
  });

  it('variable.font-feature', () => {
    const { tokens } = grammar.tokenizeLine('variable.font-feature');
    expect(tokens[0]).toEqual({
      value: 'variable.font-feature',
      scopes: ['source.shss', 'variable.font-feature'],
    });
  });

  it('variable.language.wildcard', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.wildcard');
    expect(tokens[0]).toEqual({
      value: 'variable.language.wildcard',
      scopes: ['source.shss', 'variable.language.wildcard'],
    });
  });

  it('variable.language.omitted.field', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.omitted.field');
    expect(tokens[0]).toEqual({
      value: 'variable.language.omitted.field',
      scopes: ['source.shss', 'variable.language.omitted.field'],
    });
  });

  it('variable.language.omitted', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.omitted');
    expect(tokens[0]).toEqual({
      value: 'variable.language.omitted',
      scopes: ['source.shss', 'variable.language.omitted'],
    });
  });

  it('variable.language.namespace', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.namespace');
    expect(tokens[0]).toEqual({
      value: 'variable.language.namespace',
      scopes: ['source.shss', 'variable.language.namespace'],
    });
  });

  it('variable.language.this', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.this');
    expect(tokens[0]).toEqual({
      value: 'variable.language.this',
      scopes: ['source.shss', 'variable.language.this'],
    });
  });

  it('variable.language.super', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.super');
    expect(tokens[0]).toEqual({
      value: 'variable.language.super',
      scopes: ['source.shss', 'variable.language.super'],
    });
  });

  it('variable.language.self', () => {
    const { tokens } = grammar.tokenizeLine('variable.language.self');
    expect(tokens[0]).toEqual({
      value: 'variable.language.self',
      scopes: ['source.shss', 'variable.language.self'],
    });
  });

  it('variable.language', () => {
    const { tokens } = grammar.tokenizeLine('variable.language');
    expect(tokens[0]).toEqual({
      value: 'variable.language',
      scopes: ['source.shss', 'variable.language'],
    });
  });

  it('variable.parameter.function', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.function');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.function',
      scopes: ['source.shss', 'variable.parameter.function'],
    });
  });

  it('variable.parameter.url', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.url');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.url',
      scopes: ['source.shss', 'variable.parameter.url'],
    });
  });

  it('variable.parameter.style-name', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.style-name');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.style-name',
      scopes: ['source.shss', 'variable.parameter.style-name'],
    });
  });

  it('variable.parameter.preprocessor', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.preprocessor');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.preprocessor',
      scopes: ['source.shss', 'variable.parameter.preprocessor'],
    });
  });

  it('variable.parameter.misc', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.misc');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.misc',
      scopes: ['source.shss', 'variable.parameter.misc'],
    });
  });

  it('variable.parameter.keyframe-list', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.keyframe-list');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.keyframe-list',
      scopes: ['source.shss', 'variable.parameter.keyframe-list'],
    });
  });

  it('variable.parameter.document-rule', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter.document-rule');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter.document-rule',
      scopes: ['source.shss', 'variable.parameter.document-rule'],
    });
  });

  it('variable.parameter', () => {
    const { tokens } = grammar.tokenizeLine('variable.parameter');
    expect(tokens[0]).toEqual({
      value: 'variable.parameter',
      scopes: ['source.shss', 'variable.parameter'],
    });
  });

  it('variable.argument', () => {
    const { tokens } = grammar.tokenizeLine('variable.argument');
    expect(tokens[0]).toEqual({
      value: 'variable.argument',
      scopes: ['source.shss', 'variable.argument'],
    });
  });

  it('variable', () => {
    const { tokens } = grammar.tokenizeLine('variable');
    expect(tokens[0]).toEqual({
      value: 'variable',
      scopes: ['source.shss', 'variable'],
    });
  });

  it('wildcard.comment', () => {
    const { tokens } = grammar.tokenizeLine('wildcard.comment');
    expect(tokens[0]).toEqual({
      value: 'wildcard.comment',
      scopes: ['source.shss', 'wildcard.comment'],
    });
  });

  it('wildcard', () => {
    const { tokens } = grammar.tokenizeLine('wildcard');
    expect(tokens[0]).toEqual({
      value: 'wildcard',
      scopes: ['source.shss', 'wildcard'],
    });
  });
});
