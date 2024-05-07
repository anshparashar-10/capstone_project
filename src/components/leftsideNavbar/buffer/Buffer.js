import React, { useState } from "react";

const Buffer = () => {
  const [unit, setUnit] = useState("M");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" absolute z-10 px-[24px] gap-[4px] pt-[40px] flex flex-col left-[70px] top-0 h-screen w-[360px]  outline outline-black outline-[1px] overflow-auto">
      <div className="text-[22px] font-[700] text-[#2f8080]">
        Guidelines for Earthquake{" "}
      </div>
      <div className="">
        What to Do Before an Earthquake
        <br />
        Repair deep plaster cracks in ceilings and foundations. Get expert
        advice if there are signs of structural defects.
        <br />
        Anchor overhead lighting fixtures to the ceiling.
        <br />
        Follow BIS codes relevant to your area for building standards
        <br />
        Fasten shelves securely to walls.
        <br />
        Place large or heavy objects on lower shelves.
        <br />
        Store breakable items such as bottled foods, glass, and china in low,
        closed cabinets with latches.
        <br />
        Hang heavy items such as pictures and mirrors away from beds, settees,
        and anywhere that people sit.
        <br />
        Brace overhead light and fan fixtures.
        <br />
        Repair defective electrical wiring and leaky gas connections. These are
        potential fire risks.
        <br />
        Secure water heaters, LPG cylinders etc., by strapping them to the walls
        or bolting to the floor.
        <br />
        Store weed killers, pesticides, and flammable products securely in
        closed cabinets with latches and on bottom shelves.
        <br />
        Identify safe places indoors and outdoors.
        <br />
        Under strong dining table, bed
        <br />
        Against an inside wall
        <br />
        Away from where glass could shatter around windows, mirrors, pictures,
        or where heavy bookcases or other heavy furniture could fall over
        <br />
        In the open, away from buildings, trees, telephone and electrical lines,
        flyovers and bridges
        <br />
        Know emergency telephone numbers (such as those of doctors, hospitals,
        the police, etc)
        <br />
        Educate yourself and family members
        <br />
        PSHA Table at Grid Points
        <br />
      </div>
    </div>
  );
};

export default Buffer;
