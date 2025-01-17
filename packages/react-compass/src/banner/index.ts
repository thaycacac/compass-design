import Banner from './banner'
import BannerDescription from './banner-description'
import BannerImage from './banner-image'
import BannerTitle from './banner-title'

export type {BannerProps} from './banner'
export type {BannerDescriptionProps} from './banner-description'
export type {BannerImageProps} from './banner-image'
export type {BannerTitleProps} from './banner-title'

Banner.Image = BannerImage
Banner.Title = BannerTitle
Banner.Description = BannerDescription

export default Banner
