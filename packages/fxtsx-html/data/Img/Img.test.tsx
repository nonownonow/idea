import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Img } from "./Img";
import { Default } from "fxtsx-html/data/Img/Img.stories";

describe("렌더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Img data-testid={"Img"} {...Default.args} />);
  });

  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <picture
          data-fx-img="true"
          data-testid="Img"
        >
          <source
            media="(min-width: 1108px)"
            srcset="test-img-file.png 1x, test-img-file.png 2x, test-img-file.png 3x"
          />
          <source
            srcset="test-img-file.png 1x, test-img-file.png 2x, test-img-file.png 3x"
          />
          <img
            alt="img"
            src="test-img-file.png"
          />
        </picture>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("Img 는 figure 로 렌더링 된다.", () => {
      expect(screen.getByTestId("Img").tagName).toEqual("PICTURE");
    });
  });
});
