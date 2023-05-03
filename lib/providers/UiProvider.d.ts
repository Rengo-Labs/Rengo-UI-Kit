import React from 'react';
interface IUiProvider {
    children: any;
    themeName?: string;
}
export declare const UIProviderContext: React.Context<any>;
declare const UiProvider: (props: IUiProvider) => JSX.Element;
export default UiProvider;
