import "./hospitalnearme.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import { LatLonContext } from "../../context/LatLonContext";
import Places from "../incidentForm/Places";

const myfunction = (rating) => {
  if (rating <= 0.5) return "Useless";
  else if (rating >= 0.5 && rating <= 1.3) return "Useless+";
  else if (rating > 1.3 && rating <= 1.8) return "Poor";
  else if (rating > 1.8 && rating <= 2.2) return "Poor+";
  else if (rating > 2.2 && rating <= 2.8) return "Ok";
  else if (rating > 2.8 && rating <= 3.2) return "Ok+";
  else if (rating > 3.2 && rating <= 3.8) return "Good";
  else if (rating > 3.8 && rating <= 4.2) return "Good+";
  else if (rating > 4.2 && rating <= 4.6) return "Excellent";
  else if (rating > 4.6 && rating <= 5) return "Excellent+";
};

const Hospitalnearme = ({ lati, longi, name, rating, isOpen, address }) => {
  //   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const { latitude, longitude, setLatitude, setLongitude } =
    useContext(LatLonContext);
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  const updatelatlon = () => {
    setLatitude(lati);
    setLongitude(longi);
    // <Places />
    console.log(lati + " " + longi + " " + latitude + " " + longitude);
  };
  return (
    <div className="hospitalcard" onClick={() => updatelatlon()}>
      <Card sx={{ width: "100%", margin: "4vh 5px" }}>
        {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png"
      /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="logoopen">
              <div
                style={{ background: `rgb(${x},${y},${z})` }}
                className="logohos"
              >
                {name.charAt(0)}
              </div>
              {/* <div className="hosname"> */}
              {name}
              {/* </div> */}
              {isOpen === true && <button className="openbutton">Open</button>}
              {!isOpen && <Button className="closebutton">Closed</Button>}
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{myfunction(rating)}</Box>
            </Box>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Hospitalnearme;
