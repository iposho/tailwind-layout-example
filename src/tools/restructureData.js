import { isEmpty } from './usefulFunctions';

export const restructureCompanyObj = (obj) => {
  if (isEmpty(obj)) {
    return false;
  }

  const newObject = {
    name: obj.business_name,
    logo: obj.logo,
    desc: obj.catch_phrase,
    address: obj.full_address,
  };

  return newObject;
};

export default restructureCompanyObj;
