"use client";
import { Check } from "lucide-react";
import { useState } from "react";

export default function CheckBox({ page, setChecked }) {
  return (
    // <input type="checkbox" id="checkbox" className="checkbox" />
    <>
      <div
        type="button"
        onClick={() => setChecked(!page.checked)}
        className={`${page.checked ? "checkbox-checked" : "checkbox"}`}
      >
        <Check />
      </div>
    </>
  );
}
