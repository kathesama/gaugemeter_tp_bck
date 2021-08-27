import { MedicionModel } from '../models/Medicion.model';
import MedicionRepository from '../repositories/medicion.repository';

class MedicionService {
  async get(props: Record<string, unknown>): Promise<any> {
    const query = {};
    // array destructuration
    const [total, mediciones] = await Promise.all([
      MedicionRepository.countDocuments(query),
      MedicionRepository.find(query).skip(Number(props.from)).limit(Number(props.limit)),
    ]);

    return { total, mediciones };
  }

  async getById(id: string): Promise<MedicionModel> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = MedicionRepository.findOne(query);
    return one;
  }

  async getAllById(id: string): Promise<MedicionModel[]> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = MedicionRepository.find(query);
    return one;
  }

  async add(medicion: MedicionModel): Promise<any> {
    const one: any = MedicionRepository.create(medicion);
    return one;
  }

  async patch(id: string, medicion: MedicionModel): Promise<any> {
    const one: any = MedicionRepository.findByIdAndUpdate(id, medicion, {
      returnOriginal: false,
    });

    return one;
  }

  async delete(id: string): Promise<any> {
    const one: any = MedicionRepository.findByIdAndUpdate(id, { returnOriginal: false });
    return one;
  }
}

export default new MedicionService();
