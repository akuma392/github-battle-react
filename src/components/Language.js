import { NavLink } from 'react-router-dom';

let language = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

function Language(props) {
  return (
    <ul className="flex text-xl justify-center text-green-600">
      {language.map((elm) => {
        return (
          <li className="">
            {/* <NavLink to={`/${elm}`}> */}
            <p
              onClick={() => props.handleClick(elm)}
              className="mr-2 font-bold"
              id={props.state.elm == elm ? 'active' : ''}
            >
              {elm}
            </p>
            {/* </NavLink> */}
          </li>
        );
      })}
    </ul>
  );
}

export default Language;
