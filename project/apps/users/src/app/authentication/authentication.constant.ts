export enum AuthUser {
    Exist = 'User with this email exists',
    NotFound = 'User not found',
    PasswordWrong = 'User password is wrong',
    EmailNotValid = 'The email is not valid',
    DateBirthNotValid = 'The user date birth is not valid',
}

export enum ValidateCondition {
    MinPasswordLength = 6,
    MaxPasswordLength = 12,
    MinResponseTextLength = 50,
    MaxResponseTextLength = 500,
    MinScore = 1,
    MaxScore = 5
}