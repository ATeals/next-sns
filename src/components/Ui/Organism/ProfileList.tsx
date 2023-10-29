import { ProfileBox } from "../Molecule/ProfileBox";

export const ProfileList = ({ data }) => {
  return (
    <section>
      {data.map((i: any) => (
        <ProfileBox key={i.id} title="제목" description="asd" src="asd" />
      ))}
    </section>
  );
};
