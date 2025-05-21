//emailUser.ts
let userEmail: string = '';

export const setEmailUser = (email: string) => {
    userEmail = email;
    };
export const getEmailUser = () => {
    return userEmail;
    };