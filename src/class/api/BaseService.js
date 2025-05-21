import apiInstance from 'api/index';

class BaseService {
  setHeader() {
    // 공통 헤더 세팅
  }

  /** 성공 공통 포맷 */
  ResponsePayload(res) {
    return { ok: true, status: res.status, data: res.data };
  }

  /** 실패 공통 포맷 */
  ErrorPayload(err) {
    return {
      ok: false,
      status: err?.response?.status ?? 500,
      message: err?.response?.data?.message ?? err.message,
    };
  }

  async get(uri, params = {}, headers = {}) {
    try {
      this.setHeader();
      const res = await apiInstance.get(uri, { params, headers });
      if (res instanceof Error) throw res;
      return this.ResponsePayload(res);
    } catch (err) {
      return this.ErrorPayload(err);
    }
  }
}

export default BaseService;
