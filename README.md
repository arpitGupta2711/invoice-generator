# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.
It uses redux to store the list.
It also displays all the list generated.
Each list have features like view, edit, copy and delete.

Note:- Every time a list is Send(by pressing Send invoice Button) or Downloaded, that invoice is downloaded,it is saved in the list and all the lists are shown.

### Live Demo
https://arpitgupta2711.github.io/invoice-generator/


### Installation

```
git clone https://github.com/arpitGupta2711/invoice-generator.git

npm install

npm start / npm run build
```


