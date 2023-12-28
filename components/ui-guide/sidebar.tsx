import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-52 bg-slate-200 p-4 pt-8 text-black">
      <nav>
        <ul>
          <Link href="/ui-guide/">
            <li className="mb-2 text-lg font-medium hover:text-sky-600">
              Components
            </li>
          </Link>
          <div className="my-4 border-b-2 border-gray-400" />
          <Link href="/ui-guide/text-guide">
            <li className="mb-2 text-lg font-medium hover:text-sky-600">
              Text
            </li>
          </Link>
          <Link href="/ui-guide/button-guide">
            <li className="mb-2 text-lg font-medium hover:text-sky-600">
              Button
            </li>
          </Link>
          <Link href="/ui-guide/checkbox-guide">
            <li className="mb-2 text-lg font-medium hover:text-sky-600">
              Checkbox
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
