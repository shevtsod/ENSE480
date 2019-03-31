import Point from './Point'

export default class DatasetGenerator {
  /**
   * Generate an array of num points, half of which are within a circle with
   * innerRadius and have a value of 1, and half are within an outer ring with
   * radius outerRadius and have a value of -1
   *
   * @static
   * @param {*} num
   * @param {*} radius
   * @memberof DatasetGenerator
   */
  static generateCircularDataSet(num, radius = 5) {
    let points = []

    // Inner circle
    for (let i = 0; i < num / 2; i++) {
      // Random area of circle
      const a = Math.random() * 2 * Math.PI
      // Randomly generated radius
      const r = (radius / 2) * Math.sqrt(Math.random())

      const x = r * Math.cos(a)
      const y = r * Math.sin(a)

      points.push(new Point(x, y, -1))
    }

    // Outer ring
    for (let i = 0; i < num / 2; i++) {
      // Area of "inner" circle of ring
      const innerRadius = radius / 2 + 1
      // Random area of outer circle of ring
      const a = Math.random() * 2 * Math.PI
      // Randomly generated shifted radius for ring
      const r = Math.sqrt(
        Math.random() * (Math.pow(radius, 2) - Math.pow(innerRadius, 2)) +
          Math.pow(innerRadius, 2)
      )

      const x = r * Math.cos(a)
      const y = r * Math.sin(a)

      points.push(new Point(x, y, 1))
    }

    return points
  }
}
