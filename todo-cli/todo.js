const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
        return all.filter((item) => item.dueDate < today);
      };
    
    const dueToday = () => {
        return all.filter((item) => item.dueDate === today);
      };
    
    const dueLater = () => {
        return all.filter((item) => item.dueDate > today );
      };
    
    const toDisplayableList = (list) => {
        let displayString = ""
        list.forEach((item) => {
          const checkbox = item.completed ? "[x]" : "[ ]"
          let dueDate = ""
          if (item.dueDate) {
            const itemDueDate = new Date(item.dueDate)
            if (itemDueDate.toDateString() != dateToday.toDateString()) {
                dueDate = `${formattedDate(itemDueDate)}`
            }
          }
          displayString += `${checkbox} ${item.title} ${dueDate}\n`
        })
        return displayString
      }
      
      

    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  

  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )

module.exports=todoList
