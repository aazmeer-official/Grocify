import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FruitsAndVeggies from "../../assets/fruits-and-veggies.png"
import ButtonMain from '../utils/ButtonMain';
export default function ActionAreaCard({heading,description,imageLink}) {
  return (
    <Card sx={{ maxWidth: 345,
        backgroundColor: "#F7F7F7",
        borderRadius:"10px",
        padding:"7px"
    }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageLink}
          alt="green iguana"
          sx={{
            height:"150px"
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className='font-bold'>
                {heading}
            </div>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' ,marginTop:"10px", marginBottom:"15px"}}>
            {description}
          </Typography>
          <ButtonMain text="Shop All"/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}