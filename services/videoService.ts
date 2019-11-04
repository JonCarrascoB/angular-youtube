interface IVideo{
    videoId: number;
    videoName: string;
    videoCodigo: string;
    videoCat: string;
    author: string;
    likes: number;
}

interface IVideoService {

    /**
     * Petion GET a servicio rest de http://localhost:3000/videos/
     * @see db.json
     * @return Promesa con array de IVideo
     */
    getVideos(): angular.IPromise<IVideo[]>;
    getVideoDetails(id: number): angular.IPromise<IVideo[]>;
    
  }
  
  class VideoService implements IVideoService {
  
    private http: ng.IHttpService;
  
    constructor($http) {
      this.http = $http;
    }
  
    public getVideos = () => {
      return this.http.get<any>("http://localhost:3000/videos/").then(result => {
        return result.data;
      });
    }
  
    public getVideoDetails = id => {
      return this.http
        .get<any>("http://localhost:3000/videos/" + id)
        .then(response => {
          return response.data;
        });
    }
  
  }
  