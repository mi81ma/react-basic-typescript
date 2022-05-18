type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = true } = props;
  const completeMark = completed ? "[Completed]" : "[Not yet]";
  return <p>{`${completeMark} ${title}(User: ${userId})`}</p>;
};
