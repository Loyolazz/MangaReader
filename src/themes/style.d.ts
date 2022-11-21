// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        background: string,
        primary: string,
        onBackground: string,
    },
    fontColor: {
      fontColor: string,
      fontColorTHSub: string,
    }
  }
}