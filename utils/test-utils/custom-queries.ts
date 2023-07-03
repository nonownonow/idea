import type { Matcher, MatcherOptions } from "@testing-library/react";
import { buildQueries, getAllByText } from "@testing-library/react";

const queryAllByTextContent = (
  container: HTMLElement,
  text: Matcher,
  options?: MatcherOptions
) => {
  return getAllByText(
    container,
    (content, element) => {
      const hasText = (element: Element | null) =>
        element?.textContent === text;
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child)
      );
      return elementHasText && childrenDontHaveText;
    },
    options
  );
};

function getMultipleError(c: Element | null, value: string) {
  return `Found multiple elements with the text content of: ${value}`;
}

function getMissingError(c: Element | null, value: string) {
  return `Unable to find an elements with the text content of: ${value}`;
}
const [
  queryByTextContent,
  getAllByTextContent,
  getByTextContent,
  FindAllByTextContent,
  FindByTextContent,
] = buildQueries(queryAllByTextContent, getMultipleError, getMissingError);

export {
  queryByTextContent,
  getAllByTextContent,
  getByTextContent,
  FindAllByTextContent,
  FindByTextContent,
};
