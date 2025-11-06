// add a parameter 'states'
export default function Child({ states }: { states: string[] }) {
return (
<>
<ul>
{states.map(state => (<li> {state} </li>))}
</ul>
</>
);
}