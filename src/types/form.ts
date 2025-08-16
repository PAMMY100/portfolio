export type FormData = {
    name: string,
    email: string,
    message: string
}

export type FormFieldProps = {
    type: string,
    placeholder: string,
    name: "name" | "email" | "message",
}
