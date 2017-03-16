import StripWhitespace from 'strip-whitespace';

const stripWhitespace = new StripWhitespace();

export default function (content: string) {
  if (content) {
    const result = stripWhitespace.strip(content);
    if (result && result.replacements && result.replacements.length > 0) {
      return result.code;
    }
  }
  return content;
}
