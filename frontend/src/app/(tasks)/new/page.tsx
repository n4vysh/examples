import { Metadata } from "next";

import { TaskForm } from "@/app/(tasks)/new/task-form";

export const metadata: Metadata = {
  title: "New Task",
  description: "Create Task",
};

export default async function TaskPage() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <TaskForm />
      </div>
    </>
  );
}
