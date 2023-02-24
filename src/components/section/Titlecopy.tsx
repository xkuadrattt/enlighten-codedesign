import React from "react";

export default function Titlecopy() {
  return (
    <div className="flex flex-col gap-[1rem] mt-[9.75rem]">
      <span
        role="badge"
        className="tracking-wide text-sm font-bold text-accent uppercase px-4 py-2 bg-accent/10 w-fit rounded-xl"
      >
        coming soon
      </span>
      <h1 className="text-primary font-bold text-3xl max-w-[28.5rem] md:text-5xl leading-tight">
        Get your dancing shoes ready
      </h1>
      <p className="leading-8 text-primary/60 max-w-[28.5rem]">
        We're putting the finishing touches on our website and getting ready to
        launch. Sign up for updates and be the first to know when we go live.
      </p>
    </div>
  );
}
