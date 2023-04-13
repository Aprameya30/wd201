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
      return list
        .map((item) => {
          const checkbox = item.completed ? "[x]" : "[ ]";
          let dueDate = ""
          if (item.dueDate) {
            const itemDueDate = new Date(item.dueDate)
            if (itemDueDate.toDateString() != dateToday.toDateString()) {
                dueDate = `${formattedDate(itemDueDate)}`
            }
          }
          return `${checkbox} ${item.title} ${dueDate}`;
        })
        .join("\n");
    };
  
    const formattedDate = (date) => {
      return date.toISOString().split("T")[0];
    };
  
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
  
  module.exports=todoList
