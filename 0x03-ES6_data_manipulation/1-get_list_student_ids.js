// function that retuns ids from a list of objects

export function getListStudentIds(array){
  ret = [];
  for (const item of array){
    ret.push((item.id));
  }
  return ret;
}
