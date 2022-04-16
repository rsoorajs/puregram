import { inspectable } from 'inspectable'

import { TelegramMaskPosition } from '../../telegram-interfaces'

/**
 * This object describes the position on faces where a mask should be placed
 * by default.
 */
export class MaskPosition {
  constructor(private payload: TelegramMaskPosition) { }

  public get [Symbol.toStringTag](): string {
    return this.constructor.name
  }

  /**
   * The part of the face relative to which the mask should be placed.
   * One of `forehead`, `eyes`, `mouth`, or `chin`.
   */
  public get point(): TelegramMaskPosition['point'] {
    return this.payload.point
  }

  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size,
   * from left to right. For example, choosing `-1.0` will place mask just to
   * the left of the default mask position.
   */
  public get xShift(): number {
    return this.payload.x_shift
  }

  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size,
   * from top to bottom. For example, `1.0` will place the mask just below the
   * default mask position.
   */
  public get yShift(): number {
    return this.payload.y_shift
  }

  /** Mask scaling coefficient. For example, `2.0` means double size. */
  public get scale(): number {
    return this.payload.scale
  }
}

inspectable(MaskPosition, {
  serialize(position: MaskPosition) {
    return {
      point: position.point,
      xShift: position.xShift,
      yShift: position.yShift,
      scale: position.scale
    }
  }
})
