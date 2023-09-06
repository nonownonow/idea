import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { FileFieldProps } from "fxtsx-html/data-input/FileField/FileField";
import { FileField } from "fxtsx-html/data-input/FileField/FileField";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";
import { Default } from "fxtsx-html/data-input/FileField/FileField.stories";
import userEvent from "@testing-library/user-event";

describe("렌더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <FileField
        data-testid={"FileField"}
        {...(Default.args as FileFieldProps)}
      />
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
          data-testid="FileField"
        >
          <label
            data-fx-label="true"
            data-key="file-field"
            for="file-field"
          >
            <img
              alt="test-img"
              src="test-img-file.png"
            />
          </label>
          <input
            data-value="input"
            id="file-field"
            name="file-field"
            type="file"
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
