
import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"learn code",
    image:"big.jpg",
    thumbImage:"photo.png",
    author:"Adarsh",
    views:"100k",
    timestamps:"2 days ago",
},{
    title:"learn language",
    image:"big.jpg",
    thumbImage:"photo.png",
    author:"Adarsh",
    views:"20k",
    timestamps:"4 days ago",
},{
    title:"learn logic",
    image:"big.jpg",
    thumbImage:"photo.png",
    author:"Adarsh",
    views:"90k",
    timestamps:"6 days ago",
}]

export const VideoGrid = () => {
    return <div className="grid grid-4">
        {VIDEOS.map(video => <div>
            <VideoCard
        title={video.title}
        image={video.image}
        thumbImage={video.thumbImage}
        author={video.author}
        views={video.views}
        timestamps={video.timestamps}
      ></VideoCard>
            </div>)}
    </div>
}