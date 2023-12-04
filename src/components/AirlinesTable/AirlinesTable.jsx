import { useSelector } from "react-redux";


function AirlinesTable() {
    const airlines = useSelector((store) => store.airlines)


    return(
        <table>{airlines.map((airline) => {
            return (
              <tr>
                <td>{airline}</td>
              </tr>
            )
          })}</table>
    )
}


export default AirlinesTable;