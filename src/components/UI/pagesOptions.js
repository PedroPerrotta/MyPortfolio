const PagesOptions = (props) => {
    console.log(props.lang);
    return <div className="header">
        <button type="button" className="header-link" onClick={() => props.onClick('about')}>{props.lang === "english" ? "About Me" : "Sobre Mi"}</button>
        <button type="button" className="header-link" onClick={() => props.onClick('experience')}>{props.lang === "english" ? "Experience" : "Experiencia"}</button>
        <button type="button" className="header-link" onClick={() => props.onClick('projects')}>{props.lang === "english" ? "Projects" : "Proyectos"}</button>
    </div>
}

export default PagesOptions;