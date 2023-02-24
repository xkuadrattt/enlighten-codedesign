import React from "react";

export default function Formsubs() {
  return (
    <div className="mail flex flex-col gap-[1.25rem] pb-[9.75rem] w-full">
      <form action="POST" className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          className="rounded-lg ring-1 placeholder-primary/60 py-1 px-2 sm:py-[.625rem] sm:px-[1.75rem] w-auto"
        />
        <button className="py-1 px-3 sm:py-[.625rem] sm:px-[1.15rem] md:px-[1.75rem] bg-accent hover:bg-accent/90 text-white rounded-lg">
          Invite Me
        </button>
      </form>
      <p className="leading-8 text-primary/60 max-w-[33.8rem]">
        Sign up for updates to be the first to know when we launch. No spam,
        just important information and exclusive offers.
      </p>
    </div>
  );
}
