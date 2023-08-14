import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  console.log("data :: ", props);
  console.log("data :: ", props.datas);

  return (
    <Card className={classes.users}>
      <ul>
        {props.datas.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.userAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
