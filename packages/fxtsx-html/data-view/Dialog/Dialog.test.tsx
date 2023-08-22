import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Dialog } from "./Dialog";
import { Default } from "fxtsx-html/data-view/Dialog/Dialog.stories";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Dialog {...Default.args} open />);
  });
  fxtsxTest(Dialog, "data-fx-dialog");
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <dialog
          data-fx-dialog="true"
          open=""
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
            <button>
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
