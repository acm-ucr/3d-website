import MemberCard from "@/components/board/card";
import members from "@/data/members";

const Members = () => {
  return (
    <div className="flex flex-row justify-center gap-10 py-10 md:gap-20 lg:gap-25 lg:py-25">
      {members.map((members, index) => (
        <MemberCard
          key={index}
          name={members.name}
          title={members.title}
          image={members.image}
        />
      ))}
    </div>
  );
};

export default Members;

// for the lowercase change
