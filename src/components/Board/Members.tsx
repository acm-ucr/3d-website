import React from "react";
import MemberCard from "./MemberCard";
import { members } from "./members";

const Members = () => {
  return (
    <div>
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
