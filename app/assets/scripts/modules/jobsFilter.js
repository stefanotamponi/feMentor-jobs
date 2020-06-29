function jobsFilter(data, filter) {
  if (filter.length == 0) return data;

  let updatedData = data.filter(obj => {
    let values = Object.values(obj).flat();
    if (obj.new) values.push("New");
    if (obj.featured) values.push("Featured");
    
    return values.filter( value => filter.indexOf(value) > -1).length === filter.length;
  })

  return updatedData;
}

export default jobsFilter;