/**
*
* menuIcons
*
*/

import React from 'react';

import { allThemes } from 'style/theme';
import { colore } from 'style/color';

const MainFill = allThemes.main;
const SecondaryFill = colore.ui.contrast;

const EggAlatin = <g data-name="Livello 2"><path d="M27.06 0C13.19 0 0 8.71 0 26.95S13.19 66 27.06 66 54 45.15 54 26.95 40.81 0 27.06 0z" fill={MainFill} data-name="egg" /><path d="M33.7 39.2H20.3L18.74 43H17l10-24 10 24h-1.74zm-12.76-1.57h12.12L27 23.13z" fill={SecondaryFill} /></g>;

const eggAlatinClose = <g data-name="Livello 2"><path d="M27.06 0C13.19 0 0 8.71 0 26.95S13.19 66 27.06 66 54 45.15 54 26.95 40.81 0 27.06 0z" fill={MainFill} data-name="egg" /><path data-name="Livello 1" d="M28.77 31L37 22.77 35.23 21 27 29.23 18.77 21 17 22.77 25.23 31 17 39.23 18.77 41 27 32.77 35.23 41 37 39.23z" fill={SecondaryFill} /></g>;

const CircleItaca = <g data-name="Livello 2"><circle cx="27" cy="27" r="27" transform="rotate(-45 27.002 26.995)" fill={MainFill} /><path d="M13 41l8.33-19.67L41 13l-8.35 19.65zm6.77-10.67l-2.84 6.74 6.73-2.86zm.89-2.06l5.07 5.07 5.33-2.27 2.27-5.33-5.07-5.07-5.35 2.25z" fill={SecondaryFill} /></g>;

const CircleItacaClose = <g data-name="Livello 2"><circle cx="27" cy="27" r="27" transform="rotate(-45 27.002 26.995)" fill={MainFill} /><path data-name="Livello 1" d="M28.77 27L37 35.23 35.23 37 27 28.77 18.77 37 17 35.23 25.23 27 17 18.77 18.77 17 27 25.23 35.23 17 37 18.77z" fill={SecondaryFill} /></g>;

const CircleArgonauta = <g data-name="Livello 2"><circle cx="27" cy="27" r="27" transform="rotate(-45 27.002 26.995)" fill={MainFill} /><path d="M37 35.83l-7.29 1.74-1.25-3.36-3.4.35-.39 3.53h-7.68l3.82-20.94 8.24-1.28zm-9.56-6.23l-1.68-5.2-.55 5.43z" fill={SecondaryFill} /></g>;

const CircleArgonautaClose = <g data-name="Livello 2"><circle cx="27" cy="27" r="27" transform="rotate(-45 27.002 26.995)" fill={MainFill} /><path data-name="Livello 1" d="M28.77 27L37 35.23 35.23 37 27 28.77 18.77 37 17 35.23 25.23 27 17 18.77 18.77 17 27 25.23 35.23 17 37 18.77z" fill={SecondaryFill} /></g>;

const FaiDaTestMenuClose = <g fill="none" fillRule="evenodd"><path d="M12 0h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#9F211E" fillRule="nonzero" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12z" fill="#DB3A36" fillRule="nonzero" /><path d="M48 40.672l10.975-10.975s3.038-3.039 5.348-.73l2.71 2.71s2.309 2.31-.73 5.348L55.328 48l10.975 10.975s3.039 3.038.73 5.348l-2.71 2.71s-2.31 2.309-5.348-.73L48 55.328 37.025 66.303s-3.038 3.039-5.348.73l-2.71-2.71s-2.309-2.31.73-5.348L40.672 48 29.697 37.025s-3.039-3.038-.73-5.348l2.71-2.71s2.31-2.309 5.348.73L48 40.672z" fill="#FFF" /></g>;

const FaiDaTestMenu = <g fill="none" fillRule="evenodd"><path d="M12 0h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#9F211E" fillRule="nonzero" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12z" fill="#DB3A36" /><path d="M40.113 39.364s-3.266 0-3.266-3.266v-3.832s0-3.266 3.266-3.266h31.468s3.266 0 3.266 3.266v3.832s0 3.266-3.266 3.266H40.113zm0 13.818s-3.266 0-3.266-3.266v-3.832s0-3.266 3.266-3.266h31.468s3.266 0 3.266 3.266v3.832s0 3.266-3.266 3.266H40.113zm0 13.818s-3.266 0-3.266-3.266v-3.832s0-3.266 3.266-3.266h31.468s3.266 0 3.266 3.266v3.832S74.847 67 71.58 67H40.113zM27.368 39.364c-2.966 0-5.368-2.32-5.368-5.182C22 31.321 24.402 29 27.368 29c2.964 0 5.366 2.32 5.366 5.182 0 2.862-2.402 5.182-5.366 5.182zm0 13.818C24.402 53.182 22 50.862 22 48c0-2.862 2.402-5.183 5.368-5.183 2.964 0 5.366 2.32 5.366 5.183 0 2.861-2.402 5.18-5.366 5.18zm0 13.818C24.402 67 22 64.68 22 61.819c0-2.862 2.402-5.183 5.368-5.183 2.964 0 5.366 2.32 5.366 5.183 0 2.861-2.402 5.181-5.366 5.181z" fill="#FFF" /></g>;

