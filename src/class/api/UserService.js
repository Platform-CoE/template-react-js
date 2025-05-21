import BaseService from './BaseService';

class UserService extends BaseService {
  /** 모든 사용자 목록 */
  async list() {
    return this.get('/api/example/users');
  }

  /** ID로 조회 */
  async findById(id) {
    return this.get(`/api/example/users/${id}`);
  }
}

export default new UserService();
