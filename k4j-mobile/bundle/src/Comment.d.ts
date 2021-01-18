import KifuStore from "./stores/KifuStore";
import * as React from "react";
export interface IProps {
    kifuStore: KifuStore;
}
export default class Comment extends React.Component<IProps> {
    render(): JSX.Element;
}
