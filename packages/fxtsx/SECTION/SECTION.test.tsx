import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { SECTION } from "./SECTION";
import { MockComponent } from "../util/util";

describe("SECTION", () => {
  const $Section = jest.fn(MockComponent);
  const $Heading = jest.fn(MockComponent);
  beforeEach(() => {
    render(
      <SECTION
        title={"test"}
        level={1}
        $Section={$Section}
        $Heading={$Heading}
      />
    );
  });
  beforeAll(() => {});
  test("SECTION 랜더링", () => {
    expect(screen.getByTestId("SECTION")).toBeInTheDocument();
  });
  testCommon(SECTION);
});

function testCommon<P>(Component: FC<P>) {
  describe("fxtsx 컴포넌트 공통 테스트", () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(
        <Component
          id={"id"}
          className={"class"}
          tabIndex={0}
          style={{ fontSize: "1rem" }}
          data-test={"test"}
          hidden={true}
          {...({} as P)}
        />
      );
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
