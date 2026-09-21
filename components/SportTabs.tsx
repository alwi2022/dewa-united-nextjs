"use client";

import { useState } from "react";

const sports = ["All Sports", "Football", "Basketball", "Esports", "Academy"];

export default function SportTabs() {
  const [active, setActive] = useState("All Sports");
  return (
    <div className="sport-tabs" aria-label="Sport categories">
      <div className="wrap sport-tab-inner" role="tablist">
        {sports.map((sport) => <button className={`sport-tab${active === sport ? " active" : ""}`} type="button" role="tab" aria-selected={active === sport} key={sport} onClick={() => setActive(sport)}>{sport}</button>)}
      </div>
    </div>
  );
}
