import Queue from "../queue.ts";

function hotPotato(names: string[], num: number): string {
  const queue = new Queue<string>();
  for (const name of names) {
    queue.enqueue(name);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // type assertion is valid, since we know queue is not empty
      queue.enqueue(queue.dequeue() as string);
    }
    queue.dequeue();
  }
  return queue.dequeue() as string;
}

export default hotPotato;
