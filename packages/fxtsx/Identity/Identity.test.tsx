import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Default } from "fxtsx/Identity/Default";

describe("Identity", () => {
  let renderResult: RenderResult;
  const ref = createRef<HTMLDivElement>();
  beforeEach(() => {
    renderResult = render(
      <Default data-testid={"Default"} myName={"myName"} ref={ref} />
    );
  });
  test("랜더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-testid="Default"
          my-name="myName"
        />
      </DocumentFragment>
    `);
  });
  describe("Fxtsx 콤포넌트의 콜백컴포넌트 프로퍼티로 값이 전달되지 않았을 경우 기본값으로 사용된다", () => {
    test("카멜 케이스 프로퍼티를 받아서 케밥케이스 프로퍼티로 변경하여 div 컴포넌트에 전달한다.(html 태그의 속성이름은 케밥케이스로 표현 되는 것이 규약이다)", () => {
      expect(screen.getByTestId("Default")).toHaveAttribute(
        "my-name",
        "myName"
      );
    });
    test("ref 를 전달 받아서 div 컴포넌트에 ref 프로퍼티로 전달한다.", () => {
      expect(ref.current?.dataset.testid).toEqual("Default");
    });
  });
});
