import "./styles.css";
import { Signup } from "./Signup";

export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img
            className="img-fluid w-100"
            src="https://lh3.googleusercontent.com/proxy/RK-cH1vfnRhor8_JvMiD7ruSC8EMo4q841ObndeCl3Q4gcx5eLJ_loZxo_Zb7YniLq5olWEXnEBApe-YQVJZ1ILynGnd0G8wY4wldVmogTPRfMomI1iP4f36VnrIraKO6R0UyKoAgE4dQ7jz2Kk80JqHwlM0D_eyCw"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
