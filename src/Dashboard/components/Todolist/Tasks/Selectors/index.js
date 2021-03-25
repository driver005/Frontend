export default (tasks, filters) => {
  return tasks.filter(task => {
    const textMatch = task.name.toLowerCase().includes(filters.text.toLowerCase())
    return textMatch
  }).sort((a, b) => {
    switch(filters.sortBy) {
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1
      case 'deadline':
        return a.day > b.day ? 1 : -1
      default:
        return a.createdAt < b.createdAt ? 1 : -1
    }
  })
}