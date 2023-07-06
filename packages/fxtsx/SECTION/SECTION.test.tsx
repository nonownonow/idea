import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import SECTION from "./SECTION";
import type { FC } from "react";

describe("SECTION", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<SECTION />);
  });
  beforeAll(() => {});
  test("SECTION 랜더링", () => {
    expect(screen.getByTestId("SECTION")).toBeInTheDocument();
  });
  testCommon(SECTION);
});

function testCommon(Component: FC) {
  describe("fxtsx 컴포넌트 공통 테스트", () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Component />);
    });
    test("root props(className, id 등)는 root component 에 전달된다.", () => {
      const { container } = renderResult;
      const rootProps = ["id", "class", "tabindex", "style", "data-test"];

      rootProps.forEach((a) => {
        expect(container.firstChild).toHaveAttribute(a);
      });
    });
  });
}
