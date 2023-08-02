import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Table } from "fxtsx-html/data-view/Table/Table";
import { Default } from "fxtsx-html/data-view/Table/Table.stories";

describe("Table", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Table {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <table
          data-fx-dataframe="true"
          data-fx-list="true"
        >
          <thead>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <th>
                1
              </th>
              <th>
                2
              </th>
              <th>
                3
              </th>
            </tr>
          </thead>
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
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td>
                11
              </td>
              <td>
                22
              </td>
              <td>
                33
              </td>
            </tr>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td>
                111
              </td>
              <td>
                222
              </td>
              <td>
                333
              </td>
            </tr>
          </tbody>
        </table>
      </DocumentFragment>
    `);
  });
  describe("객체배열 data 프로퍼티를 받아서", () => {
    test("루트 요소를 ul 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("TABLE");
    });
  });
});
