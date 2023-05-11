import PropTypes from 'prop-types';
import './title.css'
function Title({ title, content }) {

    return (

        <>
            <div className="title">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>

        </>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Title