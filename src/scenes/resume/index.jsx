import{Box, Typography,useTheme,Button} from "@mui/material";
import{DataGrid} from "@mui/x-data-grid";
import{ tokens} from "../../theme";
import{ mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


const Resume= () => {
    const theme = useTheme ();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px"
        sx ={{flexDirection:'row-reverse'}}
        >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="RESUME" subtitle="Welcome To a Sample of My Resume" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Resume
          </Button>
        </Box>
        
      </Box>
      <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="top"
          justifyContent="top"
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
              <Box justifyContent="left" alignItems="left" boxShadow="inset -5px -5px 10px #000000 , 
  inset 5px 5px 10px  blue;">
                <Typography justifyContent="center" alignItems="center" fontSize="30px" fontWeight="600" padding="10px 20px" color={colors.greenAccent[500]}>
                  RESUME
                </Typography>
                
              <Typography fontWeight="bold" color={colors.blueAccent[400]} fontSize="15px">
                Key Proffesional Skills
              </Typography>
              <Typography dispaly="flex" color={colors.blueAccent[300]} fontWeight="200" fontSize="15px" fontFamily="Oswald">
              ~ Computer skills: Proficient in programming languages such as Python, C++ and C, with experience developing both web and desktop applications.Skilled in database management and design, with expertise in SQL databases.Additional skills include experience in software development tools such as Visual Studio code. I also have skills in operating Debian operating systems such as Ubuntu and Kali Linux.<br/>
    ~ Networking skills: Proficient in configuring and maintaining network infrastructure, including routers, switches, firewalls and access points. Skilled in network design and implementation, with expertise in TCP/IP, DNS, DHCP and VLANS.<br/>~ Additional skills include troubleshooting and resolving network issues, implementing network security measures, and familiarity with network monitoring tools such as Wireshark. 
    <br/>~ Problem-solving skills: This involves identifying and solving problems in a creative and efficient way.
    <br/>~ Adaptability and flexibility: I can adapt to changing circumstances and remain flexible in the face of challenges.<br/>~ An ability to anticipate and analyse problems and to trace them to their root cause. <br/>~ Meticulous attention to detail. 
              </Typography>
              
            
              </Box>
              
             

            
        </Box>
      </Box>

    );
   
}
export default Resume;