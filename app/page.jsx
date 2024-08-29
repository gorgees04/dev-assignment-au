"use client";
import Btn from "@/components/Btn";
import DividerLine from "@/components/DividerLine";
import PageField from "@/components/PageField";
import { useState } from "react";

export default function Home() {
  // state
  const [pages, setPages] = useState(data);
  const [allPages, setAllPages] = useState({
    text: "All pages",
    checked: false,
  });

  // functions

  // function to handle checked changes
  const handleCheckedChanges = (value, id) => {
    setPages((prevPages) =>
      prevPages.map((prevPage) =>
        prevPage.id === id ? { ...prevPage, checked: value } : prevPage
      )
    );
  };

  // function to handle check all pages
  const handleCheckAllPages = (value) => {
    setPages((prevPages) =>
      prevPages.map((prevPage) => ({ ...prevPage, checked: value }))
    );
    setAllPages((prevAllPages) => ({
      ...prevAllPages,
      checked: !prevAllPages.checked,
    }));
  };

  return (
    <main className="main">
      <section className="container">
        {/* Head Field */}
        <PageField
          page={allPages}
          setChecked={(value) => handleCheckAllPages(value)}
        />

        <DividerLine />

        {/* Pages Field */}
        <div className="pages-container">
          {pages?.length > 0 &&
            pages.map((page) => (
              <PageField
                key={page.id}
                page={page}
                setChecked={(value) => handleCheckedChanges(value, page.id)}
              />
            ))}
        </div>

        <DividerLine />

        {/* Done Button */}
        <div className="btn-container">
          <Btn text="Done" />
        </div>
      </section>
    </main>
  );
}

const data = [
  {
    id: 1,
    text: "Page 1",
    checked: false,
  },
  {
    id: 2,
    text: "Page 2",
    checked: false,
  },
  {
    id: 3,
    text: "Page 3",
    checked: false,
  },
  {
    id: 4,
    text: "Page 4",
    checked: false,
  },
  {
    id: 5,
    text: "Page 5",
    checked: false,
  },
  {
    id: 6,
    text: "Page 6",
    checked: false,
  },
  {
    id: 7,
    text: "Page 7",
    checked: false,
  },
  {
    id: 8,
    text: "Page 8",
    checked: false,
  },
];
