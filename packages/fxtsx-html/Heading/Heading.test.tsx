/*describe("Heading = { level: 1, data: heading}", () => {
  const ComposedNormal = composeStory(Normal, Meta);
  const { getByRole, getByTestId } = render(<ComposedNormal />);
  test("children이 없으면 h1태그로 렌더링 된다.", () => {
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  test("children이 있으면 hgroup태그로 랜더링 된다.", () => {
    const heading = getByTestId("Heading");
    expect(heading).toContainHTML("<hgroup></hgroup>");
  });
});*/
describe("Heading", () => {
  test.todo("children 이 없으면 heading 태그를 랜더링 한다.");
  test.todo("children 이 있으면 hgroup 태그를 랜더링 한다.");
  test.todo("level 에 따라 해당하는 heading 태그를 랜더링 한다");
  test.todo("data 는 heading 태그에 랜더링 된다.");
});
