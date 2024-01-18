import {Routes , Route } from "react-router-dom";
import {Form} from '../form/form1';
import {Form2} from '../form/form2'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form/>} />
      <Route path="/form2" element={<Form2/>} />
    </Routes>
  );
};

export default AllRoute;

