import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { OptionProps } from "fxtsx-html/Value/Option/Option";
import { Option } from "fxtsx-html/Value/Option/Option";
import { Default } from "fxtsx-html/Value/Option/Option.stories";

describe("구조", () => {
  let renderResult: RenderResult;
  const callBack = {};
  beforeEach(() => {
    renderResult = render(
      <Option {...callBack} {...(Default.args as OptionProps)} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <option
          data-fx-value="true"
          value="PROGRAMMER"
        >
          개발자
        </option>
      </DocumentFragment>
    `);
  });
});
