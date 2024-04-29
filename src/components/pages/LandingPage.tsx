import "../../styles.css"
import NavBar from "../layout/Navbar";

export default function LandingPage() {
  return (
    <NavBar>
      <div className="text-center m-3">
        <h2 className="eslogan">
          CAPTURA TUS IDEAS EN CUALQUIER MOMENTO, <br /> EN CUALQUIER LUGAR
        </h2>
        <br />
        <h5>Haz que tus pensamientos cobren vida con en tus notas.</h5>
      </div>
    </NavBar>
  );
}
