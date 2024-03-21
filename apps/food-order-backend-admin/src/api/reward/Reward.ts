import { UserModel } from "../userModel/UserModel";

export type Reward = {
  createdAt: Date | null;
  expirationDate: Date | null;
  id: number;
  points: number | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
