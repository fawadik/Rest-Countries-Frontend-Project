import React from "react";
import { useParams } from "react-router-dom";
import useCountry from "../custom-hooks/useCountry";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  styledCard: {
    maxWidth: "30%",
    marginLeft: "38%",
    marginTop: "2.5%",
  },
  media: {
    height: 250,
  },
  btn: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#1976D2",
  },
  name: {
    backgroundColor: "#1976D2",
    color: "white",
    height: "1.5rem",
    paddingBottom: "7%",
  },
  info: {
    variant: "h4",
    component: "h2",
    align: "center",
  },
});

function Country() {
  const { countryName } = useParams();
  const [data, err] = useCountry(countryName);

  const classes = useStyles();
  if (err) {
    return <p>There is something wrong!</p>;
  }

  if (data[0]) {
    console.log("hello", data[0].borders);
    return (
      <Card className={classes.styledCard}>
        <CardActionArea>
          <CardContent className={classes.name}>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              align="center"
              fontWeight="bold"
            >
              {data[0].name}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={data[0].flag}
            title="Country Flag"
          />
          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Native Name</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].nativeName}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Capital</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].capital}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Population</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].population}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Region</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].region}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Subregion</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].subregion}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Borders</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {data[0].borders ? (
                    data[0].borders.map((border) => <span>{border}, </span>)
                  ) : (
                    <p>No Borders</p>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Timezones</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data[0].timezones}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Languages</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {data[0].languages.map((lang) => (
                    <span>{lang.name} </span>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.btn}>
            <Link to="/" className={classes.btn}>
              Back
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
  return <p>Loading</p>;
}

export default Country;
