import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "test-utils";

describe("Heading", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Heading $title={"제목"} $level={1} />);
  });
  test("랜더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <hundefined
          data-fx-heading="true"
          data-fx-value="true"
          data-heading-level="1"
        >
          제목
        </hundefined>
      </DocumentFragment>
    `);
  });
  describe("children 이 없을 때", () => {
    commonTest();
    test("root 는 heading 태그가 된다.", () => {
      const { container } = renderResult;
      expect(container.firstChild instanceof HTMLHeadingElement).toEqual(true);
    });
  });
  function commonTest() {
    test("ref 는 HTMLHeading 을 가리킨다.", () => {
      const { rerender } = renderResult;
      const ref = jest.fn();
      rerender(<Heading $title={"제목"} $level={1} ref={ref} />);
      expect(ref.mock.calls[0][0] instanceof HTMLHeadingElement).toEqual(true);
    });

    test("level 속성에 따라 적절한 heading 이 된다.", () => {
      const { rerender } = renderResult;
      const levelArr: HeadingProps["$level"][] = [1, 2, 3, 4, 5, 6];
      levelArr.forEach((a) => {
        rerender(<Heading $title={"제목"} $level={a} />);
        expect(screen.getByRole("heading", { level: a })).toBeInTheDocument();
      });
    });
    test("title 속성은 heading 의 텍스트로 사용된다.", () => {
      const { rerender } = renderResult;
      expect(screen.getByRole("heading")).toContainHTML("제목");
      rerender(<Heading $title={"다른 제목"} $level={1} />);
      expect(screen.getByRole("heading")).toContainHTML("다른 제목");
    });
    test("data 속성에 전달된 문자열은 html 로 파싱된다.", () => {
      const { rerender } = renderResult;
      rerender(<Heading $title={"<em>중요한</em>제목"} $level={1} />);
      expect(screen.getByRole("heading")).toContainHTML("<em>중요한</em>제목");
    });
  }
});

describe("children 이 있을 때", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Heading $title={"제목"} $level={1}>
        <p>부제목</p>
      </Heading>
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <hgroup>
          <hundefined
            data-fx-heading="true"
            data-fx-value="true"
          >
            제목
          </hundefined>
          <p>
            부제목
          </p>
        </hgroup>
      </DocumentFragment>
    `);
  });
  test("root 는 hgroup 태그가 된다.", () => {
    const { container } = renderResult;
    expect((container.firstChild as HTMLElement).tagName).toEqual("HGROUP");
  });
  test("heading 은(data 를 텍스트로 가진 태그) 첫번째 children 으로 렌더링되고 children 은 두번째 children 으로 랜더링된다.", () => {
    expect(screen.getByTextContent("제목부제목")).toBeInTheDocument();
  });
});
