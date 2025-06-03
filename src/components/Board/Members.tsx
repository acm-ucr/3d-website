import React from "react";
import MemberCard from "@/components/Board/MemberCard";
import { members } from "@/data/members";

const Members = () => {
  return (
    <div className="flex flex-row justify-center gap-10 py-10 md:gap-20 lg:gap-25 lg:py-25">
      {members.map((members, index) => (
        <MemberCard
          key={index}
          name={members.name}
          title={members.title}
          image={members.image}
        ></MemberCard>
      ))}
    </div>
  );
};

export default Members;
