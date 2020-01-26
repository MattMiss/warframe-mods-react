import React, {Component} from 'react';
//import Table from '../../containers/Table/Table';
import BasicTable from '../../containers/Table/BasicTable';
import ModNavigation from '../../component/Navigation/ModNavigation/ModNavigation';


class Layout extends Component {

    render() {
        return(
            <React.Fragment>
                <ModNavigation />
                <BasicTable />
            </React.Fragment>
            
        );
    };       
};

export default Layout;