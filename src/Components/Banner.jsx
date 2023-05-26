import React from 'react';
import WaterWave from 'react-water-wave';
const Banner = (props) => {
    return (
        <div className='heading-page header-text'>
            <WaterWave className='page-heading' interactive={false}>
                {() => (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='text-content'>
                                    <h4>{props.mainHeader}</h4>
                                    <h2>{props.headerText}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </WaterWave>
        </div>
    );
};

Banner.defaultProps = {
    mainHeader: 'SUKKOTH',
    headerText: 'A GREAT PLACE TO SHARE IDEA!',
};

export default Banner;
