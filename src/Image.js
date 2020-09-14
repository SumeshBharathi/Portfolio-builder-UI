import React from "react";
import ReactDOM from "react-dom";
import { Upload } from "@progress/kendo-react-upload";

class Image extends React.Component {
  render() {
    return (
      <Upload
        batch={false}
        multiple={true}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
        removeUrl={
          "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
        }
      />
    );
  }
}

ReactDOM.render(<Image />, document.querySelector("my-app"));
export default Image ;