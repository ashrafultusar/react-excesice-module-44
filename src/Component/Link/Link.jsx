import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 font-medium ">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propType = {
    route:PropTypes.object
}

export default Link;