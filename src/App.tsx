import React from 'react';
import DocumentTitle from 'react-document-title';

import { AppMainWrapper } from './modules/AppMainWrapper/AppMainWrapper.component';


export const App: React.FC = () => {
    return (
        <DocumentTitle title="Finn den råeste roomie med oss">
            <AppMainWrapper />
        </DocumentTitle>
    );
};
