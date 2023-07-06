import type { RenderOptions } from "@testing-library/react";
import { queries, render, within } from "@testing-library/react";
import * as customQueries from "./custom-queries";
import type { ReactElement } from "react";

const allQueries = {
  ...queries,
  ...customQueries,
};

// const customScreen = within(document.body, customQueries);
const customScreen = Object.create(
  screen,
  Object.getOwnPropertyDescriptors(within(document.body, allQueries))
);

const customWithin = (element: HTMLElement) => within(element, allQueries);
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { queries: allQueries, ...options });

export * from "@testing-library/react";
export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
};
