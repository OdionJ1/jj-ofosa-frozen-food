import React from 'react';
import {Breadcrumbs as MUIBreadcrumbs, Link, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import { withRouter } from 'react-router-dom'


const Breadcrumbs = ({ history, location }) => {
    const { pathname } = location
    const pathnames = pathname.split("/").filter(x => x)
    console.log(pathnames)
    return (
        <MUIBreadcrumbs aria-label="breadcrumb" separator=">">
        <Link href="/" color="inherit">
            <HomeIcon style={{marginBottom: '0.3em', padding: 0}} />
            Home
        </Link>
        {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
            return index === pathnames.length-1? <Typography key={index} color="textPrimary">{pathname}</Typography> : <Link key={index} href={routeTo}>{pathname}</Link> 
        })}
        {/* <Typography color="textPrimary"> {pathnames[0]}</Typography> */}
        </MUIBreadcrumbs>
    );
}

export default withRouter(Breadcrumbs)
