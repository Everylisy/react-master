import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: "To Do를 작성하세요." })}
        type="text"
        placeholder="Write a To Do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
