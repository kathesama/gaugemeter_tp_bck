import { ElectrovalvulaModel } from '../models/Electrovalvula.model';
import ElectrovalvulaRepository from '../repositories/electrovalvula.repository';

class ElectrovalvulaService {
  async get(props: Record<string, unknown>): Promise<any> {
    const query = {};
    // array destructuration
    const [total, electrovalvulas] = await Promise.all([
      ElectrovalvulaRepository.countDocuments(query),
      ElectrovalvulaRepository.find(query).skip(Number(props.from)).limit(Number(props.limit)),
    ]);

    return { total, electrovalvulas };
  }

  async getById(id: string): Promise<ElectrovalvulaModel> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = ElectrovalvulaRepository.findOne(query);
    return one;
  }

  async getAllById(id: string): Promise<ElectrovalvulaModel[]> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = ElectrovalvulaRepository.find(query);
    return one;
  }

  async add(electrovalvula: ElectrovalvulaModel): Promise<any> {
    const one: any = ElectrovalvulaRepository.create(electrovalvula);
    return one;
  }

  async patch(id: string, electrovalvula: ElectrovalvulaModel): Promise<any> {
    const one: any = ElectrovalvulaRepository.findByIdAndUpdate(id, electrovalvula, {
      returnOriginal: false,
    });

    return one;
  }

  async delete(id: string): Promise<any> {
    const one: any = ElectrovalvulaRepository.findByIdAndUpdate(id, { returnOriginal: false });
    return one;
  }
}

export default new ElectrovalvulaService();
