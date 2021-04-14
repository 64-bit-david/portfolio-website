
const Projects = () => {



  const card1 = () => {
    return (
      <div className="project-card project-card-1">
        <div className="card-header">
          <h2>Writer's Desk</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img alt="Snapshot of Writer's Desk Site" />
            </div>
            <div className="card-desc">
              <p>A full stack web app for creative writers to share their work. Post a story or snippet, comment on other stories and donate to other writers</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="project-tech-list">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>SASS</li>
                <li>Nodejs</li>
                <li>MongoDb</li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const card2 = () => {
    return (
      <div className="project-card project-card-2">

      </div>
    )
  }



  const card3 = () => {
    return (
      <div className="project-card project-card-3">

      </div>
    )
  }

  const card4 = () => {
    return (
      <div className="project-card ">

      </div>
    )
  }

  return (
    <div className="projects-container">
      {card1()}
      {/* {card2()}
      {card3()}
      {card4()} */}

    </div>
  )
}

export default Projects;
