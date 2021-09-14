import fs from 'fs';

const fileExists = (file: string) => {
  try{
    fs.accessSync(file, fs.constants.F_OK)
    return true;
  } catch(err) {
    return false;
  }
};

export default fileExists;