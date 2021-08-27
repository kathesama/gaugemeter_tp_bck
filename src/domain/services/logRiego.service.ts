import { LogRiegoModel } from '../models/LogRiego.model';
import LogRiegoRepository from '../repositories/logRiego.repository';

class LogRiegoService {
  async get(props: Record<string, unknown>): Promise<any> {
    const query = {};
    // array destructuration
    const [total, logRiegos] = await Promise.all([
      LogRiegoRepository.countDocuments(query),
      LogRiegoRepository.find(query).skip(Number(props.from)).limit(Number(props.limit)),
    ]);

    return { total, logRiegos };
  }

  async getById(id: string): Promise<LogRiegoModel> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = LogRiegoRepository.findOne(query);
    return one;
  }

  async getAllById(id: string): Promise<LogRiegoModel[]> {
    const query = {
      $and: [{ _id: id }],
    };
    const one: any = LogRiegoRepository.find(query);
    return one;
  }

  async add(logRiego: LogRiegoModel): Promise<any> {
    const one: any = LogRiegoRepository.create(logRiego);
    return one;
  }

  async patch(id: string, logRiego: LogRiegoModel): Promise<any> {
    const one: any = LogRiegoRepository.findByIdAndUpdate(id, logRiego, {
      returnOriginal: false,
    });

    return one;
  }

  async delete(id: string): Promise<any> {
    const one: any = LogRiegoRepository.findByIdAndUpdate(id, { returnOriginal: false });
    return one;
  }
}

export default new LogRiegoService();
