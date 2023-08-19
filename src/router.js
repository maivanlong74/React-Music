import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./utils/router";
import App from "./Pages/User/masterLayout/App";
import KhamPha from "./Pages/User/Discover";
import ThuVien from "./Pages/User/Library"

const renderUserRounter = () => {
  const userRouters = [
    {
      path: ROUTER.USER.KHAMPHA,
      component: <KhamPha />,
    },
    {
      path: ROUTER.USER.THUVIEN,
      component: <ThuVien />,
    },
  ];

  return(
    <App>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component}/>
        ))}
      </Routes>
    </App>  
  );
};

const RouterCustom = () =>{
  return renderUserRounter();
}

export default RouterCustom;
