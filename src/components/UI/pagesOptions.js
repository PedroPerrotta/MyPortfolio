const PagesOptions = (props) => {
    return <div className="header">
        <button type="button" className="header-link" onClick={() => props.onClick('about')}>About Me</button>
        <button type="button" className="header-link" onClick={() => props.onClick('experience')}>Experience</button>
        <button type="button" className="header-link" onClick={() => props.onClick('projects')}>Projects</button>
    </div>
}

export default PagesOptions;