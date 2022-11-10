export interface Person {
name: string,
age: number
awesome: boolean
}

interface AboutmeProps {
    person: Person
}

export default function Aboutme({person}:AboutmeProps) {
    return(
        <>
        <h2>Name: {person.name}</h2>
        <h3>Age: {person.age}</h3>
        <h3>I am {person.awesome}</h3>
        </>
    )
}