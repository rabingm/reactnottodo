import TaskList from "./TaskLists.schema.js";

export const insertTask = (newTask) => {
  return new Promise((resolve, reject) => {
    try {
      TaskList(newTask)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

export const updateToDo = ({ _id, todo }) => {
  return new Promise((resolve, reject) => {
    try {
      //Update the task list
      TaskList.findByIdAndUpdate(
        { _id },
        {
          $set: { todo },
        },
        {
          new: true,
        }
      )
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

//Displaying the data
export const displayDb = () => {
  return new Promise((resolve, reject) => {
    try {
      TaskList.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

//Delete the data

export const deleteTasks = (args) => {
  if (!args.length) return false;

  return new Promise((resolve, reject) => {
    try {
      TaskList.deleteMany({
        _id: {
          $in: args,
        },
      })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {}
  });
};
