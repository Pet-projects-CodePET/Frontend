import { IUser } from "@/services/models/IUser";

export type FormProfileSettingsProps = {
  handleSubmitForm: (
    data: IUser
  ) => void;
  // settingsProfile: unknown;
}