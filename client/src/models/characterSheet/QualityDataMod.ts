export class QualityDataMod {
  enabled: boolean;

  constructor(
    public source: string,
    public operator: string,
    public value: string
  ) {
    this.enabled = true;
  }
}
