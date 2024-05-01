import { API } from "@/configs/endpoints";
import { HttpClient } from "@/configs/http";
import { IQuery } from "@/types";

class Client {
  blog = {
    all: (params: IQuery) => HttpClient.get<any>(API.BLOG, params),
    get: (id: string) => HttpClient.get<any>(`${API.BLOG}/${id}`),
    comment: (data: any) => HttpClient.post<any>(API.COMMENT, data),
    get_comment: (id: string) => HttpClient.get<any>(`${API.COMMENT}/${id}`),
    reply_comment: (data: any) => HttpClient.post<any>(API.REPLY_COMMENT, data),
  };
}
export default new Client();
