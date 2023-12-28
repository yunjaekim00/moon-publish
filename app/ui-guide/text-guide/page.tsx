import { CodeBlock } from "@/lib/codeblock";

const TextGuide = () => {
  const language = "html";
  const headingCode = `  <h1 class="heading1">heading1</h1>
  <h2 class="heading2">heading2</h2>
  <h3 class="heading3">heading3</h3>
  <h4 class="heading4">heading4</h4>`;
  const subtitleCode = `  <p class="subtitle1">subtitle1</p>
  <p class="subtitle2">subtitle2</p>
  <p class="subtitle3">subtitle3</p>`;
  const bodyCode = `  <p class="body1">body1</p>
  <p class="body2">body2</p>
  <p className="caption1">caption1</p>
  <p className="caption2">caption2</p>`;
  const colorCode = `  <p className="text-default">default color</p>
  <p className="text-primary">primary color</p>
  <p className="text-secondary">secondary color</p>
  <p className="text-error">error color</p>
  <p className="text-grey">grey color</p>
  <p className="text-light">light color</p>`;
  const fontCode = `  <p className="font-spoqa">font-family: Spoqa Han Sans Neo</p>
  <p className="font-mont">font-family: Montserrat</p>`;
  const weightCode = `  <p className="font-normal">font-weight: normal</p>
  <p className="font-medium">font-weight: medium</p>
  <p className="font-bold">font-weight: bold</p>`;

  return (
    <>
      <div className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Text Guide</h1>
      </div>
      <div>
        <p className="heading1">heading1</p>
        <p className="heading2">heading2</p>
        <p className="heading3">heading3</p>
        <p className="heading4">heading4</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={headingCode} />
      </div>
      <div className="mt-8">
        <p className="subtitle1">subtitle1</p>
        <p className="subtitle2">subtitle2</p>
        <p className="subtitle3">subtitle3</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={subtitleCode} />
      </div>
      <div className="mt-8">
        <p className="body1">body1</p>
        <p className="body2">body2</p>
        <p className="caption1">caption1</p>
        <p className="caption2">caption2</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={bodyCode} />
      </div>
      <div className="mt-8">
        <p className="text-default">default color</p>
        <p className="text-primary">primary color</p>
        <p className="text-secondary">secondary color</p>
        <p className="text-error">error color</p>
        <p className="text-grey">grey color</p>
        <p className="text-light">light color</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={colorCode} />
      </div>
      <div className="mt-8">
        <p className="font-mont">font-family: Montserrat</p>
        <p className="font-spoqa">font-family: Spoqa Han Sans Neo</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={fontCode} />
      </div>
      <div className="mt-8">
        <p className="font-normal">font-weight: normal</p>
        <p className="font-medium">font-weight: medium</p>
        <p className="font-bold">font-weight: bold</p>
      </div>
      <div className="mt-4 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={weightCode} />
      </div>
    </>
  );
};

export default TextGuide;
