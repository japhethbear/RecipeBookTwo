import { prisma } from '@/db';
import Link from 'next/link';
import TodoItem from './components/TodoItem';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import kitchen2 from '../../public/images/kitchen2.jpg'
import kitchen1 from '../../public/images/kitchen2.jpg'



function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id, complete) {
  "use server"

  await prisma.todo.update({ where: {id}, data: {complete}})
}

export default async function Home() {

  const todos = await getTodos()

  console.log(todos)

  return <>
  <header className="flex justify-between items-center mb-4">
    <h1 className={`${lusitana.className} text-2xl`}>Todos</h1>
    <Link className ="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">
      New
    </Link>
  </header>
  <ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
    ))}
  </ul>
  <div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
  />
  <Image
  src={kitchen2}
  width={1000}
  height={760}
  className="hidden md:block"
  alt="Kitchen Image for Desktop"
  />
  <Image 
  src={kitchen1}
  width={560}
  height={620}
  className="hidden md:hidden"
  alt="Kitchen Image for Mobile"
  />

 </>
}