const MyTestMenuClose = <g fill="none" fillRule="evenodd"><path d="M12 0h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#FFF" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12zm0-2h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#315175" fillRule="nonzero" /><path d="M53.31 55.506l14.85-14.85L62.5 35l-14.85 14.85L32.803 35l-5.656 5.657 14.85 14.85-14.85 14.848 5.657 5.657 14.85-14.85 14.85 14.85 5.656-5.657-14.85-14.85z" fill="#8BE81F" /><path d="M53.31 50.506l14.85-14.85L62.5 30l-14.85 14.85L32.803 30l-5.656 5.657 14.85 14.85-14.85 14.848 5.657 5.657 14.85-14.85 14.85 14.85 5.656-5.657-14.85-14.85z" fill="#FFF200" /><path d="M53.31 44.506l14.85-14.85L62.5 24l-14.85 14.85L32.803 24l-5.656 5.657 14.85 14.85-14.85 14.848 5.657 5.657 14.85-14.85 14.85 14.85 5.656-5.657-14.85-14.85z" fill="#FF00D0" /></g>;

const MyTestMenu = <g fill="none" fillRule="evenodd"><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12z" fill="#FFF" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12zm0-2h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#315175" fillRule="nonzero" /><path d="M46.405 69.4l20.74-22.412c.142-.152.133-.39-.02-.53L62.4 42.08c-.153-.14-.39-.132-.53.02L42.8 62.788l-9.284-8.675-4.905 5.155 14.294 13.31c.15.14.387.132.53-.02l2.97-3.158z" fill="#8BE81F" /><path d="M46.03 59.355l20.74-22.41c.142-.153.132-.39-.02-.532l-4.728-4.378c-.152-.14-.39-.13-.53.022L42.424 52.742l-9.285-8.674-4.904 5.155 14.292 13.31c.15.14.387.132.53-.02l2.97-3.158z" fill="#FFF200" /><path d="M45.793 49.42l20.742-22.412c.14-.152.132-.39-.02-.53l-4.73-4.378c-.15-.14-.39-.132-.53.02L42.19 42.808l-9.286-8.675L28 39.287l14.292 13.31c.15.14.387.132.53-.02l2.97-3.158z" fill="#FF00CF" /></g>;

const ItacaPapersMenu = <g fill="none" fillRule="evenodd"><path d="M12 0h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#E8004F" fillRule="nonzero" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12z" fill="#E8004F" fillRule="nonzero" /><path d="M5 91.128L91.128 5a9.964 9.964 0 0 1 2.619 6.747v72c0 5.523-4.477 10-10 10h-72c-2.6 0-4.969-.992-6.747-2.619z" fill="#C80044" /><path fill="#FFF" d="M50.627 47.799l16.971 16.97-2.828 2.829-16.971-16.97-16.97 16.97L28 64.77l16.97-16.971L28 30.829 30.828 28 47.8 44.97 64.769 28l2.829 2.828z" /></g>;

