import React from "react";

export default function Formsubs() {
  return (
    <div className="mail flex flex-col gap-[1.25rem] mb-[9.75rem]">
      <form action="POST" className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          className="p-2 rounded-lg ring-1 ring-blue-200 max-w-[20.8rem]"
        />
        <button className="py-[.5rem] px-[1rem] bg-accent hover:bg-accent/90 text-white rounded-lg">
          Invite Me
        </button>
      </form>
      <p className="leading-8 text-primary/60">
        Sign up for updates to be the first to know when we launch. No spam,
        just important information and exclusive offers.
      </p>
    </div>
  );
}
