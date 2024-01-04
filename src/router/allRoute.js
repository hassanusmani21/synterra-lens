import {Routes , Route } from "react-router-dom";
import {Form} from '../form/form1';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
};

export default AllRoute;

