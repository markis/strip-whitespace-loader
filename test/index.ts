import { ok } from 'assert';
import StripWhitespaceLoader from '../src/index';

{
  const code = `const text = "  x   ";  `;
  const expected = `const text = " x ";  `;

  const result = StripWhitespaceLoader(code);

  ok(result === expected, `result does not equal expected.  Result: ${result}`);
}
