//------------------------------------------------------------|
//                  Example Message Types                     |
//------------------------------------------------------------/

export type ExampleMessage = {
    message: string,
    date: string
}

export type EchoMessage = {
    isEcho: boolean
} & ExampleMessage;

export type SignUpMessage= {
    isSignUp: boolean,
    message: string,
    date: string
}
export type SignInMessage = {
    isSignIn: boolean,
    message: string,
    JWT: string,
    date: string
}
export type AuthMeMessage = {
    id: string,
    date: string
}
