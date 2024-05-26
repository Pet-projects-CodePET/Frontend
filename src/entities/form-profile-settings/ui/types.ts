
export type FormProfileSettingsProps = {
  handleSubmitForm: (
    data: {
      notify: boolean;
      subscription: boolean;
      visible_status: number;
      visible_status_contacts: number;
    }
  ) => void;
  // settingsProfile: unknown;
}