import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';



export default function Layout({ style }) {
    return (
        <motion.div 
            className='allclients'
            borderbox
            exit={{ opacity: 0 }}
            initial="initial"
            animate="visible"
            drag="x"
            dragConstraints={{ left: 100, right: -100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <h2 className="list-of-clients-title">Meus Clientes</h2>
            <ul className="list-of-clients" data-lists>
                <li className="client-name">Work</li>
            </ul>
        

        
                <form action="" data-new-client-form>
                    <input 
                        type="text"
                        className="newClientname"
                        data-new-list-input
                        placeholder="New client Name"
                        aria-label="New client name"
                    />
                    <button
                        className="btn client" button-add-to-list
                        aria-label="create new client">+
                    </button>
            
                </form>
        


            <div
                className="">
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >








                </Grid>
            </div>
        </motion.div>    

    )    
}




Layout.defaultProps = {
    className: null,
    style: null,
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
    className: PropTypes.string,
    style: PropTypes.shape(),
};

