const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);

/* 
    Bạn có thể thêm nhiều tuỳ chỉnh khác như thay đổi cấu hình Webpack, 
    bổ sung các plugin, hoặc thay đổi các loader trong dự án của mình.
*/

/*
    Lợi ích của customize-cra:
        Bạn có thể tuỳ chỉnh cấu hình Webpack mà không cần phải thực hiện việc "eject".
        Giúp đơn giản hoá quá trình cấu hình Webpack trong dự án React.
        Giảm bớt sự phức tạp khi bạn cần thay đổi các tuỳ chỉnh mặc định của Create React App.
*/
