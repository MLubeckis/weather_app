import EmblaCarousel from 'embla-carousel';
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons';
import { createWeatherCarousel } from './createWeatherCarousel';
import "../asset/css/embla.css";
import "../asset/css/weather.css";


export async function initWeatherCarousel(address){
  
  await createWeatherCarousel(address);
  
  const OPTIONS = { loop: true,  align: 'start'}

  const emblaNode = document.querySelector('.embla')
  const viewportNode = emblaNode.querySelector('.embla__viewport')
  const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
  const nextBtnNode = emblaNode.querySelector('.embla__button--next')
  
  const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
  
  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
  )
  
  emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
}


