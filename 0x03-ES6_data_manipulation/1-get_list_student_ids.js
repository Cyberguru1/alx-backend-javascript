// function that retuns ids from a list of objects

export function getListStudentIds(arr){
  if (typeof [] != typeof arr ){
    return [];
  }
  return arr.map((x) => x.id);
}
