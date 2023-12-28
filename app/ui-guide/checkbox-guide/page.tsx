import { CodeBlock } from "@/lib/codeblock";
import Checkbox from "@/components/ui/checkbox";

const CheckboxGuide = () => {
  const language = "html";
  const checkboxCode = `<div>
  <Checkbox id="chk1" type="checkbox" />
  <label htmlFor="chk1"></label>
</div>
<div>
  <Checkbox id="chk2" type="checkbox" />
  <label htmlFor="chk2">label</label>
</div>
<div>
  <Checkbox id="chk3" type="checkbox" checked={true} />
  <label htmlFor="chk3">checked</label>
</div>
<div>
  <Checkbox id="chk4" type="checkbox" disabled={true} />
  <label htmlFor="chk4">disabled</label>
</div>
<div>
  <Checkbox id="chk5" type="checkbox" disabled={true} error="error" />
  <label htmlFor="chk5">error</label>
</div>`;

  return (
    <>
      <div className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Checkbox Guide</h1>
      </div>
      <div className="inline-flex rounded-lg border border-gray-400 bg-white p-8">
        <div>
          <Checkbox id="chk1" type="checkbox" readOnly />
          <label htmlFor="chk1"></label>
        </div>
        <div>
          <Checkbox id="chk2" type="checkbox" readOnly />
          <label htmlFor="chk2">label</label>
        </div>
        <div>
          <Checkbox id="chk3" type="checkbox" checked={true} readOnly />
          <label htmlFor="chk3">checked</label>
        </div>
        <div>
          <Checkbox id="chk4" type="checkbox" disabled={true} readOnly />
          <label htmlFor="chk4">disabled</label>
        </div>
        <div>
          <Checkbox
            id="chk5"
            type="checkbox"
            disabled={true}
            error="error"
            readOnly
          />
          <label htmlFor="chk5">error</label>
        </div>
      </div>
      <div className="mt-8 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={checkboxCode} />
      </div>
    </>
  );
};

export default CheckboxGuide;
