import { LinksPagesAppModel } from "./links-pages-app";
import { SocialIconModel } from "./social-icon";

export class FooterModel {
    linksPagesAppModel!: LinksPagesAppModel[];
    socialIcons!: SocialIconModel[];
    copyright!:string;
}