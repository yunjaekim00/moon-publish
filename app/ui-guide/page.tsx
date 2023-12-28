import TextGuide from "./text-guide/page";
import ButtonGuide from "./button-guide/page";
import CheckboxGuide from "./checkbox-guide/page";

const UiGuide = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">UI Component Guide</h1>
        <p>UI 가이드 Component 정리</p>
      </div>

      <TextGuide />
      <ButtonGuide />
      <CheckboxGuide />
    </>
  );
};

export default UiGuide;
