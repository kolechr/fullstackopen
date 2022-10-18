const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.subject} {props.part.exercises}
      </p>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.course.parts[0].exercises 
                              + props.course.parts[1].exercises 
                              + props.course.parts[2].exercises}</p>
    </>
  );
}

const App = () => {
  const course = {
    name:  'Half Stack application development',
    parts: [
      {
        subject: 'Fundementals of React',
        exercises: 10,
      },
      {
        subject: 'Using props to pass data',
        exercises: 7,
      },
      {
        subject: 'State of a component',
        exercises: 14,
      }
    ] 
  } 
  

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
