import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Travel from './travel/index/travel';
import Restaurant from './restaurant/index/restaurant';
import Hotel from './hotel/index/hotel';
import Promotion from './promotion/index/promotion';
import News from './news/news';
import Otop from './otop/index/otop';
import Calendar from './calendar/calendar';

let componentModule = angular.module('app.components', [Home, Travel, Restaurant, Hotel, Promotion, News, Otop, Calendar, About]).name;

export default componentModule;
