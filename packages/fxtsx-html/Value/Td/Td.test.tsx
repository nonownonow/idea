import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { TdProps } from "fxtsx-html/Value/Td/Td";
import { Td } from "fxtsx-html/Value/Td/Td";
import { Default } from "fxtsx-html/Value/Td/Td.stories";

describe("구조", () => {
  let renderResult: RenderResult;
  const callBack = {};
  beforeEach(() => {
    renderResult = render(
      <table>
        <tbody>
          <tr>
            <Td {...callBack} {...(Default.args as TdProps)} />
          </tr>
        </tbody>
      </table>
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <table>
          <tbody>
            <tr>
              <td
                data-fx-value="true"
              >
                PROGRAMMER
              </td>
            </tr>
          </tbody>
        </table>
      </DocumentFragment>
    `);
  });
});
