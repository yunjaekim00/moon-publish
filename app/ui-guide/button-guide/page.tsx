import { CodeBlock } from "@/lib/codeblock";
import Button from "@/components/ui/button";

const ButtonGuide = () => {
  const language = "html";
  const buttonCode = `
<div className="flex gap-1 m-4 ">
  <Button size="xs">button</Button>
  <Button size="sm">button</Button>
  <Button size="rg">button</Button>
  <Button size="lg">button</Button>
  <Button size="xl">button</Button>
  <Button size="xl" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4 ">
  <Button size="xs" bgcolor="black">
    button
  </Button>
  <Button size="sm" bgcolor="black">
    button
  </Button>
  <Button size="rg" bgcolor="black">
    button
  </Button>
  <Button size="lg" bgcolor="black">
    button
  </Button>
  <Button size="xl" bgcolor="black">
    button
  </Button>
  <Button size="xl" bgcolor="black" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4 ">
  <Button size="xs" bgcolor="gray600">
    button
  </Button>
  <Button size="sm" bgcolor="gray600">
    button
  </Button>
  <Button size="rg" bgcolor="gray600">
    button
  </Button>
  <Button size="lg" bgcolor="gray600">
    button
  </Button>
  <Button size="xl" bgcolor="gray600">
    button
  </Button>
  <Button size="xl" bgcolor="gray600" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4">
  <Button size="xs" bgcolor="gray100">
    button
  </Button>
  <Button size="sm" bgcolor="gray100">
    button
  </Button>
  <Button size="rg" bgcolor="gray100">
    button
  </Button>
  <Button size="lg" bgcolor="gray100">
    button
  </Button>
  <Button size="xl" bgcolor="gray100">
    button
  </Button>
  <Button size="xl" bgcolor="gray100" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4">
  <Button size="xs" bgcolor="white" border="black">
    button
  </Button>
  <Button size="sm" bgcolor="white" border="black">
    button
  </Button>
  <Button size="rg" bgcolor="white" border="black">
    button
  </Button>
  <Button size="lg" bgcolor="white" border="black">
    button
  </Button>
  <Button size="xl" bgcolor="white" border="black">
    button
  </Button>
  <Button size="xl" bgcolor="white" border="black" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4 ">
  <Button size="xs" bgcolor="white" border="gray">
    button
  </Button>
  <Button size="sm" bgcolor="white" border="gray">
    button
  </Button>
  <Button size="rg" bgcolor="white" border="gray">
    button
  </Button>
  <Button size="lg" bgcolor="white" border="gray">
    button
  </Button>
  <Button size="xl" bgcolor="white" border="gray">
    button
  </Button>
  <Button size="xl" bgcolor="white" border="gray" rounded="xl">
    button
  </Button>
</div>
<div className="flex gap-1 m-4 ">
  <button className="text-sm btn-text text-light ">button</button>
  <button className="text-base btn-text text-primary ">button</button>
  <button className="text-lg btn-text text-secondary ">button</button>
  <button className="text-xl font-bold btn-text text-grey ">
    button
  </button>
  <button className="text-xl font-bold text-black btn-text ">
    button
  </button>
  <button className="text-2xl font-bold btn-text text-default ">
    button
  </button>
</div>
`;
  return (
    <>
      <div className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Button Guide</h1>
      </div>
      <div className="inline-flex flex-col rounded-lg border border-gray-300 bg-white px-8 py-4">
        <div className="m-4 flex gap-1 ">
          <Button size="xs">button</Button>
          <Button size="sm">button</Button>
          <Button size="rg">button</Button>
          <Button size="lg">button</Button>
          <Button size="xl">button</Button>
          <Button size="xl" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1 ">
          <Button size="xs" bgcolor="black">
            button
          </Button>
          <Button size="sm" bgcolor="black">
            button
          </Button>
          <Button size="rg" bgcolor="black">
            button
          </Button>
          <Button size="lg" bgcolor="black">
            button
          </Button>
          <Button size="xl" bgcolor="black">
            button
          </Button>
          <Button size="xl" bgcolor="black" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1 ">
          <Button size="xs" bgcolor="gray600">
            button
          </Button>
          <Button size="sm" bgcolor="gray600">
            button
          </Button>
          <Button size="rg" bgcolor="gray600">
            button
          </Button>
          <Button size="lg" bgcolor="gray600">
            button
          </Button>
          <Button size="xl" bgcolor="gray600">
            button
          </Button>
          <Button size="xl" bgcolor="gray600" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1">
          <Button size="xs" bgcolor="gray100">
            button
          </Button>
          <Button size="sm" bgcolor="gray100">
            button
          </Button>
          <Button size="rg" bgcolor="gray100">
            button
          </Button>
          <Button size="lg" bgcolor="gray100">
            button
          </Button>
          <Button size="xl" bgcolor="gray100">
            button
          </Button>
          <Button size="xl" bgcolor="gray100" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1">
          <Button size="xs" bgcolor="white" border="black">
            button
          </Button>
          <Button size="sm" bgcolor="white" border="black">
            button
          </Button>
          <Button size="rg" bgcolor="white" border="black">
            button
          </Button>
          <Button size="lg" bgcolor="white" border="black">
            button
          </Button>
          <Button size="xl" bgcolor="white" border="black">
            button
          </Button>
          <Button size="xl" bgcolor="white" border="black" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1 ">
          <Button size="xs" bgcolor="white" border="gray">
            button
          </Button>
          <Button size="sm" bgcolor="white" border="gray">
            button
          </Button>
          <Button size="rg" bgcolor="white" border="gray">
            button
          </Button>
          <Button size="lg" bgcolor="white" border="gray">
            button
          </Button>
          <Button size="xl" bgcolor="white" border="gray">
            button
          </Button>
          <Button size="xl" bgcolor="white" border="gray" rounded="xl">
            button
          </Button>
        </div>
        <div className="m-4 flex gap-1 ">
          <button className="btn-text text-sm text-light ">button</button>
          <button className="btn-text text-base text-primary ">button</button>
          <button className="btn-text text-lg text-secondary ">button</button>
          <button className="btn-text text-xl font-bold text-grey ">
            button
          </button>
          <button className="btn-text text-xl font-bold text-black ">
            button
          </button>
          <button className="btn-text text-2xl font-bold text-default ">
            button
          </button>
        </div>
      </div>
      <div className="mt-8 min-w-fit max-w-2xl">
        <CodeBlock language={language} value={buttonCode} />
      </div>
    </>
  );
};

export default ButtonGuide;
