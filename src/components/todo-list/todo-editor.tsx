import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTodo } from "@/store/todos";
import { useRef, useState, type FormEvent } from "react";

export default function TodoEditor() {
  const ref = useRef<HTMLInputElement | null>(null);
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content.trim() === "") return;

    createTodo(content);
    setContent("");
    ref.current?.focus();
  };

  return (
    <form className="flex gap-2" onSubmit={handleAddSubmit}>
      <Input
        ref={ref}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요 ..."
      />
      <Button type="submit">추가</Button>
    </form>
  );
}
