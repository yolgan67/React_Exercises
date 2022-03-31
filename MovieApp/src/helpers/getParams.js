// HOC-High Order Component

import { useParams } from "react-router-dom";

  const withRouter = WrappedCoumponent=>props=>{
  //react-router-dom v6 hooks
  const params =useParams()
  return <WrappedCoumponent {...props} params={params} />
}
  export default withRouter