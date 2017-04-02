import { ok } from 'assert';
import StripWhitespaceLoader from '../src/index';

{
  const code = `const text = "  x   ";  `;
  const expected = `const text = " x ";  `;

  const result = StripWhitespaceLoader(code);

  ok(result === expected, `result does not equal expected.  Result: ${result}`);
}

{
  const code = `const text = " x ";  `;
  const expected = `const text = " x ";  `;

  const result = StripWhitespaceLoader(code);

  ok(result === expected, `result does not equal expected.  Result: ${result}`);
}

{
  const code: string = null as any;
  const expected = null;

  const result = StripWhitespaceLoader(code);

  ok(result === expected, `result does not equal expected.  Result: ${result}`);
}
