import React from 'react';



function WithLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return (<Component {...props} />);
    }
}


      export default WithLoading;