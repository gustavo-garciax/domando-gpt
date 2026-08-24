import './Header.css'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <header className="header-pizzaria">
        <div className="content-header">
          <h1>{props.titleHeader}</h1>
          <p>{props.textHeader}</p>
        </div>
      </header>
    </>
  )
};



export default Header;
