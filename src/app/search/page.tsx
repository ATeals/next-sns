import { Print } from "@/components/Print";
import { ProfileBox } from "@/components/Ui/Molecule/ProfileBox";
import { SearchBar } from "@/components/Ui/Molecule/SearchBar.tsx";
import { DEFAULT_AVATAR } from "@/constants";
import { userService } from "@/server/services";

export default async () => {
  const users = await userService.getAll();

  return (
    <>
      <Print data={users} />

      <div className="w-[600px] m-auto [&>*]:my-4">
        {users?.map((user) => (
          <ProfileBox
            key={user.id}
            title={user.name}
            description={user.phone ? String(user.phone) : ""}
            src={user.avatar || DEFAULT_AVATAR}
          />
        ))}
      </div>
    </>
  );
};
