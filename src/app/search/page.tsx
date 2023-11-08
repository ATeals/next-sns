import { ProfileBox } from "@/components/ProfileBox";
import { DEFAULT_AVATAR } from "@/constants";
import { userService } from "@/server/services";
import Link from "next/link";

export default async () => {
  const users = await userService.getAll();

  return (
    <div className="w-[600px] m-auto">
      {users?.map((user) => (
        <Link href={`/user/${user.id}`} key={user.id} className="m-2">
          <ProfileBox title={user.name} description="" src={user.avatar || DEFAULT_AVATAR} />
        </Link>
      ))}
    </div>
  );
};
