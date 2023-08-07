import type { RenderResult } from "@testing-library/react";
import { render, screen } from "test-utils";
import { Tr } from "fxtsx-html/data-structure/Tr/Tr";
import { Default } from "fxtsx-html/data-structure/Tr/Tr.stories";

describe("테이블 헤더 - tr List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      Default.args.isHeader ? (
        <table>
          <thead>
            <Tr {...Default.args} />
          </thead>
        </table>
      ) : (
        <table>
          <tbody>
            <Tr {...Default.args} />
          </tbody>
        </table>
      )
    );
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <table>
          <tbody>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td>
                1
              </td>
              <td>
                2
              </td>
              <td>
                3
              </td>
            </tr>
          </tbody>
        </table>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("배열을 tr 태그로 랜더링한다", () => {
      expect(screen.getByTextContent("123").tagName).toEqual("TR");
    });
    test("배열의 요소는 td 태그로 랜더링 된다.", () => {
      expect(screen.getByText("1").tagName).toEqual("TD");
    });
  });
});
