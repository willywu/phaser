/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the given Rectangle object.
 *
 * @function Phaser.Geom.Rectangle.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to calculate the area of.
 *
 * @return {number} The area of the Rectangle object.
 */
var Area = function (rect)
{
    return rect.width * rect.height;
};

module.exports = Area;
