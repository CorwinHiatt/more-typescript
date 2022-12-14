export interface PhotoCardType{

    photo: string,
    user: string,
    mainPhoto: string,
    description: string,
    likeCount: number
}

 interface PhotoCardProp {
    card: PhotoCardType
}


export default function PhotoCard({card}:PhotoCardProp)  {
    return (
        <>
        <div className="photo-card">
            <div className="card-header">
                <img src={card.photo} alt="kitten"/>
                <h3 className="card-user">{card.user}</h3>
            </div>
            <img src={card.mainPhoto} alt={card.mainPhoto}/>
            <p>{card.description}</p>
           <p>Likes:{card.likeCount} </p>
        </div>
        </>

    )
}