const CovidData = ({states}) => {
    return(
        <>
        {
            states.map((e) => {
                const {id,state, confirmed, active, recovered, deaths} = e
                return(
                    <tr key={id}>
                        <td>{state} </td>
                        <td>{confirmed} </td>
                        <td>{active} </td>
                        <td>{recovered} </td>
                        <td>{deaths} </td>
                    </tr>
                )
            })
        }
        </>
    )
}
export default CovidData;