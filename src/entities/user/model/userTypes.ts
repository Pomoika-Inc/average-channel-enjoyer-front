
export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    ENJOYER = 'ENJOYER'
}

export interface user {
    role: UserRole
}