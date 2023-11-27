import React, { useContext, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const listItems = [
    { text: 'Home', path: '/' },
    { text: 'Bio data', path: '/bio' },
    { text: 'Dashboard', path: '/dashboard/userInfo' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact Us', path: '/contact' },
    // Add more items as needed
];

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const toggleDrawer = (open) => (event) => {
        setIsDrawerOpen(open);
    };

    const list = (
        <List onClick={toggleDrawer(false)}>
            {listItems.map((item, index) => (
                <ListItem button key={index} component={Link} to={item.path}>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    );

    const desktopHeader = (
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* Replace with your logo or icon */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Logo/Title
                    </Typography>
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    {listItems.map((item, index) => (
                        <Button component={Link} to={item.path} color="inherit" key={index}>
                            {item.text}
                        </Button>
                    ))}
                </Typography>


                {
                    user ?
                    
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center border'>
                                <p className='p-1'>{user.displayName && user.displayName.length > 8
                                    ? `${user.displayName.slice(0, 8)}`
                                    : user.displayName}
                                </p>
                                <img className='h-12 w-12 rounded-full p-1' src={user.photoURL} alt="" />
                                <h2>{user.email}</h2>
                            </div>
                            <Button onClick={handleLogout} color="inherit">
                                LogOut
                            </Button>
                        </div>
                        :
                        <Button component={Link} to="/login" color="inherit">
                            Login
                        </Button>
                }
            </Toolbar>
        </AppBar>
    );

    const mobileHeader = (
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    {/* Logo or Title in the middle */}
                </Typography>

                {
                    user ?
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center border'>
                                <p className='p-1'>{user.displayName && user.displayName.length > 8
                                    ? `${user.displayName.slice(0, 8)}`
                                    : user.displayName}
                                </p>
                                <img className='h-12 w-12 rounded-full p-1' src={user.photoURL} alt="" />
                            </div>
                            <Button onClick={handleLogout} color="inherit">
                                LogOut
                            </Button>
                        </div>
                        :
                        <Button component={Link} to="/login" color="inherit">
                            Login
                        </Button>
                }
            </Toolbar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
        </AppBar>
    );

    return (
        <React.Fragment>
            {isMobile ? mobileHeader : desktopHeader}
        </React.Fragment>
    );
};

export default Header;
