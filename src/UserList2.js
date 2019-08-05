import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  // 배열이 비워져 있을때 = 의존되는 값이 없을 때
  //   useEffect(() => {
  //     //   mount 될 때
  //     console.log("컴포넌트가 화면에 나타남");
  //     // ex) props -> state
  //     //     REST API
  //     //     D3, Video.js
  //     //     setInterval, setTimeout ...

  //     //   unmount 될 때
  //     return () => {
  //       // ex
  //       // clearInterval, clearTimeout
  //       // 라이브러리 인스턴스 제거
  //       console.log("컴포넌트가 화면에서 사라짐");
  //     };
  //   }, []);

  // 배열이 있을 때 = 의존되는 값이 있을 때
  useEffect(() => {
    // console.log("user 값이 설정됨");
    // console.log(user);
    return () => {
      //   console.log("user 값이 바뀌기 전");
      //   console.log(user);
    };
  }, [user]);

  // useEffect( /--함수등록() => {
  //--컴포넌트가 나타날 때 작동
  // return () => {
  //--컴포넌트가 바뀌기 직전, 사라질 때 작동
  // };
  //   }--/, /--deps(배열등록)[]--/);

  return (
    <div>
      <p>{id}</p>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer"
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList2({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
// React.memo - 렌더링된 결과 재사용
export default React.memo(
  UserList2,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
