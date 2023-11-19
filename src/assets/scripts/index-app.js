import gsap from 'gsap';
import axios from 'axios';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './common/header';
import './common/footer';
import { preloader } from './common/loader';

global.gsap = gsap;
global.axios = axios;

gsap.registerPlugin(ScrollTrigger);