const ItacaPapersMenuClose = <g fill="none" fillRule="evenodd"><path d="M12 0h72c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12H12C5.373 96 0 90.627 0 84V12C0 5.373 5.373 0 12 0z" fill="#E8004F" fillRule="nonzero" /><path d="M12 2C6.477 2 2 6.477 2 12v72c0 5.523 4.477 10 10 10h72c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10H12z" fill="#E8004F" /><path d="M5.253 91.381L91.381 5.253A9.964 9.964 0 0 1 94 12v72c0 5.523-4.477 10-10 10H12c-2.6 0-4.968-.992-6.747-2.619z" fill="#C80044" /><path d="M47.166 53.689l-4.357-4.357 1.932-4.591 4.59-1.932 4.358 4.357-1.946 4.577-4.577 1.946zm-7.563 3.206l2.836-6.728 3.878 3.878-6.714 2.85zM58.498 38l-14.4 6.097L38 58.497l14.387-6.11L58.497 38z" fill="#FFF" /><path d="M58.622 73.53l.219-1.388.41-2.596a32.84 32.84 0 0 1-1.182.565c-1.645.748-3.29 1.346-5.011 1.72-1.72.374-3.365.598-4.936.598-3.216 0-6.283-.673-9.349-2.093a30.07 30.07 0 0 1-8.003-5.386 24.741 24.741 0 0 1-5.385-7.703c-1.271-2.843-1.87-5.909-1.87-9.05 0-3.29.673-6.507 1.944-9.499 1.272-3.066 3.067-5.684 5.31-8.003 2.245-2.318 4.863-4.113 7.855-5.46 2.99-1.346 6.207-2.02 9.573-2.02 1.72 0 3.365.225 5.085.6 1.646.448 3.366 1.047 4.937 1.795a27.402 27.402 0 0 1 4.487 2.692 19.613 19.613 0 0 1 2.675 2.396l.529-3.349.073-.465c-2.356-2.174-5.067-3.919-8.138-5.089C54.703 20.598 51.487 20 48.197 20c-3.815 0-7.405.673-10.845 2.17-3.366 1.495-6.358 3.44-8.976 5.982a29.563 29.563 0 0 0-6.132 8.9C20.748 40.42 20 44.084 20 47.899c0 3.814.748 7.404 2.318 10.77 1.571 3.365 3.59 6.282 6.208 8.825 2.618 2.543 5.61 4.488 8.975 5.983a27.423 27.423 0 0 0 10.77 2.17c3.366 0 6.507-.599 9.574-1.795.262-.103.519-.213.777-.322" fill="#FFF" /></g>;

const AlatinPapersMenuClose = <g data-name="Livello 2"><g data-name="SMALL + ICONA"><rect width="96" height="96" rx="12" fill="#00abe5" /><path d="M5 91.13L91.13 5a10 10 0 0 1 2.62 6.75v72a10 10 0 0 1-10 10h-72A10 10 0 0 1 5 91.13z" fill="#0094c7" fillRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M50.83 48L67.8 64.97l-2.83 2.83L48 50.83 31.03 67.8l-2.83-2.83L45.17 48 28.2 31.03l2.83-2.83L48 45.17 64.97 28.2l2.83 2.83L50.83 48z" /></g></g>;

const AlatinPapersMenu = <g data-name="Livello 2"><g data-name="SMALL + ICONA"><rect width="96" height="96" rx="12" fill="#00abe5" /><path d="M5 91.13L91.13 5a10 10 0 0 1 2.62 6.75v72a10 10 0 0 1-10 10h-72A10 10 0 0 1 5 91.13z" fill="#0094c7" fillRule="evenodd" /><path d="M64.91 31.22l-2.2 2.2a9.41 9.41 0 0 1 1.5 5.35c0 5.8-4.07 9.31-10.07 9.31H36.23v-.18L48 20.07l8.27 19.79 2.31-2.31L48 12.36l-19.33 46H32l3-7.25h10v21.6h3V50.84h6c7.93 0 13.38-4.48 13.38-12.13a11.53 11.53 0 0 0-2.47-7.49z" fill="#fff" fillRule="evenodd" /></g></g>;

export const menuIcon = {
  eggAlatin: {
    path: EggAlatin,
    viewBox: '0 0 54 66',
    width: '54px',
    height: '66px',
  },
  eggAlatinClose: {
    path: eggAlatinClose,
    viewBox: '0 0 54 66',
    width: '54px',
    height: '66px',
  },
  circleItaca: {
    path: CircleItaca,
    viewBox: '0 0 54 54',
    width: '54px',
    height: '54px',
  },
  circleItacaClose: {
    path: CircleItacaClose,
    viewBox: '0 0 54 54',
    width: '54px',
    height: '54px',
  },
  circleArgonauta: {
    path: CircleArgonauta,
    viewBox: '0 0 54 54',
    width: '54px',
    height: '54px',
  },
  circleArgonautaClose: {
    path: CircleArgonautaClose,
    viewBox: '0 0 54 54',
    width: '54px',
    height: '54px',
  },
  myTestMenu: {
    path: MyTestMenu,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  myTestMenuClose: {
    path: MyTestMenuClose,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  faiDaTestMenu: {
    path: FaiDaTestMenu,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  faiDaTestMenuClose: {
    path: FaiDaTestMenuClose,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  itacaPapersMenu: {
    path: ItacaPapersMenu,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  itacaPapersMenuClose: {
    path: ItacaPapersMenuClose,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  alatinPapersMenu: {
    path: AlatinPapersMenu,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
  alatinPapersMenuClose: {
    path: AlatinPapersMenuClose,
    viewBox: '0 0 96 96',
    width: '56px',
    height: '56px',
  },
};

export default menuIcon;
