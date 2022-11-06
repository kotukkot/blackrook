import { isIOS } from 'tns-core-modules/platform';

export default function appFixHtmlView(el) {    
  if (isIOS) {
    const iosView = el.nativeView.ios;
    setTimeout(() => {
        iosView.requestLayout();
        console.log(iosView);
    }, 1000);
  }
}
