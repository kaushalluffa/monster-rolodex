
import "./cardlist.css";
import Card from "../Card/Card";
const CardList = ({monsters}) => {
  
    
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }


export default CardList;
