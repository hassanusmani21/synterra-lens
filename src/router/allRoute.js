import {Routes , Route } from "react-router-dom";
import {Form2} from '../form/form2'
import {SalesInquiry} from '../form/salesInquiryForm/salesinquiry'
import {Quotation} from '../form/quotationId/quotationId'
 
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/SalesInquiry" element={<SalesInquiry/>} />
      <Route path="/Quotation" element={<Quotation/>} />
      <Route path="/form2" element={<Form2/>} />
    </Routes>
  );
};

export default AllRoute;

