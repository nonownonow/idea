import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Table } from "fxtsx-html/data-structure/Table/Table";
import { Default } from "fxtsx-html/data-structure/Table/Table.stories";

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
              <th
                data-fx-value="true"
                data-key="a"
              >
                a
              </th>
              <th
                data-fx-value="true"
                data-key="b"
              >
                b
              </th>
              <th
                data-fx-value="true"
                data-key="c"
              >
                c
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td
                data-fx-value="true"
                data-value="1"
              >
                1
              </td>
              <td
                data-fx-value="true"
                data-value="2"
              >
                2
              </td>
              <td
                data-fx-value="true"
                data-value="3"
              >
                3
              </td>
            </tr>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td
                data-fx-value="true"
                data-value="11"
              >
                11
              </td>
              <td
                data-fx-value="true"
                data-value="22"
              >
                22
              </td>
              <td
                data-fx-value="true"
                data-value="33"
              >
                33
              </td>
            </tr>
            <tr
              data-fx-dictionary="true"
              data-fx-list="true"
              data-fx-tr="true"
            >
              <td
                data-fx-value="true"
                data-value="111"
              >
                111
              </td>
              <td
                data-fx-value="true"
                data-value="222"
              >
                222
              </td>
              <td
                data-fx-value="true"
                data-value="333"
              >
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
