import{Box,Typography,useTheme,Button} from "@mui/material";
import{DataGrid,} from "@mui/x-data-grid";
import{ tokens} from "../../theme";
import{ mockDataInvoices} from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import StatBox from "../../components/StatBox";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";
import {Link} from  "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Projects = () => {
    const theme = useTheme ();
    const colors = tokens(theme.palette.mode);
   return(
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROJECTS" subtitle="Welcome to My Projects" />

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
     display="grid"
    gridTemplateColumns="repeat(12,1fr)"
    gridAutoRows="200px"
    gap="20px"    
    >
        {/* ROW 1*/}
        <Stack direction="column" spacing={10}>
        <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          boxShadow="inset 5px 5px 10px #000000 , 
  inset -5px -5px 10px blue;"
          display="flex"
          alignItems="top"
          justifyContent="top"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
           
        <Box display="flex" justifyContent="top" alignItems="top" backgroundColor="#030b1c" boxShadow="inset 5px 5px 10px #000000 , 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/youtube.png`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Typography fontSize="30px" fontWeight="bold" padding="10px 20px" color={colors.greenAccent[500]}>
                  Youtube Clone
                </Typography>
                <Typography fontWeight="bold" color={colors.greenAccent[400]}>
                Description
              </Typography>
              <Typography color={colors.blueAccent[100]} fontWeight="600" fontSize="13px">
                Youtube clone is a simple project that is used to stream videos and movies.It was developed using react 
                framework and is integrated with popular APIs that help in accessing videos,
                it gets better in that it allows you to watch any movie and any music video on the internet.Please feel 
                free to download and try the app
              </Typography>
              <Link to=".." relative="path">
                  Click to visit youtube project
              </Link>
            
              </Box>
              
             

            
        </Box>
        <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          boxShadow="inset 5px 5px 10px #000000 , 
  inset -5px -5px 10px blue;"
          display="flex"
          alignItems="top"
          justifyContent="top"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
           
        <Box display="flex" justifyContent="top" alignItems="top" backgroundColor="#030b1c" boxShadow=" inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/twitter.jpg`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Typography fontSize="30px" fontWeight="bold" padding="10px 20px" color={colors.greenAccent[500]}>
                  Tweepy-Bot
                </Typography>
                <Typography fontWeight="bold" color={colors.greenAccent[400]}>
                Description
              </Typography>
              <Typography color={colors.blueAccent[100]} fontWeight="600" fontSize="13px">
                Tweepy-Bot is a simple project that is used to stream tweets and auto comment.It was developed using python 
                programming language and is integrated with popular APIs such as tweepy that help in accessing live tweets,
                it gets better in that it allows you to auto reply to tweets and also like retweet tweets that are of a certain 
                creteria or topic
              </Typography>
              <Link  color="red
              "to=".." relative="path" >
                  Click to visit Tweepy-Bot project
              </Link>
            
              </Box>
              
             

            
        </Box>
        
       </Stack>
       <Stack  direction="column" spacing={10}>
        
        

       <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          boxShadow="inset 5px 5px 10px #000000 , 
  inset -5px -5px 10px blue;"
          display="flex"
          alignItems="top"
          justifyContent="top"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
           
        <Box display="flex" justifyContent="top" alignItems="top" backgroundColor="#030b1c" boxShadow=" inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/gym.jpg`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Typography fontSize="30px" fontWeight="bold" padding="10px 20px" color={colors.greenAccent[500]}>
                  Quest-Gym
                </Typography>
                <Typography fontWeight="bold" color={colors.greenAccent[400]}>
                Description
              </Typography>
              <Typography color={colors.blueAccent[100]} fontWeight="600" fontSize="13px">
               Inpired by my brother who is a Sport Scientist I created this project to help him gain online customers
               and also help his customers access his services from the comfort of their home.It consists of a subscription 
               and online payment method.Please feel free to subscribe to some of his services
              </Typography>
              <Link to=".." relative="path">
                  Click to visit Quest-Gym project
              </Link>
            
              </Box>
              
             

            
        </Box>
        <Box
          gridColumn="span3"
          backgroundColor={colors.primary[400]}
          boxShadow="inset 5px 5px 10px #000000 , 
  inset -5px -5px 10px blue;"
          display="flex"
          alignItems="top"
          justifyContent="top"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
           
        <Box display="flex" justifyContent="top" alignItems="top" backgroundColor="#030b1c" boxShadow=" inset 5px 5px 10px #000000, 
  inset -5px -5px 10px blue;">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/netflix.png`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Typography fontSize="30px" fontWeight="bold" padding="10px 20px" color={colors.greenAccent[500]}>
                  Netflix Clone
                </Typography>
                <Typography fontWeight="bold" color={colors.greenAccent[400]}>
                Description
              </Typography>
              <Typography color={colors.blueAccent[100]} fontWeight="600" fontSize="13px">
                Netflix clone is a simple project that is used to stream movies.It was developed using react 
                framework and is integrated with popular APIs that help in accessing videos,
                it gets better in that it allows you to watch any movie  on the internet.The only difference with 
                youtube clone is that you can only watch movies and not music videos.
              </Typography>
              <Link to=".." relative="path">
                  Click to visit Netflix Clone project
              </Link>
            
              </Box>
              
             

            
        </Box>

       </Stack>
    </Box>
    </Box>


   );



};
export default Projects;