interface IUser {
  email: string;
  password: string;
  role: string;
}
interface ILoginUser {
  username: string,
  password: string
}

interface UserProfile {
  id?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token?: string;
}

export type { IUser, ILoginUser, UserProfile };