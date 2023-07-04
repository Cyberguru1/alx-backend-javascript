// function that retuns ids from a list of objects

export function getListStudentIds(arr){
  if (!([] instanceof arr )){
    return [];
  }
  return arr.map((x) => x.id);
}
export default getListStudentIds;
