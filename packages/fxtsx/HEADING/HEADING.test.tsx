import type { HEADINGProps } from "./HEADING";
import { HEADING } from "./HEADING";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { forwardRef } from "react";
import type { RootElementProps } from "../ fxtsx.type";

const HeadingTest = forwardRef<HTMLHeadingElement, HEADINGProps>(function (
  props,
  ref
) {
  const rootProps: RootElementProps = {
    id: "myId",
    className: "myClassName",
    tabIndex: 0,
    style: { fontSize: "1rem" },
    "data-test": "myDataTest",
  };
  return <HEADING {...rootProps} {...props} ref={ref} />;
});
describe("HEADING", () => {
  const HeadingComp = jest.fn((props, ref) => (
    //   중복 속성 체크를 위해서 props 를 컴포넌트에 전달한다 예: data-heading 속성을 단 하나의 하위컴포넌트에서 받는 지 테스트할 때
    <h1 data-testid={"Heading"} {...props} ref={ref} />
  ));
  const HgroupComp = jest.fn((props) => (
    <hgroup data-testid={"Hgroup"} {...props} />
  ));
  let renderResult: RenderResult;

  describe("기본 렌더링", () => {
    beforeEach(() => {
      renderResult = render(
        <HeadingTest
          title={"Hello Heading!"}
          level={1}
          $Heading={forwardRef(HeadingComp)}
          $Hgroup={HgroupComp}
          ref={() => {}}
        />
      );
    });
    commonTest();

    test("title, level, ref 는 Heading 의 속성으로 전달된다.", () => {
      expect(HeadingComp.mock.calls[0][0]).toHaveProperty("title");
      expect(HeadingComp.mock.calls[0][0]).toHaveProperty("level");
      expect(HeadingComp.mock.calls[0][1]).toHaveProperty("name", "ref");
    });

    test("data-fx-heading 속성은 root component 한곳에만 전달된다.", () => {
      const { container } = renderResult;
      expect(container.querySelectorAll("[data-fx-heading]").length).toEqual(1);
      const Heading = container.firstChild;
      if (Heading instanceof HTMLElement) {
        expect(Heading.dataset.fxHeading).toEqual("true");
      }
    });
    test("children 이 없으면 Heading 이 root 에 랜더링된다.", () => {
      const root = renderResult.container.firstChild as HTMLElement;
      expect(root.dataset.testid).toEqual("Heading");
    });
  });
  describe("children 이 있으면", () => {
    beforeEach(() => {
      renderResult = render(
        <HeadingTest
          title={"Hello Heading!"}
          level={1}
          $Heading={forwardRef(HeadingComp)}
          $Hgroup={HgroupComp}
          ref={() => {}}
        >
          <p data-testid={"children"}>부제목</p>
        </HeadingTest>
      );
    });
    commonTest();
    test("Hgroup 이 root 에 랜더링된다.", () => {
      const root = renderResult.container.firstChild as HTMLElement;
      expect(root.dataset.testid).toEqual("Hgroup");
      //data-fx-heading 속성은 root component 한곳에만 전달된다.
      const { container } = renderResult;
      expect(container.querySelectorAll("[data-fx-heading]").length).toEqual(1);
      const Heading = container.firstChild;
      if (Heading instanceof HTMLElement) {
        expect(Heading.dataset.fxHeading).toEqual("true");
      }
    });
    test("Heading 은 Hgroup 의 첫번째 children 으로, children 은 Hgroup 의 두번째 children 으로 랜더링된다.", () => {
      const Hgroup = renderResult.container.querySelector(
        "[data-testid=Hgroup]"
      );
      const firstChild = Hgroup?.firstChild as HTMLElement;
      const secondChild = firstChild.nextElementSibling as HTMLElement;
      expect(firstChild.dataset.testid).toEqual("Heading");
      expect(secondChild.dataset.testid).toEqual("children");
    });
  });

  function commonTest() {
    test("root props(className, id 등)는 root component 에 전달된다.", () => {
      const { container } = renderResult;
      const rootProps = ["id", "class", "tabindex", "style", "data-test"];

      rootProps.forEach((a) => {
        expect(container.firstChild).toHaveAttribute(a);
      });
    });
    test("core-element props 는 Heading component 에 전달된다.", () => {
      const coreProps = ["title"];

      coreProps.forEach((a) => {
        expect(HeadingComp.mock.calls[0][0]).toHaveProperty(a);
      });
    });
  }
});
