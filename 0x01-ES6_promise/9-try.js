export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const mathResult = mathFunction();
    queue.push(mathResult);
  } catch (e) {
    queue.push(e.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
