import "./App.css";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "green",
    backgroundColor: "red",
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});

const Button = ({ children }) => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

function App() {
  return (
    <>
      <Button>Submit</Button>
    </>
  );
}

export default App;
