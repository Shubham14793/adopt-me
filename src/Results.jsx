import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}ss
            animal={pet.animal}
            images={pet.images}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
}
export default Results;