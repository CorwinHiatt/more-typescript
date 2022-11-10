interface GreetingProps{
    firstName: string,
    lastName: string,
}


export default function Greeter({firstName, lastName}:GreetingProps) {
    return(
        <p>welcome {firstName}{lastName}.</p>
    )
}