import React from 'react';

class Footer extends React.Component {
    render() {
        const style = {
            color: "white",
            backgroundColor: "#9c2d9c",
            padding: "10px 20px",
            fontStyle: 'Roboto',
        };
        return(
            <div style={style}>
                <p>Copyright <i className="far fa-copyright"></i> 2021. All Rights Reserved.</p>
                </div>
        )   
    }
}
export default Footer;