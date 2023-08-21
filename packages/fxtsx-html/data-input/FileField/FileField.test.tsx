import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { FileField } from "fxtsx-html/data-input/FileField/FileField";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";
import { Default } from "fxtsx-html/data-input/FileField/FileField.stories";
import userEvent from "@testing-library/user-event";

describe("렌더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <FileField data-testid={"FileField"} {...Default.args} />
    );
  });
  fxtsxTest(FileField, "data-fx-file-field", true);
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-file-field="true"
          data-fx-input-field="true"
          data-key="키"
          data-testid="FileField"
        >
          <label
            data-fx-key="true"
            for="키"
          >
            <img
              alt="test-img"
              src="test-img-file.png"
            />
          </label>
          <input
            data-fx-value="true"
            id="키"
            multiple=""
            type="file"
          />
          <ol
            data-fx-list="true"
            data-fx-ol="true"
          />
        </div>
      </DocumentFragment>
    `);
  });
  test("InputField 로 구현한다", () => {
    expect(screen.getByTestId("FileField")).toHaveAttribute(
      "data-fx-input-field"
    );
  });
  test("파일을 업로드하면 해당 파일의 이름이 출력된다.", async () => {
    const { container } = renderResult;
    const file1 = new File(["hello"], "hello.png", { type: "image/png" });
    const file2 = new File(["world"], "world.png", { type: "image/png" });
    const fileInput = container.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    await userEvent.upload(fileInput, [file1, file2]);
    expect(fileInput.files?.item(0)).toEqual(file1);
  });
});
