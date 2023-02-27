// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Dialog from '@mui/material/Dialog';
// import FormDialog from '../Component/DonorRegForm';
// import PatientRegForm from '../Component/PatientRegForm';
// import DoctorRegForm from '../Component/DoctorRegForm';

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const Home = () => {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Dialog
//             sx={{ ml: "40%", width: "60%", mt: -10 }}
//             open={true}
//         >
//             <Box sx={{ width: 600 }}>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                     <Tabs
//                         variant="scrollable"
//                         scrollButtons={false}
//                         value={value}
//                         onChange={handleChange}
//                         textColor="primary"
//                         aria-label="basic tabs example"
//                         TabIndicatorProps={{
//                             style: {
//                                 backgroundColor: "white"
//                             }
//                         }}
//                         sx={{
//                             '& .MuiTabs-flexContainer': {
//                                 display: 'flex',
//                                 justifyContent: 'space-evenly',
//                                 backgroundColor: '#243550',
//                             },
//                             "& .MuiTab-root.Mui-selected": {
//                                 color: '#fff'
//                             }
//                         }}
//                     >
//                         <Tab sx={{ color: "#b5adad" }} label="Doctor Form" {...a11yProps(0)} />
//                         <Tab sx={{ color: "#b5adad" }} label="Donor Form" {...a11yProps(1)} />
//                         {/*<Tab sx={{ color: "#fff" }} label="Patient Form" {...a11yProps(2)} />*/}
//                     </Tabs>
//                 </Box>
//                 <TabPanel value={value} index={0}>
//                     <DoctorRegForm />
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     <FormDialog />
//                 </TabPanel>
//                 {/*<TabPanel value={value} index={2}>
//                     <PatientRegForm />
//                     </TabPanel>*/}
//             </Box>
//         </Dialog >
//     );
// }

// export default Home


import React from 'react'
import ChooseLogin from '../Login/ChooseLogin'

const Home = () => {
    return (
        <div>
            <ChooseLogin />
        </div>
    )
}

export default Home
