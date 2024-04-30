import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
    const [loading, setLoading] = useState(true); // Add loading state

    // Simulate data loading delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Clean up timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? ( // Display loader if loading state is true
                <div className="container text-center mt-5" style={{ minHeight: "100vh"}}>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-8 mt-5 text-center">
                            <div className="">
                                <h3>CONTACT US</h3>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    defaultValue="Name"
                                    variant="filled"
                                    style={{ marginBottom: '16px' }}
                                />
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    defaultValue="Email"
                                    variant="filled"
                                    style={{ marginBottom: '16px' }}
                                />
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    defaultValue="Phone Number"
                                    variant="filled"
                                    style={{ marginBottom: '16px' }}
                                />
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    defaultValue="Message"
                                    variant="filled"
                                    style={{ marginBottom: '16px' }}
                                    multiline rows={3}
                                />
                                <Button variant="contained" 
                                    fullWidth
                                    sx={{
                                        padding: '15px 80px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: '20px',
                                        marginEnd: '20px',
                                        borderRadius: 0,
                                        fontSize: '1rem', textTransform: 'capitalize',
                                        '&:hover': {
                                            backgroundColor: 'grey',
                                        }
                                    }}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;
