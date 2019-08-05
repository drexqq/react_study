import React, { useRef, useState, useMemo, useCallback } from "react";

// 예제 6 - useRef로 컴포넌트 안의 변수 생성하기
import UserList2 from "./UserList2";
// 배열에 항목 추가하기
import CreateUser from "./CreateUser";

// 예제 5 - 배열 렌더링
// import UserList from "./UserList";

// 예제 4 - 여러개의 인풋값 / useRef (DOM에 직접 다가가는 방법)
// import InputSample2 from "./InputSample2";

// 예제 3 - 하나의 인풋값
// import InputSample from "./InputSample";

// 예제 2 - 카운터
// import Counter from "./Counter";

// 예제 1
// import Hello from "./Hello";
// import Wrapper from "./Wrapper";

function countActiveUsers(users) {
  // console.log("활성 사용자 수를 세는 중입니당...");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;
  // useCallback - 특정 함수 재사용
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Sunghee",
      email: "drexqq@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "Heesung",
      email: "qqxerd@gmail.com",
      active: false
    },
    {
      id: 3,
      username: "Who",
      email: "who@gmail.com",
      active: false
    }
  ]);

  const nextId = useRef(4);

  // onCreate 배열에 값 추가
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // 스프레드 연산자를 사용하여 원하는 값을 넣어주기
    // setUsers([...users, user]);
    // concat을 사용하여 원하는 값을 넣어주기
    setUsers(users => users.concat(user));

    setInputs({
      username: "",
      email: ""
    });

    nextId.current += 1;
  }, [username, email]);

  // onRemove 배열지우기
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // onToggle 배열안에 특정 개체 바꿔주기
  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  // useMemo - 연산된 값을 재사용 -- 성능최적화

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // 예제 6
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성된 사용자 수 : {count}</div>
    </>

    // 예제 5
    // <UserList />

    // 예제 4
    // <InputSample2 />

    // 예제 3
    // <InputSample />

    // 예제 2
    // <Counter />

    // 예제 1
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello color="pink" />
    // </Wrapper>
  );
}

export default App;
