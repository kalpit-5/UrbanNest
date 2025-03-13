import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"

function ListPage() {

    const data = listData;


  return <div className="listPage">
    <div className="listContainer">
        <div className="wrapper">
            <Filter/>
        </div>
    </div>
    <div className="mapContainer">Map</div>
  </div>;
}

export default ListPage;
