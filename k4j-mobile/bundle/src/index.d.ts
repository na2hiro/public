import { autorun, reaction, when } from "mobx";
import KifuStore from "./stores/KifuStore";
export declare const mobx: {
    autorun: typeof autorun;
    when: typeof when;
    reaction: typeof reaction;
};
export declare type Options = {
    responsive?: boolean;
};
export declare function loadString(kifu: string, idOrOptions?: string | Options, options?: Options): Promise<KifuStore>;
export declare function load(filePath: string, idOrOptions?: string | Options, options?: Options): Promise<KifuStore>;
