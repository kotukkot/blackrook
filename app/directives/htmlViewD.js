import { isIOS } from '@nativescript/core';

export default function appFixHtmlView(el) {    
  if (isIOS) {
    const iosView = el.nativeView.ios;
    setTimeout(() => {
        iosView.requestLayout();
        console.log(iosView);
    }, 1000);
  }
}
