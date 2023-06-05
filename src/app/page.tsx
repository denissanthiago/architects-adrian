


import Video from "components/Video";
import Carousel, { CarouselItem } from 'components/Carousel'
import Header from "components/Header";

export default function Home() {
  return (
    <main>
      <Carousel
        header={<Header />}
      >
        <CarouselItem
          description='Proyecto 1'
        >
          <Video
            src="videos/robovice-banner.mp4"
            type="video/mp4"
          />
        </CarouselItem>
        <CarouselItem
          description='Proyecto 2'
        >
          <Video
            src="videos/robovice-banner.mp4"
            type="video/mp4"
          />
        </CarouselItem>
      </Carousel>
    </main>
  )
}