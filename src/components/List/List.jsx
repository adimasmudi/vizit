import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';


const List = ({ places , childClicked, isLoading})=>{
    const classes = useStyles();
    const [type, setType] = useState('restoran');
    const [rating, setRating] = useState('');
    const [elRefs, setElRefs] = useState([]);

    useEffect(()=>{
        const refs = Array(places?.length).fill().map((_,i)=> elRefs[i] || createRef());
        
        setElRefs(refs);

    },[places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restoran, Hotel, dan atraksi di sekitarmu
            </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e)=>setType(e.target.value)}>
                            <MenuItem value="restoran">Restoran</MenuItem>
                            <MenuItem value="hotel">Hotel</MenuItem>
                            <MenuItem value="atraksi">Atraksi</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                            <MenuItem value={0}>Semua</MenuItem>
                            <MenuItem value={3}>Di atas 3.0</MenuItem>
                            <MenuItem value={4}>Di atas 4.0</MenuItem>
                            <MenuItem value={4.5}>Di atas 4.5</MenuItem>
                        </Select>
                    </FormControl>

                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place,i) => (
                            <Grid ref={elRefs[i]} item key={i} xs={12}>
                                <PlaceDetails 
                                    place={place} 
                                    selected={Number(childClicked)===i}
                                    refProp={elRefs[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default List;