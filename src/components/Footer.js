import React from 'react';

const style = {
    color: "white",
    backgroundColor: "#9c2d9c",
    padding: "10px 20px",
    fontStyle: 'Roboto',
};
const footer = {
    fontSize : "20px",
}
class Footer extends React.Component {
   render() {
        return (
            <div style={style}>
                <p style={footer}>Copyright <i className="far fa-copyright"></i> 2021. All Rights Reserved.</p>
            </div>
        )   
    }
}
export default Footer;