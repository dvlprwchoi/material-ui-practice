import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Cards() {
  return (
    <div className="cards">
      <h2>Cards</h2>
      <h3>Basic Cards</h3>
      <Card sx={{ maxWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <h3>Primary Action Cards</h3>
      <Card sx={{ maxWidth: 275 }}>
        <CardActionArea href="https://woosikchoi.com" target="_blank">
          <CardMedia
            component="img"
            height="140"
            image="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/portfolio-screenshot-desktop-20220124.png?raw=true"
            alt="Woo-Sik's website"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Woo-Sik's Portfolio Website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hello
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 275 }}>
        <CardActionArea
          href="https://woosik-coffeeholic.netlify.app"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/coffeeholic-img-20220122.png?raw=true"
            alt="Coffeholic website"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Coffeeholic
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is Coffeeholic Website.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
