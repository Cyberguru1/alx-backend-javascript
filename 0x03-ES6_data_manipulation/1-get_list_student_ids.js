// function that retuns ids from a list of objects

export function getListStudentIds(arr){
  ret = arr.map(x => x.id)
  return ret;
}
