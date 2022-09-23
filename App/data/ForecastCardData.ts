export class ForecastCardData {
  top: ForecastCardItem;
  bottom: ForecastCardItem;

  constructor(top: ForecastCardItem, bottom: ForecastCardItem) {
    this.top = top;
    this.bottom = bottom;
  }
}
