import { SourceSet } from './SourceSet';
export class Banner {
  public Heading: string;
  public ImageSource: string;;
  public AltText: string;
  public SourceSet: SourceSet[];
  constructor(heading: string, imageSource: string, altText: string, sourceSet: SourceSet[]) {
    this.Heading = heading;
    this.ImageSource = imageSource;
    this.AltText = altText;
    this.SourceSet = sourceSet;
  }
}
