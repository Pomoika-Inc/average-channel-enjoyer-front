
export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    ENJOYER = 'ENJOYER'
}

export interface User {
    name: string,
    role: UserRole
}