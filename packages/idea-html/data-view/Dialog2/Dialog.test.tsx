import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Dialog } from "./Dialog";
import { Default } from "packages/idea-html/data-view/Dialog2/Dialog.stories";
import { fxtsxTest } from "packages/idea/FxTsx/fxtsxTest";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Dialog {...Default.args} />);
  });
  fxtsxTest(Dialog, "data-fx-dialog");
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          data-fx-button="true"
          data-fx-value="true"
          href="./#open2"
        >
          open
        </a>
        <dialog
          data-fx-dialog="true"
          style="z-index: 9999;"
        >
          <form
            method="dialog"
          >
            <section
              data-testid="Dialog-Contents"
            >
              <h1>
                Dialog Test
              </h1>
              <p>
                Dialog 테스트 입니다.
              </p>
            </section>
            <button
              data-fx-button="true"
              data-fx-value="true"
            >
              close
            </button>
          </form>
        </dialog>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("루트는 dialog 태그다", () => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    test("close 버튼이 있다.", () => {
      expect(screen.getByRole("button", { name: "close" })).toBeInTheDocument();
    });
  });
});
