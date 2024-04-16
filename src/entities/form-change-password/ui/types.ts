export type FormChangePasswordProps = {
    serverPasswordError?: string;
    setServerPasswordError: (arg0: string) => string;
    serverErrorText?: string;
    isSubmitSuccessfulReset: boolean;
    isSubmitDisabled: boolean;
    setSubmitSuccessfulReset: (arg: boolean) => void;
}