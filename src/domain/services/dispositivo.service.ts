import { DispositivoModel } from '../models/Dispositivo.model';
import DispositivoRepository from '../repositories/dispositivo.repository';

class DispositivoService {
  async get(props: Record<string, unknown>): Promise<any> {
    const query = {};
    // array destructuration
    const [total, dispositivos] = await Promise.all([
      DispositivoRepository.countDocuments(query),
      DispositivoRepository.find(query).skip(Number(props.from)).limit(Number(props.limit)),
    ]);

    return { total, dispositivos };
  }

  async getById(id: string): Promise<DispositivoModel> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = DispositivoRepository.findOne(query);
    return one;
  }

  async getAllById(id: string): Promise<DispositivoModel[]> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = DispositivoRepository.find(query);
    return one;
  }

  async add(dispositivo: DispositivoModel): Promise<any> {
    const one: any = DispositivoRepository.create(dispositivo);
    return one;
  }

  async patch(id: string, dispositivo: DispositivoModel): Promise<any> {
    const one: any = DispositivoRepository.findByIdAndUpdate(id, dispositivo, {
      returnOriginal: false,
    });

    return one;
  }

  async delete(id: string): Promise<any> {
    const one: any = DispositivoRepository.findByIdAndUpdate(id, { returnOriginal: false });
    return one;
  }
}

export default new DispositivoService();
