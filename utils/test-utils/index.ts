import type { RenderOptions } from "@testing-library/react";
import { queries, render, within } from "@testing-library/react";
import * as customQueries from "./custom-queries";
import type { ReactElement } from "react";

const allQueries = {
  ...queries,
  ...customQueries,
};

const customScreen = within(document.body, allQueries);
const customWithin = (element: HTMLElement) => within(element, allQueries);
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { ...options, queries: allQueries });

export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
};
