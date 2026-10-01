import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    // const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakf0_CmObz9AGjB0x_jlDU1X5dA2BxHUA84p5LtF9JQ&s=10"

    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VbP_h5-ONRbOZljHTo8CGDsS15OW-RihbwipUROPQQ&s=10";

    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFty7qFz5TmqzOvdG5-k5VV0dsluvJW2oa5nGW3Lkpvg&s=10";

    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1dgGwDFf33WgdQ2kzusegFoZf6O1q2YNTHCD0iwtpg&s=10";

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 70 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}{""}
                { info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'  }}>
                <p>Temperature - {info.temp}&deg;C</p>
                <p>Humidity - {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                 <p>Max Temp = {info.tempMax}&deg;C</p>
                 <p>The Weather FeelsLike = {info.feelslike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
};