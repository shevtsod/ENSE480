import Point from './Point'

export default class DatasetGenerator {
  /**
   * Generate a random number in a range
   *
   * @static
   * @param {Number} min Minimum value
   * @param {Number} max Maximum value
   * @memberof DatasetGenerator
   */
  static generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }

  /**
   * Generate an array of num points, half of which are within a circle with
   * innerRadius and have a value of 1, and half are within an outer ring with
   * radius outerRadius and have a value of -1
   *
   * @static
   * @param {*} num
   * @param {*} innerRadius
   * @param {*} outerRadius
   * @memberof DatasetGenerator
   */
  static generateCircularDataSet(num, innerRadius, outerRadius) {
    // The inner radius of the outer ring should be slighly larger than the
    // radius of the inner circle
    const ringInnerRadius = innerRadius + (outerRadius - innerRadius) / 2

    let points = []

    // Inner circle, value 1
    for (let i = 0; i < num / 2; i++) {
      const x = this.generateRandomNumber(-innerRadius, innerRadius)
      const y = this.generateRandomNumber(-innerRadius, innerRadius)

      points.push(new Point(x, y, 1))
    }

    // Outer ring, value -1
    for (let i = 0; i < num / 2; i++) {
      const xPos = this.generateRandomNumber(ringInnerRadius, outerRadius)
      const yPos = this.generateRandomNumber(ringInnerRadius, outerRadius)

      // Generate a second set of random numbers to set the sign of x and y
      const x = Math.random() >= 0.5 ? xPos : -xPos
      const y = Math.random() >= 0.5 ? yPos : -yPos

      points.push(new Point(x, y, -1))
    }

    return points
  }
}
