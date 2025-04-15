import MemberCard from "@/components/Board/MemberCard";
import BoxShadow from "@/components/BoxShadow";

const Home = () => {
  return (
    <div className="font-francois-one flex h-screen w-screen items-center justify-center">
      {/* Lines 7-31 are for example */}
      <div className="flex space-x-10">
        {/* This is just an example piece to show the BoxShadow component in use */}
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="pr-8 pl-3 py-3"
        >
          <div className="text-white">
            <p className="text-xl">Past Collaborations</p>
            <ul className="list-disc pl-8">
              <li>Clay Day with Starving Artists</li>
              <li>Shrek Anniversary with Starving Artists</li>
              <li>Origami Night with Art History Undergraduate Association</li>
            </ul>
          </div>
        </BoxShadow>

        <MemberCard />

        {/* Another example */}
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-6 py-4"
        >
          <p className="text-center text-2xl">
            We aim to create a <br />
            supportive environment <br />
            where people can share <br />
            and get advice on 3D art <br />
            and projects.
          </p>
        </BoxShadow>
      </div>
    </div>
  );
};

export default Home;
