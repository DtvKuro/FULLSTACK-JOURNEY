import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//1. Use the inquirer npm package to get user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
inquirer.prompt([                                                                                                                                                                                                                                                                                                    {             
    type: 'input',
    name: 'url',
    message: 'Paste a link:',
  }
]).then((answers) => {

  // pass answers.url to whatever package you need
  var link = answers.url;

//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  var qrLink = qr.image(link);
//3. Create a txt file to save the user input using the native fs node module.
  fs.writeFileSync('URL.txt', link);
  qrLink.pipe(fs.createWriteStream('qr_img.png'));
});
