import React, {} from 'react';

const Context = React.createContext(
    {
        isCancelled: false,
        isSubmitted: false,
    }
);

export default Context;