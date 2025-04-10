// 自定义字体
import localFont from "next/font/local";

// const msSansRetro = localFont({ src: "../public/fonts/ms_sans_serif.woff2" });
const GeistVF = localFont({
    src: "../../../public/fonts/GeistVF.woff",
});
const GeistMonoVF = localFont({
    src: "../../../public/fonts/GeistMonoVF.woff",
});
export {GeistVF, GeistMonoVF};
