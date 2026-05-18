import localFont from 'next/font/local';

export const quickSand = localFont({
  src: [
    { path: '../app/fonts/quicksand/Quicksand-Light.woff2', weight: '300' },
    { path: '../app/fonts/quicksand/Quicksand-Regular.woff2', weight: '400' },
    { path: '../app/fonts/quicksand/Quicksand-Medium.woff2', weight: '500' },
    { path: '../app/fonts/quicksand/Quicksand-SemiBold.woff2', weight: '600' },
  ],
  variable: '--font-quick-sand',
  display: 'swap',
});

export const nunitoSans = localFont({
  src: '../app/fonts/nunito/Nunito-VariableFont_wght.woff2',
  variable: '--font-nunito',
  weight: '400 700',
});
