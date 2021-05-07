import { NavLink } from 'react-router-dom';
function Headers(props) {
  return (
    <div className="flex m-8 ml-12 text-3xl">
      <NavLink to="/" activeClassName="active" exact>
        <p className="mr-5">Popular</p>
      </NavLink>
      <NavLink to="/battle" activeClassName="active">
        <p>battle</p>
      </NavLink>
    </div>
  );
}

export default Headers;
