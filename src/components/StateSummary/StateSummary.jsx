// import React, {useState, useEffect} from 'react'
// import {Box, Typography} from '@material-ui/core'
// import {fetchCountryStates} from '../../api/index'
// // import Loader from '../Loader/Loader'
// import styles from './StateSummary.module.css'
// // import BarGraph from './BarGraph'

// function StateSummary({selectedState}){
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//     console.log(data)

//     useEffect(()=>{
//         setLoading(true)
//         async function fetchData(){
//             const result = await fetchCountryStates(selectedState);
//             setData(result)
//             setLoading(false)
//         }
//         fetchData()
//     }, [selectedState])

//     if(loading){
//         return 'Loading...'
//     }

//     return(
//         // <Box className={styles.container}>
//         //     <Box>
//         //         <Typography variant="h6" color="textSecondary">Confirmed:{data[0].Confirmed}</Typography>
//         //         <Typography variant="h6" color="textSecondary">Active:{data[0].Active}</Typography>
//         //         <Typography variant="h6" color="textSecondary">Recovered:{data[0].Recovered}</Typography>
//         //         <Typography variant="h6" color="textSecondary">Deaths:{data[0].Death}</Typography>
//         //     </Box>
//         //     {/* <BarGraph data={data}/> */}
//         //     <Box>
                
//         //     </Box>
//         // </Box>
//     )
// }

// export default StateSummary