type JsDocTag = {
  tag: string;
  type: string | null;
  name?: string | null;
  description: string | null;
};

type JsDocJSON = {
  description: string | null;
  tags: JsDocTag[];
};

/**
 * Converts a JSDoc comment to a JSON representation.
 * @param input - The input string containing the JSDoc comment.
 * @returns The JSON representation of the JSDoc comment.
 */
export default function jsDoc2JSON(input: string): JsDocJSON {
  const jsDocJSON: JsDocJSON = { description: null, tags: [] };

  const jsDocComment = extractJsDocComment(input);
  if (!jsDocComment) return jsDocJSON;

  jsDocJSON.description = extractDescription(jsDocComment);
  jsDocJSON.tags = extractTags(jsDocComment);

  return jsDocJSON;
}

/**
 * Extracts the JSDoc comment from the input string.
 * @param input - The input string containing the JSDoc comment.
 * @returns The JSDoc comment or null if not found.
 */
function extractJsDocComment(input: string): string | null {
  const match = input.match(/\/\*\*.*\*\//s);
  return match ? match[0] : null;
}

/**
 * Extracts the description from the JSDoc comment.
 * @param comment - The JSDoc comment.
 * @returns The description text or null if not found.
 */
function extractDescription(comment: string): string | null {
  const match = comment.match(/^[^@]*/s);
  if (!match) return null;

  return match[0]
    .split("*")
    .map((el) => el.trim())
    .filter((el) => el !== "" && el !== "/")
    .join(" ");
}

/**
 * Extracts the tags from the JSDoc comment.
 * @param comment - The JSDoc comment.
 * @returns An array of parsed tags.
 */
function extractTags(comment: string): JsDocTag[] {
  const tags: JsDocTag[] = [];
  const rawTags = getRawTags(comment);
  rawTags.forEach((el) => {
    if (el.startsWith("@param ")) {
      const tag = parseParamTag(el);
      if (tag) tags.push(tag);
    } else if (el.startsWith("@return ") || el.startsWith("@returns ")) {
      const tag = parseReturnTag(el);
      if (tag) tags.push(tag);
    } else {
      console.warn(`Unknown tag: ${el}`);
    }
  });
  return tags;
}

/**
 * Extracts the raw tags from the JSDoc comment.
 * @param comment - The JSDoc comment.
 * @returns An array of raw tag strings.
 */
function getRawTags(comment: string): string[] {
  const match = comment.match(/@.*(?=\@)/s);
  if (!match) return [];

  return match[0]
    .split("*")
    .map((el) => el.trim())
    .filter((el) => el !== "");
}

/**
 * Parses a @param tag into a JsDocTag object.
 * @param tag - The @param tag string.
 * @returns The parsed JsDocTag object or null if the tag is invalid.
 */
function parseParamTag(tag: string): JsDocTag | null {
  let components = tag.match(
    /^\@(param)(?: )\{(.*)\}(?: )(?:(?=\[)(?:\[(.*?)\])|(?!\[)(?:(.*?)))(?:(?= )(?: )(?:\- )?(.*)|(?! )$)/i,
  ) as RegExpMatchArray | null;

  if (components) {
    return {
      tag: "param",
      type: components[2] || null,
      name: components[3] || null,
      description: components[4] || components[5] || null,
    };
  }

  components = tag.match(
    /^\@(param) (?:(?=\[)(?:\[(.*)\]$)|(?!\[)(?:([^\s]+)$))/i,
  ) as RegExpMatchArray | null;

  if (components) {
    return {
      tag: "param",
      type: components[2] || null,
      name: components[3] || null,
      description: null,
    };
  }

  console.warn(`Invalid @param tag: ${tag}`);
  return null;
}

/**
 * Parses a @return or @returns tag into a JsDocTag object.
 * @param tag - The @return or @returns tag string.
 * @returns The parsed JsDocTag object or null if the tag is invalid.
 */
function parseReturnTag(tag: string): JsDocTag | null {
  const components = tag.match(
    /^\@(returns?)(?: )\{(.*)\}(?:(?= )(?: )(?:\- )?(.*)|(?! )$)/i,
  ) as RegExpMatchArray | null;

  if (components) {
    return {
      tag: "return",
      type: components[2] || null,
      description: components[3] || null,
    };
  }

  console.warn(`Invalid @return tag: ${tag}`);
  return null;
}
