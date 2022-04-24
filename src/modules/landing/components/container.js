import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    Avatar,
} from '@material-ui/core';
import { FiBookmark } from 'react-icons/fi';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

const ContainerComponent = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React Router
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <FiBookmark size={20} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} />
            </Box>
        </Container>
    )
}

export default ContainerComponent