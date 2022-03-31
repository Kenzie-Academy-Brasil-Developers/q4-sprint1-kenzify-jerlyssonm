
  
import * as yup from "yup";

const loginUserModel = yup.object().shape({
     username: yup.string().required(),
     password: yup.string().min(4).required()
 });

export default loginUserModel;