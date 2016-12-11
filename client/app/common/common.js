import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import SearchBox from './searchBox/searchBox'
import Footer from './footer/footer';
import ThaiArea from './thaiArea/thaiArea';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  SearchBox,
  Footer,
  ThaiArea
]).name;

export default commonModule;
