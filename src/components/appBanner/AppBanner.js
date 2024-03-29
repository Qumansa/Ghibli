import './appBanner.sass';

const AppBanner = (props) => {
    const {title} = props;

    return (
        <section className="banner section">
            <h2 className="sr-only">Banner</h2>
            <div className="banner__container container">
                <span className="banner__text">Here you can find</span>
                <span className="banner__text">{title}</span>
            </div>
        </section>
    );
};

export default AppBanner;