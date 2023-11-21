import '/src/components/Card/Card.css'

export function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}
