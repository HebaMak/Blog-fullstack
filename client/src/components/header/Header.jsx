import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/hapiii/image/upload/v1647033064/fskcfzpjurhe4zhwdyln.jpg"
        alt="header image"
      />
    </div>
  )
}

export default Header