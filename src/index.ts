import faker from 'faker';
import { Model } from 'mongoose';

class Factory {
  private blueprint: Function;
  private model: Model<any, any>;

  constructor(model: Model<any, any>, blueprint: Function) {
    this.model = model;
    this.blueprint = blueprint;
  }

  public static define(model: Model<any, any>, blueprint: Function) {
    const factory = new this(model, blueprint);

    return factory;
  }

  /**
   *
   * @param count
   * @returns Promise<boolean>
   */
  public async create(count: number = 1): Promise<boolean> {
    for (let i = 0; i < count; i++) {
      await this.model.create(this.blueprint(faker));
    }

    return true;
  }
}

export { Factory };
