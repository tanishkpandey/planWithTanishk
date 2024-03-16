import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <>
      <div style={{ textAlign: "center", margin: "3rem 0rem"}}>
        <h1>Plan with Tanishk</h1>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center"}}>
        {tours.map((tour) => {
          return <Card tour={tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </>
  );
}

export default Tours;
