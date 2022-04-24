import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        margin: {
            margin: theme.spacing(1),
        },
        paper: {
            display: 'flex',
            color: '#999999',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1.5rem 1.5rem',
            backgroundColor: '#fff',
            borderRadius: '2.5px',
            boxShadow: '0 5px 15px rgba(0,0,0,.5)',
            border: '1px solid rgba(0,0,0,.2)',
            outline: '0px',
            maxWidth: '355px',
            minWidth: '355px',
            minHeight: '560px',
            maxHeight: '610px',
        },
        form: {
            marginTop: theme.spacing(4),
            width: '100%',
        },
        submitBtn: {
            margin: theme.spacing(3, 0, 2),
            backgroundColor: '#eb6d07',
            borderColor: '#eb6d07',
            color: '#fff',
            display: 'block',
            width: '100%',
            padding: '15px',
            height: '50px',
            maxHeight: '50px',
            fontWeight: '400px',
            transition: '.25s',
            minWidth: '120px',
            borderRadius: '2.5px',
            borderWidth: '1px',
            lineHeight: '20px',
            textTransform: 'none',
            "&:hover, &:focus": {
                backgroundColor: '#eb6d07',
            }
        },
        facebookBtn: {
            border: '1px solid #29487d',
            position: 'relative',
            color: '#fff',
            width: '100%',
            padding: '15px',
            height: '50px',
            maxHeight: '50px',
            fontWeight: '400px',
            transition: '.25s',
            minWidth: '120px',
            lineHeight: '20px',
            borderRadius: '2.5px',
            textTransform: 'none',
            marginBottom: '20px',
            backgroundColor: '#3b5998',
            "&:hover, &:focus": {
                backgroundColor: '#3b5998',
            }
        },
        googleBtn: {
            border: '1px solid #ea4335',
            position: 'relative',
            color: '#ea4335',
            width: '100%',
            padding: '15px',
            height: '50px',
            maxHeight: '50px',
            fontWeight: '400px',
            transition: '.25s',
            minWidth: '120px',
            lineHeight: '20px',
            borderRadius: '2.5px',
            textTransform: 'none',
            marginBottom: '20px',
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
        formControl: {
            width: '33%'
        }
    };
});