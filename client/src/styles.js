import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        width: '60px'
    },
    div: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
}));

// https://gist.github.com/adrianhajdin/d99aaa67124f0de7667fd3937715fb26