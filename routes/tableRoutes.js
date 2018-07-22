const requireLogin = require('..  /middlewares/requireLogin');

module.exports = app => {
  app.get('/table', requireLogin, (req, res) => {
    res.send(table);
  });
};

const table = [
  { id: 0, text: 'text number 0', num1: 0, num2: 10, num3: -10 },
  { id: 1, text: 'text number 1', num1: 0, num2: -9, num3: -9 },
  { id: 2, text: 'text number 2', num1: 0, num2: 14, num3: -8 },
  { id: 3, text: 'text number 3', num1: 1, num2: 16, num3: -7 },
  { id: 4, text: 'text number 4', num1: 1, num2: 18, num3: -6 },
  { id: 5, text: 'text number 5', num1: 1, num2: 20, num3: -5 },
  { id: 6, text: 'text number 6', num1: 2, num2: 22, num3: -4 },
  { id: 7, text: 'text number 7', num1: 2, num2: 24, num3: -3 },
  { id: 8, text: 'text number 8', num1: 2, num2: 26, num3: -2 },
  { id: 9, text: 'text number 9', num1: 3, num2: 28, num3: -1 },
  { id: 10, text: 'text number 10', num1: 3, num2: 30, num3: 0 },
  { id: 11, text: 'text number 11', num1: 3, num2: 32, num3: 1 },
  { id: 12, text: 'text number 12', num1: 4, num2: 34, num3: 2 },
  { id: 13, text: 'text number 13', num1: 4, num2: 36, num3: 3 },
  { id: 14, text: 'text number 14', num1: 4, num2: 38, num3: 4 },
  { id: 15, text: 'text number 15', num1: 5, num2: 40, num3: 5 },
  { id: 16, text: 'text number 16', num1: 5, num2: 42, num3: 6 },
  { id: 17, text: 'text number 17', num1: 5, num2: 44, num3: 7 },
  { id: 18, text: 'text number 18', num1: 6, num2: 46, num3: 8 },
  { id: 19, text: 'text number 19', num1: 6, num2: 48, num3: 9 },
  { id: 20, text: 'text number 20', num1: 6, num2: 50, num3: 10 },
  { id: 21, text: 'text number 21', num1: 7, num2: 52, num3: 11 },
  { id: 22, text: 'text number 22', num1: 7, num2: 54, num3: 12 },
  { id: 23, text: 'text number 23', num1: 7, num2: 56, num3: 13 },
  { id: 24, text: 'text number 24', num1: 8, num2: 58, num3: 14 },
  { id: 25, text: 'text number 25', num1: 8, num2: 60, num3: 15 },
  { id: 26, text: 'text number 26', num1: 8, num2: 62, num3: 16 },
  { id: 27, text: 'text number 27', num1: 9, num2: 64, num3: 17 },
  { id: 28, text: 'text number 28', num1: 9, num2: 66, num3: 18 },
  { id: 29, text: 'text number 29', num1: 9, num2: 68, num3: 19 },
  { id: 30, text: 'text number 30', num1: 10, num2: 70, num3: 20 },
  { id: 31, text: 'text number 31', num1: 10, num2: 72, num3: 21 },
  { id: 32, text: 'text number 32', num1: 10, num2: 74, num3: 22 },
  { id: 33, text: 'text number 33', num1: 11, num2: 76, num3: 23 },
  { id: 34, text: 'text number 34', num1: 11, num2: 78, num3: 24 },
  { id: 35, text: 'text number 35', num1: 11, num2: 80, num3: 25 },
  { id: 36, text: 'text number 36', num1: 12, num2: 82, num3: 26 },
  { id: 37, text: 'text number 37', num1: 12, num2: 84, num3: 27 },
  { id: 38, text: 'text number 38', num1: 12, num2: 86, num3: 28 },
  { id: 39, text: 'text number 39', num1: 13, num2: 88, num3: 29 },
  { id: 40, text: 'text number 40', num1: 13, num2: 90, num3: 30 },
  { id: 41, text: 'text number 41', num1: 13, num2: 92, num3: 31 },
  { id: 42, text: 'text number 42', num1: 14, num2: 94, num3: 32 },
  { id: 43, text: 'text number 43', num1: 14, num2: 96, num3: 33 },
  { id: 44, text: 'text number 44', num1: 14, num2: 98, num3: 34 },
  { id: 45, text: 'text number 45', num1: 15, num2: 100, num3: 35 },
  { id: 46, text: 'text number 46', num1: 15, num2: 102, num3: 36 },
  { id: 47, text: 'text number 47', num1: 15, num2: 104, num3: 37 },
  { id: 48, text: 'text number 48', num1: 16, num2: 106, num3: 38 },
  { id: 49, text: 'text number 49', num1: 16, num2: 108, num3: 39 },
  { id: 50, text: 'text number 50', num1: 16, num2: 110, num3: 40 },
  { id: 51, text: 'text number 51', num1: 17, num2: 112, num3: 41 },
  { id: 52, text: 'text number 52', num1: 17, num2: 114, num3: 42 },
  { id: 53, text: 'text number 53', num1: 17, num2: 116, num3: 43 },
  { id: 54, text: 'text number 54', num1: 18, num2: 118, num3: 44 },
  { id: 55, text: 'text number 55', num1: 18, num2: 120, num3: 45 },
  { id: 56, text: 'text number 56', num1: 18, num2: 122, num3: 46 },
  { id: 57, text: 'text number 57', num1: 19, num2: 124, num3: 47 },
  { id: 58, text: 'text number 58', num1: 19, num2: 126, num3: 48 },
  { id: 59, text: 'text number 59', num1: 19, num2: 128, num3: 49 },
  { id: 60, text: 'text number 60', num1: 20, num2: 130, num3: 50 },
  { id: 61, text: 'text number 61', num1: 20, num2: 132, num3: 51 },
  { id: 62, text: 'text number 62', num1: 20, num2: 134, num3: 52 },
  { id: 63, text: 'text number 63', num1: 21, num2: 136, num3: 53 },
  { id: 64, text: 'text number 64', num1: 21, num2: 138, num3: 54 },
  { id: 65, text: 'text number 65', num1: 21, num2: 140, num3: 55 },
  { id: 66, text: 'text number 66', num1: 22, num2: 142, num3: 56 },
  { id: 67, text: 'text number 67', num1: 22, num2: 144, num3: 57 },
  { id: 68, text: 'text number 68', num1: 22, num2: 146, num3: 58 },
  { id: 69, text: 'text number 69', num1: 23, num2: 148, num3: 59 },
  { id: 70, text: 'text number 70', num1: 23, num2: 150, num3: 60 },
  { id: 71, text: 'text number 71', num1: 23, num2: 152, num3: 61 },
  { id: 72, text: 'text number 72', num1: 24, num2: 154, num3: 62 },
  { id: 73, text: 'text number 73', num1: 24, num2: 156, num3: 63 },
  { id: 74, text: 'text number 74', num1: 24, num2: 158, num3: 64 },
  { id: 75, text: 'text number 75', num1: 25, num2: 160, num3: 65 },
  { id: 76, text: 'text number 76', num1: 25, num2: 162, num3: 66 },
  { id: 77, text: 'text number 77', num1: 25, num2: 164, num3: 67 },
  { id: 78, text: 'text number 78', num1: 26, num2: 166, num3: 68 },
  { id: 79, text: 'text number 79', num1: 26, num2: 168, num3: 69 },
  { id: 80, text: 'text number 80', num1: 26, num2: 170, num3: 70 },
  { id: 81, text: 'text number 81', num1: 27, num2: 172, num3: 71 },
  { id: 82, text: 'text number 82', num1: 27, num2: 174, num3: 72 },
  { id: 83, text: 'text number 83', num1: 27, num2: 176, num3: 73 },
  { id: 84, text: 'text number 84', num1: 28, num2: 178, num3: 74 },
  { id: 85, text: 'text number 85', num1: 28, num2: 180, num3: 75 },
  { id: 86, text: 'text number 86', num1: 28, num2: 182, num3: 76 },
  { id: 87, text: 'text number 87', num1: 29, num2: 184, num3: 77 },
  { id: 88, text: 'text number 88', num1: 29, num2: 186, num3: 78 },
  { id: 89, text: 'text number 89', num1: 29, num2: 188, num3: 79 },
  { id: 90, text: 'text number 90', num1: 30, num2: 190, num3: 80 },
  { id: 91, text: 'text number 91', num1: 30, num2: 192, num3: 81 },
  { id: 92, text: 'text number 92', num1: 30, num2: 194, num3: 82 },
  { id: 93, text: 'text number 93', num1: 31, num2: 196, num3: 83 },
  { id: 94, text: 'text number 94', num1: 31, num2: 198, num3: 84 },
  { id: 95, text: 'text number 95', num1: 31, num2: 200, num3: 85 },
  { id: 96, text: 'text number 96', num1: 32, num2: 202, num3: 86 },
  { id: 97, text: 'text number 97', num1: 32, num2: 204, num3: 87 },
  { id: 98, text: 'text number 98', num1: 32, num2: 206, num3: 88 },
  { id: 99, text: 'text number 99', num1: 33, num2: 208, num3: 89 },
];
