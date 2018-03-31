import { Schema, model, Document } from 'mongoose';
import { IHero } from '../class/hero';

export interface HeroModel extends IHero, Document { }

const modelSchema = new Schema({
  name: { type: String, required: true },
  ability: { type: String, required: true },
});

export const HeroModel = model<HeroModel>('Hero', modelSchema);

export const getHeroes = (limit: number = 100) => {
  return HeroModel.find().limit(limit);
};

export const addHero = (params: IHero) => {
  const rec = new HeroModel(params);
  rec.save();
  return rec;
};

export const editHero = (params: IHero) => {
  const { name, ability } = params;
  const updateObj = { name, ability };
  return HeroModel.findByIdAndUpdate(
    params.id,
    { $set: updateObj },
    { new: true }
  );
};

export const removeHero = (id: string) => {
  return HeroModel.findByIdAndRemove(id);
};
