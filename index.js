// querySelector = HTML의 모든것을 선택 할 수 있음; 태그이름, 클래스명, 아이디명 모두 선택가능 선택 할때 css규칙을 따라서 작성
// 예) class="newClass" => '.newClass'
// id = "newId" => '#id'
// getElementById

let list = ["우유", "계란", "유뷰초밥", "한우++"];

const rendering = () => {
  const ul = document.querySelector("ul");

  ul.innerText = null;

  let li = "";

  for (let i = 0; i < list.length; i = i + 1) {
    const button = document.createElement("button");

    button.innerText = "삭제";

    button.onclick = () => {
      console.log("hello its ms", list[i]);
      list.splice(i, 1);
      console.log(list);
      rendering();
    };

    const p = document.createElement("p");
    p.innerText = list[i];
    const div = document.createElement("div");

    div.append(p, button);

    const li = document.createElement("li");
    li.append(div);

    ul.append(li);

    //   console.log(`${button}`);

    //   const tag = `
    //         <li>
    //             <div>
    //                 <p> ${list[i]} </p>
    //                 <button>삭제</button>
    //             </div>
    //         </li>
    //         `;

    //   li += tag;
  }
};

// ul.innerHTML = li;
rendering();

const form = document.querySelector("form");
const input = document.getElementById("item");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 새로고침 방지
  const item = input.value;
  if (item.length === 0) {
    alert("장 볼 물건을 입력해주세요.");
  }

  //   list.push();
  list.unshift(item);
  console.log(list);

  rendering();

  input.value = "";
});
